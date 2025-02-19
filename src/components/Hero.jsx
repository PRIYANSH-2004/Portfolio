import React from "react";
import { HERO_CONTENT } from "../constats";
import profilePic from '../assets/priyansh2.jpg'
import {motion} from 'framer-motion'

const contianer = (delay) =>({
    hidden : {x:-100, opacity:0},
    visible:{
        x:0,
        opacity:1,
        transition: {duration: 0.5, delay: delay}
    }
})

const Hero = () => {
    return (
        <div className=" border-b border-neutral-900 lg:mb-36">
            <div className=" flex flex-wrap">
                <div className=" w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        <motion.h1
                        variants={contianer(0)}
                        initial = "hidden"
                        animate= "visible"
                         className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">
                            Priyansh Singh
                        </motion.h1>
                        {/* craeted transparent te and cliped only text for background and used gradeint for color */}
                        <motion.span
                        variants={contianer(0.5)}
                        initial = "hidden"
                        animate= "visible"
                         className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">Software Engineer</motion.span>
                        {/* tracking is for space between text */}
                        <motion.p
                        variants={contianer(1)}
                        initial = "hidden"
                        animate= "visible"
                         className='my-2 max-w-xl py-6 font-light tracking-tighter'>
                            {HERO_CONTENT}
                        </motion.p>
                        <a href='https://drive.google.com/file/d/1O4EgRx0bYgDhD8HXdB9GG5FPAZepyrt-/view?usp=sharing' target="_blank">
                            <button type="button" class="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Resume</button>

                        </a>
                </div>


                </div>  
                <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex justify-center ">
                        <motion.img
                        initial={{x:100, opacity:0}}
                        animate = {{x:0, opacity:1}}
                        transition= {{duration:0.5, delay:1}}
                         src={profilePic} alt="Priyansh Singh" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
