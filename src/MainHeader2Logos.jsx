// sin efecto

/* import logo3 from './assets/logo-wakapi.svg';
import logo2 from './assets/logo-fundavita-horizontal.svg';
import logo1 from './assets/logo-del-plata.svg';

const MainHeader2Logos = () => {
  return (
    <header className="main-header-2-logos">
     
        <div className="main-header-2-logos-content">
          <div className="main-header__logo">
            <img src={logo1} alt="Logo 1" className="h-10" />
          </div>
          <div className="main-header__logo">
            <img src={logo2} alt="Logo 2" className="h-10" />
          </div>
          <div className="main-header__logo">
            <img src={logo3} alt="Logo 3" className="h-10" />
          </div>
        
      </div>
    </header>
  );
}

export default MainHeader2Logos; */

import { useEffect, useState } from 'react';
import logo3 from './assets/logo-wakapi.svg';
import logo2 from './assets/logo-fundavita-horizontal.svg';
import logo1 from './assets/logo-del-plata.svg';

const MainHeader2Logos = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`main-header-2-logos ${isSticky ? 'fixed top-0 left-0 w-full z-50 scroll-smooth bg-black bg-opacity-50' : ''}`}>
      <div className="main-header-2-logos-content">
        <div className="main-header__logo">
          <img src={logo1} alt="Logo 1" className="h-10" />
        </div>
        <div className='flex space-x-4'>
        <div className="main-header__logo">
          <img src={logo2} alt="Logo 2" className="h-10" />
        </div>
        <div className="main-header__logo">
          <img src={logo3} alt="Logo 3" className="h-10" />
        </div>
        </div>
      </div>
    </header>
  );
};

export default MainHeader2Logos;