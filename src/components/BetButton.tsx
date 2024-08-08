import React from 'react'

const buttonDown = (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10">
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
  </svg>
  );

const buttonUp = (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
  </svg>
  
  );

  type Props = {
    direction: string;
    betDirection: string;
    setBetDirection: any;
  }

function BetButton({direction, betDirection, setBetDirection}:Props) {
  return (
    <div className='mx-auto py-12'>
      {direction == "up" ? 
      <button onClick={()=>setBetDirection("up")} className={"transition-all duration-400 p-10 rounded-full border "+(betDirection == "up" ? "bg-green-500":"bg-gray-400")}>{buttonUp}</button> : 
      <button onClick={()=>setBetDirection("down")} className={"transition-all duration-400 p-10 rounded-full border "+(betDirection == "down" ? "bg-red-500":"bg-gray-400")}>{buttonDown}</button>}
    </div>
  )
}

export default BetButton
