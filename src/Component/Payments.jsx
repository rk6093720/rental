import { AddIcon } from '@chakra-ui/icons';
import { Button,FormControl,Input,Select,Tab, TabList, TabPanel, TabPanels, Table, TableCaption, TableContainer, Tabs, Tbody, Td, Th, Thead, Tr, useDisclosure } from '@chakra-ui/react'
import React, { useState } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'

const  Payments= () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [payment,setPayment]=useState("");
  const [name,setName]=useState("");
  const [extraCharge, setExtraCharge]=useState("");
  const [fixedCharge, setFixedCharge]= useState("");
  const [description,setDescription]=useState("");
  const handleAdd =(e)=>{
    e.preventDefault();

  }
  return (
    <div>
      <Tabs>
        <TabList>
          <Tab>Payment</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
              <Button onClick={onOpen}><AddIcon/>NewPaymentMethod</Button>
            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <form onSubmit={handleAdd}>
              <ModalContent>
                <ModalHeader>Add Payment Method</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <FormControl>
                    <Select value={payment} onChange={(e)=>setPayment(e.target.value)} placeholder='Payment-Type'>
                      <option value="Cash">Cash</option>
                      <option value="PhonePay">PhonePay</option>
                      <option value="Paytm">Paytm</option>
                      <option value="DebitCard">DebitCard</option>
                      <option value="CreditCard">CreditCard</option>
                      <option value="Paypal">Paypal</option>
                    </Select>
                  </FormControl>
                  <br/>
                  <FormControl>
                  <Input type='text' value={name} onChange={(e)=>setName(e.target.value)} placeholder='display name'/>
                    </FormControl>
                    <br/>
                  <FormControl>
                    <Input type='number' value={extraCharge} onChange={(e)=>setExtraCharge(e.target.value)} placeholder='extra charge' />
                  </FormControl>
                  <br/>
                  <FormControl>
                    <Input type='number' value={fixedCharge} onChange={(e)=>setFixedCharge(e.target.value)} placeholder='fixed charge' />
                  </FormControl>
                  <br/>
                  <FormControl>
                    <Input type='text' value={description} onChange={(e)=>setDescription(e.target.value)} placeholder='description' />
                  </FormControl>
                </ModalBody>
                <ModalFooter>
                  <Button colorScheme='blue' mr={3} onClick={onClose}>
                    Close
                  </Button>
                  <Button type="submit" variant='ghost'>Add Payment</Button>
                </ModalFooter>
              </ModalContent>
              </form>
            </Modal>
            <TableContainer>
              <Table variant='striped' colorScheme='teal'>
                <TableCaption></TableCaption>
                <Thead>
                  <Tr>
                    <Th>Name</Th>
                    <Th>DisplayName</Th>
                    <Th>Description</Th>
                    <Th>Action</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td>Name</Td>
                    <Td>DisplayName</Td>
                    <Td>Description</Td>
                    <Td>Action</Td>
                  </Tr>
                </Tbody>
              </Table>
            </TableContainer>
            
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  )
}

export default Payments;