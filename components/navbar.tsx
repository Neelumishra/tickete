import { IoIosHelpCircleOutline } from "react-icons/io";
import { PiBagSimpleThin } from "react-icons/pi";
import { IoMdArrowRoundBack } from "react-icons/io";
import Link from "next/link";
export default function Navbar() {
  return (
    <nav className="bg-white text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-around h-16  ">
          <div className="flex">
            <div className="md:flex-shrink-0 flex items-center ">
              <h1 className="md:text-3xl font-semibold  md:block hidden">tickete</h1>
              <IoMdArrowRoundBack className="md:hidden size-7 text-gray-600"/>
            </div>
          </div>

          <div className=" flex items-center  gap-2">
            <PiBagSimpleThin className="size-7" />
            <Link
              className="text-gray-700 hover:text-black text-sm  rounded-md  font-medium "
              href="#"
            >
              Checkout
            </Link>
          </div>
          <div className=" sm:ml-6 sm:flex  flex items-center  gap-1">
            <IoIosHelpCircleOutline className="size-7 text-gray-700"/>
            <Link
              className="text-gray-500 hover:text-black  rounded-md text-sm font-medium hidden md:block"
              href="#"
            >
              Help
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-black text-white">
        <p className="text-center text-sm py-3">
          Holding your tickets for 30:00
        </p>
      </div>
    </nav>
  );
}
