import Image from 'next/image'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Footer from './components/Footer'
import Contacts from './components/Contacts'

export default function Home() {

  return (
    <div >
    <NavBar/>
    <Hero/>
    <Projects/>
    <Contacts/>
    <Footer/>
    </div>
    )
}
