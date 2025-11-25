"use client";

import { useEffect, useMemo, useState } from "react";
import { useUser } from "@clerk/nextjs";
import { useSyncDemo } from "@tldraw/sync";
import { Tldraw } from "tldraw";
import "tldraw/tldraw.css";

const CURSOR_COLORS = [
  "#10b981", // emerald-500
  "#0EA5E9", // sky-500
  "#F97316", // orange-500
  "#A855F7", // purple-500
  "#EC4899", // pink-500
  "#EAB308", // yellow-500
  "#14B8A6", // teal-500
];

const getColorForId = (id: string) => {
  const hash = id.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0);
  return CURSOR_COLORS[hash % CURSOR_COLORS.length];
};

export default function Canvas({ boardId }: { boardId: string }) {
  const { user } = useUser();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const userInfo = useMemo(() => {
    const id = user?.id ?? `guest-${Math.random().toString(36).slice(2)}`;
    const name = user?.fullName ?? user?.username ?? "Guest";
    const color = (user?.unsafeMetadata?.color as string | undefined) ?? getColorForId(id);

    return {
      id,
      name,
      color,
    };
  }, [user]);

  const roomId = useMemo(() => `inkflow-${boardId}`, [boardId]);

  const store = useSyncDemo({
    roomId,
    userInfo,
  });

  if (!isMounted) {
    return (
      <div className="flex h-full w-full items-center justify-center">
        <div className="flex items-center gap-2">
          <div className="h-4 w-4 animate-spin rounded-full border-2 border-emerald-500 border-t-transparent" />
          <span className="text-sm text-muted-foreground">Loading canvas...</span>
        </div>
      </div>
    );
  }

  if (store.status === "error") {
    return (
      <div className="flex h-full w-full items-center justify-center">
        <div className="text-center space-y-2">
          <p className="text-destructive">Failed to connect to multiplayer</p>
          <p className="text-sm text-muted-foreground">
            Using local canvas mode. Refresh to retry.
          </p>
        </div>
      </div>
    );
  }

  if (store.status !== "synced-remote") {
    return (
      <div className="flex h-full w-full items-center justify-center">
        <div className="flex items-center gap-2">
          <div className="h-4 w-4 animate-spin rounded-full border-2 border-emerald-500 border-t-transparent" />
          <span className="text-sm text-muted-foreground">
            Connecting to multiplayer...
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0">
      <Tldraw store={store} inferDarkMode />
    </div>
  );
}