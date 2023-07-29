import Image from 'next/future/image'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-faqs.jpg'

const faqs = [
  [
    {
      question:
        'What types of technology solutions does NeoLotex Business Solutions offer?',
      answer:
        'NeoLotex provides a comprehensive range of technology solutions, including custom software products, IT services, cloud-based solutions, cybersecurity measures, and data analytics, catering to diverse industry verticals worldwide.',
    },
    {
      question:
        "How can NeoLotex's Business Process Outsourcing (BPO) services benefit my company?",
      answer:
        'Our BPO services optimize operational efficiency, reduce costs, and enhance scalability by outsourcing non-core business functions, allowing you to focus on core competencies and achieve sustainable growth.',
    },
    {
      question:
        'Does NeoLotex Business Solutions offer IT consulting for specific industry domains?',
      answer:
        ' Yes, our seasoned IT consultants possess in-depth knowledge of various industries, such as Telecom, Insurance, Banking, Capital Markets, Government, Manufacturing, and Retail, ensuring tailored and industry-specific recommendations for your business.',
    },
  ],
  [
    {
      question:
        'What sets NeoLotex apart from other Information Technology companies?',
      answer:
        'NeoLotex stands out with its customer-centric approach, innovative solutions, and a proven track record of successful project deliveries across the globe. Our team of experts constantly strives to stay at the forefront of technology to meet your evolving business needs.',
    },
    {
      question:
        "How can I get started with NeoLotex's technology solutions for my business?",
      answer:
        'Getting started is easy! Simply reach out to our team through our website or contact information, and our dedicated representatives will guide you through a personalized consultation to understand your requirements and design the perfect technology solution for your business.',
    },
    {
      question:
        'Is NeoLotex Business Solutions equipped to handle international projects?',
      answer:
        'Absolutely! With a global reach and a vast network of technology professionals, NeoLotex excels at managing projects for clients across the globe. No matter where your business is located, we are well-equipped to provide seamless technology solutions and support.',
    },
  ],
  [
    {
      question:
        'What security measures does NeoLotex Business Solutions employ to safeguard sensitive data and information?',
      answer:
        'At NeoLotex, we prioritize data security and implement industry-leading encryption, robust firewalls, access controls, and regular security audits to ensure your valuable data remains protected from cyber threats and unauthorized access.',
    },
    {
      question:
        'Can NeoLotex assist in integrating new technology solutions with our existing IT infrastructure?',
      answer:
        'Certainly! NeoLotex specializes in seamless technology integrations, ensuring that new software products and services integrate smoothly with your existing IT infrastructure, minimizing disruption and maximizing efficiency.',
    },
    {
      question:
        'How does NeoLotex Business Solutions ensure the quality of its software products and IT services?',
      answer:
        'Quality is at the core of our offerings. We adhere to stringent testing protocols, agile development methodologies, and continuous performance monitoring to deliver high-quality software products and IT services that meet or exceed industry standards.',
    },
  ],
]

export function Faqs() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative overflow-hidden bg-slate-50 py-20 sm:py-32"
    >
      <Image
        className="absolute left-1/2 top-0 max-w-none -translate-y-1/4 translate-x-[-30%]"
        src={backgroundImage}
        alt=""
        width={1558}
        height={946}
        unoptimized
      />
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faq-title"
            className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
          >
            Frequently asked questions
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            If you can’t find what you’re looking for, email our support team
            and if you’re lucky someone will get back to you.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-8">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="font-display text-lg leading-7 text-slate-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-slate-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
