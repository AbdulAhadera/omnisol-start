import ppIcon from '../Assets/PP.png';
import React, { useState, useRef, useEffect } from 'react';

function ElevenLabsVoices({ src }) {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);


    useEffect(() => {
        if (audioRef.current) {
            const handleLoadedMetadata = () => {
                setDuration(audioRef.current.duration);
            };

            audioRef.current.addEventListener('loadedmetadata', handleLoadedMetadata);

            // Cleanup the event listener when the component unmounts
            return () => {
                if (audioRef.current) {
                    audioRef.current.removeEventListener('loadedmetadata', handleLoadedMetadata);
                }
            };
        }
    }, []); // Empty dependency array to run this effect only once on mount

    const togglePlayPause = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    const handleTimeUpdate = () => {
        setCurrentTime(audioRef.current.currentTime);
    };

    const handleSeek = (e) => {
        const newTime = (e.nativeEvent.offsetX / e.target.clientWidth) * duration;
        audioRef.current.currentTime = newTime;
        setCurrentTime(newTime);
    };

    const calculateColor = () => {
        const progress = (currentTime / duration) * 100;
        if (progress < 50) {
            return 'bg-primary'; // For progress < 50%, use pink
        } else {
            return 'bg-elecBlue'; // For progress >= 50%, change to blue
        }
    };

    // Format time to always show 2 digits for minutes and seconds
    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };


    return (
        <div className="bg-box border-y border-gray-500 p-4 mt-10 rounded-lg w-[32%]">
            <div className="flex">
                <img className="h-12 rounded-full" src={ppIcon} alt="" />
                <div className="mx-2">
                    <p className="text-lg text-white font-semibold">Ubaid Ahad</p>
                    <p className="text-md text-lightGray">Female</p>
                </div>
            </div>

            {/* Accent Name */}
            <div className="my-2 text-lightGray">
                Indian Accent - English
            </div>

            {/* Audio Player */}
            <div className="w-full bg-black p-4 rounded-lg shadow-md">
                <audio
                    ref={audioRef}
                    src={src}
                    onTimeUpdate={handleTimeUpdate}
                    onEnded={() => setIsPlaying(false)}
                />
                <div className="flex items-center">
                    <button onClick={togglePlayPause} className="text-lightGray">
                        {isPlaying ? (
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="w-6 h-6">
                                <path d="M6 6h4v12H6zM14 6h4v12h-4z" fill="currentColor" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="w-6 h-6">
                                <path d="M8 5v14l11-7z" fill="currentColor" />
                            </svg>
                        )}
                    </button>

                    <div className="flex-1 mx-4 relative">
                        <div
                            className="w-full h-1 bg-gray-500 rounded-full cursor-pointer"
                            onClick={handleSeek}
                        >
                            <div
                                className={`h-full ${calculateColor()} rounded-full transition-all duration-300`}
                                style={{
                                    width: `${(currentTime / duration) * 100}%`,
                                }}
                            ></div>
                        </div>

                        <div className="absolute text-xs text-lightGray">
                            {formatTime(currentTime)} / {formatTime(duration)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ElevenLabsVoices;
