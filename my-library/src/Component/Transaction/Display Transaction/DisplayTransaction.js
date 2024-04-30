import React,{useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import { setSelectedBorrowed, setBorrowed } from '../../../redux/actions/LibraryActions';
import http from '../../../http';

export default function DisplayTransaction() {

  //const is functions

    const borroweds = useSelector((state) => state.allBorroweds.borroweds);
    const dispatch = useDispatch();

    const getBorrowedId = (id)=>{
      console.log(id);
      // const singlestudent = students.filter((student)=>student.id===id)
      const singleBorrowed = borroweds.find((borrowed)=>borrowed.id===id);
      singleBorrowed.state="UPDATING";


      dispatch(setSelectedBorrowed(singleBorrowed))
      console.log(singleBorrowed);
    }

    // const getRemoveId = (id)=>{
    //   const singleBorrowed1 = borroweds.find((borrowed)=>borrowed.id===id);
    //   singleBorrowed1.state="REMOVED";

    //   const oldBorrowed = [...borroweds];
    //   const borrowedIndex = oldBorrowed.findIndex((borrowed)=>borrowed.id===id)
    //   console.log(borrowedIndex);

    //   oldBorrowed.splice(borrowedIndex, 1, singleBorrowed1);
    //   dispatch(setBorrowed(oldBorrowed));
    //   console.log(borroweds);
    // }

    const getBorrowedData=()=>{
      http.get('borroweds').then((result)=>{
        console.log(result.data);
        dispatch(setBorrowed(result.data));
      }).catch(error=>{
        console.log(error.message);
      });
    }

    useEffect(()=>{
      getBorrowedData();
    },[]);


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
            borroweds.filter((borrowed)=>borrowed.status!='REMOVED')
            .map((borrowed)=>{
              return(
                <tr key={borrowed.id}>
                 <td>{borrowed.id}</td>
                 <td>{borrowed.book_name}</td>
                 <td>{borrowed.description}</td>
                 <td>
                  <button onClick={()=>getBorrowedId(borrowed.id)}>Return</button>
                  &nbsp;
                  

                 </td>
                 </tr>

              )
            })

          }

       
        </tbody>
      </table>
    </>
  )
}
