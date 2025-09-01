import logo from '../assets/logo 2.png';
import { FaTwitter } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { MdOutlineMailOutline } from 'react-icons/md';
import Icons from './Icons';
export default function Footer() {
  return (
    <div className="bg-gray-200 pt-[60px]  px-[130px]">
      <div className="flex justify-between">
        <div className="mb-3">
          <div className="flex items-center mb-3">
            <div className="text-white font-bold text-xl">
              <img className="w-[70px]" src={logo} />
            </div>

            <div className="flex flex-col gap-0">
              <h1 className="m-0 font-bold text-[25px] text-white leading-none">
                inzozI
              </h1>
              <span className="m-0 text-[11px] text-white leading-none">
                Smart Dreams. Bright Futures
              </span>
            </div>
          </div>

          <div>
            <h4 className="text-[13px] text-[#000000]">
              Connecting schools and families across Rwanda through <br />
              innovative technology. Making quality education accessible for{' '}
              <br />
              every child.
            </h4>
          </div>

          <div className="flex gap-3">
            <Icons icons={<FaTwitter />} />
            <Icons icons={<FaLinkedinIn />} />
            <Icons icons={<FaGithub />} />
            <Icons icons={<MdOutlineMailOutline />} />
          </div>

          <div className="py-6">
            <h1 className="text-white text-[15px] py-2 ">Legal</h1>
            <p className="text-black text-[14px] py-1 ">Privacy Policy</p>
            <p className="text-black text-[14px] py-1 ">Terms of Service</p>
            <p className="text-black text-[14px] py-1 ">Cookie Policy</p>
            <p className="text-black text-[14px] py-1 ">GDPR</p>
          </div>
        </div>
        <div className="py-6">
          <h1 className="text-white text-[15px] py-2 ">Products</h1>
          <p className="text-black text-[14px] py-1 ">Features</p>
          <p className="text-black text-[14px] py-1 ">How It Works</p>
          <p className="text-black text-[14px] py-1 ">Pricing</p>
          <p className="text-black text-[14px] py-1 ">Demo</p>
        </div>

        <div className="py-6">
          <h1 className="text-white text-[15px] py-2 ">Resources</h1>
          <p className="text-black text-[14px] py-1 ">Documentation</p>
          <p className="text-black text-[14px] py-1 ">Guide</p>
          <p className="text-black text-[14px] py-1 ">Api</p>
          <p className="text-black text-[14px] py-1 ">Support</p>
        </div>
        <div className="py-6">
          <h1 className="text-white text-[15px] py-2 ">Company</h1>
          <p className="text-black text-[14px] py-1 ">About Us</p>
          <p className="text-black text-[14px] py-1 ">Carrers</p>
          <p className="text-black text-[14px] py-1 ">Press</p>
          <p className="text-black text-[14px] py-1 ">Contact</p>
        </div>
      </div>
      <div className=" border-t border-black border-b ">
        <h1 className="text-center text-white pt-[30px] py-6">Stay Updated</h1>
        <p className="text-center">
          Get the latest news and updates about Inzozi's features and <br />
          <span className="pl-[20px]"> Rwanda's education sector.</span>
        </p>

        <div className="flex justify-center gap-2 py-7 ">
            <input className="w-[319px] py-2 h-[40px]  px-2 focus:outline-none rounded-md bg-blue-950 text-white " placeholder="Enter your Email"/>
            <button className="bg-[#054069] text-white flex justify-center items-center rounded-md cursor-pointer px-2">Subscribe</button>
        </div>
      </div>

      <div className="pt-[20px] flex justify-between pb-[150px]">
           <h1>© 2025 Inzozi. All rights reserved.</h1>
           <div className="flex gap-[50px]">
            <h1>Made with ❤️ in Rwanda</h1>
            <h1>Kigali, Rwanda</h1>
           </div>
      </div>
    </div>
  );
}
