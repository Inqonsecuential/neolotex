import Head from 'next/head'
import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { Testimonials } from '@/components/Testimonials'
export default function Home() {
  return (
    <>
      <Head>
        <title>
          NeoLotex Business Solutions - Empowering Your Business with Innovative
          Technology Solutions
        </title>
        <meta
          name="description"
          content="NeoLotex Business Solutions is a leading global Information Technology company offering a diverse portfolio of software products, IT services, and Business Process Outsourcing (BPO) across various industry verticals. Partner with us to embark on a transformative journey of digital excellence, streamlining processes, and achieving unparalleled growth. Contact us now to unlock the full potential of your business!"
        />
      </Head>
      <Header />
      <main>
        <Hero />
        <PrimaryFeatures />
        <Testimonials />
        <CallToAction />
        <Faqs />
      </main>
      <Footer />
    </>
  )
}
