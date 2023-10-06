import React, { useState } from 'react'
import { Button, FormControl, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Select,  Tab, TabList, TabPanel, TabPanels, Tabs, Text, useDisclosure, useStatStyles} from "@chakra-ui/react"
const ModalComponent = () => {
    const [unit,setUnit]= useState([]);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [unitName,setUnitName]= useState("");
    const [floor,setFloor]= useState("");
    const [unitType,setUnitType]= useState("");
    const [amount,setAmount]= useState(0);
    const [bedRoom,setBedRoom]= useState(0);
    const [bathRoom,setBathRoom]= useState(0);
    const [totalRoom,setTotalRoom]= useState(0);
    const [squareRoot,setSquareRoot]= useState(0);

  return (
    <div>
          <FormControl isRequired>
              <Input type='number' onClick={onOpen} value={unit} onChange={(e) => setUnit(e.target.value)} placeholder='enter your unit' />
          </FormControl>
          <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent>
                  <ModalHeader>Unit Detail</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                      <Tabs variant='enclosed'>
                          <TabList>
                              <Tab>Residental</Tab>
                              <Tab>Commericial</Tab>
                          </TabList>
                          <TabPanels>
                              <TabPanel>
                                  <Input type='text' placeholder='enter your unit name' />
                                  <br />
                                  <Input type='number' placeholder='enter your unit floor' />
                                  <br />
                                  <Input type='number' placeholder='enter your Rent Amount' />
                                  <br />
                                  <Select placeholder='enter your unit Type'>
                                      <option value="TwoBedRoom">TwoBedRoom</option>
                                      <option value="SingleRoom">SingleRoom</option>
                                      <option value="villa">villa</option>
                                      <option value="BigHall">BigHall</option>
                                  </Select>
                                  <Input type="number" placeholder='Bedroom' />
                                  <Input type='number' placeholder='Bathroom' />
                                  <Input type="number" placeholder='total room' />
                                  <Input type="number" placeholder='square foot' />
                              </TabPanel>
                              <TabPanel>
                                  <Input type='text' placeholder='enter your unit name' />
                                  <br />
                                  <Input type='number' placeholder='enter your unit floor' />
                                  <br />
                                  <Input type='number' placeholder='enter your Rent Amount' />
                                  <br />
                                  <Select placeholder='enter your unit Type'>
                                      <option value="TwoBedRoom">TwoBedRoom</option>
                                      <option value="SingleRoom">SingleRoom</option>
                                      <option value="villa">villa</option>
                                      <option value="BigHall">BigHall</option>
                                  </Select>

                                  <Input type="number" placeholder='total room' />
                                  <Input type="number" placeholder='square foot' />
                              </TabPanel>
                          </TabPanels>
                      </Tabs>
                  </ModalBody>
                  <ModalFooter>
                      <Button colorScheme='blue' mr={3} onClick={onClose}>
                          Close
                      </Button>
                      <Button variant='ghost'>Continue</Button>
                  </ModalFooter>
              </ModalContent>
          </Modal>
    </div>
  )
}

export default ModalComponent