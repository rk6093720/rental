import { Box, Button, Heading, Select } from '@chakra-ui/react'
import React from 'react'

const Reports = () => {
  return (
    <div>
      <Heading>Rented Report</Heading>
      <br/>
      <Box style={{border:"1px solid white",width:"100%", height:"300px",padding:"15px",boxShadow: "0 1px 3px 0 rgba(0,0,0,0.1), 0 1px 2px -1px rgba(0,0,0,0.1)"}}>
        <h1>RentedReportForm</h1>
        <br />
        <form>
      <Select placeholder='Select Month'>
        <option value='January'>January</option>
        <option value='February'>February</option>
        <option value='March'>March</option>
        <option value='April'>April</option>
        <option value='May'>May</option>
        <option value='June'>June</option>
        <option value='July'>July</option>
        <option value='August'>August</option>
        <option value='September'>September</option>
        <option value='October'>October</option>
        <option value='November'>November</option>
        <option value='December'>December</option>
        </Select>
        <br/>
        <Select placeholder='Select Year'>
        <option value='2013'>2013</option>
        <option value='2014'>2014</option>
        <option value='2015'>2015</option>
        <option value='2016'>2016</option>
        <option value='2017'>2017</option>
        <option value='2018'>2018</option>
        <option value='2019'>2019</option>
        <option value='2020'>2020</option>
        <option value='2021'>2021</option>
        <option value='2022'>2022</option>
        <option value='2023'>2023</option>
        <option value='2024'>2024</option>
        </Select>
        <br/>
        <Select placeholder='Select Payment Status'>
        <option value='Paid'>Paid</option>
        <option value='Due'>Due</option>
        </Select>
        <br/>
        <Button>
          Submit
        </Button>
        </form>
        </Box>
    </div>
  )
}

export default Reports