import{ActionTypes} from "../constants/Action-types";

export const setStudent = (students) => {
    return{
        type: ActionTypes.SET_STUDENTS,
        payload: students,
    };
};

export const setBook = (books) => {
    return{
        type: ActionTypes.SET_BOOKS,
        payload: books,
    };
};

export const setBorrowed = (borroweds) => {
    return{
        type: ActionTypes.SET_BORROWEDS,
        payload: borroweds,
    };
};

export const setSelectedStudent = (student) => {
    return{
        type: ActionTypes.SELECTED_STUDENT,
        payload: student,
    };
};

export const setSelectedBook = (book) => {
    return{
        type: ActionTypes.SELECTED_BOOK,
        payload: book,
    };
};

export const setSelectedBorrowed = (borrowed) => {
    return{
        type: ActionTypes.SELECTED_BORROWED,
        payload: borrowed,
    };
};


