import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bookmark Hub",
  description: "User's bookmark homepage",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
          {children}
      </body>
    </html>
  );
}
