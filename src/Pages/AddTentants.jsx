import React, { useState } from 'react';
import {Box, Button, FormControl, Input, Stack, Step, StepDescription, StepIcon, StepIndicator, StepNumber, StepSeparator, StepStatus, StepTitle, Stepper, Select} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { getProperty, postProperty } from '../Redux/Property/action';
const steps = [
    { title: 'Information', description: 'Contact Info' },
    { title: 'kind of Relation', description: 'Relation' },
    { title: 'Employee', description: 'Employee' },
    { title: 'business', description: 'Business' },
]
const AddTentants = () => {
    const [active, setActive] = useState(0);
    const dispatch = useDispatch();
    const landlord = useSelector((state) => state.App.landlord);
    
    const handleAddProperty = async () => {
        // const payload = {
           
        // };
        // try {
        //     await dispatch(postProperty(payload));
        //     await dispatch(getProperty());
        // } catch (error) {
        //     console.log(error);
        // }
    };

    const handlePrev = () => {
        setActive((active) => active - 1)// Go to the previous step
    };
    const handleNext = () => {
        setActive((active) => active + 1) // Go to the next step
    };


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
                                            <Select placeholder='enter tentant-type'>
                                                <option value="Business">Business</option>
                                                <option value="Individual">Individual</option>
                                            </Select>
                                        </FormControl>
                                        <FormControl isRequired>
                                            <Input
                                                type='text'
                                                // value={firstName}
                                                // onChange={(e) => (e.target.value)}
                                                placeholder='enter your firstName'
                                            />
                                        </FormControl>
                                        <FormControl isRequired>
                                            <Input
                                                type='text'
                                                // value={lastName}
                                                // onChange={(e) =>(e.target.value)}
                                                placeholder='enter your lastName'
                                            />
                                        </FormControl>
                                        <FormControl isRequired>
                                            <Input
                                                type='text'
                                                // value={firstName}
                                                // onChange={(e) => handleUnit(index, e.target.value)}
                                                placeholder='enter your firstName'
                                            />
                                        </FormControl>
                                        <FormControl>
                                            <Select placeholder='enter your gender'>
                                                <option value="male">male</option>
                                           <option value="female">female</option>
                                          <option value="other">other</option>
                                            </Select>
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
                                <Button onClick={handlePrev} >Previous</Button>
                                {active < steps.length - 1 && (
                                    <Button onClick={handleNext}>Next</Button>
                                )}

                            </Box>
                        )}
                        {active === 2 && index === active && (
                            <Box style={{ marginTop: "45px" }}>
                           
                                <br />
                                <Button onClick={handlePrev} >Previous</Button>
                                {active < steps.length - 1 && (
                                    <Button onClick={handleNext}>Next</Button>
                                )}

                            </Box>
                        )}
                        {active === 3 && index === active && (
                            <Box style={{ marginTop: "45px" }}>
                             
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
                }} onClick={handleAddProperty}>Submit</Button>
            )}
        </Stack>
    );
}
export default AddTentants;
