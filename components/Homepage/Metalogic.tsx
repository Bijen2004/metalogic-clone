import React from 'react'

const Metalogic = () => {
  return (
    <div className='min-h-screen bg-[#10104d] relative'>
        <div className=' bg-[#253a78] absolute top-[150px] bottom-[150px] w-[96%] left-[2%] lg:w-[70%] lg:left-[15%] md:w-[93%] md:left-[3.5%] rounded-xl border border-translucent-light-300 text-white min-h-fit'>
            <div className='p-[32px]'>
                <div>
                    <h1 className='mb-8 text-2xl font-bold md:text-4xl'>
                        Why MetaLogic <span className='text-red-500'>?</span>
                    </h1>
                    <p className='w-[80%]'>
                    Innovation is our driving force. We explore the latest tech trends to deliver groundbreaking solutions that keep you ahead.
                    </p>
                </div>
                <div className='flex gap-4 pt-4 md:px-[10%] md:pr-[10%]'>
                    <div className='hidden md:block'>
                        fesf
                    </div>
                    <div className='flex flex-col gap-8'>
                        <div className='flex flex-col'>
                            <span className='text-xl font-semibold'>
                            Innovation at the Core
                            </span>
                            <span>
                            We thrive on innovation and continuously explore the latest technologies to provide you with groundbreaking solutions that keep you ahead of the curve.
                            </span>
                        </div>
                        <div className='flex flex-col'>
                            <span className='text-xl font-semibold'>
                            Collaboration is the key
                            </span>
                            <span>
                            We work closely with you to understand your goals, challenges, and aspirations, ensuring our solutions align perfectly with your business objectives.
                            </span>
                        </div>
                        <div className='flex flex-col'>
                            <span className='text-xl font-semibold'>
                            Your Success, Our Purpose
                            </span>
                            <span>
                            Our solutions are designed to enhance efficiency, boost productivity, and drive ROI, giving you a competitive edge in your industry.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Metalogic