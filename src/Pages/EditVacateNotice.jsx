import { Box, Button, FormControl, Heading, Input, Select, Stack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { editVacateNotice, getVacateNotice,  } from '../Redux/VacateNotice/action';
import { useNavigate, useParams } from 'react-router-dom';
const EditVacateNotice = () => {
  const { id } = useParams();
  const [vacateDate, setVacateDate] = useState("");
  const [vacateTentant, setVacateTentant] = useState("");
  const [vacateLease, setVacateLease] = useState("");
  const [vacateProperty, setVacateProperty] = useState("");
  const [vacateUnit, setVacateUnit] = useState("");
  const [reason, setReason] = useState("");
  const [currentVacate, setCurrentVacate] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const tentant = useSelector((state) => state.Tentants.tentants);
  const leases = useSelector((state) => state.Lease.leases);
  const property = useSelector((state) => state.Property.properties);
  const vacateLand = useSelector((state)=>state.VacateNotice.vacate);
  const handleEditVacantNotice = async () => {
    const payload = {
      vacateDate,
      vacateLease,
      vacateProperty,
      vacateTentant,
      vacateUnit,
      reason
    }
    try {
      await dispatch(editVacateNotice(id,payload));
      await dispatch(getVacateNotice());
      navigate("/vacateNotices")
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    if (vacateLand.length === 0) {
      dispatch(getVacateNotice())
    }
  }, [vacateLand.length, dispatch])
  useEffect(() => {
    if (id) {
      const vacateLandById = vacateLand.find((Lands) => Lands._id === id)
      vacateLandById && setCurrentVacate(vacateLandById);
      vacateLandById && setVacateDate(vacateLandById.vacateDate)
      vacateLandById && setVacateLease(vacateLandById.vacateLease)
      vacateLandById && setVacateProperty(vacateLandById.vacateProperty)
      vacateLandById && setVacateTentant(vacateLandById.vacateTentant)
      vacateLandById && setVacateUnit(vacateLandById.vacateUnit)
      vacateLandById && setReason(vacateLandById.reason)
    }
  }, [id, vacateLand])
  console.log(vacateLand);
  return (
    <div>
      <Stack style={{ width: "50%", height: "540px", margin: "auto", marginTop: "5px" }}>
        <Heading>Edit VacantNotice</Heading>
        <FormControl>
          <Input type="date" value={vacateDate} onChange={(e) => setVacateDate(e.target.value)} placeholder='VacantDate' />
        </FormControl>
        <br />
        <FormControl>
          <Select value={vacateTentant} onChange={(e) => setVacateTentant(e.target.value)} placeholder='tentant'>
            {
              tentant.map((item, index) => (
                <option key={index} value={item.firstName}>{item.firstName}</option>
              ))
            }
          </Select>
        </FormControl>
        <br />
        <FormControl>
          <Select value={vacateLease} onChange={(e) => setVacateLease(e.target.value)} placeholder='Lease'>
            {
              leases.map((item, index) => (
                <option key={index} value={item.leaseNumber}>{item.leaseNumber}</option>
              ))
            }
          </Select>
        </FormControl>
        <br />
        <FormControl>
          <Select value={vacateProperty} onChange={(e) => setVacateProperty(e.target.value)} placeholder='Property'>
            {
              property.map((item, index) => (
                <option key={index} value={item.propertyname}>{item.propertyname}</option>
              ))
            }
          </Select>
        </FormControl>
        <br />
        <FormControl>
          <Select value={vacateUnit} onChange={(e) => setVacateUnit(e.target.value)} placeholder='Unit'>
            {
              property.map((item, index) => (
                item.modals.map((secondItem, secondIndex) => (
                  <option key={index + secondIndex} value={secondItem.totalRoom}>{secondItem.totalRoom}</option>
                ))
              ))
            }
          </Select>
        </FormControl>
        <br />
        <FormControl>
          <Input type='text' value={reason} onChange={(e) => setReason(e.target.value)} placeholder='VacateReason' />
        </FormControl>
        <br />
        <Box style={{ width: "50%", height: "50px", margin: "auto" }}>
          <Button onClick={handleEditVacantNotice} style={{ height: "100%", width: "100%", fontSize: "24px", fontWeight: "bold" }}>AddVacantNotice</Button>
        </Box>
      </Stack>
    </div>
  )
}

export default EditVacateNotice