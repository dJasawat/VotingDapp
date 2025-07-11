import { useContext } from "react"
import { Web3Context } from "../../contexts/Web3Context"

const EmergencyDeclare =()=>
{
const {contractInstance} = useContext(Web3Context)

const emergencyDeclare = async()=>{
try
{
    await contractInstance.emergencyStopVoting()
}
catch(error)
{
    console.log(error)
}
}

return(
    <>
    <button onClick={emergencyDeclare}> Stop Votting</button>
    </>
)
}

export default EmergencyDeclare