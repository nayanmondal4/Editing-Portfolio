import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { FadeIn } from "@/components/FadeIn";
import { Hero } from "@/components/Hero";
import { HeroBackground } from "@/components/HeroBackground";
import { Navbar } from "@/components/Navbar";
import { VideoPortfolio } from "@/components/VideoPortfolio";

export default function Home() {
  return (
    <>
      <Navbar />

      <div className="relative">
        <HeroBackground />
        <Hero />
      </div>

      <main className="relative z-10 mx-auto max-w-6xl px-5 pb-24 sm:px-8 lg:px-12">
        <section id="work" className="scroll-mt-28 py-20 sm:py-28">
          <FadeIn>
            <div className="mb-12 max-w-2xl">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-violet-400/90">
                Selected work
              </p>
              <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Selected edits & reels
              </h2>
              <p className="mt-4 text-zinc-400">
                A few pieces I&apos;ve shaped—hover for emphasis, tap to watch full screen. Thumbnails load lazily for
                a fast first load.
              </p>
            </div>
          </FadeIn>
          <VideoPortfolio />
        </section>

        <section id="about" className="scroll-mt-28 py-20 sm:py-24">
          <FadeIn>
            <About />
          </FadeIn>
        </section>

        <section id="contact" className="scroll-mt-28 py-20 sm:py-28">
          <FadeIn>
            <Contact />
          </FadeIn>
        </section>
      </main>

      <footer className="border-t border-white/[0.06] py-10 text-center text-xs text-zinc-600">
        <p>
          © {new Date().getFullYear()} Nayan.
        </p>
      </footer>
    </>
  );
}
