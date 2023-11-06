import { AddIcon, DeleteIcon, EditIcon } from '@chakra-ui/icons';
import { Button, Flex, FormControl, Input, Select, Tab, TabList, TabPanel, TabPanels, Table, TableCaption, TableContainer, Tabs, Tbody, Td, Th, Thead, Tr, useDisclosure } from '@chakra-ui/react'
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
import { getUserRole, putUserRole } from '../Redux/System/action';
import { useParams } from 'react-router-dom';
const EditUserRole = ({item}) => {
    const { id } = useParams();
    const [role, setRole] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [currentSystem, setCurrentSystem] = useState({});
    const dispatch = useDispatch();
    const userRole = useSelector((state) => state.System.users);
    const { isOpen: isOpenEditUser, onOpen: onOpenEditUser, onClose: onCloseEditUser } = useDisclosure();
    const handleEditUser = async (id) => {
        try {
            const payload = {
                role,
                firstName,
                lastName,
                email
            }
            await dispatch(putUserRole(id, payload))
                .then(() => dispatch(getUserRole()))
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        if (userRole?.length === 0) {
            dispatch(getUserRole())
        }
    }, [dispatch, userRole?.length]);
    useEffect(() => {
        if (id) {
            const userRoledById = userRole.find((item) => item._id === id);
            userRoledById && setCurrentSystem(userRoledById);
            userRoledById && setRole(userRoledById.role);
            userRoledById && setEmail(userRoledById.email);
            userRoledById && setFirstName(userRoledById.firstName);
            userRoledById && setLastName(userRoledById.lastName);
        }
    }, [id, userRole])
  return (
    <div>
          <Button onClick={onOpenEditUser}><EditIcon /></Button>
          <Modal isOpen={isOpenEditUser} onClose={onCloseEditUser}>
              <ModalOverlay />
              <ModalContent>
                  <ModalHeader>Edit User</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                      <FormControl>
                          <Select value={role} onChange={(e) => setRole(e.target.value)} placeholder='role'>
                              <option value="Admin">Admin</option>
                              <option value="Landlord">Landlord</option>
                              <option value="office">Office</option>
                          </Select>
                      </FormControl>
                      <br />
                      <FormControl>
                          <Input type='text' value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder='firstName' />
                      </FormControl>
                      <br />
                      <FormControl>
                          <Input type='text' value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder='LastName' />
                      </FormControl>
                      <br />
                      <FormControl>
                          <Input type='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='email' />
                      </FormControl>
                  </ModalBody>
                  <ModalFooter>
                      <Button colorScheme='blue' mr={3} onClick={onCloseEditUser}>
                          Close
                      </Button>
                      <Button variant='ghost' colorScheme='red' onClick={() => handleEditUser(item._id)}>Edit User</Button>
                  </ModalFooter>
              </ModalContent>
          </Modal>
    </div>
  )
}

export default EditUserRole