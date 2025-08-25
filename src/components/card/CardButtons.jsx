import { SignInButton } from '@clerk/clerk-react';
import { Heart, RotateCw } from 'lucide-react';

export const CardSubmitButtons = ({ isPending, isFavorite }) => {
  // console.log(isPending)
  return (
    <button className='bg-black bg-opacity-50 flex items-center justify-center rounded-full p-[5px]'>
      {
        isPending
          ? <RotateCw className='text-white animate-spin' />
          : isFavorite
            ? <Heart
              className='text-white hover:scale-110 hover:duration-300'
              fill='white'
            />
            : <Heart
              className='text-white hover:scale-110 hover:duration-300' />
      }


      {/* {
    isPending
    ? <RotateCw className='animate-spin'/>
    : <Heart 
    className='text-white hover:scale-110 hover:duration-300'/>
    } */}

    </button>
  );
};


export const CardSignInButtons = () => {
  return (
    <button className='bg-black bg-opacity-50 flex items-center justify-center rounded-full p-[5px]'>
      <SignInButton mode='modal'>
        <Heart
          className='text-white hover:scale-110 hover:duration-300' />
      </SignInButton>
    </button>
  )
};