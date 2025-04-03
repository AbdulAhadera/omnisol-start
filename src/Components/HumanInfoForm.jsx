import React, { useState } from 'react';
import { IoCallSharp } from "react-icons/io5";
import { LuBook, LuMessageCircle } from "react-icons/lu";
import { SlCallOut } from "react-icons/sl";
import { IoMdContacts } from "react-icons/io";
import { CiChat1, CiCalendar } from "react-icons/ci";
import { IoPersonAddSharp } from "react-icons/io5";
import { Navigate, useNavigate } from 'react-router-dom';

function HumanInfoForm() {

  const navigate = useNavigate();

  const [selectedOption, setSelectedOption] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [selectedFeatures, setSelectedFeatures] = useState([]);

  const handleFeatureSelection = (feature) => {
    setSelectedFeatures((prev) =>
      prev.includes(feature)
        ? prev.filter((item) => item !== feature)
        : [...prev, feature]
    );
  };

  const handleDropdownChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const features = [
    {
      text: 'Answer caller questions',
      icon: <LuBook style={{ color: "#007bff" }} size={40} />,
      key: 0
    },
    {
      text: 'Qualify Leads',
      icon: <CiChat1 style={{ color: "#007bff" }} size={40} />,
      key: 1
    },
    {
      text: 'Schedule Appointments',
      icon: <CiCalendar style={{ color: "#007bff" }} size={40} />,
      key: 2
    },
    {
      text: 'Route Calls',
      icon: <SlCallOut style={{ color: "#007bff" }} size={40} />,
      key: 3
    },
    {
      text: 'Collect Contact Info',
      icon: <IoPersonAddSharp style={{ color: "#007bff" }} size={40} />,
      key: 4
    },
    {
      text: 'SMS follow-up after calls',
      icon: <LuMessageCircle style={{ color: "#007bff" }} size={40} />,
      key: 5
    },
    {
      text: 'Make outbound calls',
      icon: <IoCallSharp style={{ color: "#007bff" }} size={40} />,
      key: 6
    },
    {
      text: 'Manage customer notes (CRM)',
      icon: <IoMdContacts style={{ color: "#007bff" }} size={40} />,
      key: 7
    },
    {
      text: 'Send and receive SMS',
      icon: <CiChat1 style={{ color: "#007bff" }} size={40} />,
      key: 8
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-10">
      <h1 className='text-4xl text-center font-semibold bg-gradient-to-t from-[#007bff] to-[#00BFFF] bg-clip-text text-transparent'>
        Let's personalize this for you
      </h1>

      {/* First Section - Dropdown */}
      <div>
        <label className="block text-2xl font-semibold mb-2 text-white">Pick an Industry</label>
        <div className="relative">
          <select
            value={selectedOption}
            onChange={handleDropdownChange}
            className="text-white block w-full py-2 px-4 border-2 rounded-md text-lg border-primary bg-gradient-to-r from-gray-900 via-navy-800 to-gray-900 border-b border-blue-800/30 focus:ring-blue-500 focus:border-blue-500"
          >
            <option className='black' value="">Type or select an option</option>
            <option value="Technology">Technology</option>
            <option value="Healthcare">Healthcare</option>
            <option value="Finance">Finance</option>
            <option value="Retail">Retail</option>
          </select>
        </div>
      </div>

      {/* Second Section - Input */}
      <div>
        <label className="block text-2xl font-semibold mb-2 text-white">Business Name</label>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          className="text-white block w-full py-2 px-4 border-2 rounded-md border-primary text-lg bg-gradient-to-r from-gray-900 via-navy-800 to-gray-900 border-b border-blue-800/30  focus:ring-blue-500 focus:border-blue-500"
          placeholder="Enter your business name"
        />
      </div>

      {/* Third Section - Selectable Options */}
      <div>
        <p className="text-2xl font-semibold mb-4 text-white">What are the most helpful things we can do?</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {features.map((feature) => (
            <div
              key={feature.key}
              onClick={() => handleFeatureSelection(feature)}
              className={`flex flex-col items-center justify-center rounded-md border cursor-pointer p-2 sm:p-4 pmd:p-6  
                ${selectedFeatures.includes(feature) ? 'bg-blue-100 border-blue-500' : 'bg-gradient-to-r from-gray-900 via-navy-800 to-gray-900 border-b border-blue-800/30 border-gray-300'} 
                hover:bg-blue-50 transition-all`}
            >
              {/* Displaying the correct icon */}
              {feature.icon}

              <p className="text-md font-medium pt-4 bg-gradient-to-t from-[#007bff] to-[#00BFFF] bg-clip-text text-transparent text-center">{feature.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Continue Button */}
      <div className="flex justify-center mt-6">
        <button
          className="bg-blue-600 text-white py-2 px-6 rounded-lg text-lg font-semibold hover:bg-blue-700"
          onClick={() => navigate('/v1/agent/selectedagent')}
        >
          Continue
        </button>
      </div>
    </div>
  );
}

export default HumanInfoForm;