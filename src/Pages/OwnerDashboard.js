import { Flex, Icon, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverFooter, PopoverHeader, PopoverTrigger, Portal, Spacer, Text } from "@chakra-ui/react"
import React, { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { IoMdNotifications } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import AdminSidebar from "../Component/AdminSidebar";
import MainRoutes from "./MainRoutes";
import { Box, Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, useToast } from '@chakra-ui/react'
import { useDispatch } from 'react-redux';
import { EmailIcon } from '@chakra-ui/icons';
import{
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure
} from '@chakra-ui/react';
import { getLandlord, postLandlord } from "../Redux/App/action";
const OwnerDashboard =()=>{
   const navigate = useNavigate();
  const [Admin]=useState(JSON.parse(localStorage.getItem("Admintoken"))) 
  console.log(Admin);
  const handleSignout =()=>{
    localStorage.removeItem("Admintoken");
    navigate("/adminSignup")
    window.location.reload()
  }
    const { isOpen, onOpen, onClose } = useDisclosure()
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
           .then(() => dispatch(getLandlord()))
           .then((r) => {
             // navigate("/landlords")
           })
       }
     } catch (error) {
      console.log(error);
     }
  }
  console.log(image)
 
    return (
      <div>
        <Flex style={{ width: "100%" }}>
          <Box style={{ width: "20%" }}>
            <AdminSidebar />
          </Box>
          <Spacer style={{ width: "1%" }} />
          <Box style={{ width: "79%" }}>
            <div
              className="container"
              style={{
                width: "100%",
                height: "50px",
                display: "flex",
                backgroundColor: "teal",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div
                className="left"
                style={{ width: "20%", color: "white", fontSize: "24px" }}
              >
                <Link
                  to="/dashboard"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Apartment
                </Link>
              </div>
              <div
                className="right"
                style={{
                  width: "80%",
                  display: "flex",
                  justifyContent: "space-evenly",
                  fontSize: "24px",
                }}
              >
                <Box>
                  <Button 
                    style={{ textDecoration: "none", color: "black", fontSize:"24px" }}
                  >
                    <Icon as={IoMdNotifications} />
                  </Button>
                </Box>
                <Box>
                  <Popover>
                    <PopoverTrigger>
                      <Button>
                        {" "}
                        <Icon
                          as={FaUserCircle}
                          style={{
                            textDecoration: "none",
                            color: "white",
                            backgroundColor: "black",
                          }}
                        />
                      </Button>
                    </PopoverTrigger>
                    <Portal>
                      <PopoverContent>
                        <PopoverArrow />
                        <PopoverHeader>Profile</PopoverHeader>
                        <PopoverCloseButton />
                        <PopoverBody>
                          <Box
                            style={{
                              width: "20%",
                              height: "100%",
                              fontSize: "24px",
                              fontWeight: "bold",
                              alignItems: "center",
                              margin: "auto",
                              color: "Black",
                            }}
                          >
                            {Admin ? (
                              <>
                                <Flex>
                                  <Text>{Admin.email.split("@")[0]}</Text>
                                </Flex>
                              </>
                            ) : null}
                          </Box>
                        </PopoverBody>
                        <PopoverFooter>
                          <Flex>
                            <Button colorScheme="blue" onClick={onOpen}>
                              Profile
                            </Button>

                            <Modal
                              isOpen={isOpen}
                              onClose={onClose}
                              style={{ width: "1200px" }}
                            >
                              <ModalOverlay />
                              <ModalContent>
                                <ModalHeader>Add LandLord</ModalHeader>
                                <ModalCloseButton />
                                <form onSubmit={handleForm}>
                                  <ModalBody>
                                    <Box style={{ width: "100%" }}>
                                      <Flex>
                                        <FormControl isRequired>
                                          <FormLabel>FirstName</FormLabel>
                                          <InputGroup
                                            className="inputForFn"
                                            style={{
                                              width: "100%",
                                              height: "5%",
                                            }}
                                          >
                                            <Input
                                              placeholder="enter firstname"
                                              type="text"
                                              _hover={{
                                                bg: "green",
                                                color: "white",
                                              }}
                                              value={firstName}
                                              style={{ fontSize: "24px" }}
                                              onChange={(e) =>
                                                setFirstName(e.target.value)
                                              }
                                            />
                                          </InputGroup>
                                        </FormControl>
                                        <Spacer />
                                        <FormControl isRequired>
                                          <FormLabel>LastName</FormLabel>
                                          <InputGroup
                                            className="inputForFn"
                                            style={{
                                              width: "100%",
                                              height: "5%",
                                            }}
                                          >
                                            <Input
                                              placeholder="enter your lastname"
                                              type="text"
                                              _hover={{
                                                bg: "green",
                                                color: "white",
                                              }}
                                              value={LastName}
                                              style={{ fontSize: "24px" }}
                                              onChange={(e) =>
                                                setLastName(e.target.value)
                                              }
                                            />
                                          </InputGroup>
                                        </FormControl>
                                      </Flex>
                                      <Flex>
                                        <FormControl isRequired>
                                          <FormLabel>Email</FormLabel>
                                          <InputGroup
                                            className="inputForEmail"
                                            style={{
                                              width: "100%",
                                              height: "5%",
                                            }}
                                          >
                                            <Input
                                              placeholder="enter your email"
                                              type="email"
                                              autoComplete="email"
                                              _hover={{
                                                bg: "green",
                                                color: "white",
                                              }}
                                              value={email}
                                              style={{ fontSize: "24px" }}
                                              onChange={(e) =>
                                                setEmail(e.target.value)
                                              }
                                            />
                                            <InputRightElement
                                              _hover={{
                                                bg: "green",
                                                color: "white",
                                              }}
                                            >
                                              <EmailIcon
                                                style={{ fontSize: "24px" }}
                                              />
                                            </InputRightElement>
                                          </InputGroup>
                                        </FormControl>
                                        <FormControl isRequired>
                                          <FormLabel>Phone Number</FormLabel>
                                          <InputGroup
                                            className="inputForPhone"
                                            style={{
                                              width: "100%",
                                              height: "5%",
                                            }}
                                          >
                                            <Input
                                              placeholder="enter your phoneNumber"
                                              type="text"
                                              _hover={{
                                                bg: "green",
                                                color: "white",
                                              }}
                                              value={phone}
                                              maxLength={10}
                                              style={{ fontSize: "24px" }}
                                              onChange={(e) =>
                                                setPhone(e.target.value)
                                              }
                                            />
                                          </InputGroup>
                                        </FormControl>
                                      </Flex>
                                      <Flex>
                                        <FormControl isRequired>
                                          <FormLabel>Country</FormLabel>
                                          <InputGroup
                                            className="inputForcountry"
                                            style={{
                                              width: "100%",
                                              height: "5%",
                                            }}
                                          >
                                            <Input
                                              placeholder="enter your country name"
                                              type="text"
                                              _hover={{
                                                bg: "green",
                                                color: "white",
                                              }}
                                              value={country}
                                              style={{ fontSize: "24px" }}
                                              onChange={(e) =>
                                                setCountry(e.target.value)
                                              }
                                            />
                                          </InputGroup>
                                        </FormControl>
                                        <FormControl isRequired>
                                          <FormLabel>State</FormLabel>
                                          <InputGroup
                                            className="inputForstate"
                                            style={{
                                              width: "100%",
                                              height: "5%",
                                            }}
                                          >
                                            <Input
                                              placeholder="enter your State name"
                                              type="text"
                                              _hover={{
                                                bg: "green",
                                                color: "white",
                                              }}
                                              value={state}
                                              style={{ fontSize: "24px" }}
                                              onChange={(e) =>
                                                setState(e.target.value)
                                              }
                                            />
                                          </InputGroup>
                                        </FormControl>
                                      </Flex>
                                      <Flex>
                                        <FormControl isRequired>
                                          <FormLabel>City</FormLabel>
                                          <InputGroup
                                            className="inputForcity"
                                            style={{
                                              width: "100%",
                                              height: "5%",
                                            }}
                                          >
                                            <Input
                                              placeholder="enter your city name"
                                              type="text"
                                              _hover={{
                                                bg: "green",
                                                color: "white",
                                              }}
                                              value={city}
                                              style={{ fontSize: "24px" }}
                                              onChange={(e) =>
                                                setCity(e.target.value)
                                              }
                                            />
                                          </InputGroup>
                                        </FormControl>
                                        <FormControl isRequired>
                                          <FormLabel>PostalCode</FormLabel>
                                          <InputGroup
                                            className="inputForpostalcode"
                                            style={{
                                              width: "100%",
                                              height: "5%",
                                            }}
                                          >
                                            <Input
                                              placeholder="enter your Postalcode"
                                              type="text"
                                              maxLength={6}
                                              _hover={{
                                                bg: "green",
                                                color: "white",
                                              }}
                                              value={postalCode}
                                              style={{ fontSize: "24px" }}
                                              onChange={(e) =>
                                                setPostalCode(e.target.value)
                                              }
                                            />
                                          </InputGroup>
                                        </FormControl>
                                      </Flex>
                                      <Flex>
                                        <FormControl isRequired>
                                          <FormLabel>Address</FormLabel>
                                          <InputGroup
                                            className="inputForAddress"
                                            style={{
                                              width: "100%",
                                              height: "5%",
                                            }}
                                          >
                                            <Input
                                              placeholder="enter your Address"
                                              type="text"
                                              _hover={{
                                                bg: "green",
                                                color: "white",
                                              }}
                                              value={address}
                                              style={{ fontSize: "24px" }}
                                              onChange={(e) =>
                                                setAddress(e.target.value)
                                              }
                                            />
                                          </InputGroup>
                                        </FormControl>
                                        <FormControl isRequired>
                                          <FormLabel>CountApartment</FormLabel>
                                          <InputGroup
                                            className="inputForApartment"
                                            style={{
                                              width: "100%",
                                              height: "5%",
                                            }}
                                          >
                                            <Input
                                              placeholder="enter your count Apartment"
                                              type="number"
                                              _hover={{
                                                bg: "green",
                                                color: "white",
                                              }}
                                              value={countApartment}
                                              style={{ fontSize: "24px" }}
                                              onChange={(e) =>
                                                setCountApartment(
                                                  e.target.value
                                                )
                                              }
                                            />
                                          </InputGroup>
                                        </FormControl>
                                      </Flex>
                                      <Flex>
                                        <FormControl isRequired>
                                          <FormLabel>AdharCard</FormLabel>
                                          <InputGroup
                                            className="inputForAdharCard"
                                            style={{
                                              width: "100%",
                                              height: "5%",
                                            }}
                                          >
                                            <Input
                                              placeholder="enter your AdharCard Number"
                                              type="text"
                                              _hover={{
                                                bg: "green",
                                                color: "white",
                                              }}
                                              value={adharCard}
                                              maxLength={12}
                                              style={{ fontSize: "24px" }}
                                              onChange={(e) =>
                                                setAdharCard(e.target.value)
                                              }
                                            />
                                          </InputGroup>
                                        </FormControl>
                                        <FormControl>
                                          <FormLabel>Document</FormLabel>
                                          <InputGroup
                                            className="inputFordocument"
                                            style={{
                                              width: "100%",
                                              height: "5",
                                            }}
                                          >
                                            <Input
                                              placeholder="Select an image"
                                              type="file"
                                              accept="application/pdf"
                                              _hover={{
                                                bg: "green",
                                                color: "white",
                                              }}
                                              style={{ fontSize: "24px" }}
                                              onChange={handleChangeFile}
                                            />
                                          </InputGroup>
                                        </FormControl>
                                      </Flex>
                                      <Flex>
                                        <FormControl isRequired>
                                          <FormLabel>propertyCode</FormLabel>
                                          <InputGroup
                                            className="inputForpropertyCode"
                                            style={{
                                              width: "100%",
                                              height: "5%",
                                            }}
                                          >
                                            <Input
                                              placeholder="enter your propertyCode"
                                              type="text"
                                              _hover={{
                                                bg: "green",
                                                color: "white",
                                              }}
                                              value={propertyCode}
                                              style={{ fontSize: "24px" }}
                                              onChange={(e) =>
                                                setPropertyCode(e.target.value)
                                              }
                                            />
                                          </InputGroup>
                                        </FormControl>
                                        <FormControl isRequired>
                                          <FormLabel>PropertyName</FormLabel>
                                          <InputGroup
                                            className="PropertyName"
                                            style={{
                                              width: "100%",
                                              height: "5%",
                                            }}
                                          >
                                            <Input
                                              placeholder="enter your PropertyName"
                                              type="text"
                                              _hover={{
                                                bg: "green",
                                                color: "white",
                                              }}
                                              value={propertyName}
                                              style={{ fontSize: "24px" }}
                                              onChange={(e) =>
                                                setPropertyName(e.target.value)
                                              }
                                            />
                                          </InputGroup>
                                        </FormControl>
                                      </Flex>
                                      <FormControl isRequired>
                                        <FormLabel>Registration Date</FormLabel>
                                        <InputGroup
                                          className="inputForRegistration registerDate"
                                          style={{
                                            width: "100%",
                                            height: "5%",
                                          }}
                                        >
                                          <Input
                                            placeholder="enter your Registration registerDate"
                                            type="datetime-local"
                                            _hover={{
                                              bg: "green",
                                              color: "white",
                                            }}
                                            value={registerDate}
                                            style={{ fontSize: "24px" }}
                                            onChange={(e) =>
                                              setRegisterDate(e.target.value)
                                            }
                                          />
                                        </InputGroup>
                                      </FormControl>
                                    </Box>
                                  </ModalBody>
                                  <ModalFooter>
                                    <Button
                                      colorScheme="blue"
                                      style={{
                                        width: "50%",
                                        height: "50px",
                                        fontSize: "24px",
                                        color: "white",
                                        borderRadius: "15px",
                                      }}
                                      mr={3}
                                      onClick={onClose}
                                    >
                                      Close
                                    </Button>
                                    {/* <Button variant='ghost'>Secondary Action</Button> */}
                                    <Button
                                      className="button"
                                      type="submit"
                                      colorScheme="green"
                                      style={{
                                        width: "50%",
                                        height: "50px",
                                        fontSize: "24px",
                                        color: "white",
                                        borderRadius: "15px",
                                      }}
                                      mr={3}
                                    >
                                      AddLandLord
                                    </Button>
                                  </ModalFooter>
                                </form>
                              </ModalContent>
                            </Modal>
                            <Spacer />
                            <Button colorScheme="red" onClick={handleSignout}>
                              SignOut
                            </Button>
                          </Flex>
                        </PopoverFooter>
                      </PopoverContent>
                    </Portal>
                  </Popover>
                </Box>
              </div>
            </div>
            <MainRoutes />
            <Outlet />
          </Box>
        </Flex>
      </div>
    );
}
export default OwnerDashboard