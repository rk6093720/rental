import { Box, Input, Spacer,Image} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BsPersonFillAdd } from "react-icons/bs"
import { useDispatch, useSelector } from 'react-redux';
import { deleteApartment, filterLandlord, getApartment, setPagination, superApartment } from '../Redux/App/action';
import { ChevronDownIcon, DeleteIcon, EditIcon } from '@chakra-ui/icons';
import { Button, Flex, Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import { useLocation,useNavigate } from 'react-router-dom';
const Apartment = () => {
    const base = "http://localhost:8080/"
  const dispatch = useDispatch();
  const navigate= useNavigate();
  const location = useLocation()
  const [color,setColor]= useState(null);
  const [landlordFilter,setLandlordFilter]= useState("");
  const {pagination,sort,filters} = useSelector((state)=>state.App)
  console.log(pagination, sort, filters)
  const handleFilter=(e)=>{
    setLandlordFilter(e.target.value)
  }
  // const navigate = useNavigate();
  const handleDelete = (item)=>{
      dispatch(deleteApartment(item._id))
      .then(()=> dispatch(getApartment()))
    setColor(item._id)
  }
  const handlePaginationChange = (newPage) => {
    // Update Redux state when local state changes
    dispatch(setPagination({ ...pagination, page: newPage }));
  };

  const land = useSelector((state) => state.App.apartment);
  const View = (id)=>{
    if(location.pathname === "/superAdmin/apartment"){
      navigate(`/superAdmin/view-apartment/${id}`)
    }
     else if(location.pathname === "/owner-dashboard/apartment"){
      navigate(`/owner-dashboard/view-apartment/${id}`)
    }
  }
  const edit =(id)=>{
    if(location.pathname === "/superAdmin/apartment"){
      navigate(`/superAdmin/apartment/${id}/edit`)
    }else if(location.pathname === "/owner-dashboard/apartment"){
      navigate(`/owner-dashboard/apartment/${id}/edit`)
    }
  }
useEffect(() => {
    try {
      // Fetch super admin apartment data only when the path is '/superAdmin/apartment' and land data is empty
      if (
        location.pathname === "/superAdmin/apartment" &&
        (!land || land.length === 0)
      ) {
        dispatch(superApartment());
      }
       if (!land || land.length === 0){
        dispatch(getApartment())
      }
       // Fetch landlord data based on filters, sort, and pagination
        dispatch(filterLandlord(filters, sort, pagination));
    } catch (error) {
      console.error("Error fetching data:", error);
      // Handle error gracefully
    }
}, [dispatch, filters, sort, pagination, land, location.pathname]);

  return (
    <div>
      <Flex minWidth='max-content' alignItems='center' gap='2'>
       <Link to="/owner-dashboard/AddApartment"> 
          <Box  style={{ border: "1px solid black", width: "250px", height: "50px", marginTop: "15px",borderRadius:"5px", backgroundColor:"black" , color:"white"}}>
            <BsPersonFillAdd style={{ width:"100%",fontSize:"24px", alignItems:"center",height:"100%",padding:"1px"}}/>
          </Box>
        </Link> 
       <Spacer/>
        <Box style={{width:"500px",border:"0px" }}>
          <Input type="text" placeholder='filter using first name of user '
          value={landlordFilter}
          onChange={handleFilter}/>
          </Box>
      </Flex>
      <Box style={{marginTop:"15px", padding:"2px"}}>
        <TableContainer>
          <Table variant='striped' colorScheme='teal'>
            <TableCaption></TableCaption>
            <Thead>
              <Tr>
                <Th>S.no</Th>
                <Th>Image</Th>
                <Th>Title</Th>
                <Th>parking</Th>
                <Th>terrace</Th>
                <Th>Action</Th>
              </Tr>
            </Thead>
            <Tbody>
              {
                land?.length > 0 && land?.map((item, index) => {
                  return (
                    <Tr key={item._id}>
                      <Td>{index + 1}</Td>
                      <Td width={"50px"} height={"20px"}>
                        <Image src={base + item.apartmentImage} />
                      </Td>
                      <Td>{item.title}</Td>
                      <Td>{item.parking}</Td>
                      <Td>{item.terrace}</Td>
                      <Flex>
                        <Td>
                          <Button onClick={() => View(`${item._id}`)}>
                            <ChevronDownIcon />
                          </Button>
                        </Td>
                        <Td>
                          <Button onClick={() => edit(`${item._id}`)}>
                            <EditIcon />
                          </Button>
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
                  );
                })
              }
            </Tbody>
          </Table>
        </TableContainer> 
      </Box>
      <Box>
        {Array.from({ length: pagination.totalPages }).map((_, index) => (
          <button key={index + 1} onClick={() => handlePaginationChange(index + 1)}>
            {index + 1}
          </button>
        ))}
      </Box>
    </div>
  )
}

export default  Apartment;