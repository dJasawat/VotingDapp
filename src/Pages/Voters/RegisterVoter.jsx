import { useRef,useState } from "react";
import { UseWeb3Context } from '../../contexts/useWeb3Context'
//import {UploadVoterImage} from '../../utils/uploadVoterImage'

const RegisterVoter = ()=>{
   const {web3State}= UseWeb3Context()
   const {contractInstance} =web3State;
  const nameRef = useRef(null);
  const genderRef = useRef(null);
  const ageRef = useRef(null);
  const [file,setFile]=useState("")

  const handleVoterRegistration=async(e)=>{
      try{
        e.preventDefault();
        
       // await UploadVoterImage(file)

        const name = nameRef.current.value;
        const age = ageRef.current.value;
        const gender = genderRef.current.value;
        console.log(name,age,gender,party)
         await contractInstance.registerVoter(name,age,gender)
         console.log("Registration is successful") 
      }
      catch(error){ 
        console.error(error)
      }
    }
  return(<>
    <form onSubmit={handleVoterRegistration}>
        <label>Name:
            <input type="text" ref={nameRef}></input>
        </label>
        <label>Age:
            <input type="text" ref={ageRef}></input>
        </label>
        <label>Gender:
            <input type="text" ref={genderRef}></input>
        </label>
            <button type="submit">Register</button>
    </form>
    <input type="file" onChange={(e)=>setFile(e.target.files[0])}></input>
  </>)
}
export default RegisterVoter;