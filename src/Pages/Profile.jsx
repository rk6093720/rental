import { Box, Button, FormControl, Heading, Input } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getProfile, postProfile } from '../Redux/profile/action';
// import { useParams } from 'react-router-dom'

const Profile = () => {
  // const {id} = useParams();
  const [email,setEmail]=useState("");
  const [firstName,setFirstName]=useState("");
  const [lastname,setLastName]=useState("");
  const [password,setPassword]=useState("");
  const [country,setCountry]=useState("");
  const [state,setState]=useState("");
  const [city,setCity]=useState("");
  const [userType,setUserType]=useState("");
  const dispatch = useDispatch();
  // const [currentAdmin,setCurrentAdmin]= useState({})
  const admin = useSelector((state)=>state.profile.admin)
  const handleProfile= async(e)=>{
    e.preventDefault();
    try {
      const payload={
        firstName,
        lastname,
        country,
        state,
        password,
        city
      }
      await dispatch(postProfile(payload))
      .then(()=> dispatch(getProfile()))
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(()=>{
    if (admin?.length === 0)
    {
      dispatch(getProfile())
    }
  },[dispatch,admin?.length]);
  // useEffect(()=>{
  //   if(id){
  //     const adminById = admin.find((item)=> item._id === id);
  //       adminById && setCurrentAdmin(adminById);
  //     adminById && setFirstName(adminById.firstname);
  //     adminById && setLastName(adminById.lastname);
  //     adminById && setCity(adminById.city);
  //     adminById && setCountry(adminById.country);
  //     adminById && setState(adminById.state);
  //     adminById && setPassword(adminById.password);
  //   }
  // },[id, admin])
  return (
    <div>
      <Box>
        <Heading>Profile</Heading>
       <form onSubmit={handleProfile}>
         <FormControl>
          <Input type='text' value={firstName} onChange={(e)=>setFirstName(e.target.value)} placeholder='enter your firstName'/>
         </FormControl>
         <br/>
       <FormControl>
            <Input type='text' value={lastname} onChange={(e) => setLastName(e.target.value)} placeholder='enter your lastName' />
      </FormControl>
      <br/>
      <FormControl isRequired>
          <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='enter your email' />
      </FormControl>
      <br/>
        <FormControl>
            <Input type='text' value={userType ? "Admin" : userType} onChange={(e) => setUserType(e.target.value)} placeholder='enter your userType' />
        </FormControl>
        <br/>
        <FormControl>
            <Input type='text' value={country} onChange={(e) => setCountry(e.target.value)} placeholder='enter your country' />
        </FormControl>
        <br />
        <FormControl>
            <Input type='text' value={city} onChange={(e) => setCity(e.target.value)} placeholder='enter your city' />
        </FormControl>
        <br />
        <FormControl>
            <Input type='text' value={state} onChange={(e) => setState(e.target.value)} placeholder='enter your state' />
        </FormControl>
        <br />
        <FormControl isRequired>
            <Input  type='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='enter your password' />
        </FormControl>
        <br/>
        <Button type="submit">Add Profile</Button>
        </form> 
      </Box>
    </div>
  )
}

export default Profile