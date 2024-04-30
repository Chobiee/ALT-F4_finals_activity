import logo from './logo.svg';
import './App.css';
import StudentPage from './Component/Student/Student Page/StudentPage';
import BookPage from './Component/Book/Book Page/BookPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TransactionPage from './Component/Transaction/Transaction Page/TransactionPage';

function App() {
  return (
   <>
   <BrowserRouter basename="/">

    <Routes>
      <Route path="/" element={<StudentPage />}/>
      <Route path="book" element={<BookPage />}/>
      <Route path="transaction" element={<TransactionPage />}/>
    </Routes>

   </BrowserRouter>


   </>
  );
}

export default App;
