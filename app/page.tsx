import Image from "next/image";
import Link from "next/link";
import { LINKS } from "@/lib/links";

export default function Home() {
  return (
    <div className="site">
      <header className="nav">
        <div className="wrap">
          <Link href="/" className="brand">
            <Image src="/mark.svg" alt="" width={26} height={36} priority />
            <span>UnitLabs</span>
          </Link>
        </div>
      </header>

      <main className="main">
        <section className="hero">
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

        <section className="close" aria-labelledby="contact-title">
          <div className="wrap">
            <h2 className="closing" id="contact-title">Want to work with us? Say hello.</h2>
            <div className="buttons">
              <a href={LINKS.x} target="_blank" rel="noreferrer">
                <span className="sr-only">UnitLabs on </span>X
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
              <a href={LINKS.github} target="_blank" rel="noreferrer">
                <span className="sr-only">UnitLabs on </span>GitHub
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
              <a className="email" href={LINKS.contact}>{LINKS.email}</a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
