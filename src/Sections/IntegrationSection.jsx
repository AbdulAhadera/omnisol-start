import React from 'react';
import { HoverEffect } from '../Components/CardHoverEffect';

function IntegrationSection() {
    return (
        <div className='px-2 h-auto sm:px-4 md:px-40 lg:px-60 py-20 bg-body'>
            <h1 className='text-2xl font-bold text-center mt-1 md:text-4xl lg:text-7xl bg-gradient-to-t from-primary to-elecBlue bg-clip-text text-transparent'>
                Integrated with your CRM <br />
                <span className='text-white'>
                    and 100's of Popular Apps
                </span>
            </h1>

            <HoverEffect items={projects} />

        </div>
    )
}

export default IntegrationSection;

export const projects = [
    {
        title: "Stripe",
        description:
            "A technology company that builds economic infrastructure for the internet.",
        link: "https://stripe.com",
    },
    {
        title: "Netflix",
        description:
            "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
        link: "https://netflix.com",
    },
    {
        title: "Google",
        description:
            "A multinational technology company that specializes in Internet-related services and products.",
        link: "https://google.com",
    },
    {
        title: "Meta",
        description:
            "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
        link: "https://meta.com",
    },
    {
        title: "Amazon",
        description:
            "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
        link: "https://amazon.com",
    },
    {
        title: "Microsoft",
        description:
            "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
        link: "https://microsoft.com",
    },
];