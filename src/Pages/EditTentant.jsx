import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  FormControl,
  Input,
  Stack,
  Checkbox
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { editTentants, getTentants } from "../Redux/Tentants/action";
import { useNavigate, useParams } from "react-router-dom";
import { FormLabel } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";
const EditTentant = () => {
  const { id } = useParams();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email,setEmail]=useState("");
  const [phone,setPhone]= useState("");
  const [dateOfBirth,setDateOfBirth]= useState("");
  const [aadharCard,setAadharCard]=useState("");
  const [panCard,setPanCard]=useState("");
   const [residentialAddress, setResidentialAddress] = useState({
     street: "",
     city: "",
     state: "",
     country: "",
     zipCode: "",
   });
    const [currentAddress, setCurrentAddress] = useState({
        street: "",
        city: "",
        state: "",
        country: "",
        zipCode: "",
      });
    const [registrationofRoomRent,setRegistrationofRoomRent]=useState("");
    const [currentTentant, setCurrentTentant] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const tentant = useSelector((state) => state.Tentants.tentants);
  const handleEditTentant = () => {
    const payload = {
   
    };
    dispatch(editTentants(id, payload))
      .then(() => dispatch(getTentants()))
      .then((r) => {
        navigate("/tentants");
      });
  };
  useEffect(() => {
    if (tentant.length === 0) {
      dispatch(getTentants());
    }
  }, [tentant.length, dispatch]);
  useEffect(() => {
    if (id) {
      const tentantById = tentant.find((lands) => lands._id === id);
      tentantById && setCurrentTentant(tentantById);
    }
  }, [id, tentant]);
  console.log(tentant);
  return (
    <div>
      <Stack style={{ width: "100%", height: "100vh", marginTop: "15px" }}>
        <form id="my-form" novalidate="novalidate">
          <Box>
            <Flex>
              <FormControl>
                <FormLabel>Firstname</FormLabel>
                <Input id="firstName" type="text" placeholder="Firstname" />
              </FormControl>
              <FormControl>
                <FormLabel for="Lastname">LastName</FormLabel>
                <Input id="lastName" type="text" placeholder="Lastname" />
              </FormControl>
            </Flex>
            <Flex>
              <FormControl>
                <FormLabel for="email">Email</FormLabel>
                <Input id="email" type="email" placeholder="email" />
              </FormControl>
              <FormControl>
                <FormLabel for="phone">Phone</FormLabel>
                <Input
                  id="phone"
                  type="text"
                  placeholder="phone"
                  maxlength="10"
                />
              </FormControl>
            </Flex>
            <Flex>
              <FormControl>
                <FormLabel for="AadharCard">AadharCard</FormLabel>
                <Input
                  id="aadharCard"
                  type="file"
                  name="aadharCard"
                  accept="application/pdf"
                  placeholder="AadharCard"
                />
              </FormControl>
              <FormControl>
                <FormLabel for="PanCard">PanCard</FormLabel>
                <Input
                  id="panCard"
                  type="file"
                  name="panCard"
                  accept="application/pdf"
                  placeholder="panCard"
                />
              </FormControl>
            </Flex>
            <Flex>
              <FormControl>
                <FormLabel for="Date-of-birth">Date-of-birth</FormLabel>
                <Input id="dateOfBirth" type="date" placeholder="dob" />
              </FormControl>
              <FormControl>
                <FormLabel for="city">Registration</FormLabel>
                <Input
                  id="registrationofRoomRent"
                  type="date"
                  placeholder="Registration-of-date"
                />
              </FormControl>
            </Flex>
            <p>Residental Address</p>
            <Flex>
              <FormControl>
                <FormLabel for="street">street</FormLabel>
                <Input id="Residentalstreet" type="text" placeholder="street" />
              </FormControl>
              <FormControl>
                <FormLabel for="city">city</FormLabel>
                <Input id="Residentalcity" type="text" placeholder="city" />
              </FormControl>
            </Flex>
            <Flex>
              <FormControl>
                <FormLabel for="state">state</FormLabel>
                <Input
                  id="Residentalstate"
                  type="text"
                  placeholder="state"
                  ia-placeholder="state"
                />
              </FormControl>
              <FormControl>
                <FormLabel for="country">country</FormLabel>
                <Input
                  id="Residentalcountry"
                  type="text"
                  placeholder="country"
                />
              </FormControl>
              <FormControl>
                <FormLabel for="postalCode">postalCode</FormLabel>
                <Input
                  id="ResidentalzipCode"
                  type="text"
                  placeholder="postalCode"
                />
              </FormControl>
            </Flex>
            <Box class="form-check">
              <Checkbox>Same Address</Checkbox>
            </Box>
            <p>currentAddress</p>
            <Flex>
              <FormControl>
                <FormLabel for="street">street</FormLabel>
                <Input id="Currentstreet" type="text" placeholder="street" />
              </FormControl>
              <FormControl>
                <FormLabel for="city">city</FormLabel>
                <Input id="Currentcity" type="text" placeholder="city" />
              </FormControl>
            </Flex>
            <Flex>
              <FormControl>
                <FormLabel for="state">state</FormLabel>
                <Input id="Currentstate" type="text" placeholder="state" />
              </FormControl>
              <FormControl>
                <FormLabel for="country">country</FormLabel>
                <Input id="Currentcountry" type="text" placeholder="country" />
              </FormControl>
              <FormControl>
                <FormLabel for="postalCode">postalCode</FormLabel>
                <Input
                  id="CurrentzipCode"
                  type="text"
                  placeholder="postalCode"
                />
              </FormControl>
            </Flex>
          </Box>
          <Button
            className="addPropertybutton"
            _hover={{ bg: "green", color: "white" }}
            style={{
              marginTop: "40%",
              width: "30%",
              margin: "auto",
              fontSize: "24px",
            }}
            onClick={handleEditTentant}
          >
            update
          </Button>
        </form>
      </Stack>
    </div>
  );
};

export default EditTentant;
