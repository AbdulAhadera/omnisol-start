import React from 'react';
import { MdOutlineKeyboardVoice, MdSettings, MdKeyboardArrowRight, MdPersonOutline } from "react-icons/md";
import { BsStars } from "react-icons/bs";
import { MdOutlinePhone, MdOutlineEmail, MdLocationPin, MdBusiness } from "react-icons/md";
import { GoWorkflow } from "react-icons/go";
import { IoBookOutline } from "react-icons/io5";


function AgentCard({ onCardClick, selectedVoice }) {

    return (
        <div className="py-4">
            <div className="bg-primary/5 w-full my-4 p-2 px-4 rounded-lg shadow-sm border-[1px] border-primary hover:shadow-md transition-all">
                <div className="flex justify-between " onClick={() => onCardClick('voice')}>
                    <div className="flex">
                        <MdOutlineKeyboardVoice style={{ color: "#007bff", marginTop: "4px" }} size={20} />
                        <p className="text-lg px-2 font-semibold">Voice</p>
                    </div>
                    <MdKeyboardArrowRight style={{ color: "#b5d9ff" }} size={30} />
                </div>
                <div>
                    <p className="text-sm text-lightGray px-7 py-2" onClick={() => onCardClick('voice')}>{selectedVoice}</p>
                </div>
            </div>

            <div className="w-full my-4 p-2 px-4 rounded-lg shadow-sm border-[1px] bg-primary/5 border-primary hover:shadow-md transition-all">
                <div className="flex justify-between" onClick={() => onCardClick('greeting')}>
                    <div className="flex">
                        <BsStars style={{ color: "#007bff", marginTop: "4px" }} size={20} />
                        <p className="text-lg px-2 font-semibold">Greeting</p>
                    </div>
                    <MdKeyboardArrowRight style={{ color: "#b5d9ff" }} size={30} />
                </div>
                <div>
                    <p className="text-sm text-lightGray px-7 py-2" onClick={() => onCardClick('greeting')}>Hello, you've reached xyz! How can I help you today?</p>
                </div>
            </div>


            <div className='w-full my-4 p-2 px-4 rounded-lg shadow-sm border-[1px] bg-primary/5 border-primary hover:shadow-md transition-all' onClick={() => onCardClick('callerDetails')}>
                <div className='flex justify-between'>
                    <div className='flex'>
                        <MdPersonOutline style={{ color: "#007bff", marginTop: "4px" }} size={20} />
                        <p className='text-lg px-2 font-semibold'>Caller Details</p>
                    </div>
                    <MdKeyboardArrowRight style={{ color: "#b5d9ff", }} size={30} />
                </div>
                <div>
                    <div className='flex px-7'>
                        <MdPersonOutline style={{ color: "#777", marginTop: "4px" }} size={15} />
                        <p className='text-sm text-lightGray px-2'>Name</p>
                    </div>
                    <div className='flex px-7'>
                        <MdOutlinePhone style={{ color: "#777", marginTop: "4px" }} size={15} />
                        <p className='text-sm text-lightGray px-2'>Phone</p>
                    </div>
                    <div className='flex px-7'>
                        <MdOutlineEmail style={{ color: "#777", marginTop: "4px" }} size={15} />
                        <p className='text-sm text-lightGray px-2'>Email</p>
                    </div>
                    <div className='flex px-7'>
                        <MdLocationPin style={{ color: "#777", marginTop: "4px" }} size={15} />
                        <p className='text-sm text-lightGray px-2'>Adress</p></div>
                    <div className='flex px-7'>
                        <MdBusiness style={{ color: "#777", marginTop: "4px" }} size={15} />
                        <p className='text-sm text-lightGray px-2'>Business Name</p>
                    </div>
                </div>
            </div>

            <div className='w-full my-4 p-4   rounded-lg shadow-sm border-[1px] bg-primary/5 border-primary hover:shadow-md transition-all'>
                <div className='flex justify-between'>
                    <div className='flex'>
                        <MdSettings style={{ color: "#007bff", marginTop: "4px" }} size={20} />
                        <p className='text-lg px-2 font-semibold'>Ai Behaviour</p>
                    </div>

                    <MdKeyboardArrowRight style={{ color: "#b5d9ff", }} size={30} />
                </div>

                <hr className='my-2 h-px bg-primary border-0' />

                <div className='flex px-7 py-[3px]'>
                    <GoWorkflow style={{ color: "#777", marginTop: "4px" }} size={17} />
                    <p className='text-sm text-lightGray px-2'>Conversation flow</p>
                </div>

                <div className='flex px-7 py-[3px]'>
                    <IoBookOutline style={{ color: "#777", marginTop: "4px" }} size={17} />
                    <p className='text-sm text-lightGray px-2'>Knowledge Base</p>
                </div>

                <button className='bg-primary/10 w-full py-2 mt-4 rounded-full text-primary font-semibold hover:bg-primary/20'>
                    Save progress to edit
                </button>
            </div>


        </div>

    );
}

export default AgentCard;