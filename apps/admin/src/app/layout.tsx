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
      <body>
        {children} {/* Renders the child pages */}
      </body>
    </html>
  );
}
