import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <div className="site lost">
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
            <h1 className="h2">This page doesn&rsquo;t exist.</h1>
            <div className="buttons">
              <Link href="/">Back to UnitLabs</Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
