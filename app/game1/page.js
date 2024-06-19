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
        <section className="grid h-screen justify-center bg-white items-center">
            <p className="text-9xl -mt-20">
                GAME : click red button
            </p>
            {
                showRed == true ? 
                    (<button className="bg-red-600 justify-center items-center text-9xl" onClick={handleRedButton}>
                    red button <br></br>
                    point : {a}
                </button>):
                    (<button className="bg-red-600 justify-center items-center text-9xl" onClick={handleRedButton}>
                        red button <br></br>
                        point : {a}
                </button>)
            }
        </section>
    );
};

export default HeroSection;
