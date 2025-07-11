import { Web3Context } from "../../contexts/Web3Context"
import { useContext, useRef } from "react"
const CastVote=()=>{
const voterIdRef=useRef(null)
const candidateIdRef = useRef(null)
const {contractInstance} = useContext(Web3Context)

const handleCastVote= async(e)=>{
    e.preventDefault;
   const voterId= voterIdRef.current.value;
   const candidateID = candidateIdRef.current.value
  try
  {
   await contractInstance.CastVote(voterId,candidateID)

}

catch(error)
{
 console.log(error)
}
}

    return(
        <>
        <form onSubmit={handleCastVote}>
        <label>Voter ID:
            <input type="text" ref={voterIdRef}></input>
        </label>
        <label>Candidate ID:
            <input type="text" ref={candidateIdRef}></input>
        </label>
        
        <button type="submit">Cast Vote</button>
    </form>
      

        </>
    )

}

export default CastVote