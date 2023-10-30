import { Box, Flex, Spacer } from '@chakra-ui/react';
import React from 'react';
import Sidebar from '../Component/Sidebar';
import Navbar from '../Component/Navbar';
import MainRoutes from '../Pages/MainRoutes';
import { Outlet, useLocation } from 'react-router-dom';
import Setting from '../Pages/Setting';
const RoutesApp = () => {
  const location = useLocation();
  // Check if the current route is "/setting"
  const isSettingRoute = location.pathname.startsWith("/setting");
  return (
    <div>
              <Flex className='box' style={{ width: '100%', height: "100vh" }}>
                  <Box className='sidebarBox' style={{ width: "20%" }}>
                      <Sidebar />
                  </Box>
                  <Spacer className='space' style={{ width: "1%" }} />
                  <Box className='NavbarBox' style={{ width: "79%" }}>
                    <Navbar/>
                    {!isSettingRoute ? (<MainRoutes />) : (<Setting />)}
                    <Outlet/>
                  </Box>
              </Flex>
        
    </div>
  )
}

export default RoutesApp