import Image from 'next/image'
import { MessageCircleHeart } from 'lucide-react'

const prints = [
  { src: '/media/depo-1.jpeg', alt: 'Depoimento de fã sobre o conteúdo' },
  { src: '/media/depo-2.jpeg', alt: 'Depoimento de fã sobre o conteúdo' },
  { src: '/media/depo-3.jpeg', alt: 'Depoimento de fã sobre o conteúdo' },
  { src: '/media/depo-4.jpeg', alt: 'Depoimento de fã sobre o conteúdo' },
]

export function Testimonials() {
  return (
    <section className="section-divider px-5 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto max-w-3xl text-center">
          <span className="section-kicker">Depoimentos reais</span>
          <h2 className="title-shine mt-5 font-display text-5xl font-semibold leading-[0.95] text-balance sm:text-6xl">
            O que falam <span className="title-highlight">sobre mim</span>
          </h2>
          <p className="mx-auto mt-5 max-w-md text-sm leading-7 text-white/48 sm:text-base">
            Algumas mensagens de quem já conhece meu conteúdo exclusivo.
          </p>
        </div>

        <div className="mt-14 columns-1 gap-4 sm:columns-2">
          {prints.map((item) => (
            <div
              key={item.src}
              className="premium-card group mb-4 break-inside-avoid overflow-hidden rounded-2xl p-2 transition-all duration-300 hover:-translate-y-1 hover:border-[#e01943]/30"
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={1125}
                height={900}
                className="h-auto w-full rounded-xl object-cover opacity-90 transition duration-500 group-hover:opacity-100"
              />
            </div>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-center gap-2 text-xs font-semibold text-white/35">
          <MessageCircleHeart className="h-4 w-4 text-crimson-soft" aria-hidden="true" />
          Experiências compartilhadas por assinantes
        </div>
      </div>
    </section>
  )
}
