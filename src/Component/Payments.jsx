import { Input, Tab, TabList, TabPanel, TabPanels, Table, TableCaption, TableContainer, Tabs, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import React from 'react'

const  Payments= () => {
  return (
    <div>
      <Tabs>
        <TabList>
          <Tab>Payment</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Input placeholder=' number prefix' />

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

export default Payments;