import { Box, Input, Spacer, Image, useToast } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
// import {  useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FcApproval } from "react-icons/fc";
import {
  Button,
  Flex,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { editApprove, getPaymentDetails } from "../Redux/Payment/action";
const Payment = () => {
  // const {id} = useParams();
  const dispatch = useDispatch();
  const [landlordFilter, setLandlordFilter] = useState("");
  const base = "http://localhost:8080/";
  const payment = useSelector((state) => state.Payment.payment);
  // const navigate = useNavigate();
  // const location = useLocation();
  const [width,setWidth]=useState(50);
  const toast = useToast();
  const [flag, setFlag] = useState("");
    // const [currentPayment, setCurrentPayment] = useState({});
  const handleFilter = (e) => {
    setLandlordFilter(e.target.value);
  };
  // const handleAdd = ()=>{
  //   if(location.pathname === "/tentant-dashboard/payment"){
  //       navigate("/tentant-dashboard/AddPayment")
  //   }
  // }
  const handleApprove = (id) => {
    let dena = payment.find((item) => item);
      const payload = {
        approve: !dena.approve,
      };
      console.log(payload,id)
      dispatch(editApprove(id, payload)).then(() =>
        dispatch(getPaymentDetails())
      ).then(()=>{
        toast({
          title: "Congrats. you are book the rooom successfully",
          duration: 5000,
          position: "top",
          isClosable: true,
          colorScheme: "green",
          status: "success",
        });
      });
    setFlag(!dena.approve);
  };
  // const View = (id)=>{
  //   if(location.pathname === "/superAdmin/payment"){
  //     navigate(`/superAdmin/viewPayment/${id}`)
  //   }
  //    else if(location.pathname === "/tentant-dashboard/payment"){
  //     navigate(`/tentant-dashboard/viewPayment/${id}`)
  //   }else{
  //     navigate(`owner-dashboard/viewPayment/${id}`)
  //   }
  // }
  // const edit =(id)=>{
  //   if(location.pathname === "/superAdmin/payment"){
  //     navigate(`/superAdmin/payment/${id}/edit`)
  //   }else if(location.pathname === "/tentant-dashboard/payment"){
  //     navigate(`/tentant-dashboard/payment/${id}/edit`)
  //   }else{
  //     navigate(`owner-dashboard/payment/${id}/edit`)
  //   }
  // }
  // const handleDelete = (item) => {
  //   dispatch(deletePayment(item._id))
  //     .then(() => dispatch(getPaymentDetails()))
  //   setColor(item._id)
  // }
  const handleImage=()=>{
    if(width == 50){
      setWidth(500)
    }else{
      setWidth(50)
    }
  }
  useEffect(() => {
    if (payment?.length === 0) {
      dispatch(getPaymentDetails());
    }
  }, [payment.length, dispatch]);
  // console.log(payment);
  // useEffect(() => {
  //   if (id) {
  //     const paymentApproval = payment.find((item) => item._id === id);
  //     paymentApproval && setCurrentPayment(paymentApproval);
  //     paymentApproval && setFlag(paymentApproval.approve);
  //   }
  // }, [id, paymentApproval]);
  console.log(flag);
  return (
    <div>
      <Flex minWidth="max-content" alignItems="center" gap="2" p="10px">
        {/* <Button onClick={handleAdd} style={{ border: "1px solid black", width: "250px", height: "50px", marginTop: "15px", borderRadius: "5px", backgroundColor: "black", color: "white" }}>
            <BsPersonFillAdd style={{ width: "100%", fontSize: "24px", alignItems: "center", height: "100%", padding: "1px" }} />
          </Button> */}
        <Spacer />
        <Box style={{ width: "500px", border: "0px" }}>
          <Input
            type="text"
            placeholder="filter using first name of user "
            value={landlordFilter}
            onChange={handleFilter}
          />
        </Box>
      </Flex>
      <Box style={{ marginTop: "15px", padding: "2px", padding: "20px" }}>
        <TableContainer>
          <Table variant="striped" colorScheme="teal">
            <TableCaption></TableCaption>
            <Thead>
              <Tr>
                <Th>TransactionId</Th>
                <Th>Name</Th>
                <Th>PaymentDate</Th>
                <Th>ScreenShot</Th>
                <Th>Action</Th>
              </Tr>
            </Thead>
            <Tbody>
              {payment?.length > 0 &&
                payment?.map((item) => {
                  return (
                    <Tr key={item._id}>
                      <Td>{item.transactionId}</Td>
                      <Td>{item.name}</Td>
                      <Td>{item.paymentDate}</Td>
                      <Td>
                        <Button onClick={handleImage}>
                          <Image
                            src={base + `${item.screenShot}`}
                            width={`${width}px`}
                          />
                        </Button>
                      </Td>
                      <Td>
                        <Button isDisabled={flag} onClick={()=>handleApprove(item._id)}>
                          {flag === true ? <FcApproval /> : "approve"}
                        </Button>
                      </Td>
                    </Tr>
                  );
                })}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </div>
  );
};

export default Payment;
