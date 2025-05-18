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
      <body>
        <header
          style={{
            backgroundColor: "lightblue",
            padding: "1rem",
          }}>
          <p>header</p>
        </header>
        {children}
        <footer
          style={{
            backgroundColor: "ghostwhite",
            padding: "1rem",
          }}>
          <p>Footer</p>
        </footer>
      </body>
    </html>
  );
}