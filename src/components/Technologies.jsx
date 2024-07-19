import React from "react";

import {RiReactjsLine} from 'react-icons/ri'
import {TbBrandNextjs} from 'react-icons/tb'
import { FaNodeJs } from "react-icons/fa";
import { DiMysql } from "react-icons/di";
import { BiLogoMongodb } from "react-icons/bi";
import { SiFlask } from "react-icons/si";
import {motion} from 'framer-motion'

const iconVariants = (duration) =>({
    initial:{y:10},
    animate:{
        y:[10,-10],
        transition: {
            duration: duration ,
            ease:"linear",
            repeat:Infinity,
            repeatType:"reverse"
        }
    }
})

const Technologies = () => {
    return(
        <div className="border-b border-neutral-800 pb-24">
            <motion.h1 
            whileInView={{y:0, opacity:1}}
            initial={{y:-100, opacity:0}}
            transition={{duration:1.5}}
            className="my-20 text-center text-4xl">
                <span className=" bg-gradient-to-r from-red-300 via-gray-400 to-pink-500 bg-clip-text text-transparent">
                Technologies
                </span>
            </motion.h1>

            <motion.div 
            whileInView={{x:0, opacity:1}}
            initial={{x:-100, opacity:1}}
            transition={{duration:0.5}}
            className="flex flex-wrap items-center justify-center gap-4">
                <motion.div 
                variants={iconVariants(2.5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4 ">
                    <RiReactjsLine className="text-5xl text-cyan-400" />
                </motion.div>
                <motion.div 
                variants={iconVariants(2.8)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4 ">
                    <TbBrandNextjs className="text-5xl text-blue-400" />
                </motion.div>
                <motion.div 
                variants={iconVariants(2.5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4 ">
                    <FaNodeJs className="text-5xl text-green-400" />
                </motion.div>
                <motion.div 
                variants={iconVariants(3)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4 ">
                    <DiMysql className="text-5xl text-orange-400" />
                </motion.div>
                <motion.div
                variants={iconVariants(3.5)}
                initial="initial"
                animate="animate" 
                className="rounded-2xl border-4 border-neutral-800 p-4 ">
                    <BiLogoMongodb className="text-5xl text-green-500" />
                </motion.div>
                <motion.div
                variants={iconVariants(4)}
                initial="initial"
                animate="animate"
                 className="rounded-2xl border-4 border-neutral-800 p-4 ">
                    <SiFlask className="text-5xl " />
                </motion.div>
            </motion.div>


        </div>

        
    )
}

export default Technologies