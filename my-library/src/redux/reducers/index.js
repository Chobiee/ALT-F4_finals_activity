import {combineReducers} from 'redux';
import {LibraryReducers,BookReducers, selectedStudentReducer,selectedBookReducer} from './LibraryReducers';

const reducers = combineReducers({
    allStudents:LibraryReducers,
    allBooks:BookReducers,
    singleStudent:selectedStudentReducer,
    singleBook:selectedBookReducer,
})

export default reducers;