import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const endpoint = "https://motoconnect.onrender.com/auth/login";

      const response = await fetch(endpoint,{
        method: "POST",
        headers:{
          'Content-type': 'application/json'
        },
        body: JSON.stringify(formData)
      })
      const result = await response.json();
      const { success, message, jwtToken, name, err} = result;
      if(success){
        alert('Login successfully, Click OK to redirect to Login page...');
        localStorage.setItem('token', jwtToken);
        localStorage.setItem('loggedInUser', name);
        setTimeout(()=>{
          navigate('/')
        },1000)
        }
      else if(err){
        const details = err?.details[0].message;
        alert(details);
      }
    }
    catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-lg w-96">
        <h2 className="text-3xl font-bold mb-4 text-blue-700">Login</h2>

        <form onSubmit={handleLogin}>

        <div>
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded mb-2"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-2 border rounded mb-2"
            required
          />

          <button
            type="submit"
            className="w-full bg-blue-700 text-white p-2 rounded mt-2"
          >
            Log In
          </button>
          </div>
        </form>
      </div>
    </div>
  )
}
export default Login;
