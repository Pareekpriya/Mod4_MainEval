import { logOutUser } from '@/redux/actions/authAction'
import { Text, Flex, Box, Button } from '@chakra-ui/react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function Navbar() {
    const user = useSelector((state)=>state.auth.user)

    const dispatch = useDispatch()

    const handleLogOut = ()=>{
       dispatch(logOutUser())
    }
  return (
     <Flex as="nav" justify={"space-between"}>
        <Text>My Library</Text>

        <Box justifyContent={"space-around"}>
            <Link to = "/">Home</Link>
            
            {user?
            <>
              <Link to="/mybooks">My Books</Link>
              <Text>{user.email}</Text>
              <Button onClick={handleLogOut}>Logout</Button>
            </>
           :<Link to = "/login">Login</Link>
          }
            <Link to="/register">Register</Link>
        </Box>
     </Flex>
  )
}

export default Navbar
