import { myBooks } from '@/redux/actions/bookAction'
import { Image, Box } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

function MyBooks() {
    const myBooks = useSelector((state)=>state.book.myBooks)
    useEffect(()=>{
      myBooks()
    },[])

  return (
    <>
     

    </>
              
  )
}

export default MyBooks
