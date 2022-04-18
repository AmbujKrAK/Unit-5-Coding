import { useState } from 'react'

export const Form = () => {
  const [formData, setFormData] = useState({
    username: '',
    age: '',
    email:"",
  })

  const handleChange = (e) => {
    // if(e.target.id === "username"){
    //     setFormData({
    //         ...formData,
    //         username: e.target.value,
    //     })
    // }

    // if(e.target.id === "age"){
    //     setFormData({
    //         ...formData,
    //         age: e.target.value,
    //     })
    // }

    const { name, value, email} = e.target.name;

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }


  const handleSubmit = (e) =>{
      e.preventDefault();
    console.log(formData);
    // fetch("backendurl",{
    //     method: "POST",
    //     body:JSON.stringify(formData),
    // })
    }

  return (
    <form action="">
      <input
        onChange={handleChange}
        value={formData.username}
        type="text"
        placeholder="Enter Username"
        name="username"
      />

      <input
        onChange={handleChange}
        value={formData.age}
        type="number"
        placeholder="Enter Age"
        name="age"
      />

       <input
        onChange={handleChange}
        value={formData.email}
        type="text"
        placeholder="Enter Email"
        name="email"
      />

      <input onClick={handleSubmit} type="submit" value="submit" />
    </form>
  )
}
