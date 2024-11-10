import Image from "next/image";
import logo from "../app/images/logo.svg";
import home from "../app/images/web.jpg"
import home2 from "../app/images/unsplash.webp"
import home3 from "../app/images/unsplash 2.webp"
import home4 from "../app/images/unsplah 3.webp"
import home5 from "../app/images/BOX.svg"
import home6 from "../app/images/BOX 2.svg"
// grid image
import home7 from "../app/images/caregiving.webp"
import home8 from "../app/images/food safty system.webp"
import home9 from "../app/images/hazard.avif"
import home10 from "../app/images/basic life support.webp"
import home11 from "../app/images/infections.webp"
import home12 from "../app/images/childerns.avif"
import home13 from "../app/images/good clinical practice.webp"
import home14 from "../app/images/fires.avif"
import certificate from "../app/images/cerificate.webp"
//
import { FaLaptop } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa';
import { FaLanguage } from 'react-icons/fa';
import { FaBusinessTime } from 'react-icons/fa';
import { FaChalkboardTeacher } from 'react-icons/fa';
import { FaSearchDollar} from 'react-icons/fa';
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

export default function Home() {
  return (
    <div>
      {/* Header Section */}
      <div className="w-full h-[60px] bg-stone-100 flex items-center justify-center text-black px-4">
  <div className="flex items-center justify-between max-w-full">
    <h6 className="text-xs sm:text-sm md:text-base text-gray-800 my-2 font-bold text-center flex-1">
      Alison's New App is now available on iOS and Android!
    </h6>
    <div className="ml-2 sm:ml-4 rounded shadow-lg">
      <button className="bg-green-600 border-none text-white py-1 px-3 sm:py-2 sm:px-4 text-xs sm:text-sm md:text-base rounded hover:bg-green-500 transition duration-200 whitespace-nowrap border border-black font-semibold">
        Download Now
      </button>
    </div>
  </div>
</div>


      {/* New Section Below */}
      <div className="bg-white p-4 text-center max-w-full h-20 flex items-center justify-start ">
      <Image src={logo} alt="Logo" width={150} height={70}  className="mt-2 w-36 h-16 sm:w-40 sm:h-20 md:w-48 md:h-24" />
      <div className="flex items-center justify-center flex-row  space-x-6 p-9 sm:text-sm">
  <ul className="flex items-center space-x-4 m-40">
    <li className="text-gray-400 text-base hover:text-gray-500 hover:font-bold cursor-pointer">Explore Courses</li>
    
    <li>
      <select 
        name="select" 
        id="select" 
        className="border border-gray-300 rounded p-2 text-gray-700 focus:outline-none hover:text-gray-500 font-bold "
      >
        <option value="" disabled selected className="font-bold text-gray-500">Select a Course</option>
        <option value="option1" className="font-bold text-gray-500">Articial Intelligent</option>
        <option value="option2"className="font-bold text-gray-500">Blockchain</option>
        <option value="option3" className="font-bold text-gray-500">Web 3.0</option>
      </select>
    </li>
    
    <li className="text-gray-400 text-base hover:text-gray-500 hover:font-bold cursor-pointer ">Discover Careers</li>
    <li className="text-gray-400 text-base hover:text-gray-500 hover:font-bold cursor-pointer">More</li>
  </ul>
</div>
<div className="ml-2 sm:ml-4 rounded shadow-lg">
            <button className="bg-green-600 text-white py-1 px-3 sm:py-2 sm:px-4 text-sm rounded-2xl hover:bg-green-500 hover:text-black transition duration-200 whitespace-nowrap border-1 border-black font-semibold hover:shadow-lg shadow-black-50/50 ">
             <Link href="/sign_in"> Sign In</Link>
            </button>
          </div>
          <div className="ml-2 sm:ml-4 rounded shadow-lg">
          <button className="bg-green-600 text-white py-1 px-3 sm:py-2 sm:px-4 text-sm rounded-2xl hover:bg-green-500 hover:text-black transition duration-200 whitespace-nowrap border-1 border-black font-semibold hover:shadow-lg shadow-black-50/50 ">
            <Link href="/login_01"> Login</Link>
            </button>
          </div>
    </div>
     {/* New Section Below */}
     <div className="bg-blue-400 p-4 text-center max-w-full h-20 flex items-center justify-start shadow-lg shadow-blue-300/50">
  <p className="text-xl sm:text-2xl text-white font-bold ml-4 sm:ml-9">
    Want to upskill your whole team for free?
  </p>
</div>

<div className="flex justify-center items-center font-bold text-2xl sm:text-3xl mt-9 text-[#2d3941]">
  <p>Free Online Courses With Certificates & Diplomas</p>
</div>

<div className="flex flex-wrap justify-center mt-20 space-x-4 space-y-8 sm:space-y-0">
  <Image
    src={home}
    alt="Home One"
    width={250}
    height={270}
    className="rounded transition-transform transform hover:scale-105 hover:shadow-xl"
  />
  <Image
    src={home2}
    alt="Home Two"
    width={250}
    height={270}
    className="rounded transition-transform transform hover:scale-105 hover:shadow-xl"
  />
  <Image
    src={home3}
    alt="Home Three"
    width={250}
    height={270}
    className="rounded transition-transform transform hover:scale-105 hover:shadow-xl"
  />
  <Image
    src={home4}
    alt="Home Four"
    width={250}
    height={270}
    className="rounded transition-transform transform hover:scale-105 hover:shadow-xl"
  />
</div>

<div className="bg-blue-950 p-4 text-center w-full flex flex-wrap justify-evenly mt-9">
  <h6 className="text-white text-base sm:text-sm font-bold mb-2">Rated Excellent</h6>
  <h6 className="text-white text-base sm:text-sm font-bold mb-2">40 Million + Learners</h6>
  <h6 className="text-white text-base sm:text-sm font-bold mb-2">8 Million + Graduates</h6>
  <h6 className="text-white text-base sm:text-sm font-bold mb-2">193 Countries</h6>
</div>

  <div className="bg-lime-200 p-4 text-center max-w-full ">
  <h1 className="text-blue-400 text-2xl font-bold mt-2 hover:text-white ">Welcome to Our Platform</h1>

  <div className="flex flex-wrap justify-center items-start mt-10">
      <div className="bg-white border border-gray-300 shadow-lg rounded-lg p-6 max-w-sm w-full m-4">
        <h2 className="text-xl font-bold text-center text-[#2d3941] flex items-center justify-center">
          <FaLaptop className="mr-2" style={{ color: 'blue', fontSize: '40px' }} />
          <p className="flex justify-center">IT Tech</p>
        </h2>
        <p className="text-gray-700 mt-2 text-center">
        Technology (IT) refers to the use of computers, software, networks, and other digital tools to manage and process information
        </p>
      </div>
    <div className="bg-white border border-gray-300 shadow-lg rounded-lg p-6 max-w-sm w-full m-4">
      <h2 className= "text-xl font-bold text-center text-[#2d3941] flex items-center justify-center">
      <FaHeart className="mr-2" style={{ color: 'blue', fontSize: '40px' }} />
      <p className="flex justify-center">Health</p>
      </h2>
      <p className="text-gray-700 mt-2 text-center">
      Maintaining good health is essential for a high quality of life, enabling individuals to lead active, productive lives
      </p>
    </div>
    <div className="bg-white border border-gray-300 shadow-lg rounded-lg p-6 max-w-sm w-full  m-4">
    <h2 className= "text-xl font-bold text-center text-[#2d3941] flex items-center justify-center">
      <FaSearchDollar className="mr-2" style={{ color: 'blue', fontSize: '40px' }} />
      <p className="flex justify-center">Earn Dollar</p>
      </h2>
      <p className="text-gray-700 mt-2 text-center">
      Earning dollars, including traditional employment, freelancing, investing, and starting a business. 
      </p>
    </div>
    <div className="bg-white border border-gray-300 shadow-lg rounded-lg p-6 max-w-sm w-full  m-4">
    <h2 className= "text-xl font-bold text-center text-[#2d3941] flex items-center justify-center">
      <FaLanguage className="mr-2" style={{ color: 'blue', fontSize: '40px' }} />
      <p className="flex justify-center">Languages</p>
      </h2>
      <p className="text-gray-700 mt-2 text-center">
      Languages can be spoken, written, or signed, and they vary widely across cultures and regions.
      </p>
    </div>
    <div className="bg-white border border-gray-300 shadow-lg rounded-lg p-6 max-w-sm w-full  m-4">
    <h2 className= "text-xl font-bold text-center text-[#2d3941] flex items-center justify-center">
      <FaBusinessTime className="mr-2" style={{ color: 'blue', fontSize: '50px' }} />
      <p className="flex justify-center">Business Time</p></h2>
      <p className="text-gray-700 mt-2 text-center">
      It encompasses various activities, including marketing, finance, operations, and management. 
      </p>
    </div>
    <div className="bg-white border border-gray-300 shadow-lg rounded-lg p-6 max-w-sm w-full  m-4">
    <h2 className= "text-xl font-bold text-center text-[#2d3941] flex items-center justify-center"> <FaChalkboardTeacher className="mr-2" style={{ color: 'blue', fontSize: '60px' }} />
      <p className="flex justify-center">Teaching Acadme</p></h2>
      <p className="text-gray-700 mt-2 text-center">
      The academic environment encourages continuous learning and intellectual growth.
      </p>
    </div>
  </div>
</div>
<div className="p-4 text-center max-w-full h-20 flex items-center justify-center shadow-lg shadow-blue-400/40">
  <p className="text-[#2d3941] text-2xl sm:text-3xl font-bold ml-4">Not sure where to begin? Or even what you want to do?</p>
</div>

<div>
  <p className="flex items-center justify-center bg-white text-slate-500 p-2">
    Answer a few short questions and we'll provide you with a Career Ready Plan!
  </p>
</div>

<div className="flex flex-col sm:flex-row items-center justify-center mt-10 gap-8">
  <div className="flex flex-col items-center">
    <Image src={home5} alt="Find New Career" className="w-32 h-32 object-cover rounded-lg mt-2" />
    <h3 className="text-slate-500 text-xl text-center mt-2">I Want To Find A New Career</h3>
  </div>

  <div className="flex flex-col items-center">
    <Image src={home6} alt="Upskill Career" className="w-32 h-32 object-cover rounded-lg mt-2" />
    <h3 className="text-slate-500 text-xl text-center mt-2">I Want To Upskill In My Career</h3>
  </div>
</div>
{/* New Day Coding */}
<div className="w-full bg-slate-100 mt-9">
  <ul className="flex flex-wrap justify-center sm:justify-evenly p-7 text-[#2d3941] font-bold leading-3">
    <li className="text-[16px] sm:text-[10px] cursor-pointer hover:text-[#0091C7] hover:text-[20px]">Popular Courses</li>
    <li className="text-[16px] sm:text-[10px] cursor-pointer hover:text-[#0091C7] hover:text-[20px]">Top Diplomas</li>
    <li className="text-[16px] sm:text-[10px] cursor-pointer hover:text-[#0091C7] hover:text-[20px]">Top Certificates</li>
    <li className="text-[16px] sm:text-[10px] cursor-pointer hover:text-[#0091C7] hover:text-[20px]">New Courses</li>
  </ul>
  <hr className="border-1 border-gray-300" />

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-9 py-4">
<div className="border border-gray-300 shadow-lg rounded-lg p-2 w-[250px] h-[320px] ml-9">
  <Image src={home7} alt="1" width={300} height={300} className="bg-slate-600"/>
  <h4 className="text-sm font-bold text-gray-500 p-2">Health</h4>
          <h4 className="text-sm font-bold text-black ml-2">Diploma in Caregiving</h4>
          <h3 className="flex justify-between p-2 text-sm text-gray-500 font-semibold">6-10 hrs 
            <h3>722,160 learner</h3>
          </h3>
          <button className="border-[1px] border-gray-500 text-gray-500 p-1 rounded-lg mt-3 ml-2 hover:bg-slate-400 hover:border-none hover:text-white">More Info</button>
          <button className="border-[1px] border-gray-500 bg-green-700 ml-2 rounded-lg font-bold text-white p-2 hover:bg-green-900 border-none">Start Learning</button>
  </div>
  <div className="border border-gray-300 shadow-lg rounded-lg p-2 w-[250px] h-[320px] ml-9">
    <Image src={home8} alt="1" width={300} height={300}/>
    <h4 className="text-sm font-bold text-gray-500 p-2">Business</h4>
          <h4 className="text-sm font-bold text-black ml-2">HACCP Food Safety System </h4>
          <h3 className="flex justify-between p-2 text-sm text-gray-500 font-semibold">4-6 hrs 
            <h3>71,361 learner</h3>
          </h3>
          <button className="border-[1px] border-gray-500 text-gray-500 p-1 rounded-lg mt-3 ml-2 hover:bg-slate-400 hover:border-none hover:text-white">More Info</button>
          <button className="border-[1px] border-gray-500 bg-green-700 ml-2 rounded-lg font-bold text-white p-2 hover:bg-green-900 border-none">Start Learning</button>
    </div>
    <div className="border border-gray-300 shadow-lg rounded-lg p-2 w-[250px] h-[320px] ml-9">
      <Image src={home9} alt="1" width={300} height={300}/>
      <h4 className="text-sm font-bold text-gray-500 p-2">Health</h4>
          <h4 className="text-sm font-bold text-black ml-2">Hazard Analysis Critical Control</h4>
          <h3 className="flex justify-between p-2 text-sm text-gray-500 font-semibold">3-4 hrs 
            <h3>23,649 learner</h3>
          </h3>
          <button className="border-[1px] border-gray-500 text-gray-500 p-1 rounded-lg mt-3 ml-2 hover:bg-slate-400 hover:border-none hover:text-white">More Info</button>
          <button className="border-[1px] border-gray-500 bg-green-700 ml-2 rounded-lg font-bold text-white p-2 hover:bg-green-900 border-none">Start Learning</button>
      </div>
      <div className="border border-gray-300 shadow-lg rounded-lg p-2 w-[250px] h-[320px] ml-9">
        <Image src={home10} alt="1" width={300} height={300}/>
      <h4 className="text-sm font-bold text-gray-500 p-2">Health</h4>
          <h4 className="text-sm font-bold text-black ml-2">Basic Life Support (BLS)</h4>
          <h3 className="flex justify-between p-2 text-sm text-gray-500 font-semibold">4-5 hrs 
            <h3>196,569 learner</h3>
          </h3>
          <button className="border-[1px] border-gray-500 text-gray-500 p-1 rounded-lg mt-3 ml-2 hover:bg-slate-400 hover:border-none hover:text-white">More Info</button>
          <button className="border-[1px] border-gray-500 bg-green-700 ml-2 rounded-lg font-bold text-white p-2 hover:bg-green-900 border-none">Start Learning</button>
        </div>
        <div className="border border-gray-300 shadow-lg rounded-lg p-2 w-[250px] h-[320px] ml-9">
          <Image src={home11} alt="1" width={300} height={300}/>
          <h4 className="text-sm font-bold text-gray-500 p-2">Education</h4>
          <h4 className="text-sm font-bold text-black ml-2">Infection Control In Health Care</h4>
          <h3 className="flex justify-between p-2 text-sm text-gray-500 font-semibold">2-4 hrs 
            <h3>19,890 learner</h3>
          </h3>
          <button className="border-[1px] border-gray-500 text-gray-500 p-1 rounded-lg mt-3 ml-2 hover:bg-slate-400 hover:border-none hover:text-white">More Info</button>
          <button className="border-[1px] border-gray-500 bg-green-700 ml-2 rounded-lg font-bold text-white p-2 hover:bg-green-900 border-none">Start Learning</button>
          </div>
          <div className="border border-gray-300 shadow-lg rounded-lg p-2 w-[250px] h-[320px] ml-9">
            <Image src={home12} alt="1" width={300} height={300}/>
      <h4 className="text-sm font-bold text-gray-500 p-2">Education</h4>
          <h4 className="text-sm font-bold text-black ml-2">Safeguarding Children</h4>
          <h3 className="flex justify-between p-2 text-sm text-gray-500 font-semibold">7-8 hrs 
            <h3>28,283 learner</h3>
          </h3>
          <button className="border-[1px] border-gray-500 text-gray-500 p-1 rounded-lg mt-3 ml-2 hover:bg-slate-400 hover:border-none hover:text-white">More Info</button>
          <button className="border-[1px] border-gray-500 bg-green-700 ml-2 rounded-lg font-bold text-white p-2 hover:bg-green-900 border-none">Start Learning</button>
            </div>
            <div className="border border-gray-300 shadow-lg rounded-lg p-2 w-[250px] h-[320px] ml-9">
            <Image src={home13} alt="1" width={300} height={300}/>
            <h4 className="text-sm font-bold text-gray-500 p-2">Health</h4>
          <h4 className="text-sm font-bold text-black ml-2"> Caring for the Disabled</h4>
          <h3 className="flex justify-between p-2 text-sm text-gray-500 font-semibold">4-3 hrs 
            <h3>291,599 learner</h3>
          </h3>
          <button className="border-[1px] border-gray-500 text-gray-500 p-1 rounded-lg mt-3 ml-2 hover:bg-slate-400 hover:border-none hover:text-white">More Info</button>
          <button className="border-[1px] border-gray-500 bg-green-700 ml-2 rounded-lg font-bold text-white p-2 hover:bg-green-900 border-none">Start Learning</button>
            </div>
            <div className="border border-gray-300 shadow-lg rounded-lg p-2 w-[250px] h-[320px] ml-9">
            <Image src={home14} alt="1" width={300} height={300}/>
            <h4 className="text-sm font-bold text-gray-500 p-2">Health</h4>
          <h4 className="text-sm font-bold text-black ml-2">Fire Safety Training</h4>
          <h3 className="flex justify-between p-2 text-sm text-gray-500 font-semibold">5-6 hrs 
            <h3>32,011 learner</h3>
          </h3>
          <button className="border-[1px] border-gray-500 text-gray-500 p-1 rounded-lg mt-3 ml-2 hover:bg-slate-400 hover:border-none hover:text-white">More Info</button>
          <button className="border-[1px] border-gray-500 bg-green-700 ml-2 rounded-lg font-bold text-white p-2 hover:bg-green-900 border-none">Start Learning</button>
         </div>
</div>
</div>
<div className="w-full bg-slate-100 flex justify-center py-5">
  <button className="border border-green-700 bg-slate-100 text-green-700 font-bold p-4 rounded-lg shadow-md hover:bg-green-700 transition-colors duration-300 hover:text-white">
    Explore More Courses
  </button>
</div>
{/* New section day */}
<div className="flex justify-center items-center min-h-screen bg-slate-50">
  <div className="w-full max-w-6xl p-4">
    <h2 className=" mt-[-200px] text-center text-[#2d3941] font-extrabold leading-9 tracking-widest text-2xl p-9">
      Advance Your Career <br /> Learn In-demand Skills
    </h2>
    <div className="mt-2 grid grid-cols-2 gap-4  sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4">
      <div className="h-[50px] bg-blue-100 border-2 border-blue-300 rounded-full flex justify-center items-center transition-all duration-300 hover:bg-blue-300 hover:border-blue-400">
        <h2 className="p-3 text-center text-slate-700 font-bold transition-colors duration-300 hover:text-white text-sm">Information System</h2>
      </div>
      <div className="h-[50px] bg-blue-100 border-2 border-blue-300 rounded-full flex justify-center items-center transition-all duration-300 hover:bg-blue-300 hover:border-blue-400">
        <h2 className="p-3 text-center text-slate-700 font-bold transition-colors duration-300 hover:text-white text-sm">Human Resources</h2>
      </div>
      <div className="h-[50px] bg-blue-100 border-2 border-blue-300 rounded-full flex justify-center items-center transition-all duration-300 hover:bg-blue-300 hover:border-blue-400">
        <h2 className="p-3 text-center text-slate-700 font-bold transition-colors duration-300 hover:text-white text-sm">Business Management</h2>
      </div>
      <div className="h-[50px] bg-blue-100 border-2 border-blue-300 rounded-full flex justify-center items-center transition-all duration-300 hover:bg-blue-300 hover:border-blue-400">
        <h2 className="p-3 text-center text-slate-700 font-bold transition-colors duration-300 hover:text-white text-sm">Health Care</h2>
      </div>
      <div className="h-[50px] bg-blue-100 border-2 border-blue-300 rounded-full flex justify-center items-center transition-all duration-300 hover:bg-blue-300 hover:border-blue-400">
        <h2 className="p-3 text-center text-slate-700 font-bold transition-colors duration-300 hover:text-white text-sm">Contract Law</h2>
      </div>
      <div className="h-[50px] bg-blue-100 border-2 border-blue-300 rounded-full flex justify-center items-center transition-all duration-300 hover:bg-blue-300 hover:border-blue-400">
        <h2 className="p-3 text-center text-slate-700 font-bold transition-colors duration-300 hover:text-white text-sm">Health & Safety</h2>
      </div>
      <div className="h-[50px] bg-blue-100 border-2 border-blue-300 rounded-full flex justify-center items-center transition-all duration-300 hover:bg-blue-300 hover:border-blue-400">
        <h2 className="p-3 text-center text-slate-700 font-bold transition-colors duration-300 hover:text-white text-sm">Caregiving</h2>
      </div>
      <div className="h-[50px] bg-blue-100 border-2 border-blue-300 rounded-full flex justify-center items-center transition-all duration-300 hover:bg-blue-300 hover:border-blue-400">
        <h2 className="p-3 text-center text-slate-700 font-bold transition-colors duration-300 hover:text-white text-sm">Nursing</h2>
      </div>
      <div className="h-[50px] bg-blue-100 border-2 border-blue-300 rounded-full flex justify-center items-center transition-all duration-300 hover:bg-blue-300 hover:border-blue-400">
        <h2 className="p-3 text-center text-slate-700 font-bold transition-colors duration-300 hover:text-white text-sm">Psychology</h2>
      </div>
      <div className="h-[50px] bg-blue-100 border-2 border-blue-300 rounded-full flex justify-center items-center transition-all duration-300 hover:bg-blue-300 hover:border-blue-400">
        <h2 className="p-3 text-center text-slate-700 font-bold transition-colors duration-300 hover:text-white text-sm">Programming</h2>
      </div>
      <div className="h-[50px] bg-blue-100 border-2 border-blue-300 rounded-full flex justify-center items-center transition-all duration-300 hover:bg-blue-300 hover:border-blue-400">
        <h2 className="p-3 text-center text-slate-700 font-bold transition-colors duration-300 hover:text-white text-sm">Electrical Engineering</h2>
      </div>
      <div className="h-[50px] bg-blue-100 border-2 border-blue-300 rounded-full flex justify-center items-center transition-all duration-300 hover:bg-blue-300 hover:border-blue-400">
        <h2 className="p-3 text-center text-slate-700 font-bold transition-colors duration-300 hover:text-white text-sm">Nutrition</h2>
      </div>
    </div>
  </div>
</div>

{/* New Section */}
<div className="w-full  bg-green-100 flex flex-col md:flex-row items-center justify-between p-4 md:h-max">
   <div className="ml-[150px]">
   <h2 className="font-extrabold text-3xl  text-[#2d3941] p-[5px] mb-9">Benefits Of An Alison Certificate</h2>
   <h3 className="text-slate-800 font-bold text-xl mb-[3px]">Certify Your Skills</h3>
   <p className="text-slate-500 text-sm leading-5 tracking-widest ">A CPD accredited Alison Certificate certifies the skills you’ve <br/> learned</p>
   <h3 className="text-slate-800 font-bold text-xl mb-[3px] mt-5">Stand Out From The Crowd</h3>
   <p  className="text-slate-500 text-sm leading-5 tracking-widest ">Add your Alison Certification to your resumé and stay ahead <br/>of the competition</p>
   <h3 className="text-slate-800 font-bold text-xl mb-[3px] mt-5">Advance in Your Career</h3>
   <p  className="text-slate-500 text-sm leading-5 tracking-widest ">Share your Alison Certification with potential employers to<br/> show off your skills and capabilities</p>
    </div>
    <div className="flex-1 md:mr-[90px] mt-6 md:mt-0">
    <Image src={certificate} alt="Certificate" height={400} width={400} />
  </div>
</div>

      <div className="w-full h-auto md:h-screen bg-blue-950 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6 md:p-9 text-white font-bold text-base">
  <div className="text-center p-4">
    <h4 className="hover:text-slate-300 cursor-pointer" >FREE ONLINE <br/>COURSE CATEGORIES</h4><br/>
    <ul className="mt-2 text-slate-400 text-sm font-normal">
      <li>IT </li><br/>
      <li>Health</li><br/>
      <li>Language</li><br/>
      <li>Business</li><br/>
      <li>Management </li><br/>
      <li>Personal Development</li><br/>
      <li>Sales & Marketing</li><br/>
      <li>Engineering & Construction</li><br/>
      <li> Teaching & Academics</li><br/>
      <li>English</li><br/>

    </ul>
  </div>

  <div className="text-center">
    <h4 className="hover:text-slate-300 cursor-pointer" >LEARN ABOUT <br/>ALISON</h4><br/>
    <ul className="mt-2 text-slate-400 text-sm font-normal">
      <li>Learning on Alison </li><br/>
      <li>Health</li><br/>
      <li>About Alison Courses</li><br/>
      <li>Board of Directors</li><br/>
      <li>Alison Programmes </li><br/>
      <li>Our Course Creators</li><br/>
      <li>Empower Alison</li><br/>
      <li>Index</li><br/>
      <li> Open Positions</li><br/>
      <li>Media Centre</li><br/>
    </ul>
  </div>

  <div className="text-center">
    <h4 className="hover:text-slate-300 cursor-pointer" >QUALITY FREE <br/>LEARNING</h4><br/>
    <ul className="mt-2 text-slate-400 text-sm font-normal">
      <li>All Certificates</li><br/>
      <li>Hubs</li><br/>
      <li>Accreditation</li><br/>
      <li>All Diplomas</li><br/>
      <li>Graduate Outcomes</li><br/>
      <li>Alison Testimonials</li><br/>
      <li>COVID19 Emergency Courses</li><br/>
      <li>Premium Learning</li><br/>
      <li> Graduate Profiles</li><br/>
      <li>Blog</li><br/>

    </ul>
  </div>

  <div className="text-center">
    <h4 className="hover:text-slate-300 cursor-pointer" >EARN ON <br/>ALISON</h4><br/>
    <ul className="mt-2 text-slate-400 text-sm font-normal">
      <li>Download App</li><br/>
      <li>Access Free LMS</li><br/>
      <li>Career Ready Plan</li><br/>
      <li>Discover Careers</li><br/>
      <li>Alison Profile </li><br/>
      <li>Build Your Resumé</li><br/>
      <li>Aptitude Test</li><br/>
      <li>Verbal Reasoning Test</li><br/>
      <li>Numerical Reasoning Test</li><br/>
      <li>Abstract Reasoning Test</li><br/>
    </ul>
  </div>

  <div className="text-center">
    <h4 className="hover:text-slate-300 cursor-pointer" >EVENTS</h4><br/><br/>
    <ul className="mt-2 text-slate-400 text-sm font-normal">
      <li> E-learning Africa</li><br/>
      <li>Upcoming Webinars</li><br/>
    </ul>
  </div>
</div>
<div className="bg-slate-400 p-4 text-center max-w-full h-20 flex items-center justify-between">
  <Image src={logo} alt="Logo" width={150} height={70} className="mt-2" />
  
  <div className="flex space-x-4">

    <div className="flex space-x-2">
  <a href="https://facebook.com" target="_blank"  className="text-white hover:text-blue-700">
    <FaFacebookF className="mr-2 text-3xl" />
  </a>
  <a href="https://twitter.com" target="_blank"  className="text-white hover:text-blue-700">
    <FaTwitter className="mr-2 text-3xl" />
  </a>
  <a href="https://linkedin.com" target="_blank"  className="text-white hover:text-blue-700">
    <FaLinkedinIn className="mr-2 text-3xl" />
  </a>
  <a href="https://www.instagram.com/sadiakhan9433/" target="_blank"  className="text-white hover:text-blue-700">
    <FaInstagram className="mr-2 text-3xl" />
  </a>
  
</div>
  </div>
</div>
  </div>
    
  );   
}






