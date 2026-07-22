import Image from 'next/image'

const photos = [
  {
    src: "/sitedojobteste/media/certa.png",
    alt: "Gleicy Branquinha - selfie no espelho",
  },
  {
    src: "/sitedojobteste/media/111.jpeg",
    alt: "Gleicy Branquinha - beira da piscina",
  },
  {
    src: "/sitedojobteste/media/foto-3.jpeg",
    alt: "Gleicy Branquinha - vista do lago",
  },
]

export function PhotoGallery() {
  return (
    <section className="section-divider px-5 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
          <span className="section-kicker">Galeria exclusiva</span>
          <h2 className="title-shine mt-5 font-display text-5xl font-semibold leading-[0.95] text-balance sm:text-6xl">
            Cada curva conta uma <span className="title-highlight">história</span>
          </h2>
          <p className="mx-auto mt-5 max-w-md text-sm leading-7 text-white/48 sm:text-base">
            Uma pequena prévia da experiência que está esperando por você.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-6 md:grid-rows-2">
          {photos.map((photo, index) => (
            <div
              key={`${photo.src}-${index}`}
              className={`media-frame group relative overflow-hidden rounded-2xl bg-black/40 ${
                index === 0
                  ? 'col-span-2 aspect-[4/5] md:col-span-2 md:row-span-2 md:aspect-auto'
                  : index === 1 || index === 2
                    ? 'aspect-[3/4] md:col-span-2'
                    : 'aspect-[3/4] md:col-span-2'
              }`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover transition duration-700 group-hover:scale-[1.06] group-hover:saturate-110"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10 opacity-65 transition-opacity duration-500 group-hover:opacity-90" />
              <span className="gallery-accent-line pointer-events-none absolute bottom-4 left-4 h-px w-0 transition-all duration-500 group-hover:w-16" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
