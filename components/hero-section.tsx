import Image from 'next/image'
import { ArrowDown, LockKeyhole, ShieldCheck, Sparkles } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative px-5 pb-20 pt-5 sm:px-6 sm:pb-28">
      <div className="mx-auto max-w-6xl">
        <header className="glass-panel flex items-center justify-between rounded-2xl px-4 py-3 sm:px-5">
          <a href="#inicio" className="group flex items-center gap-3" aria-label="Voltar ao início">
            <span className="brand-icon-glow flex h-9 w-9 items-center justify-center rounded-xl border transition-transform duration-300 group-hover:rotate-6">
              <Sparkles className="h-4 w-4" aria-hidden="true" />
            </span>
            <span className="font-display text-xl font-semibold tracking-tight text-white">
              Gleicy <span className="text-crimson-hot italic">Branquinha</span>
            </span>
          </a>

          <span className="age-badge inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-[0.62rem] font-extrabold uppercase tracking-[0.22em]">
            <LockKeyhole className="h-3 w-3 text-crimson-hot" aria-hidden="true" />
            Área +18
          </span>
        </header>

        <div id="inicio" className="flex flex-col items-center gap-12 pt-14 sm:pt-20 md:flex-row md:gap-16 lg:gap-24">
          <div className="flex-1 text-center md:text-left">
            <span className="warm-badge inline-flex items-center gap-2 rounded-full px-4 py-2 text-[0.66rem] font-extrabold uppercase tracking-[0.24em] backdrop-blur-md">
              <ShieldCheck className="h-3.5 w-3.5 text-crimson-hot" aria-hidden="true" />
              Conteúdo exclusivo e privativo
            </span>

            <h1 className="title-shine mt-7 font-display text-[3.55rem] font-semibold leading-[0.88] text-balance sm:text-7xl lg:text-[6.3rem]">
              Gleicy
              <br />
              <span className="title-highlight">Branquinha</span>
            </h1>

            <p className="mx-auto mt-7 max-w-lg text-base leading-8 text-white/58 sm:text-lg md:mx-0">
              Fotos, vídeos e conteúdos personalizados em uma experiência exclusiva,
              segura e preparada especialmente para você.
            </p>

            <div className="mt-9 flex flex-col items-center gap-4 sm:flex-row md:items-start">
              <a
                href="#links"
                className="cta-primary group inline-flex w-full items-center justify-center gap-3 rounded-full px-8 py-4 text-xs font-extrabold uppercase tracking-[0.2em] text-white transition-transform duration-300 hover:-translate-y-1 sm:w-auto"
              >
                Acessar meus links
                <ArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-1" aria-hidden="true" />
              </a>

              <div className="flex items-center gap-3 py-1 sm:py-2">
                <div className="flex -space-x-2" aria-hidden="true">
                  {[1, 2, 3].map((item) => (
                    <span
                      key={item}
                      className="avatar-dot h-7 w-7 rounded-full border-2"
                    />
                  ))}
                </div>
                <span className="text-left text-[0.68rem] font-semibold uppercase leading-5 tracking-[0.16em] text-white/45">
                  Acesso imediato
                  <br />
                  <span className="text-crimson-soft">100% privativo</span>
                </span>
              </div>
            </div>
          </div>

          <div className="float-soft relative w-full max-w-[22rem] flex-1 sm:max-w-sm">
            <div className="hero-aura absolute -left-8 top-10 h-36 w-36 rounded-full blur-3xl" aria-hidden="true" />
            <div className="media-frame red-edge relative overflow-hidden rounded-[2rem] bg-black p-1.5 sm:rounded-[2.4rem]">
              <div className="relative overflow-hidden rounded-[1.65rem] sm:rounded-[2rem]">
                <Image
                  src="/media/111.jpeg"
                  alt="Gleicy Branquinha"
                  width={960}
                  height={1280}
                  priority
                  className="h-auto w-full object-cover transition-transform duration-700 hover:scale-[1.025]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#090405] via-transparent to-black/15" />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 p-5 sm:p-6">
                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <span className="text-crimson-soft text-[0.62rem] font-extrabold uppercase tracking-[0.25em]">
                        Conteúdo premium
                      </span>
                      <p className="mt-1 font-display text-2xl font-semibold text-white">
                        Só para você
                      </p>
                    </div>
                    <span className="icon-crimson flex h-11 w-11 items-center justify-center rounded-full border backdrop-blur-md">
                      <LockKeyhole className="h-4 w-4" aria-hidden="true" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
