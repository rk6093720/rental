import { Box, Flex, Spacer } from '@chakra-ui/react'
import React from 'react'
import Sidebar from '../Component/Sidebar'
import Navbar from '../Component/Navbar'
import MainRoutes from '../Pages/MainRoutes'
import { Outlet } from 'react-router-dom'

const RoutesApp = () => {
  return (
    <div>
              <Flex className='box' style={{ width: '100%', height: "100vh" }}>
                  <Box className='sidebarBox' style={{ width: "20%" }}>
                      <Sidebar />
                  </Box>
                  <Spacer className='space' style={{ width: "1%" }} />
                  <Box className='NavbarBox' style={{ width: "79%" }}>
                      <Navbar />
                      <MainRoutes />
                      <Outlet/>
                  </Box>
              </Flex>
        
    </div>
  )
}

export default RoutesApp