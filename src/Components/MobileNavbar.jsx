import { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import 'animate.css';
import { AnimatePresence, motion } from "framer-motion";
import logo from "../Assets/Omnisol.png";
import { Link } from "react-router-dom";

function NavbarMobile({ contactRef }) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [openNav, setOpenNav] = useState(true);
    const [openResources, setOpenResources] = useState(true);
    const [openFeatures, setOpenFeatures] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 30);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    const toggleResources = () => {
        setOpenResources(prevState => !prevState);
    };
    const toggleFeatures = () => {
        setOpenFeatures(prevState => !prevState);
    };

    const toggleNav = () => {
        setOpenNav(prevState => !prevState);
    };

    return (
        <div >
            <ul
                className="flex justify-between font-nexa text-md p-2 fixed top-0 left-0 w-full transition-all duration-300 z-50 bg-slate-500/90"            >
                {
                    openNav ?
                        <div className="flex justify-between w-full">
                            <img src={logo} className='h-8' alt="" />
                            <li className="relative cursor-pointer underline" onClick={toggleNav}>
                                <GiHamburgerMenu size={30} color="white" />
                            </li>
                        </div>
                        :
                        <motion.div
                            className="min-h-screen backdrop-blur-md w-full"
                            initial={{ y: -320, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{
                                type: 'spring',
                                stiffness: 100,
                                damping: 25,
                                duration: 0.5
                            }}
                        >
                            <div className="flex justify-between">
                                <ul className="text-2xl ml-3 w-full">

                                    <img src={logo} className='h-12' alt="" />


                                    <li
                                        onClick={toggleFeatures}
                                        className="my-3 cursor-pointer text-white"
                                    >
                                        Features &gt;
                                    </li>
                                    <AnimatePresence>
                                        {!openFeatures ? (
                                            <motion.div
                                                className="pl-16"
                                                initial={{ x: -320, opacity: 1 }}
                                                animate={{ x: 0, opacity: 1 }}
                                                exit={{ x: -320, opacity: 0 }}
                                                transition={{
                                                    type: 'spring',
                                                    stiffness: 100,
                                                    damping: 25,
                                                    duration: 0.1
                                                }}
                                            >
                                                <p className="text-xl block cursor-pointer text-white">
                                                    AI Receptionist
                                                </p>

                                                <p className="text-xl block cursor-pointer text-white">
                                                    Smart CRM
                                                </p>
                                                <p className="text-xl block cursor-pointer text-white">
                                                    Business Phone
                                                </p>
                                            </motion.div>
                                        ) : null}
                                    </AnimatePresence>


                                    <li
                                        onClick={toggleResources}
                                        className="my-3 cursor-pointer text-white"
                                    >
                                        Resources &gt;
                                    </li>
                                    <AnimatePresence>
                                        {!openResources ? (
                                            <motion.div
                                                className="pl-16"
                                                initial={{ x: -320, opacity: 1 }}
                                                animate={{ x: 0, opacity: 1 }}
                                                exit={{ x: -320, opacity: 0 }}
                                                transition={{
                                                    type: 'spring',
                                                    stiffness: 100,
                                                    damping: 25,
                                                    duration: 0.1
                                                }}
                                            >
                                                <p className="text-xl block text-white">
                                                    Industries
                                                </p>
                                                <p className="text-xl block text-white">
                                                    Blog
                                                </p>
                                                <p className="text-xl block text-white">
                                                    Affiliate Program
                                                </p>
                                                <p className="text-xl block text-white">
                                                    Pricing
                                                </p>
                                            </motion.div>
                                        ) : null}
                                    </AnimatePresence>



                                </ul>
                                <ImCross
                                    className="cursor-pointer m-4 text-white"
                                    onClick={toggleNav}
                                    size={25}
                                />
                            </div>

                            <div className="flex justify-center">
                                <button className='bg-white my-4 px-4 py-1 rounded-md  hover:bg-gray-100 transition-all ml-1'>
                                    <Link to="v1/agent/" >Try For Free</Link>
                                </button>
                            </div>
                        </motion.div>


                }
            </ul>
        </div>
    );
}

export default NavbarMobile;