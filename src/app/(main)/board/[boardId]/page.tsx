"use client"
import Canvas from "./_components/canvas";

interface BoardIdPageProps {
  params: {
      boardId: string;
  }
}

const BoardIdPage = ({
  params,
}: BoardIdPageProps) => {
  const { boardId } = params;
  
  return (
    <Canvas boardId={boardId} />
  );
};

export default BoardIdPage;