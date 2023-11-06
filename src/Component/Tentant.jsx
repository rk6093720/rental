import React, { useEffect, useState } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { AddIcon, DeleteIcon, EditIcon } from '@chakra-ui/icons';
import {
  Button,
  Flex,
  FormControl,
  Input,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Table,
  TableCaption,
  TableContainer,
  Tabs,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from '@chakra-ui/react';

import {
  deleteTentants,
  editTentants,
  getTentants,
  postTentants,
} from '../Redux/System/action';

const Tentant = () => {
  const { id } = useParams();
  const { isOpen: isOpenAddTentant, onOpen: onOpenAddTentant, onClose: onCloseAddTentant } = useDisclosure();
  const { isOpen: isOpenEditTentant, onOpen: onOpenEditTentant, onClose: onCloseEditTentant } = useDisclosure();
  const [editTentantId, setEditTentantId] = useState(null);
  const [name, setName] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [description, setDescription] = useState("");
  const [currentTentant, setCurrentTentant] = useState({});
  const dispatch = useDispatch();
  const tentants = useSelector((state) => state.System.tentants);
  const [color, setColor] = useState(null);

  const handleOpenEditTentant = (item) => {
    setEditTentantId(item._id);
    setName(item.name);
    setDisplayName(item.displayName);
    setDescription(item.description);
    onOpenEditTentant();
  }

  const handleEditTentant = async () => {
    try {
      const payload = {
        name,
        displayName,
        description,
      };
      await dispatch(editTentants(editTentantId, payload))
        .then(() => dispatch(getTentants()));
    } catch (error) {
      console.log(error);
    }
  }
  const handleAdd = async(e)=>{
    e.preventDefault();
    try {
      const payload ={
        name,
        displayName,
        description
      }
      await dispatch(postTentants(payload))
      .then(()=> dispatch(getTentants()))
    } catch (error) {
      console.log(error);
    }
  }

  const handleDeleteTentant = (item) => {
    dispatch(deleteTentants(item._id));
    setColor(item._id);
  }

  useEffect(() => {
    if (tentants?.length === 0) {
      dispatch(getTentants());
    }
  }, [dispatch, tentants?.length]);

  useEffect(() => {
    if (id) {
      const tentantById = tentants.find((item) => item._id === id);
      tentantById && setCurrentTentant(tentantById);
      tentantById && setName(tentantById.name);
      tentantById && setDisplayName(tentantById.displayName);
      tentantById && setDescription(tentantById.description);
    }
  }, [id, tentants]);

  return (
    <div>
      <Tabs>
        <TabList>
          <Tab>Tentant</Tab>
          <Tab>Tentant Types</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Input value='Tn' placeholder='Tentant number prefix' />
          </TabPanel>
          <TabPanel>
            <Button onClick={onOpenAddTentant}><AddIcon />Tentant</Button>
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
            <br />
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
                    tentants?.length > 0 && tentants.map((item, index) => (
                      <Tr key={item._id}>
                        <Td>{item.name}</Td>
                        <Td>{item.displayName}</Td>
                        <Td>{item.description}</Td>
                        <Flex>
                          <Td>
                            <Button onClick={() => handleOpenEditTentant(item)}>
                              <EditIcon />
                            </Button>
                            <Modal isOpen={isOpenEditTentant} onClose={onCloseEditTentant}>
                              <ModalOverlay />
                              <ModalContent>
                                <ModalHeader>Edit Tentant</ModalHeader>
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
                                  <Button colorScheme='blue' mr={3} onClick={onCloseEditTentant}>
                                    Close
                                  </Button>
                                  <Button type="submit" onClick={handleEditTentant} variant='ghost'>EditTentants</Button>
                                </ModalFooter>
                              </ModalContent>
                            </Modal>
                          </Td>
                          <Td>
                            <Button onClick={() => handleDeleteTentant(item)}>
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
  );
}

export default Tentant;
