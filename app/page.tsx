import Image from "next/image";
import { LINKS } from "@/lib/links";

export default function Home() {
  return (
    <>
      <div className="page">
      <nav className="nav" aria-label="Primary">
        <div className="wrap">
          <a href="#top" className="brand">
            <Image src="/mark.svg" alt="" width={26} height={36} priority />
            <span>UnitLabs</span>
          </a>
          <a className="navlink" href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero" id="top">
        <div className="wrap">
          <div className="grid">
            <h1 className="h1">We build products for the onchain world.</h1>
            <p className="lede">
              UnitLabs is an independent product lab building crypto-native
              products, protocols, and financial infrastructure.
            </p>
          </div>
        </div>
      </section>
      </div>

      <div className="page">
      <section className="close" id="contact">
        <div className="wrap">
          <h2 className="h2">Want to work with us? Say hello.</h2>
          <div className="buttons">
            <a href={LINKS.x} target="_blank" rel="noreferrer">X</a>
            <a href={LINKS.github} target="_blank" rel="noreferrer">GitHub</a>
            <a href={LINKS.contact}>Contact</a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="wrap">
          <span>&copy; 2026 UnitLabs</span>
          <Image src="/mark.svg" alt="" width={22} height={31} />
        </div>
      </footer>
      </div>
    </>
  );
}
