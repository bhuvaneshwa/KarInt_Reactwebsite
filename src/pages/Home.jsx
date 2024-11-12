import Hero from "../components/Hero";
import NewsletterSubscription from "../components/NewsletterSubscription";
import OurService from "../components/OurService";
import Servicesother from "../components/Servicesother";
import Stats from "../components/Stats";

export default function Home() {
  return (
    <div>
      <Hero/>
      <Stats />
      <OurService />
      <Servicesother/>
      <NewsletterSubscription/>
    </div>
  );
}
