import React, { useState } from "react";
import DrawerAgent from "../Components/Drawer";
import AgentCard from "../Components/AgentCard";
import { MdPersonOutline } from "react-icons/md";

function AgentPage() {
  const [drawerOpen, setDrawerOpen] = useState(false); // Drawer open state
  const [selectedSection, setSelectedSection] = useState(null); // State to track the selected section
  const [selectedVoice, setSelectedVoice] = useState("Michelle"); // Track the selected voice (default is Michelle)
  const [lastSavedVoice, setLastSavedVoice] = useState("Michelle"); // Track the last saved voice

  // Handle when a section card is clicked
  const handleCardClick = (section) => {
    setSelectedSection(section); // Set the selected section
    setDrawerOpen(true); // Open the drawer
  };

  // Handle the selected voice dynamically
  const handleVoiceSelect = (voice) => {
    setSelectedVoice(voice); // Update selected voice dynamically
    console.log("Selected Voice:", voice); // Log the selected voice to the console
  };

  // Handle save functionality
  const handleSave = () => {
    setLastSavedVoice(selectedVoice); // Save the selected voice
    setDrawerOpen(false); // Close the drawer after saving
  };

  // Handle cancel functionality
  const handleCancel = () => {
    setSelectedVoice(lastSavedVoice); // Revert to last saved voice
    setDrawerOpen(false); // Close the drawer without saving
  };

  return (
    <>
      <div className="bg-body">
        {/* Pass open, setOpen, selectedSection, and handleVoiceSelect to DrawerAgent */}
        <DrawerAgent
          open={drawerOpen}
          setOpen={setDrawerOpen}
          selectedSection={selectedSection}
          setSelectedSection={setSelectedSection}
          handleVoiceSelect={handleVoiceSelect} // Pass the voice selection handler
          selectedVoice={selectedVoice} // Pass the selected voice
          setSelectedVoice={setSelectedVoice} // Pass setSelectedVoice function to DrawerAgent
          handleSave={handleSave} // Pass save function
          handleCancel={handleCancel} // Pass cancel function
        />

        <div className="text-white px-2 mt-10 sm:px-4 md:px-40 lg:px-60">
          <h1 className="text-center text-xl font-semibold ">Preview a call with your AI</h1>
          
          {/* Pass the selected voice dynamically */}
          <AgentCard onCardClick={handleCardClick} selectedVoice={selectedVoice} />
        </div>
      </div>

      <div className="flex py-10 justify-center">
        <div className="flex justify-center  rounded-full px-16 py-2 bg-primary text-white cursor-pointer">
          <MdPersonOutline style={{ color: "#FFFFFF", marginTop: "4px" }} size={18} />
          Preview
        </div>
      </div>
    </>
  );
}

export default AgentPage;
