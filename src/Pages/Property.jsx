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
import { deleteProperties, editProperties, getProperties, postProperties } from '../Redux/System/action';
import { DeleteIcon, EditIcon } from '@chakra-ui/icons';
import { useParams } from 'react-router-dom';

const Property = () => {
  const {id}=useParams();
  const { isOpen, onOpen, onClose }= useDisclosure();
  const [name,setName]=useState("");
  const [display,setDisplay]=useState("");
  const [description,setDescription]=useState("");
  const [color, setColor] = useState(null);
  const [currentProperty,setCurrentProperty]=useState("");
  const dispatch = useDispatch();
  const properties = useSelector((state)=>state.System.properties);
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
  const handleDelete=(item)=>{
    dispatch(deleteProperties(item._id))
    setColor(item._id)
  }
  useEffect(()=>{
    if(properties?.length === 0){
      dispatch(getProperties())
    }
  },[dispatch,properties.length])
  useEffect(() => {
    if (id) {
      const propertyById = properties.find((item) => item._id === id);
      propertyById && setCurrentProperty(propertyById);
      propertyById && setName(propertyById.name);
      propertyById && setDisplay(propertyById.display);
      propertyById && setDescription(propertyById.description);

    }
  }, [id, properties])
  console.log(properties);
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
            <Button onClick={onOpen}>Add Property</Button>
            <Modal isOpen={isOpen} onClose={onClose}>
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
                  <Button colorScheme='blue' mr={3} onClick={onClose}>
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
                            <Button onClick={onOpen}>
                          <EditIcon/>
                            </Button>
                            <Modal isOpen={isOpen} onClose={onClose}>
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
                                    <Button colorScheme='blue' mr={3} onClick={onClose}>
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
            <Button onClick={onOpen}>AddAmenities</Button>
            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Add Amenities</ModalHeader>
                <ModalCloseButton />
                <form onSubmit={handleAdd}>
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
                    <Button colorScheme='blue' mr={3} onClick={onClose}>
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
                    properties?.length > 0 && properties?.map((item) => (
                      <Tr key={item._id}>
                        <Td>{item.name}</Td>
                        <Td>{item.display}</Td>
                        <Td>{item.description}</Td>
                        <Flex>
                          <Td>
                            <Button onClick={onOpen}>
                              <EditIcon />
                            </Button>
                            <Modal isOpen={isOpen} onClose={onClose}>
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
                                  <Button colorScheme='blue' mr={3} onClick={onClose}>
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
            <Button onClick={onOpen}>Add Utility</Button>
            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Add Utility</ModalHeader>
                <ModalCloseButton />
                <form onSubmit={handleAdd}>
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
                    <Button colorScheme='blue' mr={3} onClick={onClose}>
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
                    properties?.length > 0 && properties?.map((item) => (
                      <Tr key={item._id}>
                        <Td>{item.name}</Td>
                        <Td>{item.display}</Td>
                        <Td>{item.description}</Td>
                        <Flex>
                          <Td>
                            <Button onClick={onOpen}>
                              <EditIcon />
                            </Button>
                            <Modal isOpen={isOpen} onClose={onClose}>
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
                                  <Button colorScheme='blue' mr={3} onClick={onClose}>
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
            <Button onClick={onOpen}>AddUnitTypes</Button>
            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>AddUnitTypes</ModalHeader>
                <ModalCloseButton />
                <form onSubmit={handleAdd}>
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
                    <Button colorScheme='blue' mr={3} onClick={onClose}>
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
                    properties?.length > 0 && properties?.map((item) => (
                      <Tr key={item._id}>
                        <Td>{item.name}</Td>
                        <Td>{item.display}</Td>
                        <Td>{item.description}</Td>
                        <Flex>
                          <Td>
                            <Button onClick={onOpen}>
                              <EditIcon />
                            </Button>
                            <Modal isOpen={isOpen} onClose={onClose}>
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
                                  <Button colorScheme='blue' mr={3} onClick={onClose}>
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
        </TabPanels>
      </Tabs>
    </div>
  )
  }

export default Property;