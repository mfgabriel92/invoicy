import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="mx-auto flex h-full max-w-5xl flex-col items-center justify-center gap-4">
      <h1 className="text-5xl font-bold">Invoicy</h1>
      <Button asChild>
        <Link href="/dashboard">Login</Link>
      </Button>
    </main>
  );
}
