import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";


const inter = Inter({ subsets: ["latin"] });


export const metadata = {
  title: "NSBM",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  const Navbar = () => {}
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="header">
          <li><Link href="/" className="logo">NSBM</Link></li>
          <nav className="navbar">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/view-properties">Accommodation</Link></li>
              <li><Link href="/add-property">Add Accommodation</Link></li>
              <li><Link href="/register">Register</Link></li>
          </nav>
        </div>
        {children}
      <footer>
         <div className="footer-content">
            <h3>NSBM Green University Accommodation</h3>
            <p>Find your perfect accommodation around the NSBM Green University campus.</p>
            <ul className="socials">
                <li><Link href="https://www.facebook.com/nsbm.lk/" target="_blank"><i className="fa fa-facebook"></i>Facebook</Link></li>
            </ul>
         </div>
      </footer>
      </body> 
    </html>
  );
}
