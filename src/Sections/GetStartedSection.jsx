import React from 'react'
import GetStarted from '../Components/GetStarted.jsx'
import GetStartedBox from '../Components/GetStartedBox.jsx'

function GetStartedSection() {
    return (
        <div className='px-2 sm:px-4 md:px-40 lg:px-60 py-20 bg-body' >
            <h6 className="text-accent text-center">24/7 Digital Workforce</h6>
            <h1
                className="text-2xl font-bold text-center mt-1 md:text-4xl lg:text-7xl bg-gradient-to-t from-primary to-elecBlue bg-clip-text text-transparent"
            >Streamline Workflow, Maximize Efficiency</h1>

            <GetStarted />
            <GetStartedBox />
        </div >


    )
}

export default GetStartedSection