import {
  Box,
  SimpleGrid,
  Tab,
  Tabs,
  TabList,
  TabPanel,
  TabPanels,
  Flex,
  Spacer,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  // TableCaption,
  TableContainer,
  Heading,
  Image,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getInvoice } from "../Redux/VacateNotice/action";
const ViewInvoice = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const invoice = useSelector((state) => state.VacateNotice.invoice);
  const [currentInvoice, setCurrentInvoice] = useState({});
  useEffect(() => {
    if (invoice.length === 0) {
      dispatch(getInvoice());
    }
  }, [dispatch, invoice.length]);
  useEffect(() => {
    if (id) {
      const currentLand = invoice.find((lands) => lands._id === id);
      currentLand && setCurrentInvoice(currentLand);
    }
  }, [id, invoice]);
  console.log(currentInvoice);
  return (
    <div>
      <Tabs>
        <TabList>
          <Tab>Information</Tab>
          <Tab>Make a Invoice</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <SimpleGrid columns={[2, null, 3]} spacing="40px">
              <Box
                border="1px solid black"
                alignItems="center"
                height="80px"
                key={currentInvoice._id}
              >
                Id:{currentInvoice._id}{" "}
              </Box>
              <Box border="1px solid black" alignItems="center" height="80px">
                InvoiceId:{currentInvoice.invoice}
              </Box>
              <Box border="1px solid black" alignItems="center" height="80px">
                Date:{currentInvoice.date}
              </Box>
              <Box border="1px solid black" alignItems="center" height="80px">
                RoomType:{currentInvoice.roomType}
              </Box>
              <Box border="1px solid black" alignItems="center" height="80px">
                Period:{currentInvoice.period}
              </Box>
              <Box border="1px solid black" alignItems="center" height="80px">
                Month:{currentInvoice.month}
              </Box>
              <Box border="1px solid black" alignItems="center" height="80px">
                TotalAmount:{currentInvoice.totalAmount}
              </Box>
              <Box border="1px solid black" alignItems="center" height="80px">
                Year:{currentInvoice.year}
              </Box>
              <Box border="1px solid black" alignItems="center" height="80px">
                Rent:{currentInvoice.rent}
              </Box>
              <Box border="1px solid black" alignItems="center" height="80px">
                Payment:{currentInvoice.payment}
              </Box>
            </SimpleGrid>
          </TabPanel>
          <TabPanel>
            <Box
              style={{
                border: "1px solid black",
                width: "85%",
                height: "720px",
                margin: "auto",
                padding: "5px",
                marginTop: "5px",
              }}
            >
              <Box
                style={{
                  width: "100%",
                  height: "200px",
                }}
              >
                <Flex>
                  <Box
                    style={{
                      width: "50%",
                      height: "100%",
                      marginTop: "10px",
                      padding: "5px",
                    }}
                  >
                    <Box>
                      <Heading>ApartmentName</Heading>
                      <Box>
                        Address: 205, Devasandra Main Road,mc layout ,Bengaluru
                        560036
                      </Box>
                      <Box>Email:enquiry@apartmentname.com</Box>
                      <Box>Helpline Number:1234567890</Box>
                    </Box>
                  </Box>
                  <Spacer style={{ width: "10%" }} />
                  <Box
                    style={{
                      width: "40%",
                      height: "100%",
                      padding: "2px",
                    }}
                  >
                    <Box
                      style={{
                        width: "100%",
                        height: "100%",
                      }}
                    >
                      <Image
                        src="http://localhost:8080/apartmentImages/apartment-image.jpg"
                        alt="apartment-name"
                        width={"80%"}
                        height={"100%"}
                      />
                    </Box>
                  </Box>
                </Flex>
              </Box>
              <hr style={{ fontWeight: "bold" }} />
              <Box
                className="UserName"
                style={{
                  width: "100%",
                  height: "200px",
                }}
              >
                <Flex>
                  <Box
                    style={{
                      width: "50%",
                      height: "100%",
                      marginTop: "10px",
                      padding: "5px",
                    }}
                  >
                    <Box>
                      <Heading>Billed To</Heading>
                      <Box>Name:Rohit Kumar</Box>
                      <Box>
                        Address: 205, Devasandra Main Road,mc layout ,Bengaluru
                        560036
                      </Box>
                      <Box>Phone:1234567890</Box>
                    </Box>
                  </Box>
                  <Spacer style={{ width: "10%" }} />
                  <Box
                    style={{
                      width: "40%",
                      height: "100%",
                      padding: "2px",
                    }}
                  >
                    <Box
                      style={{
                        width: "100%",
                        height: "100%",
                        marginTop: "5px",
                      }}
                    >
                      <Box>Date:27/03/2024</Box>
                      <Box>Status:Due/Paid</Box>
                      <Box>Invoice Number:Inv00013</Box>
                    </Box>
                  </Box>
                </Flex>
              </Box>
              <hr style={{ fontWeight: "bold" }} />
              <TableContainer style={{ width: "100%", padding: "2px" }}>
                <Table variant="simple">
                  <Thead>
                    <Tr>
                      <Th>Property Address</Th>
                      <Th>Rent</Th>
                      <Th>Utilities</Th>
                      <Th>Status</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    <Tr>
                      <Td
                        style={{ letterSpacing: "2px", textAlign: "justify" }}
                      >
                        Address: 205, Devasandra Main <br /> Road, mc layout
                        ,Bengaluru 560036
                      </Td>
                      <Td>₹20,000</Td>
                      <Td>Water + electricity</Td>
                      <Td>Due</Td>
                    </Tr>
                  </Tbody>
                  <Tfoot></Tfoot>
                </Table>
              </TableContainer>
              {/* this stage is say about total amount due or paid by users */}
              <Box
                style={{
                  width: "20%",
                  height: "100px",
                  marginLeft:"70%",
                  textAlign:"end"
                }}
              >
                <Box>Rent:₹20,000</Box>
                <Box>Water:₹5,000</Box>
                <Box>Electricity:₹2,000</Box>
                <hr/>
                <Box>TotalAmount:₹27,000</Box>
              </Box>
            </Box>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
};

export default ViewInvoice;
