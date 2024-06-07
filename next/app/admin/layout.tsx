import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Admin Page",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="w-screen h-screen items-center justify-center flex flex-col">
        <nav className="h-full w-full min-h-[42px] min-w-[320px] max-w-[50%] max-h-[5%] pt-2 pb-2 
          sticky top-0 flex items-center justify-center gap-4
          bg-cover border-2 border-bold rounded-3xl">
          <Link className="bg-zinc-800 hover:bg-zinc-600 border-2 border-bold rounded-3xl flex items-center justify-center p-2" href={'/'}>Landing</Link>
          <Link className="bg-zinc-800 hover:bg-zinc-600 border-2 border-bold rounded-3xl flex items-center justify-center p-2" href={'/hub'}>Hub</Link>
          <Link className="bg-zinc-800 hover:bg-zinc-600 border-2 border-bold rounded-3xl flex items-center justify-center p-2" href={'/admin'}>Admin</Link>
          <Link className="bg-zinc-800 hover:bg-zinc-600 border-2 border-bold rounded-3xl flex items-center justify-center p-2" href={'/admin/users'}>Users</Link>
          <Link className="bg-zinc-800 hover:bg-zinc-600 border-2 border-bold rounded-3xl flex items-center justify-center p-2" href={'/admin/projects'}>Projects</Link>
        </nav>
          {children}
      </body>
    </html>
  );
}