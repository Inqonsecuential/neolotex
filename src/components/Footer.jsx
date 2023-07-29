import Link from 'next/link'

import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import { NavLink } from '@/components/NavLink'
import Image from 'next/image'

export function Footer() {
  return (
    <footer className="bg-slate-50">
      <Container>
        <div className="flex flex-col items-center justify-center py-16">
          <div className="flex flex-col items-center justify-center">
            <Image
              src={
                'https://neolotex.com/wp-content/uploads/2021/08/NeoLotex-e1628595761777.png'
              }
              alt="NeoLotex"
              width={80}
              height={80}
            />
            <div className="mr-2 mt-2 text-lg font-bold text-[#096fb5]">
              NeoLotex
            </div>
          </div>
          <nav className="mt-10 text-sm" aria-label="quick links">
            <div className="-my-1 flex justify-center gap-x-6">
              <NavLink href="#features">Features</NavLink>
              <NavLink href="#testimonials">Testimonials</NavLink>
              <NavLink href="#faq">FAQ&apos;s</NavLink>
            </div>
          </nav>
        </div>
      </Container>
    </footer>
  )
}
