import { WhatsappIcon } from '@/components/brand-icons'
import { ArrowUpRight, Crown, ShieldCheck } from 'lucide-react'

const links = [
  {
    href: 'https://privacy.com.br/checkout/gleicybranquinha',
    label: 'área exclusiva',
    sub: 'Meu conteúdo exclusivo, sem censura',
    Icon: Crown,
    primary: true,
  },
  {
    href: 'https://wa.me/5511947231742',
    label: 'WhatsApp',
    sub: 'Fala comigo agora, respondo pessoalmente',
    Icon: WhatsappIcon,
    primary: false,
  },
]

export function LinksSection() {
  return (
    <section id="links" className="section-divider px-5 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-2xl">
        <div className="text-center">
          <span className="section-kicker">Canais oficiais</span>
          <h2 className="title-shine mt-5 font-display text-5xl font-semibold leading-none sm:text-6xl">
            Escolha por onde <span className="title-highlight">começar</span>
          </h2>
          <p className="mx-auto mt-5 max-w-md text-sm leading-7 text-white/48 sm:text-base">
            Use apenas os links abaixo para garantir uma experiência segura e verdadeira.
          </p>
        </div>

        <div className="mt-11 flex flex-col gap-4">
          {links.map(({ href, label, sub, Icon, primary }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={`link-button group relative flex items-center gap-4 overflow-hidden rounded-2xl px-5 py-5 transition-all duration-300 sm:px-6 ${
                primary
                  ? 'link-button-primary text-white'
                  : 'link-button-secondary text-white'
              }`}
            >
              <span
                className={`flex h-13 w-13 shrink-0 items-center justify-center rounded-2xl border ${
                  primary
                    ? 'link-icon-primary'
                    : 'link-icon-secondary'
                }`}
              >
                <Icon className="h-6 w-6" aria-hidden="true" />
              </span>

              <span className="flex min-w-0 flex-1 flex-col text-left">
                <span className="font-display text-2xl font-semibold leading-tight tracking-tight">
                  {label}
                </span>
                <span className={`mt-0.5 truncate text-xs sm:text-sm ${primary ? 'text-white/72' : 'text-white/45'}`}>
                  {sub}
                </span>
              </span>

              <span className="link-arrow flex h-10 w-10 shrink-0 items-center justify-center rounded-full border">
                <ArrowUpRight
                  className="h-4 w-4 opacity-75 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </span>
            </a>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-center gap-2 text-[0.65rem] font-bold uppercase tracking-[0.18em] text-white/35">
          <ShieldCheck className="h-3.5 w-3.5 text-crimson-soft" aria-hidden="true" />
          Links seguros e verificados
        </div>
      </div>
    </section>
  )
}
