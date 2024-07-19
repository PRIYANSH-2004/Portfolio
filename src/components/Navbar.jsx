import React from 'react'
import logo from '../assets/pr-logo.png'

import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { SiLeetcode } from "react-icons/si";
import {motion} from 'framer-motion'


const Navbar =() => {
    return (
        <nav className='mb-20 flex items-center justify-between py-6'>
            <div className='flex flex-shirnk-0 items-center'>
                <a href='#'>
                    <motion.img 
                    whileHover={{scale:2}}
                    className='mx-2 w-10'  src={logo} alt='logo'/>

                </a>
            </div>
            <div className='m-8  items-center justify-center flex gap-4 text-2xl'>
                <motion.p
                whileHover={{scale:1.5}}
                >
                    <a target='_blank' href='https://www.linkedin.com/in/priyansh-singh-8b70b7227/'>
                        <FaLinkedin/>
                    </a>
                </motion.p>
                <motion.p
                whileHover={{scale:1.5}}
                >
                    <a target='_blank' href='https://github.com/PRIYANSH-2004'>
                        <FaGithub/>
                    </a>
                </motion.p>
                <motion.p
                whileHover={{scale:1.5}}
                >
                    <a target='_blank' href='https://www.instagram.com/priyanshsingh.pr/'>
                        <FaInstagram/>
                    </a>
                </motion.p>
                <motion.p
                whileHover={{scale:1.5}}
                >
                    <a target='_blank' href='https://x.com/Priyans22980867'>
                        <FaSquareXTwitter />
                    </a>
                </motion.p>
                <motion.p
                whileHover={{scale:1.5}}
                >
                    <a target='_blank' href='https://leetcode.com/u/PRIYANSH_2004/'>
                    <SiLeetcode />
                    </a>
                </motion.p>
            </div>

        </nav>
    )
}

export default Navbar