import { EmailIcon } from '@chakra-ui/icons'
import { Box, Button, FormControl, FormLabel, Heading, Input, InputGroup, InputRightElement, useToast } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { postLandlord } from '../Redux/App/action';
import { useNavigate } from 'react-router-dom';

const AddLandlord = () => {
  const [image,setImage]= useState(null);
  const [firstName,setFirstName]= useState("");
  const [LastName,setLastName]= useState("");
  const [email, setEmail] = useState("");
  const [phone,setPhone]= useState("");
  const [country,setCountry]= useState("");
  const [state,setState]= useState("");
  const [city,setCity]= useState("");
  const [postalCode ,setPostalCode]= useState("");
  const [address,setAddress]= useState("");
  const [countApartment,setCountApartment]= useState("");
  const [adharCard,setAdharCard]= useState("");
  const [propertyCode,setPropertyCode]= useState("");
  const [propertyName, setPropertyName]= useState("");
  const [registerDate,setRegisterDate]=useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toast = useToast();
  const handleChangeFile = (e) =>{
    setImage(e.target.files[0])
    // setDocument(image)
  }
  const handleForm = async (e) =>{
     e.preventDefault();
    const formData = new FormData();
    formData.append("document", image); // Use "document" as the key
    formData.append("firstName", firstName);
    formData.append("LastName", LastName);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("city", city);
    formData.append("country", country);
    formData.append("state", state);
    formData.append("postalCode", postalCode);
    formData.append("address", address);
    formData.append("adharCard", adharCard);
    formData.append("countApartment", countApartment);
    formData.append("propertyName", propertyName);
    formData.append("propertyCode", propertyCode);
    formData.append("registerDate", registerDate)
   await dispatch(postLandlord(formData))
    .then((r)=>{
      console.log(r);
      if (r.type === "POST_LANDLORD_SUCCESS"){
        toast({
          title: 'new Landlord added successfully',
          duration: 5000,
          position: 'top',
          isClosable: true,
          colorScheme: 'green',
          status: 'success',
        })
        window.location.reload();
        navigate("/landlords")
        
      }
    })
  }
  return (
    <div>
         <Box style={{width:"50%",height:"100vh",margin:"auto",marginTop:"15px"}}>
          <Heading>Add LandLord</Heading>
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
            <InputGroup className='inputForcity' style={{ width: "100%", height: "5%"}}>
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
                maxLength={6}
                _hover={{ bg: "green", color: "white" }}
                value={postalCode}
                style={{ fontSize: "24px" }}
                onChange={(e) => setPostalCode(e.target.value)} />
            </InputGroup>
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Address</FormLabel>
            <InputGroup className='inputForAddress' style={{ width: "100%", height: "5%"}}>
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
            <InputGroup className='inputForApartment' style={{ width: "100%", height: "5%"}}>
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
            <InputGroup className='inputForAdharCard' style={{ width: "100%", height: "5%"}}>
              <Input placeholder='enter your AdharCard Number'
                type='text'
                _hover={{ bg: "green", color: "white" }}
                value={adharCard}
                maxLength={12}
                style={{ fontSize: "24px" }}
                onChange={(e) => setAdharCard(e.target.value)} />
            </InputGroup>
          </FormControl>
          <FormControl >
            <FormLabel>Document</FormLabel>
            <InputGroup className='inputFordocument' style={{ width: "100%", height: "5"}}>
              <Input placeholder='enter your Document'
                type="file"
                accept="image/*" 
                name="document"
                _hover={{ bg: "green", color: "white" }}
                style={{ fontSize: "24px" }}
                onChange={handleChangeFile} />
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
            <InputGroup className='inputForRegistration registerDate' style={{ width: "100%", height: "5%"}}>
              <Input placeholder='enter your Registration registerDate'
                type='datetime-local'
                _hover={{ bg: "green", color: "white" }}
                value={registerDate}
                style={{ fontSize: "24px" }}
                onChange={(e) => setRegisterDate(e.target.value)} />
            </InputGroup>
          </FormControl >
          <Box className='AddButton'
            style={{ width: "100%", height: "30px",marginTop:"15px" }}>
            <Button className='button'
              type="submit"
              _hover={{ color: "white", bg: "green" }}
              style={{ width: "100%", height: "50px", fontSize: "24px", color: "white", borderRadius: "15px" }}
            >AddLandLord</Button>
          </Box>
          </form>
         </Box>
    </div>
  )
}
export default AddLandlord