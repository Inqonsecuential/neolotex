import Image from 'next/future/image'
import { Button } from '@/components/Button'

export function Hero() {
  return (
    <div className="">
      <div className="bg relative mx-auto bg-[url(https://neolotex.com/wp-content/uploads/2021/06/slide5.jpeg)] bg-cover bg-center py-32 lg:bg-opacity-40 lg:bg-left ">
        <div className="absolute -mt-32 h-full w-full bg-slate-950/30 py-32"></div>
        <div className="mx-auto max-w-7xl">
          <h1 className="relative max-w-3xl pl-3 font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl">
            Build a
            <span className="relative whitespace-nowrap text-[#096fb5]">
              <svg
                aria-hidden="true"
                viewBox="0 0 418 42"
                className="absolute left-0 top-2/3 h-[0.58em] w-full fill-[#0c9cff]"
                preserveAspectRatio="none"
              >
                <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" />
              </svg>
              <span className="relative"> Back Office</span>
            </span>{' '}
            That&apos;s Up for Anything
          </h1>
        </div>
        <div className="relative mx-auto mt-6 max-w-7xl pl-3 text-lg font-semibold tracking-tight text-slate-950">
          <div className="max-w-lg rounded-lg bg-slate-200/50 py-1.5 pl-3 text-center">
            Leading BSFI Organisations Scaled up 100% in no time.
          </div>
        </div>
        <div className="relative mx-auto mt-10 flex max-w-7xl space-x-3 px-3">
          <a
            href="https://xkcd.com/643/"
            className="rounded-3xl bg-[#0e79c5] px-4 py-2 text-white hover:bg-[#0b9aff]"
          >
            Book a free Consultation
          </a>
          <a
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            className="rounded-3xl bg-[#0e79c5] px-4 py-2 text-white hover:bg-[#0b9aff]"
          >
            <span className="">Get Started</span>
          </a>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-7xl py-16">
        <p className="pb-10 text-center font-display text-3xl text-slate-900">
          Our Clients
        </p>
        <ul
          role="list"
          className="mt-8 flex items-center justify-center gap-x-8 sm:flex-col sm:gap-x-0 sm:gap-y-10 xl:flex-row xl:gap-x-12 xl:gap-y-0"
        >
          {[
            [
              {
                name: 'HCL',
                logo: 'https://neolotex.com/wp-content/uploads/2021/05/logo12.png',
              },
              {
                name: 'Capital Float',
                logo: 'https://neolotex.com/wp-content/uploads/2021/05/logo24.png',
              },
              {
                name: 'Fullerton India',
                logo: 'https://neolotex.com/wp-content/uploads/2021/05/logo27.png',
              },
            ],
            [
              {
                name: 'Toyota Financial Services',
                logo: 'https://neolotex.com/wp-content/uploads/2021/05/logo19.png',
              },
              {
                name: 'ICICI Bank',
                logo: 'https://neolotex.com/wp-content/uploads/2021/05/logo30.png',
              },
              {
                name: 'Hinduja Leyland Finance',
                logo: 'https://neolotex.com/wp-content/uploads/2021/05/logo22.png',
              },
            ],
          ].map((group, groupIndex) => (
            <li key={groupIndex}>
              <ul
                role="list"
                className="flex flex-col items-center gap-y-8 sm:flex-row sm:gap-x-12 sm:gap-y-0"
              >
                {group.map((company) => (
                  <li key={company.name} className="flex p-3">
                    <Image
                      src={company.logo}
                      alt={company.name}
                      unoptimized
                      width={400}
                      height={400}
                    />
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
