import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setBorrowed } from '../../../redux/actions/LibraryActions';
import http from '../../../http';

export default function AddTransaction() {
    const [studentId, setStudentId] = useState('');
    const [bookId, setBookId] = useState('');
    const dispatch = useDispatch();

    const addBorrowed = () => {
        const newBorrowed = {
            student_id: studentId,
            book_id: bookId,
        };

        // Send a POST request to the Laravel backend
        http.post('borroweds', newBorrowed)
            .then((response) => {
                console.log(response.data);
                // Update Redux state after successfully adding the borrowed item
                dispatch(setBorrowed(response.data));
                // Clear input fields
                setStudentId('');
                setBookId('');
            })
            .catch((error) => {
                console.error('Error adding borrowed item:', error);
            });
    };

    return (
        <div className="borrowed-form">
            <input
                type="text"
                value={studentId}
                placeholder="Enter Student ID"
                onChange={(e) => setStudentId(e.target.value)}
            />
            <input
                type="text"
                value={bookId}
                placeholder="Enter Book ID"
                onChange={(e) => setBookId(e.target.value)}
            />
            <button onClick={addBorrowed} className="add-book">
                BORROW
            </button>
        </div>
    );
}
