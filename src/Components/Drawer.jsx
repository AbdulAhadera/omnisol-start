// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Drawer from '@mui/material/Drawer';
// import Divider from '@mui/material/Divider';
// import { MdVolumeUp } from 'react-icons/md';
// import { ImCross } from "react-icons/im";

// function DrawerAgent({ open, setOpen, selectedSection, handleVoiceSelect, selectedVoice, setSelectedVoice, handleSave, handleCancel }) {
//   const closeDrawer = () => setOpen(false); 

//   const voices = [
//     { name: "Michelle", id: 1 },
//     { name: "Jordan", id: 2 },
//     { name: "Sophie", id: 3 },
//     { name: "Jessica", id: 4 },
//     { name: "Sam", id: 5 },
//     { name: "Joseph", id: 6 },
//   ];

//   const handleVoiceClick = (voiceName) => {
//     console.log(`Selected Voice: ${voiceName}`);  // Log the selected voice name to console
//     setSelectedVoice(voiceName);  // Update selected voice in state
//     handleVoiceSelect(voiceName) // Pass selected voice back to parent (AgentPage)
//     // Drawer will remain open
//   };

//   const renderContent = () => {
//     switch (selectedSection) {
//       case 'voice':
//         return (
//           <div className='mx-4'>
//             <div className='flex justify-between'>
//               <ImCross
//                 onClick={closeDrawer} 
//                 size={20}
//                 style={{
//                   marginTop: "22px",
//                   cursor: "pointer"
//                 }}
//               />
//               <h2 className='text-lg text-center my-4 font-semibold'>Voice</h2>
//             </div>
//             <hr />
//             <p className='text-sm my-10'>Choose a voice for your AI assistant to use during calls. Click a voice to preview it.</p>

//             {voices.map((voice) => (
//               <div
//                 key={voice.id}
//                 className={`w-full my-2 p-2 rounded-lg border border-blue-200 flex items-center justify-between cursor-pointer 
//                 ${selectedVoice === voice.name ? 'bg-primary/10' : 'hover:bg-blue-50'}`} // Apply bg-primary/10 when selected
//                 onClick={() => handleVoiceClick(voice.name)} // Set selected voice on click
//               >
//                 <p className="text-lg font-semibold text-gray-700">{voice.name}</p>
//                 <div className="flex items-center justify-center bg-blue-100 p-2 rounded-full">
//                   <MdVolumeUp className="text-blue-500" size={20} />
//                 </div>
//               </div>
//             ))}
//             <div className='flex justify-between my-4'>
//               <p className='text-gray-400 cursor-pointer' onClick={handleCancel}>Cancel</p> {/* Cancel functionality */}
//               <button
//                 onClick={handleSave} // Save functionality
//                 className='bg-primary py-1 px-6 text-white rounded-lg font-semibold'
//               >
//                 Save
//               </button>
//             </div>
//           </div>
//         );
//       case 'greeting':
//         return (
//           <div className='mx-4'>
//             <div className='flex justify-between'>
//               <ImCross
//                 onClick={closeDrawer} // Close the drawer only when clicking the close icon
//                 size={20}
//                 style={{
//                   marginTop: "22px",
//                   cursor: "pointer"
//                 }}
//               />
//               <h2 className='text-lg text-center my-4 font-semibold'>Greetings</h2>
//             </div>
//             <hr />
//             <p className='text-sm my-4'>Write your voice assistant greeting message.</p>
//             <hr />
//             <input
//               type="text"
//               placeholder="Set your greeting message"
//               className="w-full p-2 border rounded-lg my-2"
//             />
//             <div className='flex justify-between my-4'>
//               <p className='text-gray-400 cursor-pointer' onClick={handleCancel}>Cancel</p> {/* Cancel functionality */}
//               <button
//                 onClick={handleSave} // Save functionality
//                 className='bg-primary py-1 px-6 text-white rounded-lg font-semibold'
//               >
//                 Save
//               </button>
//             </div>
//           </div>
//         );
//       case 'callerDetails':
//         return (
//           <div className='mx-4'>
//             <div className='flex justify-between'>
//               <ImCross
//                 onClick={closeDrawer} // Close the drawer only when clicking the close icon
//                 size={20}
//                 style={{
//                   marginTop: "22px",
//                   cursor: "pointer"
//                 }}
//               />
//               <h2 className='text-lg text-center my-4 font-semibold'>Caller Details</h2>
//             </div>
//             <hr />
//             <div>
//               <input type="checkbox" id="name" />
//               <label htmlFor="name" className="ml-2">Name</label>
//             </div>
//             <div>
//               <input type="checkbox" id="phone" />
//               <label htmlFor="phone" className="ml-2">Phone</label>
//             </div>
//             <div>
//               <input type="checkbox" id="email" />
//               <label htmlFor="email" className="ml-2">Email</label>
//             </div>
//             <div>
//               <input type="checkbox" id="address" />
//               <label htmlFor="address" className="ml-2">Address</label>
//             </div>
//             <div>
//               <input type="checkbox" id="business" />
//               <label htmlFor="business" className="ml-2">Business Name</label>
//             </div>
//             <div className='flex justify-between my-4'>
//               <p className='text-gray-400 cursor-pointer' onClick={handleCancel}>Cancel</p> {/* Cancel functionality */}
//               <button
//                 onClick={handleSave} // Save functionality
//                 className='bg-primary py-1 px-6 text-white rounded-lg font-semibold'
//               >
//                 Save
//               </button>
//             </div>
//           </div>
//         );
//       default:
//         return <p>Select a section to see content.</p>;
//     }
//   };

