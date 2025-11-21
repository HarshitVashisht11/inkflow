import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-500 flex items-center justify-center text-white font-bold shadow-lg">
              IF
            </div>
            <h1 className="text-2xl font-bold text-foreground">InkFlow</h1>
          </div>
          <p className="text-muted-foreground">Create your account and start creating</p>
        </div>
        <SignUp 
          appearance={{
            elements: {
              rootBox: "mx-auto",
              card: "bg-card shadow-xl border border-border rounded-2xl",
              headerTitle: "text-foreground",
              headerSubtitle: "text-muted-foreground",
              socialButtonsBlockButton: "border-2 border-border hover:bg-secondary transition-colors",
              socialButtonsBlockButtonText: "text-foreground font-medium",
              formButtonPrimary: "bg-emerald-500 hover:bg-emerald-600 text-white shadow-lg shadow-emerald-500/30 transition-all",
              formFieldInput: "border-2 border-border focus:border-emerald-500 bg-background text-foreground",
              footerActionLink: "text-emerald-500 hover:text-emerald-600 font-medium",
              identityPreviewText: "text-foreground",
              formFieldLabel: "text-foreground font-medium",
            }
          }}
        />
      </div>
    </div>
  );
}
