import axios from "axios";

const UploadVoterImage = async(file)=>{

    try{
        const formData=new FormData()
        formData.append("file",file)
    
        const token=localStorage.getItem("token")
    
        const config= {
            headers: {
                'x-access-token' : token,
                 'Content-Type': 'multipart/form-data'
                }
            };
     const res = await axios.post("http://localhost:3000/api/postVoterImage",formData,config)
     
     if(res.data.me)
        if (res.data.message === "successful") { 
            return true;
          }
          return false;
    }
    catch(error)
    {
        console.log(error)
    }
return (<>
</>)
}
export default UploadVoterImage