//   return (
//     <div className='bg-body'>
//       <p>&nbsp;</p>
//       <Drawer anchor="right" open={open}>
//         <Box sx={{ width: 450 }} role="presentation">
//           <Divider />
//           {renderContent()}
//         </Box>
//       </Drawer>
//     </div>
//   );
// }

// export default DrawerAgent;

import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Divider from '@mui/material/Divider';
import { MdVolumeUp } from 'react-icons/md';
import { ImCross } from "react-icons/im";

function DrawerAgent({ open, setOpen, selectedSection, handleVoiceSelect, selectedVoice, setSelectedVoice, handleSave, handleCancel }) {
  const toggleDrawer = (newOpen) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setOpen(newOpen);
  };

  const voices = [
    { name: "Michelle", id: 1 },
    { name: "Jordan", id: 2 },
    { name: "Sophie", id: 3 },
    { name: "Jessica", id: 4 },
    { name: "Sam", id: 5 },
    { name: "Joseph", id: 6 },
  ];

  const handleVoiceClick = (voiceName) => {
    console.log(`Selected Voice: ${voiceName}`);
    setSelectedVoice(voiceName);
    handleVoiceSelect(voiceName);
  };

  const renderContent = () => {
    switch (selectedSection) {
      case 'voice':
        return (
          <div className='mx-4 text-white'>
            <div className='flex justify-between'>
              <ImCross
                onClick={toggleDrawer(false)}
                size={20}
                className="mt-5 cursor-pointer text-gray-400 hover:text-white"
              />
              <h2 className='text-lg text-center my-4 font-semibold'>Voice</h2>
            </div>
            <Divider className="bg-gray-700" />
            <p className='text-sm my-10 text-gray-400'>Choose a voice for your AI assistant to use during calls. Click a voice to preview it.</p>

            {voices.map((voice) => (
              <div
                key={voice.id}
                className={`w-full my-2 p-2 rounded-lg border border-gray-700 flex items-center justify-between cursor-pointer 
                ${selectedVoice === voice.name ? 'bg-blue-900/30' : 'hover:bg-gray-800'}`}
                onClick={() => handleVoiceClick(voice.name)}
              >
                <p className="text-lg font-semibold text-gray-200">{voice.name}</p>
                <div className="flex items-center justify-center bg-gray-700 p-2 rounded-full">
                  <MdVolumeUp className="text-blue-400" size={20} />
                </div>
              </div>
            ))}
            <div className='flex justify-between my-4'>
              <p className='text-gray-400 cursor-pointer hover:text-gray-200' onClick={handleCancel}>Cancel</p>
              <button
                onClick={handleSave}
                className='bg-blue-600 hover:bg-blue-700 py-1 px-6 text-white rounded-lg font-semibold'
              >
                Save
              </button>
            </div>
          </div>
        );
      case 'greeting':
        return (
          <div className='mx-4 text-white'>
            <div className='flex justify-between'>
              <ImCross
                onClick={toggleDrawer(false)}
                size={20}
                className="mt-5 cursor-pointer text-gray-400 hover:text-white"
              />
              <h2 className='text-lg text-center my-4 font-semibold'>Greetings</h2>
            </div>
            <Divider className="bg-gray-700" />
            <p className='text-sm my-4 text-gray-400'>Write your voice assistant greeting message.</p>
            <Divider className="bg-gray-700" />
            <input
              type="text"
              placeholder="Set your greeting message"
              className="w-full p-2 border border-gray-700 rounded-lg my-2 bg-gray-800 text-white focus:border-blue-500 focus:outline-none"
            />
            <div className='flex justify-between my-4'>
              <p className='text-gray-400 cursor-pointer hover:text-gray-200' onClick={handleCancel}>Cancel</p>
              <button
                onClick={handleSave}
                className='bg-blue-600 hover:bg-blue-700 py-1 px-6 text-white rounded-lg font-semibold'
              >
                Save
              </button>
            </div>
          </div>
        );
      case 'callerDetails':
        return (
          <div className='mx-4 text-white'>
            <div className='flex justify-between'>
              <ImCross
                onClick={toggleDrawer(false)}
                size={20}
                className="mt-5 cursor-pointer text-gray-400 hover:text-white"
              />
              <h2 className='text-lg text-center my-4 font-semibold'>Caller Details</h2>
            </div>
            <Divider className="bg-gray-700" />
            <div className="space-y-3">
              {['Name', 'Phone', 'Email', 'Address', 'Business Name'].map((item) => (
                <div key={item} className="flex items-center">
                  <input
                    type="checkbox"
                    id={item.toLowerCase()}
                    className="w-4 h-4 text-blue-600 bg-gray-700 border-gray-600 rounded focus:ring-blue-500"
                  />
                  <label htmlFor={item.toLowerCase()} className="ml-2 text-gray-300">
                    {item}
                  </label>
                </div>
              ))}
            </div>
            <div className='flex justify-between my-4'>
              <p className='text-gray-400 cursor-pointer hover:text-gray-200' onClick={handleCancel}>Cancel</p>
              <button
                onClick={handleSave}
                className='bg-blue-600 hover:bg-blue-700 py-1 px-6 text-white rounded-lg font-semibold'
              >
                Save
              </button>
            </div>
          </div>
        );
      default:
        return <p className="text-white">Select a section to see content.</p>;
    }
  };

  return (
    <div>
      <span>&nbsp;</span>
      <SwipeableDrawer
        anchor="right"
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        PaperProps={{
          sx: {
            width: 450,
            backgroundColor: '#111827',
            color: 'white'
          }
        }}
      >
        <Box role="presentation">
          <Divider className="bg-gray-700" />
          {renderContent()}
        </Box>
      </SwipeableDrawer>
    </div>
  );
}

export default DrawerAgent;