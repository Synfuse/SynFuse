import React from 'react'
import { BackgroundBeamsWithCollision } from "../ui/background-beams-with-collision";
import { Typography } from '@material-tailwind/react';
import { Cover } from "../ui/cover";

const SynFuseHome = () => {
  return (
    <>
      <div>
        <BackgroundBeamsWithCollision>
          <h2
            className="text-2xl relative z-20 md:text-4xl lg:text-7xl font-bold text-center text-black dark:text-white font-sans tracking-tight">
            What&apos;s cooler than Energy?{" "}
            <div
              className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
              <div
                className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
                <span className="">SynFuse.</span>
              </div>
              <div
                className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
                <span className="">SynFuse.</span>
              </div>
            </div>
          </h2>
        </BackgroundBeamsWithCollision>
      </div>
      <div>
        <h1
          className="text-2xl md:text-4xl lg:text-5xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-black bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
          We Fuse Ideas into Reality.<br /> at <Cover>SynFuse</Cover>
        </h1>
        <Typography 
          variant='lead'
          className='text-center mb-10 pl-20 pr-20'
        >
          At **Synfuse** (Synergy + Fusion), we are dedicated to transforming visionary ideas into meaningful realities through the perfect blend of creativity, innovation, and technology. Our mission is to foster collaboration, harnessing diverse expertise to develop solutions that inspire, empower, and create a lasting impact. By seamlessly integrating modern technology with forward-thinking concepts, we aim to push the boundaries of what's possible. At Synfuse, every idea is nurtured, every challenge is embraced, and every opportunity is seen as a chance to build a brighter, more innovative future together.
        </Typography>
      </div>
    </>
  )
}

export default SynFuseHome
