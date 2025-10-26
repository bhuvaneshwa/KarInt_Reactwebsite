import Clients from "../components/Clients";
import Hero from "../components/Hero";
import NewsletterSubscription from "../components/NewsletterSubscription";
import OurService from "../components/OurService";
import Servicesother from "../components/Servicesother";

import Stats from "../components/Stats";
import Testimonial from "../components/Testimonial";


export default function Home() {
  return (
    <div>
      <Hero/>
      <Stats />
      <OurService />
      <Clients/>
      
      <Testimonial/>
      
      <Servicesother/>
      <NewsletterSubscription/>
    </div>
  );
}
