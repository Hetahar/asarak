import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FormHero from '../components/FormHero';
import ContactInfo from '../components/ContactInfo';
import { useEffect } from 'react';

function ContactPage() {

  useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

  return (
    <>
      <Navbar />
      <FormHero />
      <ContactInfo />
      <Footer />
    </>
  );
}

export default ContactPage;
