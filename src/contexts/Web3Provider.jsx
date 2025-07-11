import { useEffect, useState } from "react";
import { Web3Context } from "./Web3Context";
import { getWeb3State } from "../utils/getWeb3State";
import { HandleAccountChange } from "../utils/handleAccountChange";
import { HandleChainChange } from "../utils/handleChainChange";

const Web3Provider = ({children})=>{
  const [web3State,setWeb3State]=useState({
    contractInstance:null,
    selectedAccount:null,
    chainId:null
  })
  const handleWallet = async()=>{
    try
    {
    const {contractInstance,selectedAccount,chainId} = await getWeb3State();
   
    setWeb3State({contractInstance,selectedAccount,chainId})
    }
    catch(error)
    {
      console.log(error)
    }
  }
    useEffect(()=>{
        window.ethereum.on("accountsChanged",()=>HandleAccountChange(setWeb3State));
        window.ethereum.on("chainChanged",()=>HandleChainChange(setWeb3State));
        
    },[])
  
  return (
    <> 
      <Web3Context.Provider value={(web3State,handleWallet)}>
        {children}
      </Web3Context.Provider>
      
    </>
  )
}
export default Web3Provider;
