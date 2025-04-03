import React from 'react'

function GetStartedBox() {
    return (
        <div className='border-2 border-white block md:flex bg-elecBlue my-20 h-auto w-full rounded-2xl px-10 py-10'>
            <p className='text-3xl text-white font-semibold'>
                Get started with OmniSol and start automating your revenue engine
            </p>
            <div className='py-4 md:py-0'>
                <button className='bg-box  w-full px-4 py-2 font-semibold text-white text-xl rounded-xl my-1 hover:bg-box/90'>Talk to Sales</button>
                <button className='bg-white w-full px-4 py-2 font-semibold text-elecBlue text-xl rounded-xl my-1'>Take a Tour</button>
            </div>
        </div>
    )
}

export default GetStartedBox