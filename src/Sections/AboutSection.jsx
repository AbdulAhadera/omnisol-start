import React from 'react'
import Card from "../Components/Card.jsx";
function AboutSection() {
    return (
        <div className='px-2 sm:px-4 md:px-40 lg:px-60 py-20 bg-body'>

            <h1 className='text-center text-2xl font-bold md:text-5xl text-white'>Everything You Need for <br />
                <span className='bg-gradient-to-t from-elecBlue to-primary bg-clip-text text-transparent'>Modern Business</span>
            </h1>
            <p className='font-thin text-center py-10 text-white'>One platform for all your communication needs. Powered by AI, designed for simplicity.</p>


            {/* ACCERTINITY UI COMPONENTS */}

            <div className='flex'>
                <Card  />
            </div>

        </div>
    )
}

export default AboutSection;
