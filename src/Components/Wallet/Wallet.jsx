import { useEffect } from "react"
import { UseWeb3Context } from "../../contexts/useWeb3Context"
import Web3Provider from "../../contexts/Web3Provider"
import { useNavigate } from "react-router-dom"

const Wallet=()=>
{
console.log(" in the Wallet")
const {web3State,handleWallet}= UseWeb3Context()
const navigateTo=useNavigate()
const {selectedAccount} = web3State;

useEffect(()=>{
if(selectedAccount)
{
 navigateTo("/register-voter")
}
},[selectedAccount])

 return(
 <>
<button onClick={handleWallet}>Connect Wallet</button>
 </>)   
}

export default Wallet