import { InstagramIcon } from '@/components/brand-icons'
import { ShieldAlert, ShieldCheck } from 'lucide-react'

export function PiracyWarning() {
  return (
    <footer className="section-divider relative px-5 py-16 sm:px-6 sm:py-20">
      <div className="glass-panel mx-auto max-w-3xl rounded-[2rem] px-6 py-10 text-center sm:px-12 sm:py-12">
        <span className="icon-crimson mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border">
          <ShieldAlert className="h-6 w-6" aria-hidden="true" />
        </span>

        <h2 className="title-shine mt-6 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
          Pirataria é crime
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/43">
          A venda do conteúdo só pode ser realizada através deste site. Qualquer outra página que
          utilize meu nome ou minhas imagens sem autorização é falsa. Evite conteúdos ilegais,
          pirateados ou falsificados e utilize somente os canais oficiais.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/8 bg-black/20 px-4 py-2 text-[0.62rem] font-bold uppercase tracking-[0.18em] text-white/40">
            <ShieldCheck className="h-3.5 w-3.5 text-crimson-soft" aria-hidden="true" />
            Site oficial
          </span>
          <a
            href="#inicio"
            className="footer-link-glow inline-flex items-center gap-2 rounded-full border bg-black/20 px-4 py-2 text-[0.62rem] font-bold uppercase tracking-[0.18em] text-white/40 transition-all"
          >
            <InstagramIcon className="h-3.5 w-3.5 text-crimson-soft" />
            Gleicy Branquinha
          </a>
        </div>

        <p className="mt-9 text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-white/22">
          © {new Date().getFullYear()} Gleicy Branquinha • Conteúdo +18
        </p>
      </div>
    </footer>
  )
}
