import BetButton from './BetButton'

type Props = {
  betDirection: string;
  setBetDirection: any;
  isLoading: boolean;
  valGenerated: number;
  hasWon: boolean;
}

function BetBox({betDirection, setBetDirection, isLoading, valGenerated, hasWon}: Props) {
  return (
    <div className='mt-5'>
      <div className='py-4 border bg-black text-white text-center pr-5'>
        {isLoading ? "Loading..." : "Number is : "+valGenerated}
      </div>
      <div className='flex flex-row justify-between py-2 border'>
        <BetButton direction="down" betDirection={betDirection} setBetDirection={setBetDirection}/>
        <BetButton direction="up" betDirection={betDirection} setBetDirection={setBetDirection}/>
      </div>
      <div className='py-2 border bg-emerald-600 text-center text-white text-3xl'>
        {hasWon ? "RESULT: You have won!": "RESULT: Try Again!"}
      </div>
    </div>
  )
}

export default BetBox
