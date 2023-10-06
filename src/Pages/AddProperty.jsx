import React, { useState } from 'react';
import { Box, Button, FormControl, Input, Stack, Step, StepDescription, StepIcon, StepIndicator, StepNumber, StepSeparator, StepStatus, StepTitle, Stepper,Select} from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { getProperty, postProperty } from '../Redux/Property/action';
import ModalComponent from '../Component/ModalComponent';
import PaymentSetting from '../Component/PaymentSetting';
import ExtraCharge from '../Component/ExtraCharge';
import LateFineComp from '../Component/LateFineComp';
import UtilityComponent from '../Component/UtilityComponent';
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
    const [agentC,setAgentC]=useState(0);
    const [agentType,setAgentType]= useState("");
    const [paymentType,setPaymentType]= useState("");
    const [unit,setUnit]= useState("")
    const [land,setLand]= useState("");
    const [pDescription,setPDescription]= useState('');
    const [extraFee,setExtraFee]= useState("");
    const [valueCharge,setValueCharge]= useState("");
    const [charge,setCharge]= useState("");
    const [recurrence,setRecurrence]= useState("");
    const [lateFine,setLateFine]=useState("");
    const [extraCharge,setExtraCharge]=useState("");
    const [typesCharge,setTypesCharge]= useState("");
    const [gracePeriod,setGracePeriod]= useState(0);
    const [frequency,setFrequency]= useState("");
    const [utilityName,setUtilityName]=useState("");
    const [cost,setCost]=useState(0);
    const [bill,setBill]=useState(0);
    const [active,setActive]= useState(0);
    const dispatch = useDispatch();
    const [modalComponents, setModalComponents] = useState([]);
    const [paymentSettings,setPaymentSettings]= useState([]);
    const [extraComponents,setExtraComponents]=useState([]);
    const [lateFineComponents,setLateFineComponents]=useState([]);
    const [utilityComponents,setUtilityComponents]= useState([]);
    const handleAddModal = () => {
        // Add a new modal component to the list
        setModalComponents([...modalComponents, <ModalComponent key={modalComponents.length} />]);
    };
    const handleDeleteModal = (indexToDelete) => {
        // Remove the modal component at the specified index
        const updatedModalComponents = modalComponents.filter((_, index) => index !== indexToDelete);
        setModalComponents(updatedModalComponents);
    };
    const handlePayment=()=>{
        setPaymentSettings([...paymentSettings, <PaymentSetting key={paymentSettings.length} paymentType={paymentType} setPaymentType={setPaymentType} pDescription={pDescription} setPDescription={setPDescription} />])
    }
    const handleDeletePaymentModal=(indexDelete)=>{
        const updatePayment = paymentSettings.filter((_, index)=> index !== indexDelete);
        setPaymentSettings(updatePayment);
    }
    const handleExtra = () =>{
       setExtraComponents([...extraComponents, <ExtraCharge key={extraComponents.length} extraFee={extraFee} setExtraFee={setExtraFee} valueCharge={valueCharge} setValueCharge={setValueCharge} charge={charge} setCharge={setCharge} recurrence={recurrence} setRecurrence={setRecurrence}/>])
    }
    const handleDeleteExtraModal = (indexExtra)=>{
        const updateExtra = extraComponents.filter((_, index)=> index !== indexExtra);
        setExtraComponents(updateExtra)
    }
    const handleLateFine =()=>{
      setLateFineComponents([...lateFineComponents, <LateFineComp key={lateFineComponents.length} lateFine={lateFine} setLateFine={setLateFine} extraCharge={extraCharge} setExtraCharge={setExtraCharge} typesCharge={typesCharge} setTypesCharge={setTypesCharge} gracePeriod={gracePeriod} setGracePeriod={setGracePeriod} frequency={frequency} setFrequency={setFrequency}/>])
    }
    const handleDeletLateModal=(indexLate)=>{
        const updateLateFine = lateFineComponents.filter((_, index)=> index !== indexLate);
        setLateFineComponents(updateLateFine);
    }
    const handleUtility = () =>{
       setUtilityComponents([...utilityComponents, <UtilityComponent key={utilityComponents.length} cost={cost} setCost={setCost} bill={bill} setBill={setBill} utilityName={utilityName} setUtilityName={setUtilityName}/>])
    }
    const handleDeletUtilityModal=(indexUtility)=>{
         const updateUtility = utilityComponents.filter((_, index)=> index !== indexUtility);
         setUtilityComponents(updateUtility)
    }
    const handleAddProperty= async()=>{
        const payload={
            propertyName,
            propertyCode,
            address,
            location, 
             pType, 
            agentC, 
            agentType, 
            paymentType ,
            unit,
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
            bill, 
        }
       await dispatch(postProperty(payload))
       .then(()=> dispatch(getProperty()))
    }
    const handlePrev = () => {
        setActive((active)=> active - 1)// Go to the previous step
    };
    const handleNext = () => {
        setActive((active)=> active + 1) // Go to the next step
    };
    const handleLand=()=>{

    }
    // <PaymentSetting  />
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
                                {modalComponents.map((modal, modalIndex) => (
                                    <div key={modalIndex}>
                                        {modal}
                                        <Button onClick={() => handleDeleteModal(modalIndex)}>Delete Modal</Button>
                                    </div>
                                ))}
                                <Button onClick={handleAddModal}>Add another field</Button>
                                 
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
                                {paymentSettings.map((payment, paymentIndex) => (
                                    <div key={paymentIndex}>
                                        {payment}
                                        <Button onClick={() => handleDeletePaymentModal(paymentIndex)}>Delete Modal</Button>
                                    </div>
                                ))}
                                <Button onClick={handlePayment}>Add another field</Button>

                                <br/>
                                <Button onClick={handlePrev} >Previous</Button>
                                {active < steps.length - 1 && (
                                    <Button onClick={handleNext}>Next</Button>
                                )}

                            </Box>
                        )}
                        {active === 2 && index === active && (
                            <Box style={{ marginTop: "45px" }}>
                                {extraComponents.map((extra, extraIndex) => (
                                    <div key={extraIndex}>
                                        {extra}
                                        <Button onClick={() => handleDeleteExtraModal(extraIndex)}>Delete Modal</Button>
                                    </div>
                                ))}
                                <Button onClick={handleExtra}>Add another field</Button>

                               <br/>
                                <Button onClick={handlePrev} >Previous</Button>
                                {active < steps.length - 1 && (
                                    <Button onClick={handleNext}>Next</Button>
                                )}

                            </Box>
                        )}
                        {active === 3 && index === active && (
                            <Box style={{ marginTop: "45px" }}>
                                {lateFineComponents.map((late, lateIndex) => (
                                    <div key={lateIndex}>
                                        {late}
                                        <Button onClick={() => handleDeletLateModal(lateIndex)}>Delete Modal</Button>
                                    </div>
                                ))}
                                <Button onClick={handleLateFine}>Add another field</Button>
                                <br/>
                                <Button onClick={handlePrev} >Previous</Button>
                                {active < steps.length - 1 && (
                                    <Button onClick={handleNext}>Next</Button>
                                )}

                            </Box>
                        )}
                        {active === 4 && index === active && (
                            <Box style={{ marginTop: "45px" }}>
                                {utilityComponents.map((utility, utilityIndex) => (
                                    <div key={utilityIndex}>
                                        {utility}
                                        <Button onClick={() => handleDeletUtilityModal(utilityIndex)}>Delete Modal</Button>
                                    </div>
                                ))}
                                <Button onClick={handleUtility}>Add another field</Button>
                                <br/>
                                <Button onClick={handlePrev} >Previous</Button>
                                {/* {active < steps.length - 1 && (
                                    <Button  onClick={handleNext}>Next</Button>
                                )} */}
                            </Box>
                        )}
                    </Step>
                ))}
            </Stepper>
            {active === steps.length - 1 && (
                <Button className='addPropertybutton' _hover={{bg:"green",color:"white"}} style={{marginTop:"10%", width:"30%", margin:"auto",fontSize:"24px"}} onClick={handleAddProperty}>Submit</Button>
            )}
        </Stack>
    );
}
export default AddProperty;
