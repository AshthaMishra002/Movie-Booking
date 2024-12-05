 "use client"
import Link from 'next/link';
import React from 'react';
import './Navbar.css';
import { BiUserCircle, BiSearch } from 'react-icons/bi';
import { RiArrowDropDownFill, RiArrowDropRightFill } from 'react-icons/ri';
import logo from '@/assets/logo.png';
import Image from 'next/image';
import Locationpopup from '@/popups/location/Locationpopup';

const Navbar = () => {
  const [showLocationPopup, setShowLocationPopup] = React.useState<boolean>(false)
  return (
    <nav>
      <div className='left'>
        <Image src={logo} alt="logo" width={100} height={100} />
        <div className='searchbox'>
          <span className='searchbtn'>
            <BiSearch />
          </span>
          <input type='text' placeholder='Search for a movie' />
        </div>
      </div>
      <div className='right'>
      <p className='dropdown'
        onClick={()=> setShowLocationPopup(true)}
      >Mumbai <span className="dropicon" > <RiArrowDropRightFill/> </span>
    </p>
          <Link href ="/" className='theme_btn1 linkstylenone'>Logout</Link>
          <Link href="/" className=' linkstylenone'>
          <span className='theme_icon'> <BiUserCircle/> </span>
          </Link>
        
        
      </div>
      {
        showLocationPopup &&
        <Locationpopup
        setShowLocationPopup={setShowLocationPopup} />
      }
    </nav>
  );
};

export default Navbar;
