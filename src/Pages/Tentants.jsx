import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ChevronDownIcon, DeleteIcon, EditIcon } from "@chakra-ui/icons";
import {
  Button,
  Flex,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  useToast,
  Td,
  Th,
  Thead,
  Tr,
  Spacer,
  Box,
  Input
} from "@chakra-ui/react";
import {
  deleteTentants,
  editNotification,
  getNotification,
  getTentants,
  superTentants,
} from "../Redux/Tentants/action";
import { getApartment, superApartment } from "../Redux/App/action";

const Tentants = () => {
  const dispatch = useDispatch();
  const [color, setColor] = useState(null);
  const [contract, setContract] = useState("");
  const [tentantsFilter, setTentantsFilter] = useState("");
  const tentant = useSelector((state) => state.Tentants.tentants);
  const apartment = useSelector((state) => state.App.apartment);
  const notice = useSelector((state) => state.Tentants.notification);
  const location = useLocation();
  const navigate = useNavigate();
  const toast = useToast();

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (apartment?.length === 0) {
          dispatch(getApartment());
        } else if (location.pathname === "/superAdmin/apartment") {
          dispatch(superApartment());
        } else if (notice?.length === 0) {
          dispatch(getNotification());
        } else if (
          location.pathname === "/superAdmin/tentants" &&
          tentant?.length === 0
        ) {
          dispatch(superTentants());
        } else {
          dispatch(getTentants());
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        // Handle error gracefully
      }
    };

    fetchData();
  }, [dispatch, location.pathname, apartment?.length, notice?.length, tentant]);

  const showContract = (id) => {
    const notificationId = notice.find((item) => item.contract);
    const apartmentId = apartment.find((item) => item);
    const payload = {
      contract: notificationId.contract,
      apartmentId: apartmentId._id,
      tentantsId: id,
    };
    setContract(notificationId.contract);
    dispatch(editNotification(notificationId._id, payload));
    toast({
      title:
        "Owner has given access to see the contract pdf. After that, admin has hidden the user's data.",
      status: "success",
      duration: 5000,
      position: "top",
      isClosable: true,
      colorScheme: "green",
    });
  };

  const showActive = () => {
    alert("active");
  };

  const View = (id) => {
    let route = "";
    if (location.pathname === "/superAdmin/tentants") {
      route = `/superAdmin/viewTentants/${id}`;
    } else if (location.pathname === "/tentant-dashboard/tentants") {
      route = `/tentant-dashboard/viewTentants/${id}`;
    } else {
      route = `/owner-dashboard/viewTentants/${id}`;
    }
    navigate(route);
  };

  const edit = (id) => {
    let route = "";
    if (location.pathname === "/superAdmin/tentants") {
      route = `/superAdmin/tentant/${id}/edit`;
    } else if (location.pathname === "/tentant-dashboard/tentants") {
      route = `/tentant-dashboard/tentant/${id}/edit`;
    } else {
      route = `/owner-dashboard/tentant/${id}/edit`;
    }
    navigate(route);
  };

  const handleFilter = (e) => {
    setTentantsFilter(e.target.value);
  };

  const handleDelete = (item) => {
    dispatch(deleteTentants(item._id));
    setColor(item._id);
  };

  return (
    <div>
      <Flex minWidth="max-content" alignItems="center" gap="2" p={"15px"}>
        <Spacer />
        <Box style={{ width: "500px", border: "0px" }}>
          <Input
            type="text"
            placeholder="Filter by first name"
            value={tentantsFilter}
            onChange={handleFilter}
          />
        </Box>
      </Flex>
      <Box style={{ marginTop: "15px", padding: "25px" }}>
        <TableContainer>
          <Table variant="striped" colorScheme="teal">
            <TableCaption></TableCaption>
            <Thead>
              <Tr>
                <Th>FirstName</Th>
                <Th>LastName</Th>
                <Th>Email</Th>
                <Th>Phone</Th>
                <Th>Action</Th>
              </Tr>
            </Thead>
            <Tbody>
              {tentant?.length > 0 &&
                tentant
                  .filter((item) =>
                    item.firstName
                      .toLowerCase()
                      .includes(tentantsFilter.toLowerCase())
                  )
                  .map((item) => (
                    <Tr key={item?._id}>
                      <Td>{item.firstName}</Td>
                      <Td>{item.lastName}</Td>
                      <Td>{item.email}</Td>
                      <Td>{item.phone}</Td>
                      <Flex>
                        <Td>
                          <Button onClick={() => View(item._id)}>
                            <ChevronDownIcon />
                          </Button>
                        </Td>
                        <Td>
                          <Button
                            onClick={() => showContract(item._id)}
                            isDisabled={contract === "complete"}
                          >
                            {contract && true ? contract : "uncompleted"}
                          </Button>
                        </Td>
                        <Td>
                          <Button onClick={() => edit(item._id)}>
                            <EditIcon />
                          </Button>
                        </Td>
                        <Td>
                          <Button onClick={showActive}>Status</Button>
                        </Td>
                        <Td>
                          <Button onClick={() => handleDelete(item)}>
                            <DeleteIcon
                              style={{
                                color: color === item._id ? "green" : "red",
                              }}
                            />
                          </Button>
                        </Td>
                      </Flex>
                    </Tr>
                  ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </div>
  );
};

export default Tentants;
