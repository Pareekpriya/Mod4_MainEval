// import { auth } from '@/firebase/firebaseConfig'
import { registerUser } from '@/redux/actions/authAction'
import { Box, Button, Input } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

function Register() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const dispatch = useDispatch()

    const handleRegister = ()=>{
        dispatch(registerUser(email,password))
    }
  return (
     <Box>
        <Input type='email' value={email} placeholder='Enter Email' onChange={(e)=>setEmail(e.target.value)}/>
        <Input type='password' value={password} placeholder='Enter Password' onChange={(e)=>setPassword(e.target.value)}/>
        <Button onClick={handleRegister}>Register</Button>
     </Box>
  )
}

export default Register
