import React from "react";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useSession } from "next-auth/react";


const Navbar = () => {
  const handleProfileClick = () => {
    // Implement logic to open the login page or dropdown for user profile
    console.log("Profile clicked");
  };


  const { status } = useSession();

  return (
    <nav className="bg-rose-700 py-3 px-24 fixed h-[6rem] w-full top-0 transition-all duration-300 ease-in-out z-50">
      <div className="h-full mx-auto flex items-center justify-between">
        <div className="text-2xl font-bold text-white hover:scale-90 transition-all">
          
          <Link href="/">Logo</Link>
        </div>

        <div className="flex items-center space-x-10">
          <button
            onClick={(e) => {
              e.preventDefault;
              signIn("google", { callbackUrl: "/home" });
            }}
          >
            
            <h3 className="text-xl px-4 font-semibold hover:-translate-y-1 transition-all text-white">
              Login
            </h3>
          </button>
          <Link href="/about">
            
            <h3 className="text-xl px-4 font-semibold hover:-translate-y-1 transition-all text-white">
              About
            </h3>
          </Link>
          <Link href="/upcoming">
            
            <h3 className="text-xl px-4 font-semibold hover:-translate-y-1 transition-all text-white">
              Upcoming Events
            </h3>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
