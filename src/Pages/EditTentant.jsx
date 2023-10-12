import React, { useEffect, useState } from 'react';
import { Box, Button, FormControl, Input, Stack, Step, StepDescription, StepIcon, StepIndicator, StepNumber, StepSeparator, StepStatus, StepTitle, Stepper, Select } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { editTentants, getTentants} from '../Redux/Tentants/action';
import { useNavigate, useParams } from 'react-router-dom';
const steps = [
  { title: 'Information', description: 'Contact Info' },
  { title: 'kind of Relation', description: 'Relation' },
  { title: 'Employee', description: 'Employee' },
  { title: 'business', description: 'Business' },
]
const EditTentant = () => {
  const {id} = useParams();
  const [active, setActive] = useState(0);
  const [tentant_Type, setTentant_Type] = useState('');
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");
  const [passportNumber, setPassportNumber] = useState("");
  const [martialStatus, setMartialStatus] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [postalAddress, setPostalAddress] = useState("");
  const [physicalAddress, setPhysicalAddress] = useState("");
  const [kinName, setKinName] = useState("");
  const [kinPhone, setKinPhone] = useState("");
  const [kinRelation, setKinRelation] = useState("");
  const [emergency_name, setEmergency_Name] = useState("");
  const [emergency_phone, setEmergency_Phone] = useState("");
  const [emergency_email, setEmergency_Email] = useState("");
  const [emergency_relation, setEmergency_Relation] = useState("");
  const [emergency_postalAddress, setEmergency_PostalAddress] = useState("");
  const [emergency_physicalAddress, setEmergency_PhysicalAddress] = useState("");
  const [employee_Status, setEmployee_Status] = useState("");
  const [employee_position, setEmployee_Position] = useState("");
  const [employee_phone, setEmployee_phone] = useState("");
  const [employee_email, setEmployee_Email] = useState("");
  const [employee_postalAddress, setEmployee_PostalAddress] = useState("");
  const [employee_physicalAddress, setEmployee_PhysicalAddress] = useState("");
  const [business_name, setBusiness_Name] = useState("");
  const [license_number, setLicense_Number] = useState("");
  const [tax_id, setTax_Id] = useState("");
  const [business_address, setBusiness_Address] = useState("");
  const [business_industry, setBusiness_Industry] = useState("");
  const [business_description, setBusiness_Description] = useState("");
  const [currentTentant, setCurrentTentant] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const tentant = useSelector((state) => state.Tentants.tentants);
  const handlePrev = () => {
    setActive((active) => active - 1)// Go to the previous step
  };
  const handleNext = () => {
    setActive((active) => active + 1) // Go to the next step
  };
  const handleEditTentant=()=>{
    const payload={
      tentant_Type,
      firstName,
      lastName,
      gender,
      dob,
      passportNumber,
      martialStatus,
      phone,
      email,
      country,
      city,
      postalCode,
      postalAddress,
      physicalAddress,
      kinName,
      kinPhone,
      kinRelation,
      emergency_name,
      emergency_phone,
      emergency_email,
      emergency_relation,
      emergency_postalAddress,
      emergency_physicalAddress,
      employee_Status,
      employee_position,
      employee_phone,
      employee_email,
      employee_postalAddress,
      employee_physicalAddress,
      business_name,
      license_number,
      tax_id,
      business_address,
      business_industry,
      business_description
    }
    dispatch(editTentants(id,payload))
    .then(()=> dispatch(getTentants()))
    .then((r)=>{
      navigate("/tentants")
    })

  }
  useEffect(() => {
    if (tentant.length === 0) {
      dispatch(getTentants())
    }
  }, [tentant.length, dispatch])
  useEffect(() => {
    if (id) {
      const tentantById = tentant.find((lands) => lands._id === id)
      tentantById && setCurrentTentant(tentantById);
      tentantById && setTentant_Type(tentantById.tentant_Type)
      tentantById && setFirstName(tentantById.firstName)
      tentantById && setLastName(tentantById.lastName)
      tentantById && setGender(tentantById.gender)
      tentantById && setDob(tentantById.dob)
      tentantById && setPassportNumber(tentantById.passportNumber)
      tentantById && setMartialStatus(tentantById.martialStatus)
      tentantById && setPhone(tentantById.phone)
      tentantById && setEmail(tentantById.email)
      tentantById && setCountry(tentantById.country)
      tentantById && setCity(tentantById.city)
      tentantById && setPostalCode(tentantById.postalCode)
      tentantById && setPostalAddress(tentantById.postalAddress)
      tentantById && setPhysicalAddress(tentantById.physicalAddress)
      tentantById && setKinName(tentantById.kinName)
      tentantById && setKinPhone(tentantById.kinPhone)
      tentantById && setKinRelation(tentantById.kinRelation)
      tentantById && setEmergency_Name(tentantById.emergency_name)
      tentantById && setEmergency_Email(tentantById.emergency_email)
      tentantById && setEmergency_Phone(tentantById.emergency_phone)
      tentantById && setEmergency_Relation(tentantById.emergency_relation)
      tentantById && setEmergency_PostalAddress(tentantById.emergency_postalAddress)
      tentantById && setEmergency_PhysicalAddress(tentantById.emergency_physicalAddress)
      tentantById && setEmployee_Status(tentantById.employee_Status)
      tentantById && setEmployee_Email(tentantById.employee_email)
      tentantById && setEmployee_phone(tentantById.employee_phone)
      tentantById && setEmployee_Position(tentantById.employee_position)
      tentantById && setEmployee_PostalAddress(tentantById.employee_postalAddress)
      tentantById && setEmployee_PhysicalAddress(tentantById.employee_physicalAddress)
      tentantById && setBusiness_Industry(tentantById.business_industry)
      tentantById && setBusiness_Name(tentantById.business_name)
      tentantById && setLicense_Number(tentantById.license_number)
      tentantById && setBusiness_Description(tentantById.business_description)
      tentantById && setTax_Id(tentantById.tax_id)
      tentantById && setBusiness_Address(tentantById.business_address)
    }
  }, [id, tentant])
  console.log(tentant);
  return (
    <div>
      <Stack style={{ width: "100%", height: "100vh", marginTop: "15px" }}>
        <Stepper size="lg" index={active} orientation='vertical' height='400px' gap='0' marginTop={"15px"} padding={"10px"}>
          {steps.map((step, index) => (
            <Step key={index}>
              <StepIndicator>
                <StepStatus
                  complete={<StepIcon />}
                  incomplete={<StepNumber />}
                  active={<StepNumber />}
                />
              </StepIndicator>

              <Box flexShrink="0">
                <StepTitle>{step.title}</StepTitle>
                <StepDescription>{step.description}</StepDescription>
              </Box>

              <StepSeparator />
              {/* Add input fields and buttons for each step */}
              {active === 0 && index === active && (
                <Box style={{ marginTop: "45px" }}>

                  <FormControl isRequired>
                    <Select placeholder='enter tentant-type' value={tentant_Type} onChange={(e) => setTentant_Type(e.target.value)}>
                      <option value="Business">Business</option>
                      <option value="Individual">Individual</option>
                    </Select>
                  </FormControl>
                  <FormControl isRequired>
                    <Input
                      type='text'
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      placeholder='enter your firstName'
                    />
                  </FormControl>
                  <FormControl isRequired>
                    <Input
                      type='text'
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      placeholder='enter your lastName'
                    />
                  </FormControl>
                  <FormControl>
                    <Select value={gender} onChange={(e) => setGender(e.target.value)} placeholder='enter your gender'>
                      <option value="male">male</option>
                      <option value="female">female</option>
                      <option value="other">other</option>
                    </Select>
                  </FormControl>
                  <FormControl isRequired>
                    <Input
                      type='date'
                      value={dob}
                      onChange={(e) => setDob(e.target.value)}
                      placeholder='enter your dob'
                    />
                  </FormControl>
                  <FormControl isRequired>
                    <Input
                      type="text"
                      value={passportNumber}
                      onChange={(e) => setPassportNumber(e.target.value)}
                      placeholder='enter your passport number'
                    />
                  </FormControl>
                  <FormControl isRequired>
                    <Select value={martialStatus} onChange={(e) => setMartialStatus(e.target.value)} placeholder='enter your marital-status'>
                      <option value="Married">Married</option>
                      <option value="Single">Single</option>
                    </Select>
                  </FormControl>
                  <FormControl isRequired>
                    <Input
                      type="text"
                      maxLength={10}
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder='enter your phone'
                    />
                  </FormControl>
                  <FormControl isRequired>
                    <Input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder='enter your email'
                    />
                  </FormControl>
                  <FormControl isRequired>
                    <Input
                      type="text"
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                      placeholder='enter country'
                    />
                  </FormControl>
                  <FormControl isRequired>
                    <Input
                      type="text"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      placeholder='enter your city'
                    />
                  </FormControl>
                  <FormControl isRequired>
                    <Input
                      type="text"
                      maxLength={6}
                      value={postalCode}
                      onChange={(e) => setPostalCode(e.target.value)}
                      placeholder='enter your postal code'
                    />
                  </FormControl>
                  <FormControl isRequired>
                    <Input
                      type="text"
                      value={postalAddress}
                      onChange={(e) => setPostalAddress(e.target.value)}
                      placeholder='enter your postal address'
                    />
                  </FormControl>
                  <FormControl isRequired>
                    <Input
                      type="text"
                      value={physicalAddress}
                      onChange={(e) => setPhysicalAddress(e.target.value)}
                      placeholder='enter your physical address'
                    />
                  </FormControl>
                  {/* <FormControl isRequired>
                    <Input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder='enter your password'
                    />
                  </FormControl> */}



                  <br />
                  <Button onClick={handlePrev} isDisabled={index === 0}>Previous</Button>
                  {active < steps.length - 1 && (
                    <Button onClick={handleNext}>Next</Button>
                  )}

                </Box>
              )}
              {active === 1 && index === active && (
                <Box style={{ marginTop: "45px" }}>
                  <FormControl isRequired>
                    <Input
                      type="text"
                      value={kinName}
                      onChange={(e) => setKinName(e.target.value)}
                      placeholder='enter your kin-Name'
                    />
                  </FormControl>
                  <FormControl isRequired>
                    <Input
                      type="text"
                      value={kinPhone}
                      maxLength={10}
                      onChange={(e) => setKinPhone(e.target.value)}
                      placeholder='enter your kin-phone'
                    />
                  </FormControl>
                  <FormControl isRequired>
                    <Input
                      type="text"
                      value={kinRelation}
                      onChange={(e) => setKinRelation(e.target.value)}
                      placeholder='enter your kin-Relation'
                    />
                  </FormControl>
                  <FormControl isRequired>
                    <Input
                      type="text"
                      value={emergency_name}
                      onChange={(e) => setEmergency_Name(e.target.value)}
                      placeholder='enter your emergency-name'
                    />
                  </FormControl>
                  <FormControl isRequired>
                    <Input
                      type="text"
                      value={emergency_phone}
                      maxLength={10}
                      onChange={(e) => setEmergency_Phone(e.target.value)}
                      placeholder='enter your emergency-phone'
                    />
                  </FormControl>
                  <FormControl isRequired>
                    <Input
                      type="text"
                      value={emergency_email}
                      onChange={(e) => setEmergency_Email(e.target.value)}
                      placeholder='enter your emergency-relation'
                    />
                  </FormControl>
                  <FormControl isRequired>
                    <Input
                      type="text"
                      value={emergency_relation}
                      onChange={(e) => setEmergency_Relation(e.target.value)}
                      placeholder='enter your emergency-relation'
                    />
                  </FormControl>
                  <FormControl isRequired>
                    <Input
                      type="text"
                      value={emergency_postalAddress}
                      onChange={(e) => setEmergency_PostalAddress(e.target.value)}
                      placeholder='enter your emergency-relation'
                    />
                  </FormControl>
                  <FormControl isRequired>
                    <Input
                      type="text"
                      value={emergency_physicalAddress}
                      onChange={(e) => setEmergency_PhysicalAddress(e.target.value)}
                      placeholder='enter your emergency-relation'
                    />
                  </FormControl>
                  <Button onClick={handlePrev} >Previous</Button>
                  {active < steps.length - 1 && (
                    <Button onClick={handleNext}>Next</Button>
                  )}

                </Box>
              )}
              {active === 2 && index === active && (
                <Box style={{ marginTop: "45px" }}>
                  <FormControl isRequired>
                    <Input
                      type="text"
                      value={employee_Status}
                      onChange={(e) => setEmployee_Status(e.target.value)}
                      placeholder='enter your employee_Status'
                    />
                  </FormControl>
                  <FormControl isRequired>
                    <Input
                      type="text"
                      value={employee_position}
                      onChange={(e) => setEmployee_Position(e.target.value)}
                      placeholder='enter your employee_Position'
                    />
                  </FormControl>
                  <FormControl isRequired>
                    <Input
                      type="text"
                      value={employee_phone}
                      maxLength={10}
                      onChange={(e) => setEmployee_phone(e.target.value)}
                      placeholder='enter your employee_phone'
                    />
                  </FormControl>
                  <FormControl isRequired>
                    <Input
                      type="text"
                      value={employee_email}
                      onChange={(e) => setEmployee_Email(e.target.value)}
                      placeholder='enter your employee_email'
                    />
                  </FormControl>
                  <FormControl isRequired>
                    <Input
                      type="text"
                      value={employee_postalAddress}
                      onChange={(e) => setEmployee_PostalAddress(e.target.value)}
                      placeholder='enter your employee_postalAddress'
                    />
                  </FormControl>
                  <FormControl isRequired>
                    <Input
                      type="text"
                      value={employee_physicalAddress}
                      onChange={(e) => setEmployee_PhysicalAddress(e.target.value)}
                      placeholder='enter your employee_physicalAddress'
                    />
                  </FormControl>

                  <br />
                  <Button onClick={handlePrev} >Previous</Button>
                  {active < steps.length - 1 && (
                    <Button onClick={handleNext}>Next</Button>
                  )}

                </Box>
              )}
              {active === 3 && index === active && (
                <Box style={{ marginTop: "45px" }}>
                  <FormControl isRequired>
                    <Input
                      type="text"
                      value={business_name}
                      onChange={(e) => setBusiness_Name(e.target.value)}
                      placeholder='enter your business_Name'
                    />
                  </FormControl>
                  <FormControl isRequired>
                    <Input
                      type="text"
                      value={license_number}
                      onChange={(e) => setLicense_Number(e.target.value)}
                      placeholder='enter your license_Number'
                    />
                  </FormControl>
                  <FormControl isRequired>
                    <Input
                      type="text"
                      value={tax_id}
                      onChange={(e) => setTax_Id(e.target.value)}
                      placeholder='enter your tax_id'
                    />
                  </FormControl>
                  <FormControl isRequired>
                    <Input
                      type="text"
                      value={business_address}
                      onChange={(e) => setBusiness_Address(e.target.value)}
                      placeholder='enter your business_address'
                    />
                  </FormControl>
                  <FormControl isRequired>
                    <Input
                      type="text"
                      value={business_industry}
                      onChange={(e) => setBusiness_Industry(e.target.value)}
                      placeholder='enter your business_industry'
                    />
                  </FormControl>
                  <FormControl isRequired>
                    <Input
                      type="text"
                      value={business_description}
                      onChange={(e) => setBusiness_Description(e.target.value)}
                      placeholder='enter your business_description'
                    />
                  </FormControl>


                  <br />
                  <Button onClick={handlePrev} >Previous</Button>
                  {active < steps.length - 1 && (
                    <Button onClick={handleNext}>Next</Button>
                  )}

                </Box>
              )}

            </Step>
          ))}
        </Stepper>
        {active === steps.length - 1 && (
          <Button className='addPropertybutton' _hover={{ bg: "green", color: "white" }} style={{
            marginTop: "40%", width: "30%",
            margin: "auto", fontSize: "24px"
          }} onClick={handleEditTentant}>update</Button>
        )}
      </Stack>
    </div>
  )
}

export default EditTentant