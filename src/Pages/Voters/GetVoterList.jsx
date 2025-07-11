import { Web3Context } from "../../contexts/Web3Context"
import { useContext, useEffect, useState } from "react"
const GetVoterList=()=>
{
  const [Voters,setVoters]= useState()
    const {contractInstance} = useContext(Web3Context);
    useEffect(()=>{
        const fetchVotersList = async()=>{
            try{
            const voterList=contractInstance.getVoterList();
            console.log(voterList);
            setVoters(Voters)
            }
            catch(error){
                console.log(error)
            }
            contractInstance && fetchVotersList()
        }
    },[contractInstance])

return(
    <>
    <ul>
{Voters.map((Voter, index) => (
  <li key={index}>
    Name: {Voter.name}, 
    party: {Voter.party}, 
    Age: {Voter.age.toString()}
  </li>
))}
</ul>
    </>
)
}

export default GetVoterList;