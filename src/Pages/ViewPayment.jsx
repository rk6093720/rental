import { Box, SimpleGrid, Tab, TabList, TabPanel, TabPanels, Tabs} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { getPayment } from '../Redux/Payment/action';
const ViewPayment = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const paymentsapp = useSelector((state) => state.Payment.paymentsapp);
    const [currentPaymentsapp, setCurrentPaymentsapp] = useState({});
    useEffect(() => {
        if (paymentsapp.length === 0) {
            dispatch(getPayment())
        }
    }, [dispatch, paymentsapp.length])
    useEffect(() => {
        if (id) {
            const currentLand = paymentsapp.find((lands) => lands._id === id)
            currentLand && setCurrentPaymentsapp(currentLand);
        }
    }, [id, paymentsapp]);
    console.log(currentPaymentsapp)
    return (
        <div>
            <Tabs>
                <TabList>
                    <Tab>Information</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <SimpleGrid columns={[2, null, 3]} spacing='40px' >
                            <Box border="1px solid black" alignItems="center" height='80px' key={currentPaymentsapp._id}>Id:{currentPaymentsapp._id} </Box>
                            <Box border="1px solid black" alignItems="center" height='80px'>PaymentTentant:{currentPaymentsapp.paymentTentant}</Box>
                            <Box border="1px solid black" alignItems="center" height='80px'>PaymentLease:{currentPaymentsapp.paymentLease}</Box>
                            <Box border="1px solid black" alignItems="center" height='80px'>Amount:{currentPaymentsapp.amount}</Box>
                            <Box border="1px solid black" alignItems="center" height='80px'>PaymentMethod:{currentPaymentsapp.paymentMethod}</Box>
                            <Box border="1px solid black" alignItems="center" height='80px'>PaymentDate:{currentPaymentsapp.paymentDate}</Box>
                        </SimpleGrid>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </div>
    )
}

export default ViewPayment