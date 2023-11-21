import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Expense Chart",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={plusJakartaSans.className}>
        <main className="flex justify-center items-center h-screen  bg-primary">
          {children}
        </main>
      </body>
    </html>
  );
}
