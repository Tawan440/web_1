"use client"
import React, {useState} from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";

const HeroSection = () => {
    const [showRed, setShowRed] = useState(false)
    const [a, setA] = useState(0)
    const handleRedButton = () => {
        setShowRed(!showRed)
        setA(a+1)
    }

    return (
        <section className="h-screen flex justify-center bg-white items-center">
            {
                showRed == true ? 
                    (<button className="bg-red-600 justify-center items-center text-9xl" onClick={handleRedButton}>
                    red button <br></br>
                    {a}
                </button>):
                    (<button className="bg-red-600 justify-center items-center text-9xl" onClick={handleRedButton}>
                        red button <br></br>
                        {a}
                </button>)
            }
        </section>
    );
};

export default HeroSection;
