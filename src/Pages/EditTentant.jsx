import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  FormControl,
  Input,
  Stack,
  Checkbox,
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
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [aadharCard, setAadharCard] = useState("");
  const [panCard, setPanCard] = useState("");
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
  const [registrationofRoomRent, setRegistrationofRoomRent] = useState("");
  const [currentTentant, setCurrentTentant] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const tentant = useSelector((state) => state.Tentants.tentants);
  const handleCheckbox = (e) => {
    const { checked } = e.target;
    if (checked) {
      setCurrentAddress({
        ...currentAddress,
        street: residentialAddress.street,
        city: residentialAddress.city,
        state: residentialAddress.state,
        country: residentialAddress.country,
        zipCode: residentialAddress.zipCode,
      });
    } else {
      setCurrentAddress({
        ...currentAddress,
        street: "",
        city: "",
        state: "",
        country: "",
        zipCode: "",
      });
    }
  };

  const handleEditTentant = () => {
    const payload = {};
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
      console.log();
      tentantById && setCurrentTentant(tentantById);
      tentantById && setFirstName(tentantById.firstName);
      tentantById && setLastName(tentantById.lastName);
      tentantById && setEmail(tentantById.email);
      tentantById && setPhone(tentantById.phone);
      tentantById && setDateOfBirth(tentantById.dateOfBirth);
      tentantById && setAadharCard(tentantById.aadharCard);
      tentantById && setPanCard(tentantById.panCard);
      tentantById &&
        setCurrentAddress({
          street: tentantById.currentAddress
            ? tentantById.currentAddress.street || ""
            : "",
          city: tentantById.currentAddress
            ? tentantById.currentAddress.city || ""
            : "",
          state: tentantById.currentAddress
            ? tentantById.currentAddress.state || ""
            : "",
          country: tentantById.currentAddress
            ? tentantById.currentAddress.country || ""
            : "",
          zipCode: tentantById.currentAddress
            ? tentantById.currentAddress.zipCode || ""
            : "",
        });
      tentantById &&
        setResidentialAddress({
          street: tentantById.residentialAddress
            ? tentantById.residentialAddress.street || ""
            : "",
          city: tentantById.residentialAddress
            ? tentantById.residentialAddress.city || ""
            : "",
          state: tentantById.residentialAddress
            ? tentantById.residentialAddress.state || ""
            : "",
          country: tentantById.residentialAddress
            ? tentantById.residentialAddress.country || ""
            : "",
          zipCode: tentantById.residentialAddress
            ? tentantById.residentialAddress.zipCode || ""
            : "",
        });
    }
  }, [id, tentant]);
  console.log(tentant);
  return (
    <div>
      <Stack style={{ width: "100%", height: "100vh", marginTop: "15px", padding:"15px" }}>
        <form onSubmit={handleEditTentant}>
          <Box>
            <Flex>
              <FormControl>
                <FormLabel>Firstname</FormLabel>
                <Input
                  id="firstName"
                  type="text"
                  placeholder="Firstname"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </FormControl>
              <FormControl>
                <FormLabel for="Lastname">LastName</FormLabel>
                <Input
                  id="lastName"
                  type="text"
                  placeholder="Lastname"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </FormControl>
            </Flex>
            <Flex>
              <FormControl>
                <FormLabel for="email">Email</FormLabel>
                <Input
                  id="email"
                  type="email"
                  placeholder="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>
              <FormControl>
                <FormLabel for="phone">Phone</FormLabel>
                <Input
                  id="phone"
                  type="text"
                  placeholder="phone"
                  maxlength="10"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
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
                  onChange={(e) => setAadharCard(e.target.files[0])}
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
                  onChange={(e) => setPanCard(e.target.files[0])}
                />
              </FormControl>
            </Flex>
            <Flex>
              <FormControl>
                <FormLabel for="Date-of-birth">Date-of-birth</FormLabel>
                <Input
                  id="dateOfBirth"
                  type="date"
                  placeholder="dob"
                  value={dateOfBirth}
                  onChange={(e) => setDateOfBirth(e.target.value)}
                />
              </FormControl>
              <FormControl>
                <FormLabel for="city">Registration</FormLabel>
                <Input
                  id="registrationofRoomRent"
                  type="date"
                  placeholder="Registration-of-date"
                  value={registrationofRoomRent}
                  onChange={(e) => setRegistrationofRoomRent(e.target.value)}
                />
              </FormControl>
            </Flex>
            <p>Residental Address</p>
            <Flex>
              <FormControl>
                <FormLabel for="street">street</FormLabel>
                <Input
                  id="Residentalstreet"
                  type="text"
                  placeholder="street"
                  value={residentialAddress.street}
                  onChange={(e) =>
                    setResidentialAddress({
                      ...residentialAddress,
                      street: e.target.value,
                    })
                  }
                />
              </FormControl>
              <FormControl>
                <FormLabel for="city">city</FormLabel>
                <Input
                  id="Residentalcity"
                  type="text"
                  placeholder="city"
                  value={residentialAddress.city}
                  onChange={(e) =>
                    setResidentialAddress({
                      ...residentialAddress,
                      city: e.target.value,
                    })
                  }
                />
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
                  value={residentialAddress.state}
                  onChange={(e) =>
                    setResidentialAddress({
                      ...residentialAddress,
                      state: e.target.value,
                    })
                  }
                />
              </FormControl>
              <FormControl>
                <FormLabel for="country">country</FormLabel>
                <Input
                  id="Residentalcountry"
                  type="text"
                  placeholder="country"
                  value={residentialAddress.country}
                  onChange={(e) =>
                    setResidentialAddress({
                      ...residentialAddress,
                      country: e.target.value,
                    })
                  }
                />
              </FormControl>
              <FormControl>
                <FormLabel for="postalCode">postalCode</FormLabel>
                <Input
                  id="ResidentalzipCode"
                  type="text"
                  placeholder="postalCode"
                  value={residentialAddress.zipCode}
                  onChange={(e) =>
                    setResidentialAddress({
                      ...residentialAddress,
                      zipCode: e.target.value,
                    })
                  }
                />
              </FormControl>
            </Flex>
            <Checkbox onChange={handleCheckbox}>Same Address</Checkbox>
            <p>currentAddress</p>
            <Flex>
              <FormControl>
                <FormLabel for="street">street</FormLabel>
                <Input
                  id="Currentstreet"
                  type="text"
                  placeholder="street"
                  value={currentAddress.street}
                  onChange={(e) =>
                    setCurrentAddress({
                      ...currentAddress,
                      street: e.target.value,
                    })
                  }
                />
              </FormControl>
              <FormControl>
                <FormLabel for="city">city</FormLabel>
                <Input
                  id="Currentcity"
                  type="text"
                  placeholder="city"
                  value={currentAddress.city}
                  onChange={(e) =>
                    setCurrentAddress({
                      ...currentAddress,
                      street: e.target.value,
                    })
                  }
                />
              </FormControl>
            </Flex>
            <Flex>
              <FormControl>
                <FormLabel for="state">state</FormLabel>
                <Input
                  id="Currentstate"
                  type="text"
                  placeholder="state"
                  value={currentAddress.state}
                  onChange={(e) =>
                    setCurrentAddress({
                      ...currentAddress,
                      state: e.target.value,
                    })
                  }
                />
              </FormControl>
              <FormControl>
                <FormLabel for="country">country</FormLabel>
                <Input
                  id="Currentcountry"
                  type="text"
                  placeholder="country"
                  value={currentAddress.country}
                  onChange={(e) =>
                    setCurrentAddress({
                      ...currentAddress,
                      country: e.target.value,
                    })
                  }
                />
              </FormControl>
              <FormControl>
                <FormLabel for="postalCode">postalCode</FormLabel>
                <Input
                  id="CurrentzipCode"
                  type="text"
                  placeholder="postalCode"
                  value={currentAddress.zipCode}
                  onChange={(e) =>
                    setCurrentAddress({
                      ...currentAddress,
                      zipCode: e.target.value,
                    })
                  }
                />
              </FormControl>
            </Flex>
     </Box>
     <br/>
          <Button
            type="submit"
            className="addPropertybutton"
            _hover={{ bg: "green", color: "white" }}
            style={{
              marginTop: "50%", 
              width: "50%",
              marginLeft:"25%",
              textAlign:'center',
              fontSize: "24px",
            }}
          >
            update
          </Button>
        </form>
      </Stack>
    </div> 
  );
};

export default EditTentant;
