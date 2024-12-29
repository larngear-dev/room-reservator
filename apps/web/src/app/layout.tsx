import type { ReactNode } from "react";
import "@repo/ui/styles.css";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
