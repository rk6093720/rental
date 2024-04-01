import {
  Box,
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
            <Flex
              columns={[2, null, 3]}
              spacing="40px"
              justifyContent={"space-evenly"}
            >
              <Box border="1px solid black" width={"80%"} alignItems="center">
                <Box key={currentInvoice._id}>Id:{currentInvoice._id} </Box>
                <Box border="1px solid black">
                  InvoiceId:{currentInvoice.invoice}
                </Box>
                <Box border="1px solid black">Date:{currentInvoice.date}</Box>
                <Box border="1px solid black">
                  RoomType:{currentInvoice.apartmentType}
                </Box>

                <Box border="1px solid black">
                  Owner-phone:{currentInvoice.ownerPhone}
                </Box>
                <Box border="1px solid black">Month:{currentInvoice.month}</Box>
                <Box border="1px solid black">
                  TotalAmount:{currentInvoice.totalAmount}
                </Box>
                <Box border="1px solid black">Year:{currentInvoice.year}</Box>
                <Box border="1px solid black">Rent:{currentInvoice.rent}</Box>
                <Box border="1px solid black">
                  Payment:{currentInvoice.paymentStatus}
                </Box>
              </Box>
              <Spacer />
              <Box border="1px solid black" height={"100%"}>
                <Image src={currentInvoice.apartmentImage} />
              </Box>
            </Flex>
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
                      <h1>{currentInvoice.apartmentName}</h1>
                      <Box>
                        Address: 205,{currentInvoice.apartmentAddress} Main
                        Road,mc layout ,Bengaluru 560036
                      </Box>
                      <Box>Email:{currentInvoice.ownerEmail}</Box>
                      <Box>Helpline Number:{currentInvoice.ownerPhone}</Box>
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
                        src={currentInvoice.apartmentImage}
                        alt={currentInvoice.apartmentName}
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
                      <h1>Billed To</h1>
                      <Box>Name:{currentInvoice.username}</Box>
                      <Box>
                        Address: {currentInvoice.userAddress}
                      </Box>
                      <Box>Phone:{currentInvoice.userPhone}</Box>
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
                      <Box>Date:{currentInvoice.date}</Box>
                      <Box>Status:{currentInvoice.paymentStatus}</Box>
                      <Box>Invoice Number:{currentInvoice.invoice}</Box>
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
                        Address: {currentInvoice.apartmentAddress}
                      </Td>
                      <Td>₹{currentInvoice.rent}</Td>
                      <Td>Water + electricity</Td>
                      <Td>{currentInvoice.paymentStatus}</Td>
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
                  marginLeft: "70%",
                  textAlign: "end",
                }}
              >
                <Box>Rent:₹{currentInvoice.rent}</Box>
                <Box>Water:₹{currentInvoice.water}</Box>
                <Box>Electricity:₹{currentInvoice.electricity}</Box>
                <hr />
                <Box>TotalAmount:₹{currentInvoice.totalAmount}</Box>
              </Box>
            </Box>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
};

export default ViewInvoice;
