import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import Logo from '../../assets/Logo.png'
import { SelectedPage } from '../../shared/types';
import Link from "./Link";
import useMediaQuery from '../../hooks/useMediaQuery';
import { useState } from 'react';

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({selectedPage, setSelectedPage }: Props) => {
 
  const flexBetween = 'flex items-center justify-between';
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)")
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false)
  
Link
  return (
    <nav>
      <div className={`${flexBetween} fixed top-0 z-30 w-full py-6`}>
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            <img src={Logo} alt='Logo' />
            {isAboveMediumScreens ? (
              <div className={`${flexBetween} w-full`}>
                <div className={`${flexBetween} gap-8 text-sm`}>
                  <Link 
                  page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                  <Link page="Benefits" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                  <Link page="Our Classes" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                  <Link page="Contact" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                </div>
                <div className={`${flexBetween} gap-8`}>
                  <p>Sing-in</p>
                  <button >Become a Member</button>
                </div>
              </div>
            ) : (
                <button
                  className='rounded-full bg-secondary-500 p-2'
                  onClick={() => setIsMenuToggled(!isMenuToggled) }
                >
                  <Bars3Icon className='h-6 w-6 text-white'/>
                </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar