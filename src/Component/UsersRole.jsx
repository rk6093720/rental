import { AddIcon, DeleteIcon,EditIcon } from '@chakra-ui/icons';
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
import { deleteUserRole, getRole, getUserRole, postRole, postUserRole, putRole } from '../Redux/System/action';
import EditUserRole from './EditUserRole';
import { useParams } from 'react-router-dom';
const UsersRole = () => {
  const {id} = useParams();
  const { isOpen:isOpenAddUser, onOpen:onOpenAddUser, onClose:onCloseAddUser } = useDisclosure();
  const { isOpen: isOpenAddRole, onOpen: onOpenAddRole, onClose: onCloseAddRole } = useDisclosure();
  const { isOpen: isOpenEditRole, onOpen: onOpenEditRole, onClose: onCloseEditRole } = useDisclosure();
  const [role,setRole]=useState("");
  const [color, setColor] = useState(null);
  const [firstName,setFirstName]=useState("");
  const [lastName,setLastName]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [name,setName]=useState("");
  const [checkbox,setCheckbox]=useState({
     AddLandLord:false,
    EditLandLord: false,
    ViewLandLord: false,
    DeleteLandLord: false,
    AddProperty: false,
    ViewProperty: false,
    EditProperty: false,
    DeleteProperty: false,
    AddLease: false,
    EditLease: false,
    ViewLease: false,
    DeleteLease: false,
    AddTentants: false,
    EditTentants: false,
    ViewTentants: false,
    DeleteTentants: false,
    AddInvoices: false,
    EditInvoices: false,
    ViewInvoices: false,
    DeleteInvoices: false,
    AddUtility: false,
    ViewUtility: false,
    EditUtility: false,
    DeleteUtility: false,
    AddVacateNotice: false,
    ViewVacateNotice: false,
    EditVacateNotice: false,
    DeleteVacateNotices: false,
    AddPayment: false,
    ViewPayment: false,
    EditPayment: false,
    DeletePayment: false,
    Cancel: false,
    TerminateLease: false,
  });
  const [displayName,setDisplayName]=useState("");
  const dispatch = useDispatch();
  const userRole = useSelector((state)=>state.System.users);
  const roles = useSelector((state) => state.System.usersRoles);
  const [currentRole,setCurrentRole]= useState({});
  const handleCheckboxChange = (event) => {
    const checkboxName = event.target.name;
    const isChecked = event.target.checked;
    setCheckbox({
      ...checkbox,
      [checkboxName]: isChecked,
    });
  };
  const selectedCount = Object.values(checkbox).filter((value) => value).length;
  const total = Object.values(checkbox).length;
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
  const handleAddRole = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        name,
        displayName,
        checkbox:`${selectedCount} / ${total}`
      }
      await dispatch(postRole(payload))
        .then(() => dispatch(getRole()));
    } catch (error) {
      console.log(error);
    }
  }
 const  handleEditRole=async(id)=>{
   try {
     const payload = {
       name,
       displayName,
       checkbox: `${selectedCount} / ${total}`
     }
     await dispatch(putRole(id,payload))
       .then(() => dispatch(getRole()));
   } catch (error) {
     console.log(error);
   }
 }
  const handleDelete = (item) => {
    dispatch(deleteUserRole(item._id))
    setColor(item._id)
  }
  
  const handleDeleteRole = (item) => {
    dispatch(deleteUserRole(item._id))
    setColor(item._id)
  }
  
  useEffect(()=>{
    if(userRole?.length === 0){
      dispatch(getUserRole())
    }
    else if(roles?.length === 0){
      dispatch(getRole())
    }
  },[dispatch, userRole?.length,roles?.length]);
// console.log(checkbox, selectedCount,total)  
useEffect(()=>{
   if(id){
       const currentRoleById = roles.find((item)=> item._id === id)
       currentRoleById && setCurrentRole(currentRoleById);
       currentRoleById && setName(currentRoleById.name);
       currentRoleById && setDisplayName(currentRoleById.displayName);
       currentRoleById && setCheckbox(currentRoleById.checkbox);
   }
},[id, roles])
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
                    <Select value={role} onChange={(e)=>setRole(e.target.value)} placeholder='role' >
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
                              <EditUserRole item={item}/>
                          </Td>
                          <Td>
                            <Button onClick={() => handleDeleteRole(item)}>
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
          <TabPanel>
            <Button onClick={onOpenAddRole} ><AddIcon />Role</Button>
            <Modal isOpen={isOpenAddRole} onClose={onCloseAddRole}>
              <ModalOverlay />
              <form onSubmit={handleAddRole}>
                <ModalContent>
                  <ModalHeader>Add Role</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    <FormControl>
                      <Input type='text' value={name} onChange={(e) => setName(e.target.value)} placeholder='name' />
                    </FormControl>
                    <br />
                    <FormControl>
                      <Input type='text' value={displayName} onChange={(e) => setDisplayName(e.target.value)} placeholder='DisplayName' />
                    </FormControl>
                    <br/>
                    {Object.keys(checkbox).map((key) => (
                      <label key={key}>
                        <input
                          type="checkbox"
                          placeholder='permission'
                          name={key}
                          checked={checkbox[key]}
                          onChange={handleCheckboxChange}
                        />
                        {key}
                      </label>
                    ))}
                    </ModalBody>
                  <ModalFooter>
                    <Button colorScheme='blue' mr={3} onClick={onCloseAddRole}>
                      Close
                    </Button>
                    <Button type="submit" colorScheme='red'>Add Role</Button>
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
                    <Th>Permission</Th>
                    <Th>Action</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {
                    roles?.length > 0 && roles?.map((item)=>(
                      <Tr key={item._id}>
                        <Td>{item.name}</Td>
                        <Td>{item.displayName}</Td>
                        <Td>{item.checkbox}</Td>
                        <Flex>
                          <Td>
                            <Button onClick={onOpenEditRole} ><EditIcon />Role</Button>
                            <Modal isOpen={isOpenEditRole} onClose={onCloseEditRole}>
                              <ModalOverlay />
                    
                                <ModalContent>
                                  <ModalHeader>Edit Role</ModalHeader>
                                  <ModalCloseButton />
                                  <ModalBody>
                                    <FormControl>
                                      <Input type='text' value={name} onChange={(e) => setName(e.target.value)} placeholder='name' />
                                    </FormControl>
                                    <br />
                                    <FormControl>
                                      <Input type='text' value={displayName} onChange={(e) => setDisplayName(e.target.value)} placeholder='DisplayName' />
                                    </FormControl>
                                    <br />
                                    {Object.keys(checkbox).map((key) => (
                                      <label key={key}>
                                        <input
                                          type="checkbox"
                                          placeholder='permission'
                                          name={key}
                                          checked={checkbox[key]}
                                          onChange={handleCheckboxChange}
                                        />
                                        {key}
                                      </label>
                                    ))}
                                  </ModalBody>
                                  <ModalFooter>
                                    <Button colorScheme='blue' mr={3} onClick={onCloseEditRole}>
                                      Close
                                    </Button>
                                    <Button type="submit" onClick={()=> handleEditRole(item._id)} colorScheme='red'>Edit Role</Button>
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