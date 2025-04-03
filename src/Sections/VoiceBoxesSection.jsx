import React from 'react'
import ElevenLabsVoices from '../Components/ElevenLabsVoices.jsx';
import sampleVoice from '../Assets/sampleVoice.mp3';

function VoiceBoxesSection() {
    return (
        <div className='hidden md:visible px-2 sm:px-4 md:px-40 lg:px-60 py-20 bg-body'>
            <h1
                className='text-2xl font-bold text-center mt-1 md:text-4xl lg:text-7xl bg-gradient-to-t from-primary to-elecBlue bg-clip-text text-transparent'
            >
                Test Out Our Most Used Voices
            </h1>

            <p className='text-lightGray text-xl my-4 text-center'>
                Along with multiple languages, we offer different gender voices with different accents!
            </p>

            <div className='flex justify-evenly'>
                <ElevenLabsVoices src={sampleVoice} />
                <ElevenLabsVoices src={sampleVoice} />
                <ElevenLabsVoices src={sampleVoice} />
            </div>

        </div>
    )
}


export default VoiceBoxesSection