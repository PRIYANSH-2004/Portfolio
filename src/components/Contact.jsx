import React from "react";
import { CONTACT } from "../constats";
import {motion} from 'framer-motion'


const Contact = () => { 
    return (
        <div className="border-b border-neutral-900 pb-200">
            <motion.h2 
            whileInView={{y:0, opacity:1}}
            initial={{y:-100, opacity:0}}
            transition={{duration:0.5}}
            className="my-10 text-center text-4xl">
                Get in Touch
            </motion.h2>
            <div className="text-center tracking-tighter">
                <motion.p 
                whileInView={{opacity:1, x:0}}
                initial={{x:-100, opacity:0}}
                transition={{duration:0.5}}
                className="my-4">
                    {CONTACT.address}
                </motion.p>
                <motion.p
                whileInView={{opacity:1, x:0}}
                initial={{x:-100, opacity:0}}
                transition={{duration:0.5}}>

                < a href="tel:7355250737 "className="my-4 ">
                    {CONTACT.phoneNo}
                </a>
                </motion.p>
                <br></br>

                <motion.p
                whileInView={{opacity:1, x:0}}
                initial={{x:-100, opacity:0}}
                transition={{duration:0.5}} >

                <a href="mailto:priyanshsingh.pr@gmail.com" target="_blank" className="border-b">
                    {CONTACT.email}
                </a>
                </motion.p>

            </div>
        </div>
    )
}

export default Contact