
import { Box, Button, FormControl, Heading, Input,  Radio,  RadioGroup,  Select, Stack} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getProperty } from '../Redux/Property/action';
import { getUtility, postUtility } from '../Redux/Utility/action';

const AddUtility = () => {
    const [propertyname,setPropertyName]=useState("");
    const [utilityname,setUtilityName]=useState("");
    const [manual,setManual]=useState([]);
    const [flag,setFlag]=useState(null);
    const [value, setValue] = useState("");
        const dispatch = useDispatch();
    const isloading = useSelector((state)=>state.Property.isloading)
     const propertyLand = useSelector((state)=> state.Property.properties);
     const handleChange=(e)=>{
        setUtilityName(e.target.value);
        setFlag(!isloading)
     }
    const handleAddLease=async()=>{
        const payload ={
            propertyname,
            utilityname,
            manual
        }
      try {
         await dispatch(postUtility(payload));
         await dispatch(getUtility());
      } catch (error) {
        console.log(error);
      }
    }
     const  handleAddRadio=()=>{
        const newRadio={
            unit:"",
            date:"",
            reading:0,
        }
        setManual([...manual, newRadio])
     }
     const  handleUnit=(index,value)=>{
        const updateUnit = [...manual];
        updateUnit[index].unit = value;
        setManual(updateUnit)
     }
     const handleDate=(index,value)=>{
         const updateUnit = [...manual];
         updateUnit[index].date = value;
         setManual(updateUnit)
     }
    const handleReading = (index, value) => {
        const updateUnit = [...manual];
        updateUnit[index].reading = value;
        setManual(updateUnit)
    }
    
    const handleDeleteRadio=(index)=>{
        const updatedRadio = [...manual];
        updatedRadio.splice(index, 1);
        setManual(updatedRadio);
    }
     useEffect(()=>{
        dispatch(getProperty())
     },[dispatch])
     console.log(flag,value)
    return (
        <div>
            <Box style={{ width: "50%", height: "100vh", margin: "auto", marginTop: "15px" }}>
                <Heading>Add Utility</Heading>
              <FormControl>
                <Select value={propertyname} onChange={(e)=>setPropertyName(e.target.value)} placeholder='enter the propertyname'>
                   {
                    propertyLand.map((item)=>(
                        <option key={item._id} value={item.propertyname}>{item.propertyname}</option>
                    ))
                   }
                </Select>
              </FormControl>
                <FormControl>
                    <Select value={utilityname} onChange={handleChange} placeholder='enter the utility name'>
                        <option value="cmnt">cmnt</option>
                        <option value="water">Water</option>
                        <option value="electricity">Electricity</option>
                        <option value="gas">Gas</option>
                        <option value="garbage">Garbage</option>
                    </Select>
                </FormControl>
                {
                    flag ? <RadioGroup onChange={setValue} value={value}>
                        <Stack direction='row'>
                            <Radio value='Manual'>Manual</Radio>
                            {/* <Radio value='Auto'>Auto</Radio> */}
                        </Stack>
                    </RadioGroup>
                        : null
                }
                {
                    value === 'Manual' &&  <Box>
                        {
                            manual.map((item,index)=>(
                                 <div key={index}>
                                     <FormControl>
                                         <Select value={item.unit} onChange={(e)=> handleUnit(index,e.target.value)} placeholder='unit'>
                                            {
                                                propertyLand.map((item, index) => (
                                                    item.modals.map((subItem, subIndex) => (
                                                        <option key={index + subIndex} value={subItem.totalRoom}>{subItem.totalRoom}</option>
                                                    ))))}
                                         </Select>
                                     </FormControl>
                                     <FormControl>
                                         <Input type="date" value={item.date} onChange={(e)=>handleDate(index,e.target.value)} />
                                     </FormControl> 
                                     <FormControl>
                                        <Input type="number" value={item.reading} onChange={(e) => handleReading(index, e.target.value)} placeholder=' current Reading' />
                                     </FormControl> 
                                     <Button onClick={() => handleDeleteRadio(index)}>DeleteRadio</Button>
                                 </div>
                            ))
                        }
                        <Button onClick={handleAddRadio}>AddRadio</Button> 
                    </Box> 
                }
                {/* {value === 'Auto' && <Box> 
                    <FormControl>
                        <Input type="file" />
                    </FormControl> 
                    <Button>upload</Button>
                    </Box>} */}
                <Button className='addPropertybutton' _hover={{ bg: "green", color: "white" }} style={{
                    marginTop: "80%", width: "30%",
                    margin: "auto", fontSize: "24px"
                }} onClick={handleAddLease}>Submit</Button>
                   
            </Box>
        </div>
    )
}
export default AddUtility