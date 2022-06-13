import About from '../components/about/about'
import HeroSection from '../components/home/heroSection'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
   <div>
    <HeroSection />

    {/* About */}
    <About />
   </div>
  )
}
