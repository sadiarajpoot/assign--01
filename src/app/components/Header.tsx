import Image from "next/image";
import Link from "next/link";
import "../globals.css";

export default function Header() {
  return (
    <div>
      <div className="w-full h-30 bg-white shadow-lg flex flex-row justify-end text-black">
        <ul className="flex space-x-4 p-4">
          <li>
            <Link href="/">
              <span className="m-9 hover:bg-gray-400 p-2 rounded text-black hover:text-white transition duration-200">Home</span>
            </Link>
          </li>
          <li className="mr-11">
            <Link href="/about">
              <span className="m-9 hover:bg-gray-400 p-2 rounded text-black hover:text-white transition duration-200">About</span>
            </Link>
          </li>
          <li className="mr-11">
            <Link href="/contact">
              <span className=" m-9 hover:bg-gray-400 p-2 rounded text-black hover:text-white transition duration-200">Contact Us</span>
            </Link>
          </li>
          <li className="mr-11">
            <Link href="/jobs">
              <span className=" m-9 hover:bg-gray-400 p-2 rounded text-black hover:text-white transition duration-200">Jobs</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
