import {  Button, Flex, FormControl, Input, Tab, TabList, TabPanel, TabPanels, Table, TableCaption, TableContainer, Tabs, Tbody, Td, Th, Thead, Tr, useDisclosure }  from '@chakra-ui/react'
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
import { deleteAmenities, deleteProperties, deleteUnit, deleteUtilities, editAmenities, editProperties, editUnit, editUtilities, getAmenities, getProperties, getUnit, getUtilities, postAmenities, postProperties, postUnit, postUtilities } from '../Redux/System/action';
import { DeleteIcon, EditIcon } from '@chakra-ui/icons';
import { useParams } from 'react-router-dom';

const Property = () => {
  const {id}=useParams();
  const { isOpen: isOpenAddProperties, onOpen: onOpenAddProperties, onClose: onCloseAddProperties }= useDisclosure();
  const { isOpen: isOpenEditProperties, onOpen: onOpenEditProperties, onClose: onCloseEditProperties } = useDisclosure();
  const { isOpen: isOpenAddAmenities, onOpen: onOpenAddAmenities, onClose: onCloseAddAmenities } = useDisclosure();
  const { isOpen: isOpenEditAmenities, onOpen: onOpenEditAmenities, onClose: onCloseEditAmenities } = useDisclosure();
  const { isOpen: isOpenAddUtilities, onOpen: onOpenAddUtilities, onClose: onCloseAddUtilities } = useDisclosure();
  const { isOpen: isOpenEditUtilities, onOpen: onOpenEditUtilities, onClose: onCloseEditUtilities } = useDisclosure();
  const { isOpen: isOpenAddUnit, onOpen: onOpenAddUnit, onClose: onCloseAddUnit } = useDisclosure();
  const { isOpen: isOpenEditUnit, onOpen: onOpenEditUnit, onClose: onCloseEditUnit } = useDisclosure();
  const [name,setName]=useState("");
  const [display,setDisplay]=useState("");
  const [description,setDescription]=useState("");
  const [color, setColor] = useState(null);
  const [currentProperty,setCurrentProperty]=useState({});
  const [currentAmenities, setCurrentAmenities] = useState({});
  const [currentUtility,setCurrentUtility]=useState({});
  const [currentUnit,setCurrentUnit]=useState({});
  const dispatch = useDispatch();
  const properties = useSelector((state)=>state.System.properties);
  const amenities = useSelector((state) => state.System.amenities);
  const utilities = useSelector((state) => state.System.utilities);
  const unit = useSelector((state) => state.System.unit);
  const handleAdd=async(e)=>{
    e.preventDefault();
    try {
      const payload={
        name,
        display,
        description
      }
      await dispatch(postProperties(payload))
      .then(()=> dispatch(getProperties()))
    } catch (error) {
      console.log(error);
    }
  }
  const handleAddAmenities = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        name,
        display,
        description
      }
      await dispatch(postAmenities(payload))
        .then(() => dispatch(getAmenities()))
    } catch (error) {
      console.log(error);
    }
  }
  const handleAddUtility = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        name,
        display,
        description
      }
      await dispatch(postUtilities(payload))
        .then(() => dispatch(getUtilities()))
    } catch (error) {
      console.log(error);
    }
  }
  const handleAddUnit = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        name,
        display,
        description
      }
      await dispatch(postUnit(payload))
        .then(() => dispatch(getUnit()))
    } catch (error) {
      console.log(error);
    }
  }
  const handleEdit =async(id)=>{
    try {
      const payload = {
        name,
        display,
        description
      }
      await dispatch(editProperties(id,payload))
        .then(() => dispatch(getProperties()))
    } catch (error) {
      console.log(error);
    }
  }
  const handleEditAmenities = async (id) => {
    try {
      const payload = {
        name,
        display,
        description
      }
      await dispatch(editAmenities(id, payload))
        .then(() => dispatch(getAmenities()))
    } catch (error) {
      console.log(error);
    }
  }
  const handleEditUtility = async (id) => {
    try {
      const payload = {
        name,
        display,
        description
      }
      await dispatch(editUtilities(id, payload))
        .then(() => dispatch(getUtilities()))
    } catch (error) {
      console.log(error);
    }
  }
  const handleEditUnit = async (id) => {
    try {
      const payload = {
        name,
        display,
        description
      }
      await dispatch(editUnit(id, payload))
        .then(() => dispatch(getUnit()))
    } catch (error) {
      console.log(error);
    }
  }
  const handleDelete=(item)=>{
    dispatch(deleteProperties(item._id))
    setColor(item._id)
  }
  const handleDeleteAmenities=(item)=>{
    dispatch(deleteAmenities(item._id));
    setColor(item._id)
  }
  const handleDeleteUtility = (item) => {
    dispatch(deleteUtilities(item._id));
    setColor(item._id)
  }
  const handleDeleteUnit = (item) => {
    dispatch(deleteUnit(item._id));
    setColor(item._id)
  }
  useEffect(()=>{
    if (amenities?.length === 0) {
      dispatch(getProperties())
    }
  }, [dispatch,amenities?.length])
  useEffect(()=>{
    if(properties?.length === 0){
      dispatch(getProperties())
    }
  },[dispatch, properties?.length, , utilities?.length,unit?.length])
  useEffect(() => {
    if (id) {
      const propertyById = properties.find((item) => item._id === id);
      propertyById && setCurrentProperty(propertyById);
      propertyById && setName(propertyById.name);
      propertyById && setDisplay(propertyById.display);
      propertyById && setDescription(propertyById.description);

    }
    else if (id) {
      const amenitiesById = amenities.find((item) => item._id === id);
      amenitiesById && setCurrentAmenities(amenitiesById);
      amenitiesById && setName(amenitiesById.name);
      amenitiesById && setDisplay(amenitiesById.display);
      amenitiesById && setDescription(amenitiesById.description);

    }
    else if (id) {
      const utilitiesById = utilities.find((item) => item._id === id);
      utilitiesById && setCurrentUtility(utilitiesById);
      utilitiesById && setName(utilitiesById.name);
      utilitiesById && setDisplay(utilitiesById.display);
      utilitiesById && setDescription(utilitiesById.description);

    }
    else if (id) {
      const unitById = unit.find((item) => item._id === id);
      unitById && setCurrentUnit(unitById);
      unitById && setName(unitById.name);
      unitById && setDisplay(unitById.display);
      unitById && setDescription(unitById.description);

    }
  }, [id, properties, amenities,utilities,unit])
  console.log(utilities);
  return (
    <div>
      <Tabs>
        <TabList>
          <Tab>Property Type</Tab>
          <Tab>amenities</Tab>
          <Tab>Utilities</Tab>
          <Tab>Unit Types</Tab>
        </TabList>
         <TabPanels>
          <TabPanel>
            <Button onClick={onOpenAddProperties}>Add Property</Button>
            <Modal isOpen={isOpenAddProperties} onClose={onCloseAddProperties}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Add Property</ModalHeader>
                <ModalCloseButton />
                <form onSubmit={handleAdd}>
                <ModalBody>
                
                  <FormControl>
                    <Input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder='name' />
                  </FormControl>
                  <br />
                  <FormControl>
                    <Input type='text' value={display} onChange={(e)=>setDisplay(e.target.value)} placeholder='Displayname' />
                  </FormControl>
                  <br />
                  <FormControl>
                    <Input type='text' value={description} onChange={(e)=>setDescription(e.target.value)} placeholder='Description' />
                  </FormControl>
                </ModalBody>
                <ModalFooter>
                  <Button colorScheme='blue' mr={3} onClick={onCloseAddProperties}>
                    Close
                  </Button>
                  <Button type="submit" variant='ghost'>AddProperty</Button>
                </ModalFooter>
                </form>
              </ModalContent>
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
                  {
                    properties?.length > 0 && properties?.map((item)=>(
                      <Tr key={item._id}>
                        <Td>{item.name}</Td>
                        <Td>{item.display}</Td>
                        <Td>{item.description}</Td>
                        <Flex>
                        <Td>
                            <Button onClick={onOpenEditProperties}>
                          <EditIcon/>
                            </Button>
                            <Modal isOpen={isOpenEditProperties} onClose={onCloseEditProperties}>
                              <ModalOverlay />
                              <ModalContent>
                                <ModalHeader>Edit Property</ModalHeader>
                                <ModalCloseButton />
                                  <ModalBody>
                                    <FormControl>
                                      <Input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='name' />
                                    </FormControl>
                                    <br />
                                    <FormControl>
                                      <Input type='text' value={display} onChange={(e) => setDisplay(e.target.value)} placeholder='Displayname' />
                                    </FormControl>
                                    <br />
                                    <FormControl>
                                      <Input type='text' value={description} onChange={(e) => setDescription(e.target.value)} placeholder='Description' />
                                    </FormControl>
                                  </ModalBody>
                                  <ModalFooter>
                                    <Button colorScheme='blue' mr={3} onClick={onCloseEditProperties}>
                                      Close
                                    </Button>
                                  <Button type="submit" onClick={() => handleEdit(item._id)} variant='ghost'>EditProperty</Button>
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
            <Button onClick={onOpenAddAmenities}>AddAmenities</Button>
            <Modal isOpen={isOpenAddAmenities} onClose={onCloseAddAmenities}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Add Amenities</ModalHeader>
                <ModalCloseButton />
                <form onSubmit={handleAddAmenities}>
                  <ModalBody>

                    <FormControl>
                      <Input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='name' />
                    </FormControl>
                    <br />
                    <FormControl>
                      <Input type='text' value={display} onChange={(e) => setDisplay(e.target.value)} placeholder='Displayname' />
                    </FormControl>
                    <br />
                    <FormControl>
                      <Input type='text' value={description} onChange={(e) => setDescription(e.target.value)} placeholder='Description' />
                    </FormControl>
                  </ModalBody>
                  <ModalFooter>
                    <Button colorScheme='blue' mr={3} onClick={onCloseAddAmenities}>
                      Close
                    </Button>
                    <Button type="submit" variant='ghost'>Add-Amenities</Button>
                  </ModalFooter>
                </form>
              </ModalContent>
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
                  {
                    amenities?.length > 0 && amenities?.map((item) => (
                      <Tr key={item._id}>
                        <Td>{item.name}</Td>
                        <Td>{item.display}</Td>
                        <Td>{item.description}</Td>
                        <Flex>
                          <Td>
                            <Button onClick={onOpenEditAmenities}>
                              <EditIcon />
                            </Button>
                            <Modal isOpen={isOpenEditAmenities} onClose={onCloseEditAmenities}>
                              <ModalOverlay />
                              <ModalContent>
                                <ModalHeader>Edit Amenities</ModalHeader>
                                <ModalCloseButton />
                                <ModalBody>
                                  <FormControl>
                                    <Input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='name' />
                                  </FormControl>
                                  <br />
                                  <FormControl>
                                    <Input type='text' value={display} onChange={(e) => setDisplay(e.target.value)} placeholder='Displayname' />
                                  </FormControl>
                                  <br />
                                  <FormControl>
                                    <Input type='text' value={description} onChange={(e) => setDescription(e.target.value)} placeholder='Description' />
                                  </FormControl>
                                </ModalBody>
                                <ModalFooter>
                                  <Button colorScheme='blue' mr={3} onClick={onCloseEditAmenities}>
                                    Close
                                  </Button>
                                  <Button type="submit" onClick={() => handleEditAmenities(item._id)} variant='ghost'>EditAmenities</Button>
                                </ModalFooter>

                              </ModalContent>
                            </Modal>
                          </Td>
                          <Td>
                            <Button onClick={() => handleDeleteAmenities(item)}>
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
            <Button onClick={onOpenAddUtilities}>Add Utility</Button>
            <Modal isOpen={isOpenAddUtilities} onClose={onCloseAddUtilities}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Add Utility</ModalHeader>
                <ModalCloseButton />
                <form onSubmit={handleAddUtility}>
                  <ModalBody>

                    <FormControl>
                      <Input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='name' />
                    </FormControl>
                    <br />
                    <FormControl>
                      <Input type='text' value={display} onChange={(e) => setDisplay(e.target.value)} placeholder='Displayname' />
                    </FormControl>
                    <br />
                    <FormControl>
                      <Input type='text' value={description} onChange={(e) => setDescription(e.target.value)} placeholder='Description' />
                    </FormControl>
                  </ModalBody>
                  <ModalFooter>
                    <Button colorScheme='blue' mr={3} onClick={onCloseAddUtilities}>
                      Close
                    </Button>
                    <Button type="submit" variant='ghost'>AddUtility</Button>
                  </ModalFooter>
                </form>
              </ModalContent>
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
                  {
                    utilities?.length > 0 && utilities?.map((item) => (
                      <Tr key={item._id}>
                        <Td>{item.name}</Td>
                        <Td>{item.display}</Td>
                        <Td>{item.description}</Td>
                        <Flex>
                          <Td>
                            <Button onClick={onOpenEditUtilities}>
                              <EditIcon />
                            </Button>
                            <Modal isOpen={isOpenEditUtilities} onClose={onCloseEditUtilities}>
                              <ModalOverlay />
                              <ModalContent>
                                <ModalHeader>EditUtility</ModalHeader>
                                <ModalCloseButton />

                                <ModalBody>

                                  <FormControl>
                                    <Input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='name' />
                                  </FormControl>
                                  <br />
                                  <FormControl>
                                    <Input type='text' value={display} onChange={(e) => setDisplay(e.target.value)} placeholder='Displayname' />
                                  </FormControl>
                                  <br />
                                  <FormControl>
                                    <Input type='text' value={description} onChange={(e) => setDescription(e.target.value)} placeholder='Description' />
                                  </FormControl>
                                </ModalBody>
                                <ModalFooter>
                                  <Button colorScheme='blue' mr={3} onClick={onCloseEditUtilities}>
                                    Close
                                  </Button>
                                  <Button type="submit" onClick={() => handleEditUtility(item._id)} variant='ghost'>EditUtility</Button>
                                </ModalFooter>

                              </ModalContent>
                            </Modal>
                          </Td>
                          <Td>
                            <Button onClick={() => handleDeleteUtility(item)}>
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
            <Button onClick={onOpenAddUnit}>AddUnit</Button>
            <Modal isOpen={isOpenAddUnit} onClose={onCloseAddUnit}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>AddUnit</ModalHeader>
                <ModalCloseButton />
                <form onSubmit={handleAddUnit}>
                  <ModalBody>

                    <FormControl>
                      <Input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='name' />
                    </FormControl>
                    <br />
                    <FormControl>
                      <Input type='text' value={display} onChange={(e) => setDisplay(e.target.value)} placeholder='Displayname' />
                    </FormControl>
                    <br />
                    <FormControl>
                      <Input type='text' value={description} onChange={(e) => setDescription(e.target.value)} placeholder='Description' />
                    </FormControl>
                  </ModalBody>
                  <ModalFooter>
                    <Button colorScheme='blue' mr={3} onClick={onCloseAddUnit}>
                      Close
                    </Button>
                    <Button type="submit" variant='ghost'>AddUnit</Button>
                  </ModalFooter>
                </form>
              </ModalContent>
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
                  {
                    unit?.length > 0 && unit?.map((item) => (
                      <Tr key={item._id}>
                        <Td>{item.name}</Td>
                        <Td>{item.display}</Td>
                        <Td>{item.description}</Td>
                        <Flex>
                          <Td>
                            <Button onClick={onOpenEditUnit}>
                              <EditIcon />
                            </Button>
                            <Modal isOpen={isOpenEditUnit} onClose={onCloseEditUnit}>
                              <ModalOverlay />
                              <ModalContent>
                                <ModalHeader>Edit Unit</ModalHeader>
                                <ModalCloseButton />

                                <ModalBody>

                                  <FormControl>
                                    <Input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='name' />
                                  </FormControl>
                                  <br />
                                  <FormControl>
                                    <Input type='text' value={display} onChange={(e) => setDisplay(e.target.value)} placeholder='Displayname' />
                                  </FormControl>
                                  <br />
                                  <FormControl>
                                    <Input type='text' value={description} onChange={(e) => setDescription(e.target.value)} placeholder='Description' />
                                  </FormControl>
                                </ModalBody>
                                <ModalFooter>
                                  <Button colorScheme='blue' mr={3} onClick={onCloseEditUnit}>
                                    Close
                                  </Button>
                                  <Button type="submit" onClick={() => handleEditUnit(item._id)} variant='ghost'>EditUnit</Button>
                                </ModalFooter>

                              </ModalContent>
                            </Modal>
                          </Td>
                          <Td>
                            <Button onClick={() => handleDeleteUnit(item)}>
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

export default Property;