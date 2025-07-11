import { useEffect, useRef, useState } from "react";
import {UseWeb3Context} from '../../contexts/useWeb3Context'
import { uploadCanidateImage } from "../../utils/uploadCandidateImage";
import { useNavigate } from "react-router-dom";
import "./RegisterCandidate.css"

const RegisterCandidate = ()=>{
  
  const token=localStorage.getItem("token")
  const navigateTo=useNavigate()

  useEffect(()=>
  {
    if(!token)
    {
      navigateTo("/")
    }
  },[navigateTo,token])

  const [file,setFile]=useState("")
  const {web3State} = UseWeb3Context()
  const {contractInstance} =web3State;
  const nameRef = useRef(null);
  const genderRef = useRef(null);
  const partyRef = useRef(null);
  const ageRef = useRef(null);
  

  const handleCandidateRegistration=async(e)=>{
      try{
        e.preventDefault();
        const name = nameRef.current.value;
        const age = ageRef.current.value;
        const gender = genderRef.current.value;
        const party = partyRef.current.value;

        if(!contractInstance)
        {
          throw new error("Contract Instance not found!")
        }

        const imageUploadStatus = await uploadCanidateImage(file)
        if(imageUploadStatus===true)
        {
          await contractInstance.registerCandidate(name,party,age,gender)
          nameRef.current.value = "";
          ageRef.current.value = "";
          genderRef.current.value = "";
          partyRef.current.value = "";
          alert("Registration Successful")
          setFile(null);
        }

        else
        {
          throw new Error("Candidate Registration Failed!");
        }
        
      }catch(error){
        console.error(error)
        alert("Registration Failed")
      }
  }
  return(<>
    <form onSubmit={handleCandidateRegistration}>
        <label>Name:
            <input type="text" ref={nameRef}></input>
        </label>
        <label>Age:
            <input type="text" ref={ageRef}></input>
        </label>
        <label>Gender:
            <input type="text" ref={genderRef}></input>
        </label>
        <label>Party:
            <input type="text" ref={partyRef}></input>
        </label>
        <button type="submit">Register</button>
    </form>
    <input type="file" onChange= {(e)=> setFile(e.target.files[0])}

    ></input>
    
  </>)
}
export default RegisterCandidate;