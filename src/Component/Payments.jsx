import { AddIcon, DeleteIcon, EditIcon } from '@chakra-ui/icons';
import { Button,Flex,FormControl,Input,Select,Tab, TabList, TabPanel, TabPanels, Table, TableCaption, TableContainer, Tabs, Tbody, Td, Th, Thead, Tr, useDisclosure } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteAmount, editAmount, getAmount, postAmount } from '../Redux/System/action';
import { useParams } from 'react-router-dom';

const  Payments= () => {
  const {id}=useParams();
  const { isOpen:isOpenAddPayment, onOpen:onOpenAddPayment, onClose:onCloseAddPayment } = useDisclosure();
  const { isOpen:isOpenEditPayment, onOpen:onOpenEditPayment, onClose:onCloseEditPayment } = useDisclosure();
  const [payment,setPayment]=useState("");
  const [name,setName]=useState("");
  const [extraCharge, setExtraCharge]=useState("");
  const [fixedCharge, setFixedCharge]= useState("");
  const [description,setDescription]=useState("");
  const [color,setColor]=useState(null);
  const [currentPayment,setCurrentPayment]=useState({});
  const dispatch = useDispatch();
  const amount = useSelector((state) => state.System.payment)
  const handleAdd =async(e)=>{
    e.preventDefault();
    try {
      const payload = {
        payment,
        name,
        extraCharge,
        fixedCharge,
        description
      }
      await dispatch(postAmount(payload))
        .then(() => dispatch(getAmount()))
    } catch (error) {
      console.log(error);
    }
  }
    const handleEdit = async (id) => {
      try {
        const payload = {
          payment,
          name,
          extraCharge,
          fixedCharge,
          description
        }
        await dispatch(editAmount(id, payload))
          .then(() => dispatch(getAmount()))
      } catch (error) {
        console.log(error);
      }
    }

  const handleDelete = (item) => {
    dispatch(deleteAmount(item._id))
    setColor(item._id)
  }

  useEffect(()=>{
    if(amount?.length === 0)
    {
      dispatch(getAmount())
    }
  },[dispatch,amount?.length]);
  useEffect(()=>{
    if(id){
      const amountById = amount.find((item) => item._id === id);
      amountById && setCurrentPayment(amountById);
      amountById && setName(amountById.name);
      amountById && setPayment(amountById.payment);
      amountById && setDescription(amountById.description);
      amountById && setExtraCharge(amountById.extraCharge);
      amountById && setFixedCharge(amountById.fixedCharge);
    }
  },[id, amount])
  console.log(amount);
  return (
    <div>
      <Tabs>
        <TabList>
          <Tab>Payment</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
              <Button onClick={onOpenAddPayment}><AddIcon/>NewPaymentMethod</Button>
            <Modal isOpen={isOpenAddPayment} onClose={onCloseAddPayment}>
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
                    <Input type='number' value={extraCharge} onChange={(e)=>setExtraCharge(e.target.value)} placeholder='% extra charge' />
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
                  <Button colorScheme='blue' mr={3} onClick={onCloseAddPayment}>
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
                    <Th>Type</Th>
                    <Th>Action</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {
                    amount?.length > 0 && amount?.map((item) => (
                      <Tr key={item._id}>
                        <Td>{item.name}</Td>
                        <Td>{item.payment}</Td>
                        <Flex>
                          <Td>
                            <Button onClick={onOpenEditPayment}>
                            <EditIcon/>
                            </Button>
                            <Modal isOpen={isOpenEditPayment} onClose={onCloseEditPayment}>
                              <ModalOverlay />
                                <ModalContent>
                                  <ModalHeader>Edit Payment Method</ModalHeader>
                                  <ModalCloseButton />
                                  <ModalBody>
                                    <FormControl>
                                      <Select value={payment} onChange={(e) => setPayment(e.target.value)} placeholder='Payment-Type'>
                                        <option value="Cash">Cash</option>
                                        <option value="PhonePay">PhonePay</option>
                                        <option value="Paytm">Paytm</option>
                                        <option value="DebitCard">DebitCard</option>
                                        <option value="CreditCard">CreditCard</option>
                                        <option value="Paypal">Paypal</option>
                                      </Select>
                                    </FormControl>
                                    <br />
                                    <FormControl>
                                      <Input type='text' value={name} onChange={(e) => setName(e.target.value)} placeholder='display name' />
                                    </FormControl>
                                    <br />
                                    <FormControl>
                                      <Input type='number' value={extraCharge} onChange={(e) => setExtraCharge(e.target.value)} placeholder='% extra charge' />
                                    </FormControl>
                                    <br />
                                    <FormControl>
                                      <Input type='number' value={fixedCharge} onChange={(e) => setFixedCharge(e.target.value)} placeholder='fixed charge' />
                                    </FormControl>
                                    <br />
                                    <FormControl>
                                      <Input type='text' value={description} onChange={(e) => setDescription(e.target.value)} placeholder='description' />
                                    </FormControl>
                                  </ModalBody>
                                  <ModalFooter>
                                    <Button colorScheme='blue' mr={3} onClick={onCloseEditPayment}>
                                      Close
                                    </Button>
                                    <Button type="submit" variant='ghost' onClick={()=> handleEdit(item._id)}>Edit Payment</Button>
                                  </ModalFooter>
                                </ModalContent>
                            </Modal>
                            
                          </Td>
                          <Td>
                            <Button onClick={() => handleDelete(item)}>
                              <DeleteIcon style={{ color: color === item._id ? "green" : "red" }} />
                            </Button>
                            </Td>
                        </Flex>
                          
                      </Tr>
                    ))
                  }
                  
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