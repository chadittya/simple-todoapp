import "./globals.css";

export const metadata = {
  title: "Simple Todo App",
  description: "Simple todo app for learning NextJS 13",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
