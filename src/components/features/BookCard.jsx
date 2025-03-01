import Login from '@/pages/Login'
import MyBooks from '@/pages/MyBooks'
import { Button, Grid } from '@chakra-ui/react'
import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function BookCard({book}) {
    const user = useSelector((state)=>state.auth.user)
    const navigate = useNavigate()
  return (
      <Grid>
           <Image url={book.coverImage}/>
            <Text>{book.title}</Text>
            <Text>{book.author}</Text>
             <Text>{book.status}</Text>  
             <Button onClick={()=>user?navigate(<MyBooks/>):navigate(<Login/>)}>want to read</Button>
      </Grid>
           
   
  )
}

export default BookCard
