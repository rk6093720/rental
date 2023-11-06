import { AddIcon, DeleteIcon, EditIcon } from '@chakra-ui/icons';
import { Button, Flex, FormControl, Input ,  Select,  Tab, TabList, TabPanel, TabPanels, Table, TableCaption, TableContainer, Tabs, Tbody, Td, Th, Thead, Tr, useDisclosure } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
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
import { getUserRole, postUserRole } from '../Redux/System/action';
import EditUserRole from './EditUserRole';
const UsersRole = () => {
  const { isOpen:isOpenAddUser, onOpen:onOpenAddUser, onClose:onCloseAddUser } = useDisclosure();
  const [role,setRole]=useState("");
  const [firstName,setFirstName]=useState("");
  const [lastName,setLastName]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const dispatch = useDispatch();
  const userRole = useSelector((state)=>state.System.users);
  const handleAddUser = async(e) =>{
    e.preventDefault();
    try {
      const payload = {
        role,
        firstName,
        lastName,
        email,
        password
      }
      await dispatch(postUserRole(payload))
      .then(()=> dispatch(getUserRole()));
    } catch (error) {
      console.log(error);
    }
  }
  
  useEffect(()=>{
    if(userRole?.length === 0){
      dispatch(getUserRole())
    }
  },[dispatch, userRole?.length]);

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
            <Button onClick={onOpenAddUser} ><AddIcon/>User</Button>
            <Modal isOpen={isOpenAddUser} onClose={onCloseAddUser}>
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
                  <Button colorScheme='blue' mr={3} onClick={onCloseAddUser}>
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
                  {
                    userRole?.length > 0 && userRole?.map((item) =>(
                      <Tr key={item._id}>
                        <Td>{item.role}</Td>
                        <Td>{item.firstName}</Td>
                        <Td>{item.lastName}</Td>
                        <Td>{item.email}</Td>
                        <Flex>
                          <Td>
                              <EditUserRole/>
                          </Td>
                          <Td>
                            <Button><DeleteIcon/></Button>
                          </Td>
                        </Flex>
                      </Tr>
                    ))
                  }
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