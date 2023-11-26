import { Element } from 'react-scroll';
import Navbar from '@/components/NavBar';
import HomePage from '@/components/Home';
import CardSlider from '@/components/CardSlider1';
import UpcomingEventsPage from '@/components/UpcomingEvents';
import ParallaxComponent from "@/components/ParallaxComponent";
import AboutPage from '@/components/About';
import ContactPage from '@/components/ContactUs';
import Footer from '@/components/footer';
import UserProfile from '@/components/UserProfile';



export default function Home() {

  return (
    <div id='main'>
      <Navbar />

      <Element name="HomePage">
      <HomePage />
      </Element>
      
      <Element name="UpcomingEventsPage">
      <UpcomingEventsPage />
      </Element>
      
      <ParallaxComponent />

      <CardSlider />
      <Element name="AboutPage">
      <AboutPage />
      </Element>

      <Element name="ContactPage">
      <ContactPage />
      </Element>      

      <Footer/>
      <UserProfile />
      
    </div>
  )
}
