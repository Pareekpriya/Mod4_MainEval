import axios from "axios"

export const LOADING_BOOKS = "LOADING_BOOKS"
export const FETCH_BOOKS_REQUEST = "FETCH_BOOKS_REQUEST"
export const FETCH_BOOKS_SUCCESS = "FETCH_BOOKS_SUCCESS"
export const FETCH_BOOK_FAILURE = "FETCH_BOOK_FAILURE"
export const ADD_BOOK_TO_USER_LIST = "ADD_BOOK_TO_USER_LIST"

export const FETCH_MY_BOOKS = "FETCH_MY_BOOKS"

export const BASE_URL = `https://mainevaluation-1e9d9-default-rtdb.firebaseio.com/http%3A/books.json`

export const fetchBook = ()=> async(dispatch) =>{
    try{
       const res = await axios.get(BASE_URL)
        dispatch({type:FETCH_BOOKS_SUCCESS,payload:res.data})
    }catch(err){
        console.error("error fetching books:",err)
    }
}


export const myBooks = () =>async(dispatch)=>{
 try{
     const res = await axios.get(`https://mainevaluation-1e9d9-default-rtdb.firebaseio.com/http%3A/users/{userId}/myBooks.json`)
     dispatch({type:FETCH_MY_BOOKS,payload:res.data})
 }catch(err){
    console.error("fetching error in my books:",err)
 }
}


export const addBook = (updatedbook)=> async(dispatch)=>{
    try{
      const res = await axios.put(`https://mainevaluation-1e9d9-default-rtdb.firebaseio.com/http%3A/users/{userId}/myBooks/{bookId}.json`,{
        ...updatedbook
      })
      dispatch({type:ADD_BOOK_TO_USER_LIST,payload:res.data})
    }catch(err){
        console.error("error in adding book:",err)
    }
}



