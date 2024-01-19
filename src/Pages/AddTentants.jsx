import React, { useState } from 'react';
import { Box, FormControl, Flex,Button, FormLabel, Input, Stack} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { getTentants, postTentants } from '../Redux/Tentants/action';
import { useNavigate } from 'react-router-dom';
const AddTentants = () => {
    const [formData, setFormData] = useState({
      // firstName, lastName, email , phone,dateOfBirth, address,identification, registrationofRoomRent, contract,approve
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      dateOfBirth: "",
      registrationofRoomRent: "",
      contract: "",
      address: {
        street: "",
        city: "",
        state: "",
        country: "",
        zipCode: "",
      },
      // employment: {
      //     employer: '',
      //     jobTitle: '',
      //     income: '',
      // },
      // rentalHistory: [
      //     {
      //         landlord: '',
      //         property: '',
      //         startDate: '',
      //         endDate: '',
      //         reasonForLeaving: '',
      //     },
      // ],
      // references: [
      //     {
      //         name: '',
      //         relationship: '',
      //         phone: '',
      //     },
      // ],
      // creditScore: '',
      identification: {
        aadhaarCard: "",
      },
      approve:"",
    });

     const dispatch = useDispatch();
    const navigate = useNavigate();
    const tentant = useSelector((state) => state.Tentants.tentants);
    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name.startsWith('address.') || name.startsWith('identification.')) {
            setFormData((prevData) => ({
                ...prevData,
                address: {
                    ...prevData.address,
                    [name.split('address.')[1]]: value,
                },
            }));
            setFormData((prevData) => ({
                ...prevData,
                identification: {
                    ...prevData.identification,
                    [name.split('identification.')[1]]: value,
                },
            }));
        } else {
            setFormData((prevData) => ({
                ...prevData,
                [name]: value,
            }));
        }
    };
   const handleRentalChange=(value, index, field)=>{
       const rental = [...formData.rentalHistory];
       rental[index]={
        ...rental[index],
        [field]:value,
       }
       setFormData({ ...formData, rentalHistory:rental });
   }
  const  handleReferenceChange=(value, index, field)=>{
    const refer = [...formData.references];
    refer[index]={
        ...refer[index],
        [field]:value,
    }
    setFormData({...formData, references:refer });
  }
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(postTentants(formData))
        .then(()=> dispatch(getTentants()))
        // .then(()=>{
        //     navigate("/tentants")
        // }) // Log form data to the console (you can send it to the server here)
    };
    return (
    <Stack style={{ width: "100%", height: "100vh", marginTop: "15px" , overflowX:"hidden", overflowY:"scroll" }}>
            <form onSubmit={handleSubmit}>
                {/* Personal Information */}
                <Flex>
                <FormControl>
                    <FormLabel>FirstName</FormLabel>
                    <Input
                        type="text"
                        name="firstName"
                        placeholder='enter your firstName'
                        value={formData.firstName}
                        onChange={handleChange}
                    />
                </FormControl>
                <br />
                <FormControl>
                <FormLabel>LastName</FormLabel>               
                         <Input
                        type="text"
                        name="lastName"
                        placeholder='enter your lastName'
                        value={formData.lastName}
                        onChange={handleChange}
                    />
                </FormControl>
                </Flex>
                <br />
                <Flex>
                <FormControl>
                    <FormLabel>Email</FormLabel>
                    <Input
                        type="email"
                        name="email"
                        placeholder='enter your email'
                        value={formData.email}
                        onChange={handleChange}
                    />
                </FormControl>
                <br />
                <FormControl>
                    <FormLabel>Phone</FormLabel>
                    <Input
                        type="text"
                        name="phone"
                        maxLength="10"
                        placeholder='enter the tentants number'
                        value={formData.phone}
                        onChange={handleChange}
                    />
                </FormControl>
                </Flex>
                <br />
                <Flex> 
                <FormControl>
                    <FormLabel>DateOfBirth</FormLabel>
                    <Input
                        type="date"
                        name="dateOfBirth"
                        placeholder='dob'
                        value={formData.dateOfBirth}
                        onChange={handleChange}
                    />
                </FormControl>
                <br /> {/* Add other personal information fields similarly */}
                {/* Address */}
                <FormControl>
                    <FormLabel>Street</FormLabel>
                    <Input
                        type="text"
                        name="address.street"
                        placeholder='enter your street number'
                        value={formData.address.street}
                        onChange={handleChange}
                    />
                </FormControl>
                </Flex>
                <br />
                <Flex>
                <FormControl>
                    <FormLabel>City</FormLabel>
                    <Input
                        type="text"
                        name="address.city"
                        placeholder='enter your city'
                        value={formData.address.city}
                        onChange={handleChange}
                    />
                </FormControl>
                <br />
                <FormControl>
                    <FormLabel>Country</FormLabel>
                    <Input
                        type="text"
                        name="address.country"
                        placeholder='enter your country'
                        value={formData.address.country}
                        onChange={handleChange}
                    />
                </FormControl>
                </Flex>
                <br/>
                <Flex>
                <FormControl>
                    <FormLabel>state</FormLabel>
                    <Input
                        type="text"
                        name="address.state"
                        placeholder='enter your state'
                        value={formData.address.state}
                        onChange={handleChange}
                    />
                </FormControl>
                <br/>
                <FormControl>
                    <FormLabel>PostCode</FormLabel>
                    <Input
                        type="text"
                        name="address.zipCode"
                        placeholder='enter your ZipCode'
                        maxLength="6"
                        value={formData.address.zipCode}
                        onChange={handleChange}
                    />
                </FormControl>
                </Flex>
                <br/>
                {/* Add other address fields similarly */}
                {/* Employment */}
                {/* <Flex>
                <FormControl>
                    <FormLabel>Employer:</FormLabel>
                    <Input
                        type="text"
                        name="employment.employer"
                        placeholder='enter your employer name'
                        value={formData.employment.employer}
                        onChange={handleChange}
                    />
                </FormControl>
                <br /> 
                <FormControl>
                    <FormLabel>jobTitle:</FormLabel>
                    <Input
                        type="text"
                        name="employment.jobTitle"
                        placeholder='enter your employer jobtitle'
                        value={formData.employment.jobTitle}
                        onChange={handleChange}
                    />
                </FormControl>
                </Flex>
                <br />
                <FormControl>
                    <FormLabel>income:</FormLabel>
                    <Input
                        type="text"
                        name="employment.income"
                        placeholder='enter employer income'
                        value={formData.employment.income}
                        onChange={handleChange}
                    />
                </FormControl>
                <br /> */}
                {/* Add other employment fields similarly */}
                {/* Rental History */}
                {/* {
                    formData.rentalHistory.map((land, index)=>(
                        <Box key={index}>
                            <Flex>
                            <FormControl>
                                <FormLabel>Landlord</FormLabel> 
                                <Input
                                    type="text"
                                    placeholder='enter your landlord'
                                    name={`rentalHistory.${index}.landlord`}
                                    value={land.landlord}
                                    onChange={(e)=>handleRentalChange(e.target.value, index, 'landlord')}
                                />
                            </FormControl>
                            <br />
                            <FormControl>
                                <FormLabel>Property</FormLabel>
                                <Input
                                    type="text"
                                    placeholder='enter your property'
                                    name={`rentalHistory.${index}.property`}
                                    value={land.property}
                                    onChange={(e) => handleRentalChange(e.target.value, index, 'property')}
                                />
                            </FormControl>
                            </Flex>
                            <br/>
                            <Flex>
                            <FormControl>
                                <FormLabel>StartDate</FormLabel>
                                <Input
                                    type="date"
                                    placeholder='enter your startDate'
                                    name={`rentalHistory.${index}.startDate`}
                                    value={land.startDate}
                                    onChange={(e) => handleRentalChange(e.target.value, index, 'startDate')}
                                />
                            </FormControl>
                            <br/>
                            <FormControl>
                                <FormLabel>EndDate</FormLabel>
                                <Input
                                    type="date"
                                    placeholder='enter your endDate'
                                    name={`rentalHistory.${index}.endDate`}
                                    value={land.endDate}
                                    onChange={(e) => handleRentalChange(e.target.value, index, 'endDate')}
                                />
                            </FormControl>
                            </Flex>
                            <br />
                            <FormControl>
                                <FormLabel> reasonForLeaving </FormLabel>
                                <Input
                                    type="text"
                                    placeholder='enter your reasonForLeaving'
                                    name={`rentalHistory.${index}.reasonForLeaving`}
                                    value={land.reasonForLeaving}
                                    onChange={(e) => handleRentalChange(e.target.value, index, 'reasonForLeaving')}
                                />
                            </FormControl>
                        </Box>
                    ))
                }  */}
                {/* Add other rental history fields similarly */}
                {/* References */}
                {/* {
                    formData.references.map((refer,index)=>(
                        <div key={index}>
                            <Flex>
                            <FormControl>
                                <FormLabel>Name:</FormLabel> 
                                <Input
                                    type="text"
                                    placeholder='enter your name(reference name)'
                                    name={`references.${index}.name`}
                                    value={refer.name}
                                    onChange={(e) => handleReferenceChange(e.target.value, index, 'name')}
                                />
                            </FormControl>
                            <br/>
                            <FormControl>
                                <FormLabel>relationship</FormLabel>
                                <Input
                                    type="text"
                                    placeholder='enter your name(relationship name)'
                                    name={`references.${index}.relationship`}
                                    value={refer.relationship}
                                    onChange={(e) => handleReferenceChange(e.target.value, index, 'relationship')}
                                />
                            </FormControl>
                            </Flex>
                            <br/>
                            <FormControl>
                                <FormLabel>phone:</FormLabel>
                                <Input
                                    type="text"
                                    maxLength="10"
                                    placeholder='enter your phone(phone number)'
                                    name={`references.${index}.phone`}
                                    value={refer.phone}
                                    onChange={(e) => handleReferenceChange(e.target.value, index, 'phone')}
                                />
                            </FormControl>
                        </div>
                    ))
                }
                <br /> */}
                {/* Add other references fields similarly */}
                {/* Credit Score */}
                <br />
                <Button type="submit">Submit</Button>
            </form>
        </Stack>
    );
}
export default AddTentants;
