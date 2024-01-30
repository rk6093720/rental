import { Box,Select,Textarea , Flex,Spacer, Button, FormControl, FormLabel, Heading, Input, InputGroup,useToast } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { getApartment, postApartment } from '../Redux/App/action';
import { useNavigate } from 'react-router-dom';

const AddApartment = () => {
  const [image,setImage]= useState(null);
  const [title,setTittle]= useState("");
  const [typeofApartment,setTypeofApartment]= useState("");
  const [area, setArea] = useState("");
  const [floor,setFloor]= useState("");
  const [country,setCountry]= useState("");
  const [bedRooms,setBedRooms]= useState("");
  const [city,setCity]= useState("");
  const [bathRooms ,setBathRooms]= useState("");
  const [terrace,setTerrace]= useState("");
  const [parking,setParking]= useState("");
  const [price,setPrice]= useState("");
  const [advancePaymentForRent,setAdvancePaymentForRent]= useState("");
  const [description, setDescription]= useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toast = useToast();
  const handleChangeFile = (e) =>{
    console.log(e.target.files[0],"emage");
    setImage(e.target.files[0])
  }
  const handleForm = async (e) =>{
     e.preventDefault();
     try {
      //  let filename = null
       if (image) {
         const formData = new FormData();
        //  filename = crypto.randomUUID() + image.name;
        //  formData.append('filename', filename)
         formData.append("apartmentImage", image); // Use "document" as the key
         formData.append("title", title);
         formData.append("typeofApartment", typeofApartment); 
         formData.append("area", area);
         formData.append("floor", floor);
         formData.append("city", city);
         formData.append("country", country);
         formData.append("bedRooms", bedRooms);
         formData.append("bathRooms", bathRooms);
         formData.append("terrace", terrace);
         formData.append("price", price);
         formData.append("parking", parking);
         formData.append("description", description);
         formData.append("advancePaymentForRent", advancePaymentForRent);
         console.log(formData);
         await dispatch(postApartment(formData))
           .then(() => dispatch(getApartment()))
           .then((r) => {
             navigate("/owner-dashboard/apartment");
             console.log(r);
           })
       }
     } catch (error) {
      console.log(error);
     }
  }
  console.log(image)
  return (
    <div>
         <Box style={{width:"80%",height:"700px",margin:"auto",marginTop:"15px"}}>
          <h1>Add Apartment</h1>
           <form onSubmit={handleForm} >
           <Flex>
            <FormControl isRequired>
              <FormLabel>Title</FormLabel>
              <InputGroup className='title' style={{ width: "100%", height: "5%" }}>
                <Input placeholder='Apartment-Name'
                  type='text'
                  _hover={{ bg: "green", color: "white" }}
                  value={title}
                  style={{ fontSize: "24px" }}
                  onChange={(e) => setTittle(e.target.value)} />
              </InputGroup>
            </FormControl>
            <Spacer/>
          <FormControl isRequired>
              <FormLabel>typeofApartment</FormLabel>
              <InputGroup className='typeofApartment' style={{ width: "100%", height: "5%" }}>
                <Select placeholder='typeofApartment'
                  value={typeofApartment}
                  style={{ fontSize: "24px" }}
                  onChange={(e) => setTypeofApartment(e.target.value)} > 
                  <option value="1BHK">1BHK</option>
                  <option value="2BHK">2BHK</option>
                  </Select>
              </InputGroup>
            </FormControl> 
          </Flex> 
          <Flex>
          <FormControl isRequired>
            <FormLabel>Area</FormLabel>
            <InputGroup className='Area' style={{ width: "100%", height: "5%" }}>
              <Input placeholder='Area'
                type='text'
                autoComplete='area'
                _hover={{ bg: "green", color: "white" }}
                value={area}
                style={{ fontSize: "24px" }}
                onChange={(e) => setArea(e.target.value)} />
            </InputGroup>
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Floor</FormLabel>
            <InputGroup className='Floor' style={{ width: "100%", height: "5%" }}>
              <Input placeholder='Floor'
                type='text'
                _hover={{ bg: "green", color: "white" }}
                value={floor}
                maxLength={10}
                style={{ fontSize: "24px" }}
                onChange={(e) => setFloor(e.target.value)} />
            </InputGroup>
          </FormControl>
          </Flex> 
          <Flex>
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
            <FormLabel>BedRooms</FormLabel>
            <InputGroup className='BedRooms' style={{ width: "100%", height: "5%" }}>
              <Input placeholder='BedRooms'
                type='text'
                _hover={{ bg: "green", color: "white" }}
                value={bedRooms}
                style={{ fontSize: "24px" }}
                onChange={(e) => setBedRooms(e.target.value)} />
            </InputGroup>
          </FormControl>
          </Flex> 
          <Flex>
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
            <FormLabel>BathRooms</FormLabel>
            <InputGroup className='BathRooms' style={{ width: "100%", height: "5%" }}>
              <Input placeholder='BathRooms'
                type='text'
                _hover={{ bg: "green", color: "white" }}
                value={bathRooms}
                style={{ fontSize: "24px" }}
                onChange={(e) => setBathRooms(e.target.value)} />
            </InputGroup>
          </FormControl>
          </Flex> 
          <Flex>
          <FormControl isRequired>
            <FormLabel>Terrace</FormLabel>
            <InputGroup className='Terrace' style={{ width: "100%", height: "5%"}}>
              <Input placeholder='Terrace'
                type='text'
                _hover={{ bg: "green", color: "white" }}
                value={terrace}
                style={{ fontSize: "24px" }}
                onChange={(e) => setTerrace(e.target.value)} />
            </InputGroup>
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Parking</FormLabel>
            <InputGroup className='Parking' style={{ width: "100%", height: "5%"}}>
              <Select placeholder='parking'
                value={parking}
                style={{ fontSize: "24px" }}
                onChange={(e) => setParking(e.target.value)} >
                    <option value="YES">YES</option>
                    <option value="NO">NO</option>
                </Select>
            </InputGroup>
          </FormControl>
          </Flex>
          <Flex>
          <FormControl isRequired >
            <FormLabel>Price</FormLabel>
            <InputGroup className='Price' style={{ width: "100%", height: "5%"}}>
              <Input placeholder='Price'
                type='text'
                _hover={{ bg: "green", color: "white" }}
                value={price}
                style={{ fontSize: "24px" }}
                onChange={(e) => setPrice(e.target.value)} />
            </InputGroup>
          </FormControl>
          <FormControl >
            <FormLabel>ApartmentImage</FormLabel>
            <InputGroup className='ApartmentImage' style={{ width: "100%", height: "5"}}>
              <Input placeholder="Select an image"
                type="file"
                id="image"
                accept='image/*'
                name="apartmentImage"
                _hover={{ bg: "green", color: "white" }}
                style={{ fontSize: "24px" }}
                onChange={handleChangeFile} />
            </InputGroup>
          </FormControl>
          </Flex>
          <Flex>
          <FormControl isRequired>
            <FormLabel>advancePaymentForRent  </FormLabel>
            <InputGroup className='advancePaymentForRent  ' style={{ width: "100%", height: "5%" }}>
              <Input placeholder='advancePaymentForRent  '
                type='text'
                _hover={{ bg: "green", color: "white" }}
                value={advancePaymentForRent}
                style={{ fontSize: "24px" }}
                onChange={(e) => setAdvancePaymentForRent(e.target.value)} />
            </InputGroup>
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Description</FormLabel>
            <InputGroup className='Description' style={{ width: "100%", height: "5%" }}>
              <Textarea placeholder='Description'
                value={description}
                style={{ fontSize: "24px" }}
                onChange={(e) => setDescription(e.target.value)} />
            </InputGroup>
          </FormControl>
          </Flex>
          <Box className='AddButton'
            style={{ width: "100%", height: "30px",marginTop:"15px" }}>
            <Button className='button'
              type="submit"
              _hover={{ color: "white", bg: "green" }}
              style={{ width: "100%", height: "50px", fontSize: "24px", color: "white", borderRadius: "15px" }}
            >AddApartment</Button>
          </Box>
          </form>
         </Box>
    </div>
  )
}
export default AddApartment