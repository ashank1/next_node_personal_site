import Link from "next/link";


export default function Home() {
  return (
    <main >
      <h1>Home</h1>
      <Link href="/users">Users</Link>
    </main>
  );
}
//className="flex min-h-screen flex-col items-center justify-between p-24"