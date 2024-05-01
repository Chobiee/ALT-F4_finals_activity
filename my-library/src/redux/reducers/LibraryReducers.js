import{ActionTypes} from "../constants/Action-types";


const initialState ={
    students: [
        
    ]

}
const initialStates ={

    books: [
        
    ]
}
const initialStates1 ={

    borroweds: [
        
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

const singleBorrowedInitialized={
    id:'',
    Book_Name:'',
    Student_Name:'',
    Date_Borrowed:'',
    Status:'BORROWED'
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

   export const BorrowedReducers = (state=initialStates1, {type,payload}) => {
    switch (type) {
       case ActionTypes.SET_BORROWEDS:
           return {...state, borroweds:payload};
   
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

   export const selectedBorrowedReducers = (state=singleBorrowedInitialized, {type,payload}) => {
    switch (type) {
       case ActionTypes.SELECTED_BORROWEDS:
           return {...state, ...payload};
   
       default:
           return state;
     }
   }