import TopNavbar from "@/components/top-navbar";
import "./globals.css";
import { Poppins } from "next/font/google";
import Footer from "@/components/footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Swayam Pawar",
  description: "Swayam Pawar Portfolio website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} bg-black text-white antialiased`}>
        <header className="absolute top-0 left-0 right-0 z-50">
          <TopNavbar/>
        </header>

        <main className="relative">
          {children}
        </main>
      </body>
    </html>
  );
}