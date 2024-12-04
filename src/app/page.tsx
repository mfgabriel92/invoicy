import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="mx-auto flex h-full max-w-5xl flex-col items-center justify-center gap-4">
      <h2 className="text-5xl font-bold">Invoicy</h2>
      <Button asChild>
        <Link href="/dashboard">Login</Link>
      </Button>
    </main>
  );
}
