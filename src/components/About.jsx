import aboutImg from '../assets/about.jpg'
import { ABOUT_TEXT } from '../constats'
import {motion} from 'framer-motion'

const About = () =>{
    return (
        <section id="about" className='border-b border-neutral-900 pb-4'>
            <h2 className='my-20 text-center text-4xl'>
                About
                <span className="text-neutral-500"> Me</span>
            </h2>

            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2 lg:p-8">
                    <motion.div
                    initial={{x:-100, opacity:0}}
                    whileInView={{x:0 , opacity:1}}
                    viewport={{once:true}}
                    transition={{duration:0.5, delay:0.2}}
                     className="flex items-center justify-center">
                        <img
                         className='rounded-2xl' src={aboutImg} alt="Priyansh Singh working" loading="lazy" decoding="async" />
                    </motion.div>

                </div>

                <div className="w-full lg:w-1/2 ">
                    <motion.div
                    initial={{x:100, opacity:0}}
                    whileInView={{x:0 , opacity:1}}
                    viewport={{once:true}}
                    transition={{duration:0.5, delay:0.2}}
                     className="flex justify-center lg:justify-start">
                        <div className='my-2 max-w-xl space-y-4 py-6 leading-relaxed text-neutral-400'>
                            {ABOUT_TEXT.trim().split('\n\n').map((paragraph, index) => (
                                <p key={index}>{paragraph}</p>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default About
