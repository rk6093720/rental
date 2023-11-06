import { AddIcon } from '@chakra-ui/icons';
import { Button,FormControl,Input, Tab, TabList, TabPanel, TabPanels, Table, TableCaption, TableContainer, Tabs, Tbody, Td, Th, Thead, Tr, useDisclosure } from '@chakra-ui/react'
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
import { getTentants, postTentants } from '../Redux/System/action';
import { useDispatch, useSelector } from 'react-redux';
const Tentant = () => {
  const { isOpen: isOpenAddTentant, onOpen: onOpenAddTentant, onClose: onCloseAddTentant } = useDisclosure();
  const [name, setName] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();
  const tentants = useSelector((state) => state.System.tentants)
  const [color, setColor] = useState(null);
  const handleAdd = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        name,
        displayName,
        description
      }
      await dispatch(postTentants(payload))
        .then(() => dispatch(getTentants()))
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    if (tentants?.length === 0)
    {
      dispatch(getTentants());
    }
  },[dispatch , tentants?.length])
  return (
    <div>
      <Tabs>
        <TabList>
          <Tab>Tentant</Tab>
          <Tab>Tentant Types</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Input placeholder='Tentant number prefix' />
            <br/>
            <Button>Update Setting</Button>
          </TabPanel>
          <TabPanel>
            <Button onClick={onOpenAddTentant}><AddIcon/>Tentant</Button>
            <Modal isOpen={isOpenAddTentant} onClose={onCloseAddTentant}>
              <ModalOverlay />
              <form onSubmit={handleAdd}>
              <ModalContent>
                <ModalHeader>Add Tentant</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <FormControl>
                      <Input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='name' />
                    </FormControl>
                    <br />
                    <FormControl>
                      <Input type='text' value={displayName} onChange={(e) => setDisplayName(e.target.value)} placeholder='Displayname' />
                    </FormControl>
                    <br />
                    <FormControl>
                      <Input type='text' value={description} onChange={(e) => setDescription(e.target.value)} placeholder='Description' />
                    </FormControl>
                </ModalBody>
                <ModalFooter>
                  <Button colorScheme='blue' mr={3} onClick={onCloseAddTentant}>
                    Close
                  </Button>
                  <Button variant='ghost' type='submit' colorScheme='red'>Add Tentant</Button>
                </ModalFooter>
              </ModalContent>
              </form>
            </Modal>
            <br/>
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
                  {
                    tentants?.length > 0 && tentants.map((item)=>(
                      <Tr key={item._id}>
                        <Td>{item.name}</Td>
                        <Td>{item.displayName}</Td>
                        <Td>{item.description}</Td>
                        <Td>Action</Td>
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

export default Tentant;