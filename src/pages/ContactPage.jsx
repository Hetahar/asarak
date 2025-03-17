import Navbar from '../components/NavBar';
import Footer from '../components/Footer';
import FormHero from '../components/FormHero';
import ContactInfo from '../components/ContactInfo';
import { useEffect, useState } from 'react';
import useScrollDirection from '../components/hooks/useScrollDirection';

function ContactPage() {
  const scrollDirection = useScrollDirection();
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    if (scrollDirection === 'up') {
      setIsSticky(true);
    } else if (scrollDirection === 'down') {
      setIsSticky(false);
    }
  }, [scrollDirection]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <nav className={`z-50 bg-white shadow ${isSticky ? 'sticky top-0' : ''}`}>
        <Navbar />
      </nav>
      <FormHero />
      <ContactInfo />
      <Footer />
    </>
  );
}

export default ContactPage;
