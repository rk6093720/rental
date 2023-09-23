import { useToast } from '@chakra-ui/react';
import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom';
// check if the user is authenticated
// if yes , redirect / navigate to the page/ component that he/ she was trying to access
// else navigate to the login page
const ReqAuth = ({ children }) => {
  const auth = useSelector((state)=> state.Auth.isAuth);
  const toast = useToast()
  const location = useLocation();
  if (!auth) {
    toast({
      title: 'Your not logged in',
      description: "Please Log in first",
      status: 'error',
      duration: 9000,
      isClosable: true,
      position: "top"
    })
  }

  if (!auth) {
    return <Navigate to="/login" replace state={{ data: location.pathname, }} />
  }
  return children

}

export default ReqAuth