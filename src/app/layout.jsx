import { Outfit } from "next/font/google";
import "./globals.css";
import Header from "./header/page";


const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} antialiased`}>
        <Header />
        {children}
        <footer className="w-full py-12 bg-secondary/30 mt-auto">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <p className="font-bold text-lg text-foreground">Mabisha Dahal</p>
              <p className="text-sm text-gray-500">© 2025 All rights reserved.</p>
            </div>

            <div className="flex gap-6">
              <a href="#" className="text-gray-500 hover:text-primary transition-colors">LinkedIn</a>
              <a href="#" className="text-gray-500 hover:text-primary transition-colors">Twitter</a>
              <a href="#" className="text-gray-500 hover:text-primary transition-colors">GitHub</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
