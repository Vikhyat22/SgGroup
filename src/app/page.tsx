import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import SGInfrastructure from '@/components/SGInfrastructure'
import SGEnterprises from '@/components/SGEnterprises'
import WhyChooseUs from '@/components/WhyChooseUs'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <SGInfrastructure />
        <SGEnterprises />
        <WhyChooseUs />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
