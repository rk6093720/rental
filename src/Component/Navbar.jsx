import React from 'react'
import { Link } from "react-router-dom";
import { Icon } from '@chakra-ui/icons';
import { MdSettings } from 'react-icons/md';
import { FaUserCircle } from "react-icons/fa"
const Navbar = () => {
    return (
        <div>
            <div className="container" style={{ width: "100%", height: "50px", display: "flex", backgroundColor: "teal", justifyContent: "space-between", alignItems: "center" }}>
                <div className='left' style={{ width: "40%", color: "white", fontSize: "24px" }}>
                    <Link to="/dashboard" style={{ textDecoration: "none", color: "white" }}>
                      Apartment
                    </Link>
                </div>
                <div className='right' style={{ width: "60%", display: "flex", justifyContent: "space-evenly", fontSize: "24px" }}>
                    <Link to='/setting' style={{ textDecoration: "none", color: "white" }}>
                        <Icon as={MdSettings} />
                    </Link>
                    <Link to='/profile' style={{ textDecoration: "none", color: "white" }}>
                        <Icon as={FaUserCircle} />
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default Navbar