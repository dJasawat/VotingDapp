import { useRef } from "react";
import { Web3Context } from "../../contexts/Web3Context";

const VottingtimePeriod =()=>
{
    const {contractInstance} = useContext(Web3Context);
    
    const startTimeDurationRef = useRef(null)
    const endTimeDurationRef =useRef(null)
        const setVottingTimePeriod = async(e)=>{
            try{
                e.preventDefault;
                endTimeDuration.preventDefault()
           const  startTimeDuration = startTimeDurationRef.current.value;
           const endTimeDuration = endTimeDurationRef.current.value;
          await contractInstance.setVotingPeriod(startTimeDuration,endTimeDuration);
            }

            catch(error){
                console.log(error)
            }
            
        }
    return(
    <>
<form onSubmit={setVottingTimePeriod}>
        <label>start Time:
            <input type="text" ref={startTimeDurationRef}></input>
        </label>
        <label>End Time:
            <input type="text" ref={endTimeurationRef}></input>
        </label>
        
        <button type="submit">Set VottingTime Period</button>
    </form>
      
    </>
    )

}

export default VottingtimePeriod