import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import {
  Button,
  Box,
  Flex,
  Text,
  Portal,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverHeader,
  PopoverCloseButton,
  PopoverBody,
  PopoverFooter,
  Spacer,
} from "@chakra-ui/react";

const Navbar = () => {
  const navigate = useNavigate();
  const [superAdmin, setSuperAdmin] = useState(
    JSON.parse(localStorage.getItem("SuperAdmintoken"))
  );
  const [timeLeft, setTimeLeft] = useState(0);

  const handleSignout = () => {
    localStorage.removeItem("SuperAdmintoken");
    navigate("/adminSignup");
    window.location.reload();
  };

  useEffect(() => {
    if (superAdmin) {
      const expiryDate = new Date(superAdmin.token.expiresIn);
      const interval = setInterval(() => {
        const now = new Date();
        const difference = expiryDate - now;
        setTimeLeft(Math.max(0, difference));
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [superAdmin]);

  const formatTime = (time) => {
    const hours = Math.floor(time / (1000 * 60 * 60));
    const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((time % (1000 * 60)) / 1000);
    return `${hours < 10 ? "0" : ""}${hours}:${
      minutes < 10 ? "0" : ""
    }${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <div>
      <div
        className="container"
        style={{
          width: "100%",
          height: "50px",
          display: "flex",
          backgroundColor: "teal",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div
          className="left"
          style={{ width: "20%", color: "white", fontSize: "24px" }}
        >
          <Link
            to="/dashboard"
            style={{ textDecoration: "none", color: "white" }}
          >
            Apartment
          </Link>
        </div>
        <div
          className="right"
          style={{
            width: "80%",
            display: "flex",
            justifyContent: "space-evenly",
            fontSize: "24px",
          }}
        >
          <Box>
            <Text>{`Token Expiry Time: ${formatTime(timeLeft)}`}</Text>
          </Box>
          <Box>
            <Popover>
              <PopoverTrigger>
                <Button>
                  <FaUserCircle
                    style={{
                      textDecoration: "none",
                      color: "white",
                      backgroundColor: "black",
                    }}
                  />
                </Button>
              </PopoverTrigger>
              <Portal>
                <PopoverContent>
                  <PopoverArrow />
                  <PopoverHeader>Profile</PopoverHeader>
                  <PopoverCloseButton />
                  <PopoverBody>
                    <Box
                      style={{
                        width: "20%",
                        height: "100%",
                        fontSize: "24px",
                        fontWeight: "bold",
                        alignItems: "center",
                        marginLeft: "5%",
                        color: "black",
                      }}
                    >
                      {superAdmin ? (
                        <>
                          <Flex>
                            <Text>{superAdmin.token.role}</Text>
                          </Flex>
                        </>
                      ) : null}
                    </Box>
                  </PopoverBody>
                  <PopoverFooter>
                    <Flex>
                      <Button>Profile</Button>
                      <Spacer />
                      <Button onClick={handleSignout}>SignOut</Button>
                    </Flex>
                  </PopoverFooter>
                </PopoverContent>
              </Portal>
            </Popover>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
