import Link from "next/link";

export default function Home() {
  return (
    <div>
      <header className="flex gap-6 pl-20 pt-10">
        <Link href="/">Home</Link>
        <Link href="/dashboard">Dashboard</Link>
      </header>
    </div>
  );
}
