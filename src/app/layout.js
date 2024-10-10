import "./globals.css";
import {poppins, archivo} from "@/app/fonts/fonts";

export const metadata = {
  title: "Aimpire Digitech",
  description: "Your digital partner",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} min-w-screen flex justify-center antialiased dark:bg-black dark:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
