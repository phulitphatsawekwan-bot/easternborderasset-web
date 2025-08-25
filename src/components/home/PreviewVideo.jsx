import React from 'react'
import videoBg from '../asset/bkkvieweasternborderasset.mp4'

const PreviewVideo = () => {
    return (
        <div className='items-center justify-center'>
            <div>
            <video src={videoBg} autoPlay loop muted playsInline
                className='scale-[320%] md:scale-auto object-cover lg:scale-[150%] w-full h-full opacity-70' />
            </div>
        </div>
    )
}
export default PreviewVideo