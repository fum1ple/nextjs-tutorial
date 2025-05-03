export const metadata = {
  title: "Routing Demo",
  description: "A demo for routing in Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}