import React from "react";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import AuroraBackground from "../Components/AuroraBackground";
import { Cover } from "../Components/Cover";
import { BsStars } from "react-icons/bs";
import { IoCallOutline } from "react-icons/io5";
import { CiChat1 } from "react-icons/ci";
import { RiRobot2Line } from "react-icons/ri";

function HeroSection() {


    const navigate = useNavigate();

    const handleRedirect = () => {
        navigate('/v1/agent/liveAgent');
    };


    return (
        <AuroraBackground>
            <motion.div
                initial={{ opacity: 0.0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.3,
                    duration: 0.8,
                    ease: "easeInOut",
                }}
                className="relative flex flex-col items-center justify-center px-2 sm:px-4 md:px-40 lg:px-60">

                <div className="flex bg-primary/20 px-4 py-1 rounded-full cursor-pointer hover:bg-primary/30 transition-all">
                    <BsStars size={12} style={{ marginTop: "2px", marginRight: "5px", color: "white" }} />
                    <p className="text-[12px] text-white font-semibold cursor-pointer ">AI-Powered Communication</p>
                </div>

                <div className="text-3xl py-4 md:text-6xl font-bold text-white text-center">
                    Streamline the future with
                    <br />
                    <span className="bg-gradient-to-t from-[#007bff] to-[#00BFFF] bg-clip-text text-transparent">
                        Voice-Driven Intelligence
                    </span>
                </div>
                <div
                    className="font-extralight text-base items-center md:text-xl text-neutral-200 py-4 text-center">
                    Through our advanced AI technology, we empower businesses and hospitals with revolutionary voice agents designed to enhance customer service, streamline appointment bookings, and reduce operational costs.
                </div>
                <button
                    key={0}
                    onClick={handleRedirect}
                    className="bg-gradient-to-l from-[#007bff] to-[#00BFFF] rounded-full w-fit text-white dark:text-black px-4 py-2">
                    Try For Free
                </button>
                <p className="text-accent font-semibold text-[12px] mt-2">Setup in 60 seconds. Cancel Anytime</p>

                <div className="flex pt-12">

                    <div className="flex mx-4">
                        <IoCallOutline style={{ color: "#FDE047", marginTop: "5px" }} />
                        <p className="pl-2 text-color">Smart Answering</p>
                    </div>

                    <div className="flex mx-4">
                        <CiChat1 style={{ color: "#FDE047", marginTop: "5px" }} />
                        <p className="pl-2 text-color">Auto Responses</p>
                    </div>

                    <div className="flex  mx-4">
                        <RiRobot2Line style={{ color: "#FDE047", marginTop: "5px" }} />
                        <p className="pl-2 text-color">AI Asssitant</p>
                    </div>

                </div>

            </motion.div>
        </AuroraBackground>
    )
}

export default HeroSection