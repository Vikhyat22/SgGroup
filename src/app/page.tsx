import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import SGInfraastructure from '@/components/SGInfraastructure'
import SGEnterprises from '@/components/SGEnterprises'
import WhyChooseUs from '@/components/WhyChooseUs'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/ScrollToTop'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <SGInfraastructure />
        <SGEnterprises />
        <WhyChooseUs />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  )
}
