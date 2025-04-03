import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../Components/InfiniteMovingCards.jsx";
import { RiCheckboxBlankFill } from "react-icons/ri";

function GetStarted() {
    return (
        <div className="">
            <div className="h-[15rem] rounded-md flex flex-col antialiased bg-body  items-center justify-center relative overflow-hidden">
                <InfiniteMovingCards
                    items={testimonial1}
                    direction="right"
                    speed="fast"
                />
                <InfiniteMovingCards
                    items={testimonial2}
                    direction="left"
                    speed="fast"
                />
                <InfiniteMovingCards
                    items={testimonial3}
                    direction="right"
                    speed="fast"
                />
            </div>

        </div>
    )
}

export default GetStarted;

const testimonial1 = [
    {
        key: 0,
        title: "Decrease costs per lead",
        icon: <RiCheckboxBlankFill size={10} color="white" />,
    },
    {
        key: 1,
        title: "Boost revenue growth",
        icon: <RiCheckboxBlankFill size={10} color="white" />,
    },
    {
        key: 2,
        title: "Save costs",
        icon: <RiCheckboxBlankFill size={10} color="white" />,
    },
    {
        key: 3,
        title: "Reach relevant prospects",
        icon: <RiCheckboxBlankFill size={10} color="white" />,
    },
    {
        key: 4,
        title: "Increase pipeline",
        icon: <RiCheckboxBlankFill size={10} color="white" />,
    },
    {
        key: 5,
        title: "Stay ahead of competition",
        icon: <RiCheckboxBlankFill size={10} color="white" />,
    },
    {
        key: 6,
        title: "Refine ICP",
        icon: <RiCheckboxBlankFill size={10} color="white" />,
    },
];
const testimonial2 = [
    {
        key: 0,
        title: "Decrease costs per lead",
        icon: <RiCheckboxBlankFill size={10} color="white" />,
    },
    {
        key: 1,
        title: "Boost revenue growth",
        icon: <RiCheckboxBlankFill size={10} color="white" />,
    },
    {
        key: 2,
        title: "Reach relevant prospects",
        icon: <RiCheckboxBlankFill size={10} color="white" />,
    },
    {
        key: 3,
        title: "Pride and Prejudice",
        icon: <RiCheckboxBlankFill size={10} color="white" />,
    },
    {
        key: 4,
        title: "Boost Conversation Rates",
        icon: <RiCheckboxBlankFill size={10} color="white" />,
    },
    {
        key: 5,
        title: "Increase pipeline",
        icon: <RiCheckboxBlankFill size={10} color="white" />,
    },
    {
        key: 6,
        title: "Stay ahead of competition",
        icon: <RiCheckboxBlankFill size={10} color="white" />,
    },
    {
        key: 7,
        title: "Lead qualification on autopilot",
        icon: <RiCheckboxBlankFill size={10} color="white" />,
    }
];
const testimonial3 = [
    {
        key: 0,
        title: "Operational efficiency",
        icon: <RiCheckboxBlankFill size={10} color="white" />,
    },
    {
        key: 1,
        title: "Boost revenue growth",
        icon: <RiCheckboxBlankFill size={10} color="white" />,
    },
    {
        key: 2,
        title: "Refine ICP",
        icon: <RiCheckboxBlankFill size={10} color="white" />,
    },
    {
        key: 3,
        title: "Save Costs",
        icon: <RiCheckboxBlankFill size={10} color="white" />,
    },
];

