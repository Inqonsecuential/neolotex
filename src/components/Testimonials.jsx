import Image from 'next/future/image'
import { Container } from '@/components/Container'

const testimonials = [
  {
    content:
      'Vistaar is a satisfied customer of NeoLotex Business Solutions with a 2.5 Years of business relationship which is continuously enhancing, in terms of technology enabled service offerings and support. Our entire document management and operations workflow runs on NeoLotex product suite. When we signed-up with NeoLotex way back in 2015, it was more an experiment in the journey of business process automation however with a dependable team of process experts and technology solution providers, today NeoLotex solution is one of Vistaar’s critical business application. They are continuously improving on their value proposition, be it, supporting their scanning product on multiple operating systems or enhancing user interface and features to improve operational efficiency and controls. We are glad to be associated with NeoLotex as one of our important technology partners',
    author: {
      name: 'Nikhil Bandi',
      role: 'Senior Vice President Chief Information Officer & Head of Operations - Vistaar Financial Services Private Limited',
      image:
        'https://neolotex.com/wp-content/uploads/2021/05/Nikhil-Bandi.jpeg',
    },
  },
  {
    content:
      'It has been a great experience of working so far with NeoLotex. The good thing about working with your organisation is the flexibility and adaptability to customer’s requirements. The involvement of entire team including the highest level (Haneef, Renjith, Praveen) from the requirement understanding level to implementation execution level has helped delivered the right requirement and adds greatly to our satisfaction. To comment further on our file handling process, the tracking of not only the files but the specific documents inside the files as per our requirements is very diligent and gives us a confidence of no errors which has also lead us to move our critical document handling work to your organisation. We definitely will look first to your services for our any future requirements in related areas and will be happy to recommend your services to others.',
    author: {
      name: 'Dr Ashok Nagpal',
      role: 'Senior Vice-President Head - Credit, Risk and Collections - Vistaar Financial Services Private Limited',
      image:
        'https://neolotex.com/wp-content/uploads/2021/05/Ashok-Nagpal.jpeg',
    },
  },
  {
    content:
      'NeoLotex developed a bespoke solution for us in quick time and helped streamline our complex reconciliation activity. Along the way, Renjith and his team were ever-willing to make changes to continually improve the process, and impressed us with the intensity of their focus and professionalism. NeoLotex has been an extremely reliable partner in our growth journey.',
    author: {
      name: 'Prasad GR',
      role: 'Vice President-Operations - Capital Float',
      image: 'https://neolotex.com/wp-content/uploads/2021/05/prasad.jpeg',
    },
  },
]

function QuoteIcon(props) {
  return (
    <svg aria-hidden="true" width={105} height={78} {...props}>
      <path d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z" />
    </svg>
  )
}

export function Testimonials() {
  return (
    <section
      id="testimonials"
      aria-label="What our customers are saying"
      className="bg-slate-50 py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl md:text-center">
          <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
            EVERY CLIENT IS A PARTNER
          </h2>
        </div>
        <div
          role="list"
          className="grid grid-cols-1 gap-3 py-6 lg:grid-cols-2 lg:py-10"
        >
          {testimonials.map((testimonial, testimonialIndex) => (
            <div key={testimonialIndex} className="">
              <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10">
                <QuoteIcon className="absolute left-6 top-6 fill-slate-100" />
                <blockquote className="relative">
                  <p className="text-sm tracking-tight text-slate-900">
                    {testimonial.content}
                  </p>
                </blockquote>
                <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                  <div className="w-2/3">
                    <div className="font-display text-base text-slate-900">
                      {testimonial.author.name}
                    </div>
                    <div className="mt-1 text-sm text-slate-500">
                      {testimonial.author.role}
                    </div>
                  </div>
                  <div className="overflow-hidden rounded-full bg-slate-50">
                    <Image
                      className="h-14 w-14 object-cover"
                      src={testimonial.author.image}
                      alt=""
                      width={56}
                      height={56}
                    />
                  </div>
                </figcaption>
              </figure>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
