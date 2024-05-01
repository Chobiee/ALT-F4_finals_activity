import React,{useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import {setBorrowed } from '../../../redux/actions/LibraryActions';
import http from '../../../http';

export default function DisplayTransaction() {

    const borroweds = useSelector((state) => state.allBorroweds.borroweds);
    const dispatch = useDispatch();
    console.log(borroweds);

    const getBorrowedId = (id) => {
        // Find the borrowed item with the given id
        const singleBorrowed = borroweds.find((borrowed) => borrowed.id === id);
        
        // Update the status to "RETURNED"
        singleBorrowed.Status = 'RETURNED';

        // Send a PUT request to update the status
        http.put(`borroweds/${id}`, singleBorrowed)
            .then((response) => {
                console.log(response.data);
                // Update the Redux state with the updated borrowed items
                const updatedBorroweds = borroweds.map((borrowed) =>
                    borrowed.id === id ? singleBorrowed : borrowed
                );
                dispatch(setBorrowed(updatedBorroweds));
            })
            .catch((error) => {
                console.error('Error updating borrowed item:', error);
            });
    };

    const getBorrowedData = () => {
        http.get('borroweds')
            .then((result) => {
                console.log(result.data);
                dispatch(setBorrowed(result.data));
            })
            .catch((error) => {
                console.log(error.message);
            });
    };

    useEffect(() => {
        getBorrowedData();
    }, []);

    return (
        <>
            <table className="borrowed-table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Book Name</th>
                        <th>Student Name</th>
                        <th>Id</th>
                        <th>Date Borrowed</th>
                    </tr>
                </thead>

                <tbody>
                    {
                    borroweds
                        .filter((borrowed) => borrowed.Status !== 'REMOVED')
                        .map((borrowed) => (
                            <tr key={borrowed.id}>
                                <td>{borrowed.id}</td>
                                <td>{borrowed.Book_Name}</td>
                                <td>{borrowed.Student_Name}</td>
                                <td>{borrowed.Date_Borrowed}</td>
                                <td>{borrowed.Status}</td>
                                <td>
                                    <button onClick={() => getBorrowedId(borrowed.id)}>Return</button>
                                    &nbsp;
                                </td>
                            </tr>
                        ))
                        }
                </tbody>
            </table>
        </>
    );
}
