import { FETCH_BOOK_FAILURE, FETCH_BOOKS_REQUEST, FETCH_BOOKS_SUCCESS, FETCH_MY_BOOKS, LOADING_BOOKS} from "../actions/bookAction";

const initState = {
    books: [],
    myBooks: [],
    loading:false,
    reqest:false,
    error:null
};


export const bookReducer = (state=initState,action) =>{
     switch(action.type){
        case LOADING_BOOKS:
            return {...state,loading:true}
        case FETCH_BOOKS_REQUEST:
            return {...state, request:false}  
        case FETCH_BOOKS_SUCCESS:
            return {...state, books:action.payload}   
        case FETCH_BOOK_FAILURE:
            return {...state, error:"Books Fetching Error"} 
            
        case FETCH_MY_BOOKS:
            return {...state, myBooks:action.payload}    
        default:
            return state    
     }
}