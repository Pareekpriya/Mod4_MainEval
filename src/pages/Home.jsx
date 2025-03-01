import BookCard from '@/components/features/BookCard'
import { fetchBook } from '@/redux/actions/bookAction'
import { Grid,Image } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

function Home() {
 
    const loading = useSelector((state)=>state.book.loading)
    const books = useSelector((state)=>state.book.books)

    useEffect(()=>{
       fetchBook()
    },[])

  return (
    <>
            {loading && <Text>Loading...</Text>}
        <Grid>
           { books.map((book)=>{
                <BookCard book={book} key={book.id}/>
            
             })}
                 
       </Grid>    
   
    </>
    
  )
}

export default Home
