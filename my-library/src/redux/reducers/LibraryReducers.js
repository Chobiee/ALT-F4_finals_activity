import{ActionTypes} from "../constants/Action-types";


const initialState ={
    students: [
        
    ]

}
const initialStates ={

    books: [
        
    ]
}

const singleStudentInitialized={
    id:'',
    firstname:'',
    lastname:'',
    status:'ACTIVE'
}

const singleBookInitialized={
    id:'',
    bookname:'',
    description:'',
    status:'AVAILABLE'
}

export const LibraryReducers = (state=initialState, {type,payload}) => {
 switch (type) {
    case ActionTypes.SET_STUDENTS:
        return {...state,students:payload};

    default:
        return state;
  }
}

export const BookReducers = (state=initialStates, {type,payload}) => {
    switch (type) {
       case ActionTypes.SET_BOOKS:
           return {...state,books:payload};
   
       default:
           return state;
     }
   }
   
   export const selectedStudentReducer = (state=singleStudentInitialized, {type,payload}) => {
    switch (type) {
       case ActionTypes.SELECTED_STUDENT:
           return {...state, ...payload};
   
       default:
           return state;
     }
   }

   export const selectedBookReducer = (state=singleBookInitialized, {type,payload}) => {
    switch (type) {
       case ActionTypes.SELECTED_BOOK:
           return {...state, ...payload};
   
       default:
           return state;
     }
   }