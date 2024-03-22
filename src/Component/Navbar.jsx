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
  const [timeLeft, setTimeLeft] = useState(null);
  const handleSignout = () => {
    localStorage.removeItem("SuperAdmintoken");
    navigate("/adminSignup");
    window.location.reload();
  };

  useEffect(() => {
    if (superAdmin) {
      const interval = setInterval(() => {
        const expiryDate = new Date(superAdmin.token.expiresIn);
        const timeNow = Math.floor(Date.now() / 1000);
        const difference = expiryDate - timeNow;
        if (difference <= 0) {
          clearInterval(interval);
          navigate("/adminLogin")
          // Handle token expiration
          // For example: setShowPopover(true);
          return;
        }

        setTimeLeft(difference);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [superAdmin,navigate]);

  const formatTime = (timeLeft) => {
    if (timeLeft <= 0) {
      return "00:00:00";
    }
    const hours = Math.floor(timeLeft / 3600);
    const remainingSeconds = timeLeft % 3600;
    const minutes = Math.floor(remainingSeconds / 60);
    const seconds = remainingSeconds % 60;

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
            {timeLeft !== null ? (
              <Text>{`Token Expiry Time: ${formatTime(timeLeft)}`}</Text>
            ) : null}
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
