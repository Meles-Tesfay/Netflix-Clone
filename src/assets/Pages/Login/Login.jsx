import React, {useState} from 'react'
import './Login.css'
import logo from '../../imges/logo.png'
import { login,signup } from '../../firebase'
import netflix_spinner from '../../imges/netflix_spinner.gif'

const Login = () => {
  const [signState, setSignState] = useState("Sign In");
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [loading, setLoading] = useState(false)

  const user_auth = async(event)=>{
    event.preventDefault();
     setLoading(true)
    if(signState==="Sign In"){
      await login(email, password);
    }else{
      await signup(name, email, password);
    }
    setLoading(false)
  }
  
  return (
    loading?<div className="login-sppiner">
      <img src={netflix_spinner} alt="" />
    </div>:
   <div className="login">
    <img src={logo} alt="img" className='login_logo' />
   <div className="login_form">
    <h1>{signState}</h1>
    <form>
      {signState === "Sign Up"?
      <input value={name} onChange={(e)=>{setName( e.target.value)}} type="text" placeholder='your name'/>:<></>}
       <input type="email" placeholder='Email'value={email} onChange={(e)=>{setEmail( e.target.value)}}/>
        <input value={password} onChange={(e)=>{setPassword( e.target.value)}} type="password" placeholder='password'/>
  <button onClick={ user_auth} type='submit'>{signState}</button>
  <div className="form_help">
    <div className="remember">
      <input type="checkbox" /> 
      <label htmlFor="">Remember Me</label>
    </div>
    <p>Need Help?</p>
  </div>
    </form>
    <div className="form-switch">
      {signState === "Sign Up"? <p>New to Netflix?<span onClick={()=>{setSignState("Sign In")}}>SIgn Up Now</span></p>
      : <p>Already have account?<span onClick={()=>{setSignState("Sign Up")}}>SIgn In Now</span></p>
    }
      
    </div>
   </div>
   </div>
  )
}

export default Login
