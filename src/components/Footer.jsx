import React from "react";
import { FiFacebook, FiInstagram, FiTwitter, FiGithub } from "react-icons/fi";

function Footer() {
  return (
    <div className="max-w-[1204px] mx-auto grid lg:grid-cols-3 gap-8 text-gray-300">
      <div>
        <h1 className="w-full text-3xl font-bold text-[#00df9a] mt-3">react</h1>
        <p className="py-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse
          laboriosam doloribus tempore nesciunt minima fuga neque numquam
          suscipit laudantium deleniti dignissimos quos nemo, aliquam eum sed
          hic autem molestias vero!
        </p>
        <div className="flex justify-between md:w-[75%] my-6">
          <FiFacebook size={25} />
          <FiInstagram size={25} />
          <FiTwitter size={25} />
          <FiGithub size={25} />
        </div>
      </div>
      <div className=" lg:col-span-2 flex justify-between mt-6">
        <div>
          <h6 className="font-medium text-gray-400">solutions</h6>
          <ul>
            <li className="py-2 text-sm">Analytics</li>
            <li className="py-2 text-sm">Marketing</li>
            <li className="py-2 text-sm">commerce</li>
            <li className="py-2 text-sm">Insight</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Support</h6>
          <ul>
            <li className="py-2 text-sm">Pricing</li>
            <li className="py-2 text-sm">Document</li>
            <li className="py-2 text-sm">Guides</li>
            <li className="py-2 text-sm">Api status</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Company</h6>
          <ul>
            <li className="py-2 text-sm">About</li>
            <li className="py-2 text-sm">Blog</li>
            <li className="py-2 text-sm">Jobs</li>
            <li className="py-2 text-sm">Careers</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Legal</h6>
          <ul>
            <li className="py-2 text-sm">claim</li>
            <li className="py-2 text-sm">policy</li>
            <li className="py-2 text-sm">terms</li>
           
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
