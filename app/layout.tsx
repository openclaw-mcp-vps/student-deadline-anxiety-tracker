import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DeadlineCalm – Track Assignment Stress & Anxiety Patterns",
  description: "Log daily anxiety levels around deadlines, track assignments, and discover stress patterns with personalized coping strategies. Built for college students."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="638156e0-ff25-4b48-9b89-be254363ff74"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  );
}
