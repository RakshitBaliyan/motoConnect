import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    channelId: ""
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const endpoint = "http://localhost:8080/auth/signup";

      const response = await fetch(endpoint,{
        method: "POST",
        headers:{
          'Content-type': 'application/json'
        },
        body: JSON.stringify(formData)
      })
      const result = await response.json();
      const { success, message, error} = result;
      if(success){
        alert('Signup successfully, Click OK to redirect to Login page...');
        setTimeout(()=>{
          navigate('/login')
        },1000)
        }
      else if(error){
        const details = error?.details[0].message;
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
        <h2 className="text-2xl font-bold mb-4">Sign Up</h2>

        <form onSubmit={handleSignup}>

        <div>
        <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border rounded mb-2"
            required
          />
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
          <input
            type="text"
            name="channelId"
            placeholder="Youtube Channel ID"
            value={formData.channelId}
            onChange={handleChange}
            className="w-full p-2 border rounded mb-2"
            required
          />

          <button
            type="submit"
            className="w-full bg-green-500 text-white p-2 rounded mt-2"
          >
            Sign Up
          </button>
          </div>
        </form>
      </div>
    </div>
  )
}
export default Signup;
