import { AddIcon } from '@chakra-ui/icons';
import { Button, FormControl, Input ,  Select,  Tab, TabList, TabPanel, TabPanels, Table, TableCaption, TableContainer, Tabs, Tbody, Td, Th, Thead, Tr, useDisclosure } from '@chakra-ui/react'
import React, { useState } from 'react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'
const UsersRole = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [role,setRole]=useState("");
  const [firstName,setFirstName]=useState("");
  const [lastName,setLastName]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const handleAddUser = (e) =>{
    e.preventDefault();

  }
  return (
    <div>
      <Tabs>
        <TabList>
          <Tab>User</Tab>
          <Tab>Role</Tab>
          <Tab>Permission</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Button onClick={onOpen} ><AddIcon/>User</Button>
            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <form onSubmit={handleAddUser}>
              <ModalContent>
                <ModalHeader>Add User</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <FormControl>
                    <Select value={role} onChange={(e)=>setRole(e.target.value)} placeholder='role'>
                      <option value="Admin">Admin</option>
                      <option value="Landlord">Landlord</option>
                      <option value="office">Office</option>
                    </Select>
                  </FormControl>
                  <br/>
                 <FormControl>
                  <Input type='text' value={firstName} onChange={(e)=>setFirstName(e.target.value)} placeholder='firstName'/>
                 </FormControl>
                  <br />
                  <FormControl>
                    <Input type='text' value={lastName} onChange={(e)=>setLastName(e.target.value)} placeholder='LastName' />
                  </FormControl>
                  <br />
                  <FormControl>
                    <Input type='email' value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='email' />
                  </FormControl>
                  <br/>
                    <FormControl>
                      <Input type='password' value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='password' />
                    </FormControl>
                </ModalBody>
                <ModalFooter>
                  <Button colorScheme='blue' mr={3} onClick={onClose}>
                    Close
                  </Button>
                  <Button type="submit" colorScheme='red'>Add User</Button>
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
                    <Th>Role</Th>
                    <Th>firstName</Th>
                    <Th>LastName</Th>
                    <Th>Email</Th>
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
          <TabPanel>
            <TableContainer>
              <Table variant='striped' colorScheme='teal'>
                <TableCaption></TableCaption>
                <Thead>
                  <Tr>
                    <Th>Name</Th>
                    <Th>DisplayName</Th>
                    <Th>Permission</Th>
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
          <TabPanel>
            <TableContainer>
              <Table variant='striped' colorScheme='teal'>
                <TableCaption></TableCaption>
                <Thead>
                  <Tr>
                    <Th>Name</Th>
                    <Th>DisplayName</Th>
                    <Th>Action</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td>Name</Td>
                    <Td>DisplayName</Td>
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

export default UsersRole;