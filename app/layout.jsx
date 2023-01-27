import "./globals.css";
import { Space_Grotesk } from "@next/font/google";
import Image from "next/image";
import Logo from "../public/logo.svg";
import Link from "next/link";
import { Container } from "@/src/components";
import styles from "./layout.module.scss";

const space_grotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body className={space_grotesk.className}>
        <header className="border-b-white border-b-2">
          <nav>
            <Container classnames={["flex", "justify-between", "items-center"]}>
              <div className="logo">
                <Link href={"/"}>
                  <Image src={Logo} alt="Logo" width={200} height={100} />
                </Link>
              </div>
              <div className={styles.movies}>
                <Link href={"/movies"}>
                  <p className="text-2xl py-1 px-3 rounded-sm transition-all uppercase font-medium">
                    Movies
                  </p>
                </Link>
              </div>
            </Container>
          </nav>
        </header>
        {children}
       
      </body>
    </html>
  );
}
