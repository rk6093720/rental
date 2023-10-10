import React, { useState } from 'react';
import {
    Box, Button, FormControl, Input, Stack, Step, StepDescription, StepIcon, StepIndicator, StepNumber, StepSeparator, StepStatus, StepTitle, Stepper,Modal,ModalBody,ModalCloseButton,ModalContent,ModalFooter,ModalHeader,ModalOverlay,Select,Tab,TabList,TabPanel,TabPanels,Tabs,Text,useDisclosure,
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import {  getProperty, postProperty } from '../Redux/Property/action';
const steps = [
    { title: 'PropertyDetails', description: 'Contact Info' },
    { title: 'PaymentSetting', description: 'Payment for Rooms' },
    { title: 'Extra Charges', description: 'Extra Charge of Rooms' },
    { title: 'Late Fee', description: 'Late fine Rooms' },
    { title: 'Utilities', description: 'Utlitity' },
]
const AddProperty = () => {
    const [propertyName, setPropertyName]=useState("");
    const [propertyCode,setPropertyCode]= useState("");
    const [address,setAddress]= useState("");
    const [location,setLocation]= useState("");
    const [pType,setPType]= useState(""); 
    const [agentC,setAgentC]= useState("");
    const [agentType,setAgentType]= useState("")
    const [active,setActive]= useState(0);
    const [utilityName] = useState("");
    const [cost] = useState("");
    const [bill] = useState("");
    const [unit, setUnit] = useState("");
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [unitName, setUnitName] = useState("");
    const [floor, setFloor] = useState("");
    const [unitType, setUnitType] = useState("");
    const [amount, setAmount] = useState(0);
    const [lateFine, setLateFine] = useState("");
    const [extraCharge, setExtraCharge] = useState(0);
    const [typesCharge, setTypesCharge] = useState("");
    const [gracePeriod, setGracePeriod] = useState(0);
    const [frequency, setFrequency] = useState("")
    const [bedRoom, setBedRoom] = useState(0);
    const [bathRoom, setBathRoom] = useState(0);
    const [totalRoom, setTotalRoom] = useState(0);
    const [squareFoot, setSquareFoot] = useState(0);
    const [paymentType, setPaymentType] = useState("");
    const [pDescription, setPDescription] = useState("");
    const [extraFee, setExtraFee] = useState("");
    const [valueCharge, setValueCharge] = useState("");
    const [charge, setCharge] = useState("");
    const [recurrence, setRecurrence] = useState("");
    const [tabIndex, setTabIndex] = useState(0);
    const dispatch = useDispatch();
    const [land,setLandlord]= useState("");
    const landlord = useSelector((state)=> state.App.landlord);
    const [late,setLate]= useState([]);
    const [utilities, setUtilities] = useState([]);

    const handleAddUtility = () => {
        const newUtility = {
            utilityName: '',
            cost: '',
            bill: '',
        };
        setUtilities([...utilities, newUtility]);
    };

    const handleDeleteUtility = (index) => {
        const updatedUtilities = [...utilities];
        updatedUtilities.splice(index, 1);
        setUtilities(updatedUtilities);
    };

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
    const handleAddProperty = async () => {
        const payload = {
            propertyName,
            propertyCode,
            address,
            location,
            pType,
            agentC,
            agentType,
            unitName,
            floor,
            amount,
            unitType,
            bedRoom,
            bathRoom,
            totalRoom,
            squareFoot,
            paymentType,
            pDescription,
            extraFee,
            valueCharge,
            charge,
            recurrence,
            lateFine,
            extraCharge,
            typesCharge,
            gracePeriod,
            frequency,
            utilityName,
            cost,
            bill
        };
     await dispatch(postProperty(payload))
     .then(()=> dispatch(getProperty()))
    };
 
    const handlePrev = () => {
        setActive((active)=> active - 1)// Go to the previous step
    };
    const handleNext = () => {
        setActive((active)=> active + 1) // Go to the next step
    };
    const handleLand=()=>{
        //  const newLand = landlord.find(())

    }

    console.log(utilities)
    return (
        <Stack style={{ width:"100%", height:"100vh", marginTop:"15px"}}>
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
                          <Box style={{marginTop:"45px"}}>
                              <FormControl isRequired>
                                <Input type='text'
                                value={propertyName} onChange={(e)=> setPropertyName(e.target.value)} placeholder='enter your property Name' />
                                </FormControl>
                                <br/>
                                <FormControl isRequired>
                                <Input type="text"
                                value={propertyCode} onChange={(e)=> setPropertyCode(e.target.value)} placeholder='enter your property code' />
                                </FormControl>
                                <br/>
                                <FormControl isRequired>
                                <Input type='text'
                                value={address} onChange={(e)=>setAddress(e.target.value)} placeholder='enter your address' />
                                </FormControl>
                                <br/>
                                <FormControl isRequired>
                                <Input type='text' value={location} onChange={(e)=>setLocation(e.target.value)} placeholder='enter your location'/>
                                </FormControl>
                                <br/>
                                <FormControl isRequired>
                                <Select value={pType} onChange={(e)=> setPType(e.target.value)} placeholder='select your property type'>
                                    <option value="Other">Other</option>
                                    <option value="Apartment">Apartment</option>
                                    <option value="Home">Home</option>
                                    <option value="commercial">commercial</option>
                                    <option value="shop">Shop</option>
                                </Select>
                                </FormControl>
                                <br/>
                                <FormControl isRequired>
                                <Input type="text" value={land} onChange={handleLand} placeholder='find Landlord'/>
                                </FormControl>
                                <br/>
                                { modals.map((_, index)=>(
                                        <div key={index}>
                                            <FormControl isRequired>
                                                <Input
                                                    type='number'
                                                    onClick={onOpen}
                                                    value={unit}
                                                    onChange={(e) => setUnit(e.target.value)}
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
                                                                        value={unitName}
                                                                        onChange={(e) => setUnitName(e.target.value)}
                                                                        placeholder='enter your unit name'
                                                                    />
                                                                    <br />
                                                                    <Input
                                                                        type='number'
                                                                        value={floor}
                                                                        onChange={(e) => setFloor(e.target.value)}
                                                                        placeholder='enter your unit floor'
                                                                    />
                                                                    <br />
                                                                    <Input
                                                                        type='number'
                                                                        value={amount}
                                                                        onChange={(e) => setAmount(e.target.value)}
                                                                        placeholder='enter your Rent Amount'
                                                                    />
                                                                    <br />
                                                                    <Select
                                                                        value={unitType}
                                                                        onChange={(e) => setUnitType(e.target.value)}
                                                                        placeholder='enter your unit Type'
                                                                    >
                                                                        <option value="TwoBedRoom">TwoBedRoom</option>
                                                                        <option value="SingleRoom">SingleRoom</option>
                                                                        <option value="villa">villa</option>
                                                                        <option value="BigHall">BigHall</option>
                                                                    </Select>
                                                                    <Input
                                                                        type="number"
                                                                        value={bedRoom}
                                                                        onChange={(e) => setBedRoom(e.target.value)}
                                                                        placeholder='Bedroom'
                                                                    />
                                                                    <Input
                                                                        type='number'
                                                                        value={bathRoom}
                                                                        onChange={(e) => setBathRoom(e.target.value)}
                                                                        placeholder='Bathroom'
                                                                    />
                                                                    <Input
                                                                        type="number"
                                                                        value={totalRoom}
                                                                        onChange={(e) => setTotalRoom(e.target.value)}
                                                                        placeholder='total room'
                                                                    />
                                                                    <Input
                                                                        type="number"
                                                                        value={squareFoot}
                                                                        onChange={(e) => setSquareFoot(e.target.value)}
                                                                        placeholder='square foot'
                                                                    />
                                                                </TabPanel>
                                                                <TabPanel>
                                                                    <Input
                                                                        type='text'
                                                                        value={unitName}
                                                                        onChange={(e) => setUnitName(e.target.value)}
                                                                        placeholder='enter your unit name'
                                                                    />
                                                                    <br />
                                                                    <Input
                                                                        type='number'
                                                                        value={floor}
                                                                        onChange={(e) => setFloor(e.target.value)}
                                                                        placeholder='enter your unit floor'
                                                                    />
                                                                    <br />
                                                                    <Input
                                                                        type='number'
                                                                        value={amount}
                                                                        onChange={(e) => setAmount(e.target.value)}
                                                                        placeholder='enter your Rent Amount'
                                                                    />
                                                                    <br />
                                                                    <Select
                                                                        value={unitType}
                                                                        onChange={(e) => setUnitType(e.target.value)}
                                                                        placeholder='enter your unit Type'
                                                                    >
                                                                        <option value="TwoBedRoom">TwoBedRoom</option>
                                                                        <option value="SingleRoom">SingleRoom</option>
                                                                        <option value="villa">villa</option>
                                                                        <option value="BigHall">BigHall</option>
                                                                    </Select>

                                                                    <Input
                                                                        type="number"
                                                                        value={totalRoom}
                                                                        onChange={(e) => setTotalRoom(e.target.value)}
                                                                        placeholder='total room'
                                                                    />
                                                                    <Input
                                                                        type="number"
                                                                        value={squareFoot}
                                                                        onChange={(e) => setSquareFoot(e.target.value)}
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
                                            <Button onClick={()=> handleDeleteModal(index)}>Delete Modal</Button>
                                    </div>
                                ))}
                                
                                <Button onClick={handleModal} >Add Modal</Button>
                                  <br/>
                                <Button onClick={handlePrev} isDisabled={index === 0}>Previous</Button>
                                {active < steps.length - 1 && (
                                    <Button onClick={handleNext}>Next</Button>
                                )}
                                
                            </Box>
                        )}
                        {active === 1 && index === active && (
                            <Box style={{ marginTop: "45px" }}>
                                <FormControl isRequired>
                                <Input type='number' value={agentC} onChange={(e)=> setAgentC(e.target.value)} placeholder='enter your agent commission value'/>
                                </FormControl>
                                <br/>
                                <FormControl isRequired>
                                <Select value={agentType} onChange={(e)=>setAgentType(e.target.value)} placeholder='Agent commission type'>
                                    <option value="fixedValue">fixedValue</option>
                                    <option value="% of Total Rent">% of Total Rent</option>
                                    <option value="% of Total collected Rent">% of Total collected Rent</option>
                                </Select>
                                </FormControl>
                                <br/>
                                {payment.map((_, index)=>(
                                    <div key={index}>
                                        <FormControl isRequired>
                                            <Select value={paymentType} onChange={(e) => setPaymentType(e.target.value)} placeholder='payment method type'>
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
                                            <Input type="text" value={pDescription} onChange={(e) => setPDescription(e.target.value)} placeholder='enter your payment description' />
                                        </FormControl>
                                        <Button onClick={() => handleDeletePayment(index)}>DeletePayment</Button>
                                    </div>

                                ))}
                                <Button onClick={handlePayment}>AddPayment</Button>

                                <br/>
                                <Button onClick={handlePrev} >Previous</Button>
                                {active < steps.length - 1 && (
                                    <Button onClick={handleNext}>Next</Button>
                                )}

                            </Box>
                        )}
                        {active === 2 && index === active && (
                            <Box style={{ marginTop: "45px" }}>
                                {extra.map((_, index)=>(
                                    <div key={index}>
                                        <FormControl isRequired>
                                            <Select value={extraFee} onChange={(e) => setExtraFee(e.target.value)} placeholder='types of extra fee'>
                                                <option value="processing Fee">processing Fee</option>
                                                <option value="Service fee">Service fee</option>
                                                <option value="Paytm">Gst</option>
                                                <option value="vat">vat</option>
                                            </Select>
                                        </FormControl>
                                        <br />
                                        <FormControl isRequired>
                                            <Input type='Number' value={valueCharge} onChange={(e) => setValueCharge(e.target.value)} placeholder='value charge supplement' />
                                        </FormControl>
                                        <br />
                                        <FormControl isRequired>
                                            <Select value={charge} onChange={(e) => setCharge(e.target.value)} placeholder='types of charge '>
                                                <option value="fixed Value">fixed Value</option>
                                                <option value="% of Total Rent">% of Total Rent</option>
                                                <option value="% of Total amount over due">% of Total amount over due</option>
                                            </Select>
                                        </FormControl>
                                        <br />
                                        <FormControl isRequired>
                                            <Select value={recurrence} onChange={(e) => setRecurrence(e.target.value)} placeholder='types of Recurrence'>
                                                <option value="one time">one time</option>
                                                <option value="period of period">period of period</option>
                                            </Select>
                                        </FormControl>
                                        <Button onClick={()=> handleDeleteExtra(index)}>DeleteExtra</Button>
                                    </div>
                                ))}
                                <Button onClick={handleAddExtra}>AddExtra</Button>
                               <br/>
                                <Button onClick={handlePrev} >Previous</Button>
                                {active < steps.length - 1 && (
                                    <Button onClick={handleNext}>Next</Button>
                                )}

                            </Box>
                        )}
                        {active === 3 && index === active && (
                            <Box style={{ marginTop: "45px" }}>
                                {
                                    late.map((late, index)=>(
                                        <div key={index}>
                                            <FormControl isRequired>
                                                <Select value={lateFine} onChange={(e) => setLateFine(e.target.value)} placeholder='types of late fine'>
                                                    <option value="penalty">penalty</option>
                                                </Select>
                                            </FormControl>
                                            <br />
                                            <FormControl isRequired>
                                                <Input type='number' value={extraCharge} onChange={(e) => setExtraCharge(e.target.value)} placeholder='extra charge of late fee ' />
                                            </FormControl>
                                            <br />
                                            <FormControl isRequired>
                                                <Select value={typesCharge} onChange={(e) => setTypesCharge(e.target.value)} placeholder='types of charge '>
                                                    <option value="fixed Value">fixed Value</option>
                                                    <option value="% of Total Rent">% of Total Rent</option>
                                                    <option value="% of Total amount over due">% of Total amount over due</option>
                                                </Select>
                                            </FormControl>
                                            <br />
                                            <FormControl isRequired>
                                                <Input type='number' value={gracePeriod} onChange={(e) => setGracePeriod(e.target.value)} placeholder='grace period ' />
                                            </FormControl>
                                            <br />
                                            <FormControl isRequired>
                                                <Select value={frequency} onChange={(e) => setFrequency(e.target.value)} placeholder='frequency'>
                                                    <option value="one time">one time</option>
                                                    <option value="weekly">weekly</option>
                                                    <option value="daily">daily</option>
                                                    <option value="monthly">monthly</option>
                                                    <option value="Bi-weekly">Bi-weekly</option>
                                                </Select>
                                            </FormControl>
                                            <Button onClick={()=> handleDeleteLatefine(index)}>DeleteLateFine</Button>
                                        </div>
                                    ))
                                }
                                <Button onClick={handleAddLateFine}>AddLateFine</Button>
                                <br/>
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
                <Button className='addPropertybutton' _hover={{bg:"green",color:"white"}} style={{marginTop:"40%", width:"30%", 
                margin:"auto",fontSize:"24px"}} onClick={handleAddProperty}>Submit</Button>
            )}
        </Stack>
    );
}
export default AddProperty;
