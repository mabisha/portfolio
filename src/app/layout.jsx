import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./header/page";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Mabisha - Portfolio",
  description: "Mabisha - Portfolio",
  icons: {
    // icon: "/metapic.png",  // works fine
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        <Header />
        {children}
        <footer className="w-full px-5 py-4 text-sm text-black flex flex-col gap-2 bg-gray-100">
          <div className="mt-5 flex flex-col gap-8 mb-5">
            <span className="w-full h-2 border-b-1 border-gray-500"></span>
            <div className="flex gap-2 justify-between border-b-cyan-950 px-10">
              <div>
                <p className="font-semibold text-xl">Phone</p>
                <p>+977-9819031566</p>
              </div>
              <div>
                <p className="font-semibold text-xl">Email</p>
                <p>dahalmabisha@gmail.com</p>
              </div>
              <div>
                <p className="font-semibold text-xl">Follow Me</p>
                <p>LinkedIn | Twitter</p>
              </div>
              <div>
                <p className="font-medium text-sm">© 2025 by Mabisha Dahal</p>
              </div>
            </div></div>


        </footer>
      </body>
    </html>
  );
}
