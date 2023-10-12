import React, { useEffect, useState } from 'react';
import {
  Box, Button, FormControl, Input, Stack, Step, StepDescription, StepIcon, StepIndicator, StepNumber, StepSeparator, StepStatus, StepTitle, Stepper, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Select, Tab, TabList, TabPanel, TabPanels, Tabs, Text, useDisclosure,
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { editProperty, getProperty } from '../Redux/Property/action';
import { useNavigate, useParams } from 'react-router-dom';
const steps = [
  { title: 'PropertyDetails', description: 'Contact Info' },
  { title: 'PaymentSetting', description: 'Payment for Rooms' },
  { title: 'Extra Charges', description: 'Extra Charge of Rooms' },
  { title: 'Late Fee', description: 'Late fine Rooms' },
  { title: 'Utilities', description: 'Utlitity' },
]
const EditProperty = () => {
  const {id}= useParams();
  const [propertyname, setPropertyName] = useState("");
  const [propertyCode, setPropertyCode] = useState("");
  const [address, setAddress] = useState("");
  const [location, setLocation] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [agentCommission, setAgentCommission] = useState("");
  const [agentCommissionType, setAgentCommissionType] = useState("")
  const [active, setActive] = useState(0);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [tabIndex, setTabIndex] = useState(0);
  const dispatch = useDispatch();
  const [land, setLandlord] = useState("");
  const landlord = useSelector((state) => state.App.landlord);
  const property = useSelector((state) => state.Property.properties)
  const [late, setLate] = useState([]);
  const [modals, setModals] = useState([]);
  const [payment, setPayment] = useState([]);
  const [extra, setExtra] = useState([]);
  const [utilities, setUtilities] = useState([]);
  const navigate= useNavigate();
  const [currentProperty,setCurrentProperty]= useState({});
  const handleModal = () => {
    const newModals = {
      unit: "",
      unitName: "",
      floor: "",
      amount: "",
      unitType: "",
      bedRoom: "",
      bathRoom: "",
      totalRoom: "",
      squareFoot: "",
    }
    setModals([...modals, newModals])
  }
  const handlePayment = () => {
    const newPayment = {
      paymentType: "",
      pDescription: "",
    }
    setPayment([...payment, newPayment])
  }
  const handleAddExtra = () => {
    const newExtra = {
      extraFee: "",
      valueCharge: "",
      charge: "",
      recurrence: "",
    }
    setExtra([...extra, newExtra])
  }
  const handleAddLateFine = () => {
    const newLateFine = {
      lateFine: "",
      extraCharge: "",
      typesCharge: "",
      gracePeriod: "",
      frequency: "",
    };
    setLate([...late, newLateFine]);
  }
  const handleAddUtility = () => {
    const newUtility = {
      utilityName: '',
      cost: '',
      bill: '',
    };
    setUtilities([...utilities, newUtility]);
  };
  const handleDeleteModal = (index) => {
    const updateModal = [...modals];
    updateModal.splice(index, 1);
    setModals(updateModal);
  }
  const handleDeletePayment = (index) => {
    const updatePayment = [...payment];
    updatePayment.splice(index, 1);
    setPayment(updatePayment)
  }
  const handleDeleteExtra = (index) => {
    const updateExtra = [...extra];
    updateExtra.splice(index, 1);
    setExtra(updateExtra)
  }

  const handleDeleteLatefine = (index) => {
    const updateLatefine = [...late];
    updateLatefine.splice(index, 1);
    setLate(updateLatefine)
  }

  const handleDeleteUtility = (index) => {
    const updatedUtilities = [...utilities];
    updatedUtilities.splice(index, 1);
    setUtilities(updatedUtilities);
  };
  const handleUnit = (index, value) => {
    const updateModal = [...modals];
    updateModal[index].unit = value;
    setPayment(updateModal)
  }
  const handleUnitName = (index, value) => {
    const updateModal = [...modals];
    updateModal[index].unitName = value;
    setPayment(updateModal)
  }
  const handleFloor = (index, value) => {
    const updateModal = [...modals];
    updateModal[index].floor = value;
    setPayment(updateModal)
  }
  const handleAmount = (index, value) => {
    const updateModal = [...modals];
    updateModal[index].amount = value;
    setPayment(updateModal)

  }
  const handleUnitType = (index, value) => {
    const updateModal = [...modals];
    updateModal[index].unitType = value;
    setPayment(updateModal)

  }
  const handleBedRoom = (index, value) => {
    const updateModal = [...modals];
    updateModal[index].bedRoom = value;
    setPayment(updateModal)

  }
  const handleBathRoom = (index, value) => {
    const updateModal = [...modals];
    updateModal[index].bathRoom = value;
    setPayment(updateModal)

  }
  const handleTotalRoom = (index, value) => {
    const updateModal = [...modals];
    updateModal[index].totalRoom = value;
    setPayment(updateModal)

  }
  const handleSquareFoot = (index, value) => {
    const updateModal = [...modals];
    updateModal[index].squareFoot = value;
    setPayment(updateModal)

  }
  const handlePaymentType = (index, value) => {
    const updatePayment = [...payment];
    updatePayment[index].paymentType = value;
    setPayment(updatePayment)
  }
  const handlePDescription = (index, value) => {
    const updatePayment = [...payment];
    updatePayment[index].pDescription = value;
    setPayment(updatePayment)
  }
  const handleExtraFeeChange = (index, value) => {
    const updateExtraCharge = [...extra];
    updateExtraCharge[index].extraFee = value;
    setExtra(updateExtraCharge)
  }
  const handleValueChargeChange = (index, value) => {
    const updateExtraCharge = [...extra];
    updateExtraCharge[index].valueCharge = value;
    setExtra(updateExtraCharge)
  }
  const handleChargeChange = (index, value) => {
    const updateExtraCharge = [...extra];
    updateExtraCharge[index].charge = value;
    setExtra(updateExtraCharge)
  }
  const handleRecurrence = (index, value) => {
    const updateExtraCharge = [...extra];
    updateExtraCharge[index].recurrence = value;
    setExtra(updateExtraCharge)
  }
  const handleLateFineChange = (index, value) => {
    const updateLatefine = [...late];
    updateLatefine[index].lateFine = value;
    setLate(updateLatefine)
  }
  const handleExtraChargeChange = (index, value) => {
    const updateLatefine = [...late];
    updateLatefine[index].extraCharge = value;
    setLate(updateLatefine)
  }
  const handleTypesChargeChange = (index, value) => {
    const updateLatefine = [...late];
    updateLatefine[index].typesCharge = value;
    setLate(updateLatefine)
  }
  const handleGracePeriodChange = (index, value) => {
    const updateLatefine = [...late];
    updateLatefine[index].gracePeriod = value;
    setLate(updateLatefine)
  }
  const handleFrequencyChange = (index, value) => {
    const updateLatefine = [...late];
    updateLatefine[index].frequency = value;
    setLate(updateLatefine)
  }
  const handleUtilityNameChange = (index, value) => {
    const updatedUtilities = [...utilities];
    updatedUtilities[index].utilityName = value;
    setUtilities(updatedUtilities);
  };

  const handleCostChange = (index, value) => {
    const updatedUtilities = [...utilities];
    updatedUtilities[index].cost = value;
    setUtilities(updatedUtilities);
  };

  const handleBillChange = (index, value) => {
    const updatedUtilities = [...utilities];
    updatedUtilities[index].bill = value;
    setUtilities(updatedUtilities);
  };
  const handleEditProperty = async () => {
    const payload = {
      propertyname,
      propertyCode,
      address,
      location,
      propertyType,
      agentCommission,
      agentCommissionType,
      modals,
      payment,
      extra,
      late,
      utilities
    };
    try {
      await dispatch(editProperty(id,payload));
      await dispatch(getProperty());
      navigate("/properties")
    } catch (error) {
      console.log(error);
    }
  };

  const handlePrev = () => {
    setActive((active) => active - 1)// Go to the previous step
  };
  const handleNext = () => {
    setActive((active) => active + 1) // Go to the next step
  };
  const handleLand = () => {
    //  const newLand = landlord.find(()
  }

  useEffect(()=>{
    if (property.length === 0){
      dispatch(getProperty())
    }
  },[property.length, dispatch]);
  useEffect(()=>{
    if(id){
          const propertyById = property.find((item)=> item._id === id);
          propertyById && setCurrentProperty(propertyById);
          propertyById && setPropertyName(propertyById.propertyname);
          propertyById && setPropertyCode(propertyById.propertyCode);
          propertyById && setPropertyType(propertyById.propertyType);
          propertyById && setAddress(propertyById.address);
          propertyById && setLocation(propertyById.location);
          propertyById && setAgentCommission(propertyById.agentCommission);
          propertyById && setAgentCommissionType(propertyById.agentCommissionType);
          propertyById && setModals(propertyById.modals);
          propertyById && setPayment(propertyById.payment);
          propertyById && setExtra(propertyById.extra);
          propertyById && setLate(propertyById.late);
          propertyById && setUtilities(propertyById.utilities);
    }
  },[id, property])
  console.log(propertyname,
    propertyCode,
    address,
    location,
    propertyType,
    agentCommission,
    agentCommissionType,
    modals,
    payment,
    extra,
    late,
    utilities);
  return (
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
                  <Input type='text'
                    value={propertyname} onChange={(e) => setPropertyName(e.target.value)} placeholder='enter your property Name' />
                </FormControl>
                <br />
                <FormControl isRequired>
                  <Input type="text"
                    value={propertyCode} onChange={(e) => setPropertyCode(e.target.value)} placeholder='enter your property code' />
                </FormControl>
                <br />
                <FormControl isRequired>
                  <Input type='text'
                    value={address} onChange={(e) => setAddress(e.target.value)} placeholder='enter your address' />
                </FormControl>
                <br />
                <FormControl isRequired>
                  <Input type='text' value={location} onChange={(e) => setLocation(e.target.value)} placeholder='enter your location' />
                </FormControl>
                <br />
                <FormControl isRequired>
                  <Select value={propertyType} onChange={(e) => setPropertyType(e.target.value)} placeholder='select your property type'>
                    <option value="Other">Other</option>
                    <option value="Apartment">Apartment</option>
                    <option value="Home">Home</option>
                    <option value="commercial">commercial</option>
                    <option value="shop">Shop</option>
                  </Select>
                </FormControl>
                <br />
                <FormControl isRequired>
                  <Input type="text" value={land} onChange={handleLand} placeholder='find Landlord' />
                </FormControl>
                <br />
                {modals.map((modal, index) => (
                  <div key={index}>
                    <FormControl isRequired>
                      <Input
                        type='number'
                        onClick={onOpen}
                        value={modal.unit}
                        onChange={(e) => handleUnit(index, e.target.value)}
                        placeholder='enter your unit'
                      />
                    </FormControl>
                    <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
                      <ModalOverlay />
                      <ModalContent>
                        <ModalHeader>Unit Detail</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                          <Tabs variant='enclosed' index={tabIndex} onChange={(index) => setTabIndex(index)}>
                            <TabList>
                              <Tab>Residential</Tab>
                              <Tab>Commercial</Tab>
                            </TabList>
                            <TabPanels>
                              <TabPanel>
                                <Input
                                  type='text'
                                  value={modal.unitName}
                                  onChange={(e) => handleUnitName(index, e.target.value)}
                                  placeholder='enter your unit name'
                                />
                                <br />
                                <Input
                                  type='number'
                                  value={modal.floor}
                                  onChange={(e) => handleFloor(index, e.target.value)}
                                  placeholder='enter your unit floor'
                                />
                                <br />
                                <Input
                                  type='number'
                                  value={modal.amount}
                                  onChange={(e) => handleAmount(index, e.target.value)}
                                  placeholder='enter your Rent Amount'
                                />
                                <br />
                                <Select
                                  value={modal.unitType}
                                  onChange={(e) => handleUnitType(index, e.target.value)}
                                  placeholder='enter your unit Type'
                                >
                                  <option value="TwoBedRoom">TwoBedRoom</option>
                                  <option value="SingleRoom">SingleRoom</option>
                                  <option value="villa">villa</option>
                                  <option value="BigHall">BigHall</option>
                                </Select>
                                <Input
                                  type="number"
                                  value={modal.bedRoom}
                                  onChange={(e) => handleBedRoom(index, e.target.value)}
                                  placeholder='Bedroom'
                                />
                                <Input
                                  type='number'
                                  value={modal.bathRoom}
                                  onChange={(e) => handleBathRoom(index, e.target.value)}
                                  placeholder='Bathroom'
                                />
                                <Input
                                  type="number"
                                  value={modal.totalRoom}
                                  onChange={(e) => handleTotalRoom(index, e.target.value)}
                                  placeholder='total room'
                                />
                                <Input
                                  type="number"
                                  value={modal.squareFoot}
                                  onChange={(e) => handleSquareFoot(index, e.target.value)}
                                  placeholder='square foot'
                                />
                              </TabPanel>
                              <TabPanel>
                                <Input
                                  type='text'
                                  value={modal.unitName}
                                  onChange={(e) => handleUnitName(index, e.target.value)}
                                  placeholder='enter your unit name'
                                />
                                <br />
                                <Input
                                  type='number'
                                  value={modal.floor}
                                  onChange={(e) => handleFloor(index, e.target.value)}
                                  placeholder='enter your unit floor'
                                />
                                <br />
                                <Input
                                  type='number'
                                  value={modal.amount}
                                  onChange={(e) => handleAmount(index, e.target.value)}
                                  placeholder='enter your Rent Amount'
                                />
                                <br />
                                <Select
                                  value={modal.unitType}
                                  onChange={(e) => handleUnitType(index, e.target.value)}
                                  placeholder='enter your unit Type'
                                >
                                  <option value="TwoBedRoom">TwoBedRoom</option>
                                  <option value="SingleRoom">SingleRoom</option>
                                  <option value="villa">villa</option>
                                  <option value="BigHall">BigHall</option>
                                </Select>

                                <Input
                                  type="number"
                                  value={modal.totalRoom}
                                  onChange={(e) => handleTotalRoom(index, e.target.value)}
                                  placeholder='total room'
                                />
                                <Input
                                  type="number"
                                  value={modal.squareFoot}
                                  onChange={(e) => handleSquareFoot(index, e.target.value)}
                                  placeholder='square foot'
                                />
                              </TabPanel>
                            </TabPanels>
                          </Tabs>
                        </ModalBody>
                        <ModalFooter>
                          <Button colorScheme='blue' mr={3} onClick={onClose}>
                            Close
                          </Button>
                          <Button variant='ghost' onClick={onClose}>
                            Continue
                          </Button>
                        </ModalFooter>
                      </ModalContent>
                    </Modal>
                    <Button onClick={() => handleDeleteModal(index)}>Delete Modal</Button>
                  </div>
                ))}

                <Button onClick={handleModal} >Add Modal</Button>
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
                  <Input type='number' value={agentCommission} onChange={(e) => setAgentCommission(e.target.value)} placeholder='enter your agent commission value' />
                </FormControl>
                <br />
                <FormControl isRequired>
                  <Select value={agentCommissionType} onChange={(e) => setAgentCommissionType(e.target.value)} placeholder='Agent commission type'>
                    <option value="fixedValue">fixedValue</option>
                    <option value="% of Total Rent">% of Total Rent</option>
                    <option value="% of Total collected Rent">% of Total collected Rent</option>
                  </Select>
                </FormControl>
                <br />
                {payment.map((payment, index) => (
                  <div key={index}>
                    <FormControl isRequired>
                      <Select value={payment.paymentType} onChange={(e) => handlePaymentType(index, e.target.value)} placeholder='payment method type'>
                        <option value="Payment of UPI">Payment of UPI</option>
                        <option value="PhonePay">PhonePay</option>
                        <option value="Gst">Gst</option>
                        <option value="GooglePay">vat</option>
                        <option value="Credit Card">Credit Card</option>
                        <option value="Debit Card">Debit Card</option>
                      </Select>
                    </FormControl>
                    <br />
                    <FormControl isRequired>
                      <Input type="text" value={payment.pDescription} onChange={(e) => handlePDescription(index, e.target.value)} placeholder='enter your payment description' />
                    </FormControl>
                    <Button onClick={() => handleDeletePayment(index)}>DeletePayment</Button>
                  </div>

                ))}
                <Button onClick={handlePayment}>AddPayment</Button>

                <br />
                <Button onClick={handlePrev} >Previous</Button>
                {active < steps.length - 1 && (
                  <Button onClick={handleNext}>Next</Button>
                )}

              </Box>
            )}
            {active === 2 && index === active && (
              <Box style={{ marginTop: "45px" }}>
                {extra.map((extra, index) => (
                  <div key={index}>
                    <FormControl isRequired>
                      <Select value={extra.extraFee} onChange={(e) => handleExtraFeeChange(index, e.target.value)} placeholder='types of extra fee'>
                        <option value="processing Fee">processing Fee</option>
                        <option value="Service fee">Service fee</option>
                        <option value="Paytm">Gst</option>
                        <option value="vat">vat</option>
                      </Select>
                    </FormControl>
                    <br />
                    <FormControl isRequired>
                      <Input type='Number' value={extra.valueCharge} onChange={(e) => handleValueChargeChange(index, e.target.value)} placeholder='value charge supplement' />
                    </FormControl>
                    <br />
                    <FormControl isRequired>
                      <Select value={extra.charge} onChange={(e) => handleChargeChange(index, e.target.value)} placeholder='types of charge '>
                        <option value="fixed Value">fixed Value</option>
                        <option value="% of Total Rent">% of Total Rent</option>
                        <option value="% of Total amount over due">% of Total amount over due</option>
                      </Select>
                    </FormControl>
                    <br />
                    <FormControl isRequired>
                      <Select value={extra.recurrence} onChange={(e) => handleRecurrence(index, e.target.value)} placeholder='types of Recurrence'>
                        <option value="one time">one time</option>
                        <option value="period of period">period of period</option>
                      </Select>
                    </FormControl>
                    <Button onClick={() => handleDeleteExtra(index)}>DeleteExtra</Button>
                  </div>
                ))}
                <Button onClick={handleAddExtra}>AddExtra</Button>
                <br />
                <Button onClick={handlePrev} >Previous</Button>
                {active < steps.length - 1 && (
                  <Button onClick={handleNext}>Next</Button>
                )}

              </Box>
            )}
            {active === 3 && index === active && (
              <Box style={{ marginTop: "45px" }}>
                {
                  late.map((late, index) => (
                    <div key={index}>
                      <FormControl isRequired>
                        <Select value={late.lateFine} onChange={(e) => handleLateFineChange(index, e.target.value)} placeholder='types of late fine'>
                          <option value="penalty">penalty</option>
                        </Select>
                      </FormControl>
                      <br />
                      <FormControl isRequired>
                        <Input type='number' value={late.extraCharge} onChange={(e) => handleExtraChargeChange(index, e.target.value)} placeholder='extra charge of late fee ' />
                      </FormControl>
                      <br />
                      <FormControl isRequired>
                        <Select value={late.typesCharge} onChange={(e) => handleTypesChargeChange(index, e.target.value)} placeholder='types of charge '>
                          <option value="fixed Value">fixed Value</option>
                          <option value="% of Total Rent">% of Total Rent</option>
                          <option value="% of Total amount over due">% of Total amount over due</option>
                        </Select>
                      </FormControl>
                      <br />
                      <FormControl isRequired>
                        <Input type='number' value={late.gracePeriod} onChange={(e) => handleGracePeriodChange(index, e.target.value)} placeholder='grace period ' />
                      </FormControl>
                      <br />
                      <FormControl isRequired>
                        <Select value={late.frequency} onChange={(e) => handleFrequencyChange(index, e.target.value)} placeholder='frequency'>
                          <option value="one time">one time</option>
                          <option value="weekly">weekly</option>
                          <option value="daily">daily</option>
                          <option value="monthly">monthly</option>
                          <option value="Bi-weekly">Bi-weekly</option>
                        </Select>
                      </FormControl>
                      <Button onClick={() => handleDeleteLatefine(index)}>DeleteLateFine</Button>
                    </div>
                  ))
                }
                <Button onClick={handleAddLateFine}>AddLateFine</Button>
                <br />
                <Button onClick={handlePrev} >Previous</Button>
                {active < steps.length - 1 && (
                  <Button onClick={handleNext}>Next</Button>
                )}

              </Box>
            )}
            {active === 4 && index === active && (
              <Box style={{ marginTop: "45px" }}>
                {utilities.map((utility, index) => (
                  <div key={index}>
                    <FormControl isRequired>
                      <Select
                        value={utility.utilityName}
                        onChange={(e) => handleUtilityNameChange(index, e.target.value)}
                        placeholder='Utility Name'
                      >
                        <option value="waterBill">waterBill</option>
                        <option value="electricityBill">electricityBill</option>
                        <option value="security">security</option>
                        <option value="garbage">garbage</option>
                      </Select>
                    </FormControl>
                    <br />
                    <FormControl isRequired>
                      <Input
                        type='number'
                        value={utility.cost}
                        onChange={(e) => handleCostChange(index, e.target.value)}
                        placeholder='variable cost'
                      />
                    </FormControl>
                    <br />
                    <FormControl isRequired>
                      <Input
                        type='number'
                        value={utility.bill}
                        onChange={(e) => handleBillChange(index, e.target.value)}
                        placeholder='fixed price of bill'
                      />
                    </FormControl>
                    <Button onClick={() => handleDeleteUtility(index)}>DeleteUtility</Button>
                  </div>
                ))}
                <Button onClick={handleAddUtility}>AddUtility</Button>
                <br />
                <Button onClick={handlePrev}>Previous</Button>
              </Box>
            )}
          </Step>
        ))}
      </Stepper>
      {active === steps.length - 1 && (
        <Button className='addPropertybutton' _hover={{ bg: "green", color: "white" }} style={{
          marginTop: "40%", width: "30%",
          margin: "auto", fontSize: "24px"
        }} onClick={handleEditProperty}>UpdateProperty</Button>
      )}
    </Stack>
  );
}
export default EditProperty;
