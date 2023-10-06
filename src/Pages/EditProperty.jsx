import React, { useState } from 'react';
import { Box, Button, FormControl, Input, Select, Stack, Step, StepDescription, StepIcon, StepIndicator, StepNumber, StepSeparator, StepStatus, StepTitle, Stepper } from '@chakra-ui/react';
const steps = [
  { title: 'PropertyDetails', description: 'Contact Info' },
  { title: 'PaymentSetting', description: 'Payment for Rooms' },
  { title: 'Extra Charges', description: 'Extra Charge of Rooms' },
  { title: 'Late Fee', description: 'Late fine Rooms' },
  { title: 'Utilities', description: 'Utlitity' },
]
const EditProperty = () => {
  const [propertyName, setPropertyName] = useState("");
  const [propertyCode, setPropertyCode] = useState("");
  const [address, setAddress] = useState("");
  const [location, setLocation] = useState("");
  const [pType, setPType] = useState("");
  const [agentC, setAgentC] = useState(0);
  const [agentType, setAgentType] = useState("");
  const [paymentType, setPaymentType] = useState("");
  const [land, setLand] = useState("");
  const [pDescription, setPDescription] = useState('');
  const [extraFee, setExtraFee] = useState("");
  const [valueCharge, setValueCharge] = useState("");
  const [charge, setCharge] = useState("");
  const [recurrence, setRecurrence] = useState("");
  const [lateFine, setLateFine] = useState("");
  const [extraCharge, setExtraCharge] = useState("");
  const [typesCharge, setTypesCharge] = useState("");
  const [gracePeriod, setGracePeriod] = useState(0);
  const [frequency, setFrequency] = useState("");
  const [utilityName, setUtilityName] = useState("");
  const [cost, setCost] = useState(0);
  const [bill, setBill] = useState(0);
  const [active, setActive] = useState(0)
  const handlePrev = () => {
    setActive((active) => active - 1)// Go to the previous step
  };
  const handleNext = () => {
    setActive((active) => active + 1) // Go to the next step
  };
  const handleLand = () => {

  }
  return (
    <Stack style={{ border: "1px solid black", width: "100%", height: "700px", marginTop: "15px" }}>
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
                    value={propertyName} onChange={(e) => setPropertyName(e.target.value)} placeholder='enter your property Name' />
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
                  <Select value={pType} onChange={(e) => setPType(e.target.value)} placeholder='select your property type'>
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
                <Button onClick={handlePrev} isDisabled={index === 0}>Previous</Button>
                {active < steps.length - 1 && (
                  <Button onClick={handleNext}>Next</Button>
                )}

              </Box>
            )}
            {active === 1 && index === active && (
              <Box style={{ marginTop: "45px" }}>
                <FormControl isRequired>
                  <Input type='number' value={agentC} onChange={(e) => setAgentC(e.target.value)} placeholder='enter your agent commission value' />
                </FormControl>
                <br />
                <FormControl isRequired>
                  <Select value={agentType} onChange={(e) => setAgentType(e.target.value)} placeholder='Agent commission type'>
                    <option value="fixedValue">fixedValue</option>
                    <option value="% of Total Rent">% of Total Rent</option>
                    <option value="% of Total collected Rent">% of Total collected Rent</option>
                  </Select>
                </FormControl>
                <br />
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
                <br />
                <Button onClick={handlePrev} >Previous</Button>
                <br />
                {active < steps.length - 1 && (
                  <Button onClick={handleNext}>Next</Button>
                )}

              </Box>
            )}
            {active === 2 && index === active && (
              <Box style={{ marginTop: "45px" }}>
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
                <br />
                <Button onClick={handlePrev} >Previous</Button>
                {active < steps.length - 1 && (
                  <Button onClick={handleNext}>Next</Button>
                )}

              </Box>
            )}
            {active === 4 && index === active && (
              <Box style={{ marginTop: "45px" }}>
                <FormControl isRequired>
                  <Select value={utilityName} onChange={(e) => setUtilityName(e.target.value)} placeholder='Utility Name'>
                    <option value="waterBill">waterBill</option>
                    <option value="electricityBill">electricityBill</option>
                    <option value="security">security</option>
                    <option value="garbage">garbage</option>
                  </Select>
                </FormControl>
                <br />
                <FormControl isRequired>
                  <Input type='number' value={cost} onChange={(e) => setCost(e.target.value)} placeholder='variable cost' />
                </FormControl>
                <br />
                <FormControl isRequired>
                  <Input type='number' value={bill} onChange={(e) => setBill(e.target.value)} placeholder='fixed price of bill' />
                </FormControl>
                <br />
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
        <Button className='addPropertybutton' _hover={{ bg: "green", color: "white" }} style={{ marginTop: "10%", width: "30%", margin: "auto", fontSize: "24px" }}>Submit</Button>
      )}
    </Stack>
  );
}
export default EditProperty;
