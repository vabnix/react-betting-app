import React from 'react';

type Props = {
    runFunction: any;
}

function Button({runFunction}:Props) {
  return (
       <button onClick={runFunction} className='rounded-2xl transition-all duration-300 border border-black w-full px-4 py-12 bg-indigo-500 hover:bg-indigo-600 text-white text-5xl '>Place Bet</button>
  )
}

export default Button
