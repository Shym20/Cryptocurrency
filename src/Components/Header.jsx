import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import {Button,HStack} from "@chakra-ui/react"
import '../Components/Header.css'

function Header() {
    return (
                <HStack p={"15"} shadow={"base"} bgColor={"black"}>
                    <Button variant={"unstyled"} color={"white"}>
                    <NavLink to="/" className='home'> Home</NavLink>
                    </Button>
                    <Button variant={"unstyled"} color={"white"}>
                    <NavLink to="/coins" className='coin'> Coins</NavLink>
                    </Button>
                    <Button variant={"unstyled"} color={"white"}>
                    <NavLink to="/exchange" className='exchange'> Exchange</NavLink>
                    </Button>
                    
                    
                    
                    
                   
                </HStack>
    )
}

export default Header
