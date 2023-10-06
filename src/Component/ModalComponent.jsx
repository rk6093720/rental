import React, { useState } from 'react';
import {
    Button,
    FormControl,
    Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Select,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
    Text,
    useDisclosure,
} from "@chakra-ui/react";
import { useDispatch } from 'react-redux';
import { getUnit, postUnit } from '../Redux/Property/action';

const ModalComponent = () => {
    const [unit, setUnit] = useState("");
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [unitName, setUnitName] = useState("");
    const [floor, setFloor] = useState("");
    const [unitType, setUnitType] = useState("");
    const [amount, setAmount] = useState(0);
    const [bedRoom, setBedRoom] = useState(0);
    const [bathRoom, setBathRoom] = useState(0);
    const [totalRoom, setTotalRoom] = useState(0);
    const [squareFoot, setSquareFoot] = useState(0);
    const [tabIndex, setTabIndex] = useState(0);
    const dispatch = useDispatch();
    const handleContinue = async () => {
        if (tabIndex === 0) {
            const payload = {
                unitName,
                floor,
                unitType,
                amount,
                bedRoom,
                bathRoom,
                totalRoom,
                squareFoot,
            };
           await dispatch(postUnit(payload))
           .then(()=> dispatch(getUnit()))
        } else if (tabIndex === 1) {
            const payload1 = {
                unitName,
                floor,
                unitType,
                amount,
                totalRoom,
                squareFoot,
            };
        await dispatch(postUnit(payload1))
        .then(()=> dispatch(getUnit()))
        }
        onClose();
    };

    return (
        <div>
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
                        <Button variant='ghost' onClick={handleContinue}>
                            Continue
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </div>
    );
};

export default ModalComponent;
