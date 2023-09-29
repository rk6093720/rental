import { EmailIcon } from '@chakra-ui/icons';
import { Box, Button, FormControl, FormLabel, Heading, Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { editLandLord, getLandlord } from '../Redux/App/action';

const EditLandLord = () => {
  const {id}= useParams();
  const [firstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [address, setAddress] = useState("");
  const [countApartment, setCountApartment] = useState("");
  const [adharCard, setAdharCard] = useState("");
  const [propertyCode, setPropertyCode] = useState("");
  const [propertyName, setPropertyName] = useState("");
  const [registerDate, setRegisterDate] = useState("");
  const [currentLand,setCurrentLand]= useState({});
  const land = useSelector((state)=> state.App.landlord);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleForm=(e)=>{
    e.preventDefault();
    const payload={
      firstName, 
      LastName, 
      email,
      phone,
      country, 
      state,
      city,
      postalCode, 
      address, 
      countApartment, 
      adharCard, 
      propertyCode, 
      propertyName,
      registerDate
    }
    dispatch(editLandLord(id,payload))
    .then(()=> dispatch(getLandlord()))
    .then((r)=>{
      console.log(r)
      navigate("/landlords")
    })
  }
  useEffect(()=>{
     if(land.length===0)
     {
      dispatch(getLandlord())
     }
  },[land.length, dispatch])
  useEffect(()=>{
    if(id){
       const landById = land.find((lands)=> lands._id === id)
        landById && setCurrentLand(landById);
      landById && setFirstName(landById.firstName)
      landById && setLastName(landById.LastName)
      landById && setEmail(landById.email)
      landById && setPhone(landById.phone)
      landById && setCountry(landById.country)
      landById && setState(landById.state)
      landById && setCity(landById.city)
      landById && setPostalCode(landById.postalCode)
      landById && setAddress(landById.address)
      landById && setCountApartment(landById.countApartment)
      landById && setAdharCard(landById.adharCard)
      landById && setPropertyCode(landById.propertyCode)
      landById && setPropertyName(landById.propertyName)
      landById && setRegisterDate(landById.registerDate)
    }
  },[id,land])
  console.log(land);
  return (
    <div>
      <Box style={{ width: "50%", height: "100vh", margin: "auto", marginTop: "15px" }}>
        <Heading>Edit LandLord</Heading>
        <form onSubmit={handleForm}>
          <FormControl isRequired>
            <FormLabel>FirstName</FormLabel>
            <InputGroup className='inputForFn' style={{ width: "100%", height: "5%" }}>
              <Input placeholder='enter firstname'
                type='text'
                _hover={{ bg: "green", color: "white" }}
                value={firstName}
                style={{ fontSize: "24px" }}
                onChange={(e) => setFirstName(e.target.value)} />
            </InputGroup>
          </FormControl>
          <FormControl isRequired>
            <FormLabel>LastName</FormLabel>
            <InputGroup className='inputForFn' style={{ width: "100%", height: "5%" }}>
              <Input placeholder='enter your lastname'
                type='text'
                _hover={{ bg: "green", color: "white" }}
                value={LastName}
                style={{ fontSize: "24px" }}
                onChange={(e) => setLastName(e.target.value)} />
            </InputGroup>
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Email</FormLabel>
            <InputGroup className='inputForEmail' style={{ width: "100%", height: "5%" }}>
              <Input placeholder='enter your email'
                type='email'
                autoComplete='email'
                _hover={{ bg: "green", color: "white" }}
                value={email}
                style={{ fontSize: "24px" }}
                onChange={(e) => setEmail(e.target.value)} />
              <InputRightElement _hover={{ bg: "green", color: "white" }}>
                <EmailIcon style={{ fontSize: "24px" }} />
              </InputRightElement>
            </InputGroup>
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Phone Number</FormLabel>
            <InputGroup className='inputForPhone' style={{ width: "100%", height: "5%" }}>
              <Input placeholder='enter your phoneNumber'
                type='text'
                _hover={{ bg: "green", color: "white" }}
                value={phone}
                maxLength={10}
                style={{ fontSize: "24px" }}
                onChange={(e) => setPhone(e.target.value)} />
            </InputGroup>
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Country</FormLabel>
            <InputGroup className='inputForcountry' style={{ width: "100%", height: "5%" }}>
              <Input placeholder='enter your country name'
                type='text'
                _hover={{ bg: "green", color: "white" }}
                value={country}
                style={{ fontSize: "24px" }}
                onChange={(e) => setCountry(e.target.value)} />
            </InputGroup>
          </FormControl>
          <FormControl isRequired >
            <FormLabel>State</FormLabel>
            <InputGroup className='inputForstate' style={{ width: "100%", height: "5%" }}>
              <Input placeholder='enter your State name'
                type='text'
                _hover={{ bg: "green", color: "white" }}
                value={state}
                style={{ fontSize: "24px" }}
                onChange={(e) => setState(e.target.value)} />
            </InputGroup>
          </FormControl>
          <FormControl isRequired>
            <FormLabel>City</FormLabel>
            <InputGroup className='inputForcity' style={{ width: "100%", height: "5%" }}>
              <Input placeholder='enter your city name'
                type='text'
                _hover={{ bg: "green", color: "white" }}
                value={city}
                style={{ fontSize: "24px" }}
                onChange={(e) => setCity(e.target.value)} />
            </InputGroup>
          </FormControl>
          <FormControl isRequired>
            <FormLabel>PostalCode</FormLabel>
            <InputGroup className='inputForpostalcode' style={{ width: "100%", height: "5%" }}>
              <Input placeholder='enter your Postalcode'
                type='text'
                _hover={{ bg: "green", color: "white" }}
                value={postalCode}
                style={{ fontSize: "24px" }}
                onChange={(e) => setPostalCode(e.target.value)} />
            </InputGroup>
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Address</FormLabel>
            <InputGroup className='inputForAddress' style={{ width: "100%", height: "5%" }}>
              <Input placeholder='enter your Address'
                type='text'
                _hover={{ bg: "green", color: "white" }}
                value={address}
                style={{ fontSize: "24px" }}
                onChange={(e) => setAddress(e.target.value)} />
            </InputGroup>
          </FormControl>
          <FormControl isRequired>
            <FormLabel>CountApartment</FormLabel>
            <InputGroup className='inputForApartment' style={{ width: "100%", height: "5%" }}>
              <Input placeholder='enter your count Apartment'
                type='number'
                _hover={{ bg: "green", color: "white" }}
                value={countApartment}
                style={{ fontSize: "24px" }}
                onChange={(e) => setCountApartment(e.target.value)} />
            </InputGroup>
          </FormControl>
          <FormControl isRequired >
            <FormLabel>AdharCard</FormLabel>
            <InputGroup className='inputForAdharCard' style={{ width: "100%", height: "5%" }}>
              <Input placeholder='enter your AdharCard Number'
                type='text'
                _hover={{ bg: "green", color: "white" }}
                value={adharCard}
                maxLength={12}
                style={{ fontSize: "24px" }}
                onChange={(e) => setAdharCard(e.target.value)} />
            </InputGroup>
          </FormControl>
          <FormControl isRequired>
            <FormLabel>propertyCode</FormLabel>
            <InputGroup className='inputForpropertyCode' style={{ width: "100%", height: "5%" }}>
              <Input placeholder='enter your propertyCode'
                type='text'
                _hover={{ bg: "green", color: "white" }}
                value={propertyCode}
                style={{ fontSize: "24px" }}
                onChange={(e) => setPropertyCode(e.target.value)} />
            </InputGroup>
          </FormControl>
          <FormControl isRequired>
            <FormLabel>PropertyName</FormLabel>
            <InputGroup className='PropertyName' style={{ width: "100%", height: "5%" }}>
              <Input placeholder='enter your PropertyName'
                type='text'
                _hover={{ bg: "green", color: "white" }}
                value={propertyName}
                style={{ fontSize: "24px" }}
                onChange={(e) => setPropertyName(e.target.value)} />
            </InputGroup>
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Registration Date</FormLabel>
            <InputGroup className='inputForRegistration registerDate' style={{ width: "100%", height: "5%" }}>
              <Input placeholder='enter your Registration registerDate'
                type='date'
                _hover={{ bg: "green", color: "white" }}
                value={registerDate}
                style={{ fontSize: "24px" }}
                onChange={(e) => setRegisterDate(e.target.value)} />
            </InputGroup>
          </FormControl >
          <Box className='AddButton'
            style={{ width: "100%", height: "30px", marginTop: "15px" }}>
            <Button className='button'
              type="submit"
              _hover={{ color: "white", bg: "green" }}
              style={{ width: "100%", height: "50px", fontSize: "24px", color: "white", borderRadius: "15px" }}
            >Update-LandLord</Button>
          </Box>
        </form>
      </Box>
    </div>
  )
}

export default EditLandLord