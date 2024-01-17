import { Box, Button,Textarea,InputGroup,Spacer, Flex, FormControl, FormLabel, Input, Select, useToast } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { editApartment, getApartment } from "../Redux/App/action";
const EditApartmentDetails = () =>{
    const {id} = useParams();
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
    const location = useLocation();
    const [currentApartment,setCurrentApartment]=useState({});
    const apartment = useSelector((state)=> state.App.apartment);
    const dispatch = useDispatch();
    const toast = useToast();
    const navigate = useNavigate();
     const handleChangeFile = (e) =>{
      setImage(e.target.files[0])
  }
    const handleForm =(e) => {
    e.preventDefault();
    try {
     if(image){
      const formData = new FormData();
      for(const key in {
        title,
        typeofApartment,
        area,
        floor,
        country,
        bedRooms,
        city,
        bathRooms,
        terrace,
        parking,
        price,
        advancePaymentForRent,
      }){
        formData.append(key, key === "apartmentImage" ? image : eval(key))
      }
      console.log(formData);
      dispatch(editApartment(id,formData))
      .then(()=> dispatch(getApartment()))
      .then((r)=>{
        console.log(r);
      })
     }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (apartment.length === 0) {
      dispatch(getApartment());
    }
  }, [apartment.length, dispatch]);

  useEffect(() => {
    if (id) {
      const apartmentById = apartment.find((apartments) => apartments._id === id);
      console.log(apartmentById);
      apartmentById && setCurrentApartment(apartmentById);
      apartmentById && setImage(apartmentById.apartmentImage);
      apartmentById && setTittle(apartmentById.title);
      apartmentById && setTypeofApartment(apartmentById.typeofApartment);
      apartmentById && setArea(apartmentById.area);
      apartmentById && setFloor(apartmentById.floor);
      apartmentById && setCountry(apartmentById.country);
      apartmentById && setBedRooms(apartmentById.bedRooms);
      apartmentById && setCity(apartmentById.city);
      apartmentById && setBathRooms(apartmentById.bathRooms);
      apartmentById && setTerrace(apartmentById.terrace);
      apartmentById && setParking(apartmentById.parking);
      apartmentById && setDescription(apartmentById.description);
      apartmentById && setPrice(apartmentById.price);
      apartmentById && setAdvancePaymentForRent(apartmentById.advancePaymentForRent);
    }
  }, [id, apartment]);
  // console.log(apartment);
  console.log(image,title,typeofApartment,description,area,floor,bedRooms,bathRooms,terrace, parking, price,advancePaymentForRent,country,city);
    return (
        <div>
           <Box style={{width:"80%",height:"700px",margin:"auto",marginTop:"15px"}}>
          <h1>Edit Apartment</h1>
           <form onSubmit={handleForm} >
           <Flex>
            <FormControl isRequired>
              <FormLabel>Title</FormLabel>
              <InputGroup className='title' style={{ width: "100%", height: "5%" }}>
                <Input placeholder='Apartment-Name'
                  type='text'
                  name='title'
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
                 name='typeofApartment'
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
                name='area'
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
                name='floor'
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
                name='country'
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
                name='bedRooms'
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
                name='city'
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
                name='terrace'
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
              name='parking'
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
                name="price"
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
                name="advancePaymentForRent"
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
              name="description"
                value={description}
                style={{ fontSize: "24px" }}
                onChange={(e) => setDescription(e.target.value)} />
            </InputGroup>
          </FormControl>
          </Flex>
          <Box className='editButton'
            style={{ width: "100%", height: "30px",marginTop:"15px" }}>
            <Button className='button'
              type="submit"
              _hover={{ color: "white", bg: "green" }}
              style={{ width: "100%", height: "50px", fontSize: "24px", color: "white", borderRadius: "15px" }}
            >Edit Apartment</Button>
          </Box>
          </form>
         </Box>
        </div>
    )
}

export default EditApartmentDetails;