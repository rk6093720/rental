import { Box, Button, FormControl, Input, Select } from '@chakra-ui/react'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteSystem, editSystem, getSystem, postSystem } from '../Redux/System/action';
import { useParams } from 'react-router-dom';
const System = () => {
  const {id} = useParams();
  const [editing, setEditing] = useState(false);
  const [companyName,setCompanyName]=useState("");
  const [email,setEmail]=useState("");
  const [phone,setPhone]=useState("");
  const [logo,setLogo]=useState(null);
  const [currency,setCurrency]=useState("");
  const [color,setColor]=useState("");
  const [language,setLanguage]=useState("");
  const [address,setAddress]=useState("");
  const [website,setWebsite]=useState("");
  const [postalAddress,setPostalAddress]=useState("");
  const [postalCode,setPostalCode]=useState("");
  const [date,setDate]=useState("");
  const [separator,setSeparator]=useState("");
  const [separatorDot, setSeparatorDot] = useState("");
  const [separatorDate, setSeparatorDate] = useState("");
  const [currentSystem,setCurrentSystem]=useState({}); 
  const [country,setCountry]=useState([]);
  const system = useSelector((state) => state.System.system);
  const dispatch = useDispatch();
  const getCountry = async()=>{
    const res = await axios.get("https://restcountries.com/v3.1/all");
    setCountry(res.data)
  }
  const handleCancel = () => {
    setEditing(false); 
  };
  const handleUpdate=async(e)=>{
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("logo", logo);
      formData.append("companyName", companyName);
      formData.append("email", email);
      formData.append("phone", phone);
      formData.append("currency", currency);
      formData.append("color", color);
      formData.append("language", language);
      formData.append("address", address);
      formData.append("postalAddress", postalAddress);
      formData.append("postalCode", language);
      formData.append("date", date);
      formData.append("separator", separator);
      formData.append("separatorDot", separatorDot);
      formData.append("separatorDate", separatorDate);
      await dispatch(postSystem(formData))
      .then(()=> dispatch(getSystem()));
      handleCancel()
    } catch (error) {
       console.log(error);
    }
  }
  const handleEdit=()=>{
     setEditing(true)
  }
  const handleDelete=(id)=>{
    dispatch(deleteSystem(id))
    .then(()=> dispatch(getSystem()))
  }
  const handleEditSystem=async(id)=>{
    try {
      const formData = new FormData();
      formData.append("logo", logo);
      formData.append("companyName", companyName);
      formData.append("email", email);
      formData.append("phone", phone);
      formData.append("currency", currency);
      formData.append("color", color);
      formData.append("language", language);
      formData.append("address", address);
      formData.append("postalAddress", postalAddress);
      formData.append("postalCode", language);
      formData.append("date", date);
      formData.append("separator", separator);
      formData.append("separatorDot", separatorDot);
      formData.append("separatorDate", separatorDate);
      await dispatch(editSystem(id,formData))
        .then(() => dispatch(getSystem()));
      handleCancel()
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(()=>{
     getCountry()
  },[])
  useEffect(() => {
    if (system.length === 0) {
      dispatch(getSystem())
    }
  }, [system.length, dispatch]);
  useEffect(() => {
    if (id) {
      const systemlandById = system.find((item) => item._id === id);
      systemlandById && setCurrentSystem(systemlandById);
      systemlandById && setCompanyName(systemlandById.companyName);
      systemlandById && setEmail(systemlandById.email);
      systemlandById && setPhone(systemlandById.phone);
      systemlandById && setCurrency(systemlandById.currency);
      systemlandById && setColor(systemlandById.color);
      systemlandById && setAddress(systemlandById.address);
      systemlandById && setPostalAddress(systemlandById.postalAddress);
      systemlandById && setPostalAddress(systemlandById.postalCode);
      systemlandById && setDate(systemlandById.date);
      systemlandById && setSeparator(systemlandById.separator);
      systemlandById && setSeparatorDot(systemlandById.separatorDot);
      systemlandById && setSeparatorDate(systemlandById.separatorDate);
    }
  }, [id, system]);
  console.log(logo);
  return (
    <div >
      <Box  maxW='m' borderWidth='1px' borderRadius='lg' overflowX="hidden" overflowY="scroll">
        
            {
            editing ? (
              <>
                <FormControl>
                  <Input type="text" value={companyName} onChange={(e) => setCompanyName(e.target.value)} placeholder='name of the company' />
                </FormControl>
                <br />
                <FormControl>
                  <Input type='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='email' />
                </FormControl>
                <br />
                <FormControl>
                  <Input type='text' maxLength={10} value={phone} onChange={(e) => setPhone(e.target.value)} placeholder='phone number' />
                </FormControl>
                <br />
                <FormControl>
                  <Input type="file"
                    id="image"
                    accept='image/*'
                    name="logo"  onChange={(e) => setLogo(e.target.files[0])} placeholder='upload file' />
                </FormControl>
                <br />
                <FormControl>
                  <Select value={currency} onChange={(e) => setCurrency(e.target.value)} placeholder='Default Currency'>
                    {
                      country.map((item, index) => (
                        <option style={{ border: "1px solid black" }} key={index} value={item.name.common}>{item.name.common + "-" + (item.currencies ? Object.values(item.currencies)[0].symbol + "-" + Object.values(item.currencies)[0].name : "")}</option>
                      ))
                    }
                  </Select>
                </FormControl>
                <br />
                <FormControl>
                  <Select value={color} onChange={(e) => setColor(e.target.value)} placeholder='theme color'>
                    <option value="Blue">Blue</option>
                    <option value="Red">Red</option>
                    <option value="Green">Green</option>
                    <option value="Black">Black</option>
                    <option value="Orange">Orange</option>
                    <option value="Grey">Grey</option>
                    <option value="Yellow">Yellow</option>
                    <option value="Brown">Brown</option>
                    <option value="violet">violet</option>
                    <option value="white">white</option>
                    <option value="whiteGreen">whiteGreen</option>
                  </Select>
                </FormControl>
                <br />
                <FormControl>
                  <Input type="text" value={language} onChange={(e) => setLanguage(e.target.value)} placeholder='Language' />
                </FormControl>
                <br />
                <FormControl>
                  <Input type='text' value={address} onChange={(e) => setAddress(e.target.value)} placeholder='Physical address' />
                </FormControl>
                <br />
                <FormControl>
                  <Input type='text' value={postalAddress} onChange={(e) => setPostalAddress(e.target.value)} placeholder='Postal Address' />
                </FormControl>
                <br />
                <FormControl>
                  <Input type="url" value={website} onChange={(e) => setWebsite(e.target.value)} placeholder='Website link' />
                </FormControl>
                <br />
                <FormControl>
                  <Input type="text" value={postalCode} onChange={(e) => setPostalCode(e.target.value)} maxLength={6} placeholder='postal code' />
                </FormControl>
                <br />
                <FormControl>
                  <Input type="date" value={date} onChange={(e) => setDate(e.target.value)} placeholder='Date Format' />
                </FormControl>
                <br />
                <FormControl>
                  <Select placeholder='Amount decimal separator' value={separator} onChange={(e) => setSeparator(e.target.value)}>
                    <option value="1,000-comma Separator">1,000-comma Separator</option>
                    <option value="1,000-Dot separator">1,000-Dot separator</option>
                  </Select>
                </FormControl>
                <br />
                <FormControl>
                  <Select placeholder='Amount decimal separator' value={separatorDot} onChange={(e) => setSeparatorDot(e.target.value)}>
                    <option value="1,000-comma">1,000-comma</option>
                    <option value="1,000-Dot">1,000-Dot</option>
                  </Select>
                </FormControl>
                <br />
                <FormControl>
                  <Select placeholder='Amount decimal' value={separatorDate} onChange={(e) => setSeparatorDate(e.target.value)}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                  </Select>
                </FormControl>
                <br />
                <FormControl>
                  <Button type='submit' onClick={()=>handleEditSystem(id)} > Edit parameter</Button>
                </FormControl>
              </>
              ):(
              <form onSubmit={handleUpdate}>
                    <FormControl>
                      <Input type="text" value={companyName} onChange={(e) => setCompanyName(e.target.value)} placeholder='name of the company' />
                    </FormControl>
                    <br />
                    <FormControl>
                      <Input type='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='email' />
                    </FormControl>
                    <br />
                    <FormControl>
                      <Input type='text' maxLength={10} value={phone} onChange={(e) => setPhone(e.target.value)} placeholder='phone number' />
                    </FormControl>
                    <br />
                    <FormControl>
                    <Input  type="file"
                      id="image"
                      accept='image/*'
                      name="logo"  onChange={(e) => setLogo(e.target.files[0])} placeholder='upload file' />
                    </FormControl>
                    <br />
                    <FormControl>
                      <Select value={currency} onChange={(e) => setCurrency(e.target.value)} placeholder='Default Currency'>
                        {
                          country.map((item, index) => (
                            <option style={{ border: "1px solid black" }} key={index} value={item.name.common}>{item.name.common + "-" + (item.currencies ? Object.values(item.currencies)[0].symbol + "-" + Object.values(item.currencies)[0].name : "")}</option>
                          ))
                        }
                      </Select>
                    </FormControl>
                    <br />
                    <FormControl>
                      <Select value={color} onChange={(e) => setColor(e.target.value)} placeholder='theme color'>
                        <option value="Blue">Blue</option>
                        <option value="Red">Red</option>
                        <option value="Green">Green</option>
                        <option value="Black">Black</option>
                        <option value="Orange">Orange</option>
                        <option value="Grey">Grey</option>
                        <option value="Yellow">Yellow</option>
                        <option value="Brown">Brown</option>
                        <option value="violet">violet</option>
                        <option value="white">white</option>
                        <option value="whiteGreen">whiteGreen</option>
                      </Select>
                    </FormControl>
                    <br />
                    <FormControl>
                      <Input type="text" value={language} onChange={(e) => setLanguage(e.target.value)} placeholder='Language' />
                    </FormControl>
                    <br />
                    <FormControl>
                      <Input type='text' value={address} onChange={(e) => setAddress(e.target.value)} placeholder='Physical address' />
                    </FormControl>
                    <br />
                    <FormControl>
                      <Input type='text' value={postalAddress} onChange={(e) => setPostalAddress(e.target.value)} placeholder='Postal Address' />
                    </FormControl>
                    <br />
                    <FormControl>
                      <Input type="url" value={website} onChange={(e) => setWebsite(e.target.value)} placeholder='Website link' />
                    </FormControl>
                    <br />
                    <FormControl>
                      <Input type="text" value={postalCode} onChange={(e) => setPostalCode(e.target.value)} maxLength={6} placeholder='postal code' />
                    </FormControl>
                    <br />
                    <FormControl>
                      <Input type="date" value={date} onChange={(e) => setDate(e.target.value)} placeholder='Date Format' />
                    </FormControl>
                    <br />
                    <FormControl>
                      <Select placeholder='Amount decimal separator' value={separator} onChange={(e) => setSeparator(e.target.value)}>
                        <option value="1,000-comma Separator">1,000-comma Separator</option>
                        <option value="1,000-Dot separator">1,000-Dot separator</option>
                      </Select>
                    </FormControl>
                    <br />
                    <FormControl>
                      <Select placeholder='Amount decimal separator' value={separatorDot} onChange={(e) => setSeparatorDot(e.target.value)}>
                        <option value="1,000-comma">1,000-comma</option>
                        <option value="1,000-Dot">1,000-Dot</option>
                      </Select>
                    </FormControl>
                    <br />
                    <FormControl>
                      <Select placeholder='Amount decimal' value={separatorDate} onChange={(e) => setSeparatorDate(e.target.value)}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                      </Select>
                    </FormControl>
                    <br />
                    <FormControl>
                      <Button type='submit'>Add parameter</Button>
                    </FormControl>
              </form>
              )
            }
          
          {editing ? (
            <>
              <Button onClick={handleCancel}>Cancel</Button>
            </>
          ) : (
            <>
                <Button onClick={handleEdit}>Edit</Button>
                <Button onClick={()=>handleDelete(id)}>Delete</Button>
            </>
          )
         }
         </Box>
    </div>
  )
}

export default System