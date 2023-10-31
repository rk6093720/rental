import { Box, Flex, Spacer } from '@chakra-ui/react'
import React from 'react'
import { Link, Outlet} from 'react-router-dom'
import SettingMainRoutes from './SettingMainRoutes'
const Setting = () => {
  return (
    <div>
      <Flex className='box' style={{  width: '100%', height: "100vh" }}>
        <Box className='sidebarBox' style={{ width: "20%" }}>
          <Box style={{  width: "100%", height:"50px" , fontSize:"24px", marginTop:"15px"}}>
              <Link to='/setting/'>
                System
              </Link>
            </Box>
          <Box style={{  width: "100%", height: "50px", fontSize: "24px", marginTop: "15px" }}>
              <Link to='/setting/property'>
                Property
              </Link>
            </Box>
          <Box style={{  width: "100%", height: "50px", fontSize: "24px", marginTop: "15px" }} >
              <Link to='/setting/email'>
                notiication
              </Link>
            </Box>
          <Box style={{  width: "100%", height: "50px", fontSize: "24px", marginTop: "15px" }} >
              <Link to='/setting/lease'>
                Lease
              </Link>
            </Box>
          <Box style={{  width: "100%", height: "50px", fontSize: "24px", marginTop: "15px" }} >
              <Link to='/setting/tenant'>
                Tentant
              </Link>
            </Box>
          <Box style={{  width: "100%", height: "50px", fontSize: "24px", marginTop: "15px" }}>
              <Link to='/setting/payments'>
                payment
              </Link>
            </Box>
          <Box style={{  width: "100%", height: "50px", fontSize: "24px", marginTop: "15px" }}>
              <Link to='/setting/user'>
                UsersRole
              </Link>
            </Box>
        </Box>
        <Spacer className='space' style={{border:"1px solid black", width: "0.5%" }} />
        <Box className='NavbarBox' style={{ width: "79%", height:"100%" ,overflowX:"scroll",overflowY:"scroll"}}>
          <SettingMainRoutes />
          <Outlet />
        </Box>
      </Flex>
    </div>
  )
}

export default Setting