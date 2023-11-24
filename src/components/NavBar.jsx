import Link from 'next/link';
import React from 'react';
import { Link as ScrollLink } from 'react-scroll';


const Navbar = () => {

  return (
    <nav className="bg-rose-700 py-3 px-24 fixed w-full top-0 transition-all duration-300 ease-in-out z-50">
      <div className="container mx-auto flex items-center justify-between">

        <div className="text-xl font-bold text-white">Logo</div>


        <div className="flex items-center space-x-10">

          <Link href="#" passHref>
            <ScrollLink to="HomePage"
              spy={true}
              smooth={true}
              duration={500}
              offset={-70}
              className="relative text-lg text-white hover:text-rose-400 transition-all duration-300">
              Home
              <span className="underline"></span>
            </ScrollLink>
          </Link>

          <Link href="#" passHref>
            <ScrollLink to="UpcomingEventsPage"
              spy={true}
              smooth={true}
              duration={500}
              offset={-70}
              className="relative text-lg text-white hover:text-rose-400 transition-all duration-300">
              Upcoming Events
              <span className="underline"></span>
            </ScrollLink>
          </Link>

          <Link href="#" passHref>
            <ScrollLink to="AboutPage"
              spy={true}
              smooth={true}
              duration={500}
              offset={-70}
              className="relative text-lg text-white hover:text-rose-400 transition-all duration-300">
              About
              <span className="underline"></span>
            </ScrollLink>
          </Link>

          <Link href="#" passHref>
            <ScrollLink to="ContactPage"
              spy={true}
              smooth={true}
              duration={500}
              offset={-70}
              className="relative text-lg text-white hover:text-rose-400 transition-all duration-300">
              Contact
              <span className="underline"></span>
            </ScrollLink>
          </Link>

          <Link
            href="/Login1"
            className="bg-rose-500 text-white text-lg px-6 py-2 rounded-full transition-transform transform hover:scale-105 hover:bg-rose-400 hover:shadow-md duration-300 ease-in-out">
            Sign In
          </Link>


        </div>
      </div>
    </nav>
  );
};

export default Navbar;