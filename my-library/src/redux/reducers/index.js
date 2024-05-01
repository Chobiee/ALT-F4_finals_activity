import {combineReducers} from 'redux';
import {LibraryReducers,BookReducers,BorrowedReducers, selectedStudentReducer,selectedBookReducer,selectedBorrowedReducers} from './LibraryReducers';

const reducers = combineReducers({
    allStudents:LibraryReducers,
    allBooks:BookReducers,
    allBorroweds:BorrowedReducers,
    singleStudent:selectedStudentReducer,
    singleBook:selectedBookReducer,
    singleBorroweds:selectedBorrowedReducers,
})

export default reducers;