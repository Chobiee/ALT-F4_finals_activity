import React,{useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import { setSelectedBook, setBook } from '../../../redux/actions/LibraryActions';
import http from '../../../http';

export default function DisplayBook() {

  //const is functions

    const books = useSelector((state) => state.allBooks.books);
    const dispatch = useDispatch();

    const getBookId = (id)=>{
      console.log(id);
      // const singlestudent = students.filter((student)=>student.id===id)
      const singleBook = books.find((book)=>book.id===id);
      singleBook.state="UPDATING";


      dispatch(setSelectedBook(singleBook))
      console.log(singleBook);
    }

    const getRemoveId = (id)=>{
      const singleBook1 = books.find((book)=>book.id===id);
      singleBook1.state="REMOVED";

      const oldBook = [...books];
      const bookIndex = oldBook.findIndex((book)=>book.id===id)
      console.log(bookIndex);

      oldBook.splice(bookIndex, 1, singleBook1);
      dispatch(setBook(oldBook));
      console.log(books);
    }

    const getBookData=()=>{
      http.get('books').then((result)=>{
        console.log(result.data);
        dispatch(setBook(result.data));
      }).catch(error=>{
        console.log(error.message);
      });
    }

    useEffect(()=>{
      getBookData();
    },[]);


  return (
    <>
    <table className="book-table">
      <thead>
        <tr>
          <th>#</th>
          <th>Book Name</th>
          <th>Description</th>
          <th>Actions</th>
        </tr>
        </thead>

        <tbody>

          {
            books.filter((book)=>book.status!='REMOVED')
            .map((book)=>{
              return(
                <tr key={book.id}>
                 <td>{book.id}</td>
                 <td>{book.book_name}</td>
                 <td>{book.description}</td>
                 <td>
                  <button onClick={()=>getBookId(book.id)}>Edit</button>
                  &nbsp;
                  <button onClick={()=>getRemoveId(book.id)}>Remove</button>

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
