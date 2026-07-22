import { Compass, Images, Sparkles, Users, ZoomIn } from 'lucide-react'

const features = [
  {
    Icon: Images,
    title: 'Mais de 25 mídias',
    desc: 'Uma coleção completa com conteúdos escolhidos especialmente para você.',
  },
  {
    Icon: Compass,
    title: 'Novas aventuras',
    desc: 'Performances exclusivas registradas em ângulos surpreendentes.',
  },
  {
    Icon: ZoomIn,
    title: 'Qualidade nos detalhes',
    desc: 'Imagem de alta qualidade para você aproveitar cada detalhe de perto.',
  },
  {
    Icon: Users,
    title: 'Participações especiais',
    desc: 'Conteúdos e parcerias especiais que deixam a experiência ainda melhor.',
  },
]

export function ExclusiveContent() {
  return (
    <section className="section-divider px-5 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <span className="section-kicker">Acesso privativo</span>
          <h2 className="title-shine mt-5 font-display text-5xl font-semibold leading-[0.95] text-balance sm:text-6xl">
            Uma experiência <span className="title-highlight">exclusiva</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/48 sm:text-base">
            Conteúdo pensado para oferecer mais qualidade, privacidade e proximidade.
          </p>
        </div>

        <div className="mt-14 grid items-center gap-10 md:grid-cols-[0.9fr_1.1fr] md:gap-16">
          <div className="relative mx-auto w-full max-w-sm">
            <div className="media-frame red-edge relative overflow-hidden rounded-[2rem] bg-black p-1.5 sm:rounded-[2.4rem]">
              <div className="relative overflow-hidden rounded-[1.65rem] sm:rounded-[2rem]">
                <video
              className="aspect-[3/4] w-full object-cover"
               src="/sitedojobteste/media/video-1.mp4"
               controls
               muted
               playsInline
               preload="auto"
/>
              
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/10" />
                <span className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-3 py-2 text-[0.62rem] font-bold uppercase tracking-[0.2em] text-white/70 backdrop-blur-md">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#e01943] shadow-[0_0_14px_rgba(224,25,67,0.85)]" />
                  Prévia exclusiva
                </span>
              </div>
            </div>
          </div>

          <ul className="grid gap-3 sm:grid-cols-2">
            {features.map(({ Icon, title, desc }, index) => (
              <li
                key={title}
                className="premium-card group relative overflow-hidden rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#e01943]/30"
              >
                <span className="absolute right-4 top-3 font-display text-5xl font-semibold text-white/[0.035]">
                  0{index + 1}
                </span>
                <span className="icon-crimson flex h-11 w-11 items-center justify-center rounded-xl border transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="title-glow-soft mt-5 font-display text-2xl font-semibold tracking-tight text-white">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-white/43">{desc}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 flex items-center justify-center gap-2 text-[0.64rem] font-bold uppercase tracking-[0.2em] text-white/32">
          <Sparkles className="h-3.5 w-3.5 text-crimson-soft" aria-hidden="true" />
          Atualizações frequentes
        </div>
      </div>
    </section>
  )
}
