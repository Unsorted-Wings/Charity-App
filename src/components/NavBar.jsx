import React from 'react';
<<<<<<< HEAD

import {Link} from 'next/link';

=======
import { Link as ScrollLink } from 'react-scroll';
import { FaUser } from 'react-icons/fa';
>>>>>>> 70f7e3ffd92a36cdc219bfba11235a6f7ef1e601

const Navbar = () => {
  const handleProfileClick = () => {
    // Implement logic to open the login page or dropdown for user profile
    console.log('Profile clicked');
  };

  return (
    <nav className="bg-rose-700 py-3 px-24 fixed h-[6rem] w-full top-0 transition-all duration-300 ease-in-out z-50">
      <div className="h-full mx-auto flex items-center justify-between">

        <div className="text-2xl font-bold text-white">Logo</div>

        <div className="flex items-center space-x-10">
          <ScrollLink
            to="HomePage"
            spy={true}
            smooth={true}
            duration={500}
            offset={-70}
            className="relative text-xl text-white hover:text-rose-400 hover:cursor-pointer transition-all duration-300">
            Home
            <span className="underline"></span>
          </ScrollLink>

<<<<<<< HEAD
            <Link to="HomePage"
              spy={true}
              smooth={true}
              duration={500}
              offset={-70}
              className="relative text-lg text-white hover:text-rose-400 transition-all duration-300">
              Home
              <span className="underline"></span>
            </Link>

            <Link to="UpcomingEventsPage"
              spy={true}
              smooth={true}
              duration={500}
              offset={-70}
              className="relative text-lg text-white hover:text-rose-400 transition-all duration-300">
              Upcoming Events
              <span className="underline"></span>
            </Link>

            <Link to="AboutPage"
              spy={true}
              smooth={true}
              duration={500}
              offset={-70}
              className="relative text-lg text-white hover:text-rose-400 transition-all duration-300">
              About
              <span className="underline"></span>
            </Link>

            <Link to="ContactPage"
              spy={true}
              smooth={true}
              duration={500}
              offset={-70}
              className="relative text-lg text-white hover:text-rose-400 transition-all duration-300">
              Contact
              <span className="underline"></span>
            </Link>
=======
          <ScrollLink
            to="UpcomingEventsPage"
            spy={true}
            smooth={true}
            duration={500}
            offset={-70}
            className="relative text-xl text-white hover:text-rose-400 hover:cursor-pointer transition-all duration-300">
            Upcoming Events
            <span className="underline"></span>
          </ScrollLink>

          <ScrollLink
            to="AboutPage"
            spy={true}
            smooth={true}
            duration={500}
            offset={-70}
            className="relative text-xl text-white hover:text-rose-400 hover:cursor-pointer transition-all duration-300">
            About
            <span className="underline"></span>
          </ScrollLink>

          <ScrollLink
            to="ContactPage"
            spy={true}
            smooth={true}
            duration={500}
            offset={-70}
            className="relative text-xl text-white hover:text-rose-400 hover:cursor-pointer transition-all duration-300">
            Contact
            <span className="underline"></span>
          </ScrollLink>
>>>>>>> 70f7e3ffd92a36cdc219bfba11235a6f7ef1e601

          {/* Profile Icon */}
          <Link
            href="/Login1"
            className="cursor-pointer text-white pl-5 text-2xl transition-transform transform hover:scale-105 duration-300 ease-in-out"
          >
            <FaUser />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
