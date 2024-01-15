import { Box, Button,Textarea,InputGroup,Spacer, Flex, FormControl, FormLabel, Heading, Input, Select, useToast } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { editApartment, getApartment } from "../Redux/App/action";
import { GET_APARTMENT_SUCCESS } from "../Redux/App/actionTypes";
const EditApartment = () =>{
    const {id} = useParams();
    const [image,setImage]= useState(null);
  const [title,setTittle]= useState("");
  const [typesOfApartment,setTypesOfApartment]= useState("");
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
    const invoiceLand = useSelector((state)=> state.App.apartment);
    const dispatch= useDispatch();
    const toast = useToast();
    const navigate = useNavigate();
     const handleChangeFile = (e) =>{
    console.log(e.target.files[0],"emage");
    setImage(e.target.files[0])
  }
    const handleEditApartment=(e)=>{
        e.preventDefault();
          if (image) {
         const formData = new FormData();
        //  filename = crypto.randomUUID() + image.name;
        //  formData.append('filename', filename)
         formData.append("apartmentImage", image); // Use "document" as the key
         formData.append("title", title);
         formData.append("typesOfApartment", typesOfApartment);
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
        dispatch(editApartment(id,formData))
        .then(()=> dispatch(getApartment())) 
        .then((r)=>{
            if(r.type === GET_APARTMENT_SUCCESS){
                toast({
                  title: 'Invoice is Edit Successfully',
                  duration: 5000,
                  position: 'top',
                  isClosable: true,
                  colorScheme: 'green',
                  status: 'success',
                })
                if(location.pathname === `/superAdmin/invoice/${id}/edit`){
                    navigate("/superAdmin/invoices")
                }
                else if(location.pathname === `/tentant-dashboard/invoice/${id}/edit`)
                {
                    navigate("/tentant-dashboard/invoices")
                }else{
                    navigate("/owner-dashboard/invoices")
                }
              }
        })
        .catch((e)=>{
            console.log(e);
        })

    }
}
    
    useEffect(()=>{
        if(invoiceLand.length===0)
        {
         dispatch(getApartment())
        }
     },[invoiceLand.length, dispatch])
     useEffect(()=>{
       if(id){
          const landById = invoiceLand.find((lands)=> lands._id === id)
           landById && setCurrentApartment(landById);
         landById && setImage(landById.image)
         landById && setTittle(landById.title)
         landById && setAdvancePaymentForRent(landById.advancePaymentForRent)
         landById && setArea(landById.area)
         landById && setBathRooms(landById.bathRooms)
         landById && setBedRooms(landById.bedRooms)
         landById && setCity(landById.city)
         landById && setCountry(landById.country)
         landById && setFloor(landById.floor)
         landById && setDescription(landById.description)
         landById && setTerrace(landById.terrace)
         landById && setParking(landById.parking)
          landById && setPrice(landById.price)
         landById && setParking(landById.parking)
       }
     },[id,invoiceLand])
    return (
        <div>
             <Box style={{width:"80%",height:"700px",margin:"auto",marginTop:"15px"}}>
          <h1>Edit Apartment</h1>
           <form onSubmit={handleEditApartment}>
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
              <FormLabel>TypesOfApartment</FormLabel>
              <InputGroup className='TypesOfApartment' style={{ width: "100%", height: "5%" }}>
                <Select placeholder='TypesOfApartment'
                  value={typesOfApartment}
                  style={{ fontSize: "24px" }}
                  onChange={(e) => setTypesOfApartment(e.target.value)} > 
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
          <Box className='EditButton'
            style={{ width: "100%", height: "30px",marginTop:"15px" }}>
            <Button className='button'
              type="submit"
              _hover={{ color: "white", bg: "green" }}
              style={{ width: "100%", height: "50px", fontSize: "24px", color: "white", borderRadius: "15px" }}
            >EditApartment</Button>
          </Box>
          </form>
         </Box>
        </div>
    )
}

export default EditApartment;