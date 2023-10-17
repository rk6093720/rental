
import { Box, Button, FormControl, Heading, Input } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { editUtility, getUtility } from '../Redux/Utility/action';
import { useNavigate, useParams } from 'react-router-dom';
const EditUtility = () => {
  const {id}= useParams();
  const [manual, setManual] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const propertyLand = useSelector((state) => state.Utility.utilities);
  const [currentUtility,setCurrentUtility]=useState({})
  const handleEditUtility = async () => {
    const payload = {
      manual
    }
    try {
      await dispatch(editUtility(id,payload));
      await dispatch(getUtility());
      navigate("/utilities")
    } catch (error) {
      console.log(error);
    }
  }
  const handleAddRadio = () => {
    const newRadio = {

      date: "",
      reading: 0,
    }
    setManual([...manual, newRadio])
  }

  const handleDate = (index, value) => {
    const updateUnit = [...manual];
    updateUnit[index].date = value;
    setManual(updateUnit)
  }
  const handleReading = (index, value) => {
    const updateUnit = [...manual];
    updateUnit[index].reading = value;
    setManual(updateUnit)
  }

  const handleDeleteRadio = (index) => {
    const updatedRadio = [...manual];
    updatedRadio.splice(index, 1);
    setManual(updatedRadio);
  }
  useEffect(() => {
    if (propertyLand.length === 0) {
      dispatch(getUtility())
    }
  }, [propertyLand.length, dispatch])
  useEffect(() => {
    if (id) {
      const utilityById = propertyLand.find((lands) => lands._id === id)
      utilityById && setCurrentUtility(utilityById);
      utilityById && setManual(utilityById.manual);
    }
  }, [id, propertyLand])
  console.log(propertyLand);
  return (
    <div>
      <Box style={{ width: "50%", height: "100vh", margin: "auto", marginTop: "15px" }}>
        <Heading>Edit Utility</Heading>
        <Box>
            {
              propertyLand.map((item) => (
                <div key={item._id} >{item.propertyname}</div>
              ))
            }
        </Box>
        <Box>
          {
            propertyLand.map((item) => (
              <div key={item._id} >{item.utilityname}</div>
            ))
          }
        </Box>
        <Box>
          {
            propertyLand.map((item,index)=>(
              item.manual.map((secondItem,secondIndex)=>(
                <div key={index + secondIndex}>
                  {secondItem.unit}
                </div>
              ))
            ))
          }
         
        </Box>
       
            {
              manual.map((item, index) => (
                <div key={index}>
                  <FormControl>
                    <Input type="date" value={item.date} onChange={(e) => handleDate(index, e.target.value)} />
                  </FormControl>
                  <FormControl>
                    <Input type="number" value={item.reading} onChange={(e) => handleReading(index, e.target.value)} placeholder=' current Reading' />
                  </FormControl>
                  <Button onClick={() => handleDeleteRadio(index)}>DeleteRadio</Button>
                </div>
              ))
            }
            <Button onClick={handleAddRadio}>AddRadio</Button>
            <br/>
        <Button className='addPropertybutton' _hover={{ bg: "green", color: "white" }} style={{
          marginTop: "80%", width: "30%",
          margin: "auto", fontSize: "24px"
        }} onClick={handleEditUtility}>Submit</Button>
      </Box>
    </div>
  )
}

export default EditUtility