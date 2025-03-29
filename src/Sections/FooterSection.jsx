import React from 'react'
import logo from '../Assets/OmniSol.png'

function FooterSection() {
  return (
    <footer className="bg-gradient-to-t  from-gray-900 via-navy-800 to-gray-900 border-b border-blue-800/30 text-white py-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <img src={logo} alt="" className='h-10' />
            <p className="text-lg">Your 24/7 AI receptionist and business phone number</p>
          </div>
          <div className="flex flex-col  md:flex-row space-y-4 md:space-y-0 md:space-x-16 text-center md:text-left">
            <div className="space-y-2">
              <h3 className="font-semibold  text-primary text-xl">Features</h3>
              <ul>
                <li><a href="#" className="hover:underline">AI Receptionist</a></li>
                <li><a href="#" className="hover:underline">Smart CRM</a></li>
                <li><a href="#" className="hover:underline">Business Phone</a></li>
                <li><a href="#" className="hover:underline">Ask Breezy</a></li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-xl  text-primary">Resources</h3>
              <ul>
                <li><a href="#" className="hover:underline">Industries</a></li>
                <li><a href="#" className="hover:underline">Pricing</a></li>
                <li><a href="#" className="hover:underline">Blog</a></li>
                <li><a href="#" className="hover:underline">Community</a></li>
                <li><a href="#" className="hover:underline">Affiliate Program</a></li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-xl  text-primary">Company</h3>
              <ul>
                <li><a href="tel:+16282664233" className="hover:underline">Mobile: 628-266-4233</a></li>
                <li><a href="mailto:founders@getbreezy.app" className="hover:underline">Email: founders@getbreezy.app</a></li>
                <li><a href="#" className="hover:underline">Privacy Policy</a></li>
                <li><a href="#" className="hover:underline">Terms of Service</a></li>
              </ul>
            </div>
          </div>
        </div>
        <hr className='my-10' />
        <div className="text-center mt-6 text-sm">
          <p>© 2025 Socratic Systems Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default FooterSection