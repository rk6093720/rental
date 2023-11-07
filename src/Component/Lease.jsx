import React, { useEffect, useState } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Checkbox,
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
  Select,
  useDisclosure,
} from '@chakra-ui/react';
import { deleteExtraCharge, deleteLease, editExtraCharge, editLease, getExtraCharge, getLease, postExtraCharge, postLease } from '../Redux/System/action';
const Lease= () => {
  const {id} = useParams();
  const { isOpen: isOpenAddLease, onOpen: onOpenAddLease, onClose: onCloseAddLease } = useDisclosure();
  const { isOpen: isOpenEditLease, onOpen: onOpenEditLease, onClose: onCloseEditLease } = useDisclosure();
  const { isOpen: isOpenAddExtraCharge, onOpen: onOpenAddExtraCharge, onClose: onCloseAddExtraCharge } = useDisclosure();
  const { isOpen: isOpenEditExtraCharge, onOpen: onOpenEditExtraCharge, onClose: onCloseEditExtraCharge } = useDisclosure();
  const [editLeaseId, setEditLeaseId] = useState(null);
  const [editExtraId, setEditExtraId] = useState(null);
  const [name, setName] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [description, setDescription] = useState("");
  const [currentLease, setCurrentLease] = useState({});
  const [currentExtra,setCurrentExtra]=useState({});
  const lease = useSelector((state) => state.System.lease_types)
  const extra = useSelector((state) => state.System.extra_charge)
  const dispatch = useDispatch();
  const [color, setColor] = useState(null);
  const handleOpenEditLease = (item) => {
    setEditLeaseId(item._id);
    setName(item.name);
    setDisplayName(item.displayName);
    setDescription(item.description);
    onOpenEditLease();
  }
  const handleOpenEditExtra = (item) => {
    setEditExtraId(item._id);
    setName(item.name);
    setDisplayName(item.displayName);
    setDescription(item.description);
    onOpenEditExtraCharge();
  }
  const handleEditLease = async () => {
    try {
      const payload = {
        name,
        displayName,
        description,
      };
      await dispatch(editLease(editLeaseId, payload))
        .then(() => dispatch(getLease()));
    } catch (error) {
      console.log(error);
    }
  }
  const handleEditExtra = async () => {
    try {
      const payload = {
        name,
        displayName,
        description,
      };
      await dispatch(editExtraCharge(editExtraId, payload))
        .then(() => dispatch(getExtraCharge()));
    } catch (error) {
      console.log(error);
    }
  }
  const handleAdd = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        name,
        displayName,
        description
      }
      await dispatch(postLease(payload))
        .then(() => dispatch(getLease()))
    } catch (error) {
      console.log(error);
    }
  }
  const handleAddExtra = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        name,
        displayName,
        description
      }
      await dispatch(postExtraCharge(payload)) 
        .then(() => dispatch(getExtraCharge()))
    } catch (error) {
      console.log(error);
    }
  }
  
  const handleDeleteLease = (item) => {
    dispatch(deleteLease(item._id));
    setColor(item._id);
  }
  const handleDeleteExtra = (item) => {
    dispatch(deleteExtraCharge(item._id));
    setColor(item._id);
  }

  useEffect(() => {
    if (lease?.length === 0) {
      dispatch(getLease());
    }
  }, [dispatch, lease?.length]);

  useEffect(() => {
     if (extra?.length === 0) {
      dispatch(getExtraCharge());
    }
  }, [dispatch, extra?.length]);

  useEffect(() => {
    if (id) {
      const LeaseById = lease.find((item) => item._id === id);
      LeaseById && setCurrentLease(LeaseById);
      LeaseById && setName(LeaseById.name);
      LeaseById && setDisplayName(LeaseById.displayName);
      LeaseById && setDescription(LeaseById.description);
    }
  }, [id, lease]);
  useEffect(() => {
    if (id) {
      const extraById = extra.find((item) => item._id === id);
      extraById && setCurrentExtra(extraById);
      extraById && setName(extraById.name);
      extraById && setDisplayName(extraById.displayName);
      extraById && setDescription(extraById.description);
    }
  }, [id, extra]);

  return (
    <div>
      <Tabs>
        <TabList>
          {/* <Tab>Lease</Tab> */}
          <Tab>Lease Types</Tab>
          <Tab>Extra charges</Tab>
          <Tab>Contract document</Tab>
        </TabList>
        <TabPanels>
          {/* <TabPanel>
            <Input placeholder='Lease number prefix'/>
            <br/>
            <Input placeholder='Invoice number prefix'/>
            <br/>
            <Input placeholder='Invoice disclaimer'/>
            <br/>
            <Input placeholder='Invoice teams'/>
            <br/>
            <Input placeholder='Reciept notes'/>
            <br/>
            <Select  placeholder='select your due days of payment'>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
              <option value="13">13</option>
              <option value="14">14</option>
              <option value="15">15</option>
              <option value="16">16</option>
              <option value="17">17</option>
              <option value="18">18</option>
              <option value="19">19</option>
              <option value="20">20</option>
              <option value="21">21</option>
              <option value="22">22</option>
              <option value="23">23</option>
              <option value="24">24</option>
              <option value="25">25</option>
              <option value="26">26</option>
              <option value="27">27</option>
              <option value="28">28</option>
              <option value="29">29</option>
              <option value="30">30</option>
              </Select>
              <br/>
              <Checkbox>
              Show Payment Methods On Invoice,Next Period Billing
              When billing, invoice period is set as next month.,Skip Starting Period
              For new lease, do not bill the first period.

              </Checkbox>
              <br/>
              <Button>Update Setting</Button>
          </TabPanel> */}
          <TabPanel>
            <Button onClick={onOpenAddLease}><AddIcon />Lease</Button>
            <Modal isOpen={isOpenAddLease} onClose={onCloseAddLease}>
              <ModalOverlay />
              <form onSubmit={handleAdd}>
                <ModalContent>
                  <ModalHeader>Add Lease</ModalHeader>
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
                    <Button colorScheme='blue' mr={3} onClick={onCloseAddLease}>
                      Close
                    </Button>
                    <Button variant='ghost' type='submit' colorScheme='red'>Add Lease</Button>
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
                    lease?.length > 0 && lease.map((item, index) => (
                      <Tr key={item._id}>
                        <Td>{item.name}</Td>
                        <Td>{item.displayName}</Td>
                        <Td>{item.description}</Td>
                        <Flex>
                          <Td>
                            <Button onClick={() => handleOpenEditLease(item)}>
                              <EditIcon />
                            </Button>
                            <Modal isOpen={isOpenEditLease} onClose={onCloseEditLease}>
                              <ModalOverlay />
                              <ModalContent>
                                <ModalHeader>Edit Lease</ModalHeader>
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
                                  <Button colorScheme='blue' mr={3} onClick={onCloseEditLease}>
                                    Close
                                  </Button>
                                  <Button type="submit" onClick={handleEditLease} variant='ghost'>EditLeases</Button>
                                </ModalFooter>
                              </ModalContent>
                            </Modal>
                          </Td>
                          <Td>
                            <Button onClick={() => handleDeleteLease(item)}>
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
            <Button onClick={onOpenAddExtraCharge}><AddIcon />ExtraCharge</Button>
            <Modal isOpen={isOpenAddExtraCharge} onClose={onCloseAddExtraCharge}>
              <ModalOverlay />
              <form onSubmit={handleAddExtra}>
                <ModalContent>
                  <ModalHeader>AddExtraCharge</ModalHeader>
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
                    <Button colorScheme='blue' mr={3} onClick={onCloseAddExtraCharge}>
                      Close
                    </Button>
                    <Button variant='ghost' type='submit' colorScheme='red'>AddExtraCharge</Button>
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
                    extra?.length > 0 && extra.map((item, index) => (
                      <Tr key={item._id}>
                        <Td>{item.name}</Td>
                        <Td>{item.displayName}</Td>
                        <Td>{item.description}</Td>
                        <Flex>
                          <Td>
                            <Button onClick={() => handleOpenEditExtra(item)}>
                              <EditIcon />
                            </Button>
                            <Modal isOpen={isOpenEditExtraCharge} onClose={onCloseEditExtraCharge}>
                              <ModalOverlay />
                              <ModalContent>
                                <ModalHeader>Edit Lease</ModalHeader>
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
                                  <Button colorScheme='blue' mr={3} onClick={onCloseEditExtraCharge}>
                                    Close
                                  </Button>
                                  <Button type="submit" onClick={handleEditExtra} variant='ghost'>EditExtraCharge</Button>
                                </ModalFooter>
                              </ModalContent>
                            </Modal>
                          </Td>
                          <Td>
                            <Button onClick={() => handleDeleteExtra(item)}>
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

export default Lease;