import React from 'react'
import { BackgroundBeamsWithCollision } from "../ui/background-beams-with-collision";
import { Typography } from '@material-tailwind/react';
import WorldMapComponent  from '../worldmap.component/index';
import TimeLineComponent from '../TimeLineComponent/index';


const SynFuseHome = () => {
  return (
    <>
      <div>

        <WorldMapComponent />
      </div>
      <div className='p-0 md:p-0 lg:p-20' id='whysynfuse'>
        <div className='p-0 md:p-0 lg:p-20'>
          <Typography 
            variant='lead'
            className='text-center pr-10 pl-10'
          >
            At <b>Synfuse</b> (Synergy + Fusion), we are dedicated to transforming visionary ideas into meaningful realities through the perfect blend of creativity, innovation, and technology. Our mission is to foster collaboration, harnessing diverse expertise to develop solutions that inspire, empower, and create a lasting impact. By seamlessly integrating modern technology with forward-thinking concepts, we aim to push the boundaries of what's possible. At Synfuse, every idea is nurtured, every challenge is embraced, and every opportunity is seen as a chance to build a brighter, more innovative future together.
          </Typography>
        </div>
      </div>
      <div className='overflow-hidden'>
        <TimeLineComponent />
      </div>
    </>
  )
}

export default SynFuseHome
