import { useState } from "react"

const defaultContactFormData={
    username:"",
    email:"",
    message:"",
};

export const Contact=()=>{
    const[contact, setContact]= useState(defaultContactFormData);
        
    
const[ userData, setUserData]= useState(true);
const {user}=useAuth();

if(userData && user){
    setContact(
        {
            username:user.username,
            email:user.email,
            message:"",
        }
    )
    setUserData(false);
}


    const handleInput=(e)=>{
const name =e.target.name;
const value=e.target.value;
    
    setContact({
        ...contact,
        [name]:value,
    });
    
};
const handleSubmit=  async (e)=>{
    e.preventDefault();
    // console.log(contact);

try
{
const response= await fetch('http://localhost:5000/api/form/contact',{
    method:"POST",
    headers:{
        "Content-Type" :"application/json"
    },
    
        body:JSON.stringify(user),
    
});

if (response.ok)
    {
        localStorage.setItem("token", res_data.token);
        setContact(defaultContactFormData)
        console.log("successful");
    }

}
catch(error){
    console.log(error);

}
}
    return(


        <>
        <section className="section-contact">
            <div  className="contact-content container">
                <h1 className="main-heading">contact us</h1>

            </div>
            {/* contact page main  */}
            <div className="container grid grid-two-cols">
                <div className="contact-img">
                    <img src="/Images/register.jpg" height="200" width="300" alt="we are always ready to help you." />

                </div>
                <div className="section-form">

                    <form onSubmit={handleSubmit}>
                        <div className="contact-heading">
                            {/* <h2>contact us</h2> */}
                        </div>
                        <div>
                            <label htmlFor="username" >username</label>
                            <input type="text" name="username" id="username" autoComplete="off"  value={Contact.username} onChange={handleInput}required />
                        </div>
                        <div>
                            <label htmlFor="email" >email</label>
                            <input type="text" name="email" id="email" autoComplete="off" value={Contact.email} onChange={handleInput} required />
                        </div>
                        <div>
                        <label htmlFor="message" >Message</label>

                        <textarea rows="5" cols="25" name="message" id="messsage" autoComplete="off" value={Contact.message} onChange={handleInput}></textarea>                   
                       
                        </div>
              
                        <div className="btn">
                    <button type="submit"className="btn-btn-submit">Contact</button>
                </div>
                
                </form>
                </div></div>
                <section className="mb-3">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7527.327170756639!2d72.82105108958771!3d19.383714077540724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7aebf9c19e143%3A0xf323ec5cf2dc6f4f!2z4KS44KS-4KSIIOCkqOCkl-CksCwg4KS14KS44KSIIOCkteClh-CkuOCljeCknywg4KS14KS44KSILCDgpK7gpLngpL7gpLDgpL7gpLfgpY3gpJ_gpY3gpLAgNDAxMjAy!5e0!3m2!1shi!2sin!4v1730962757052!5m2!1shi!2sin" width="600" height="450"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </section>
                </section>
                

            
       
        </>
    )
}
































































// import { useState } from "react";
// import { useNavigate} from "react-router-dom";

// export const Contact=()=>{


//     const [user,setUser]=useState({
//         username:"",
//         email:"",
//         Message:"",
       
                    
//             });
//             const navigate=useNavigate();
//             const handleInput= (e) =>{
//                 console.log(e);
//         let name= e.target.name;
//         let value= e.target.value;
        
        
            
//             setUser({
//                 ...user,
//                 [name]:value,
               
//             });
           
//             };
//             // handling form submit 
//             const handleSubmit=async(e)=>{
//                 e.preventDefault();
//                 // alert(user);
//                 console.log(user);
// try{
//     const response= await fetch('http://localhost:5000/api/auth/contactus',
//         { method:"post",
//             headers:{
//                 "Content-type": "application/json",
//             },
// body:JSON.stringify(user),
//         }
//     );
//     if(response.ok)
//     {
//         alert("message sent succesfully");
//         setUser({email:"", password:"", Message:""});
//     navigate("/");
//     }
//        else{
//         alert("try again");
//        } 

// console.log(response);

// }
// catch(error)
// {
//     console.log('login', error)
// }

//             }
//     return (
//         <>
   
            
//             <section>
//         <main>
//             <div className="section-registration">
//                 <div className="container grid grid-two-cols">
//                     <div className="registration-image">
//                         <img src="Images/register.jpg" alt="a girl is trying to do the registration" width="200" height="150" />
//                     </div>
                    
//                     <div className="registration-form">
//                     <h1 className="main-heading-mb3">Registration Form</h1><br/>
                
//                     <form onSubmit={handleSubmit}>
//                         <div className="inputbox">
//                             <label htmlFor="username">username</label>
//                             <input type="text" className="inputbox1"
//                             name="username" 
//                         placeholder="username" 
//                         id= "username" required
//                          autoComplete="off" value={user.username} onChange={handleInput}
                        
//                             /> </div>
//                          <div className= "inputbox">
//                             <label htmlFor="email">email</label>
//                             <input type="email" className="inputbox1"
//                             name="email" 
//                         placeholder=" enter your email" 
//                         id= "email" required
//                          autoComplete="off" value={user.email} onChange={handleInput}
//                          />
                         
//                         </div>
//                         <div className= "inputbox">
//                             <label htmlFor="Message">Message us</label>
//                             <textarea rows="5" cols="50" className="inputbox1" 
//                             name="email" 
//                         placeholder=" enter your message" 
//                         id= "email" required
//                          autoComplete="off" value={user.Message} onChange={handleInput}
//                          />
                         
//                         </div>
// </form> </div></div> </div> </main></section>
// </>
//     );

// }
