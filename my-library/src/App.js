import logo from './logo.svg';
import './App.css';
import StudentPage from './Component/Student/Student Page/StudentPage';
import BookPage from './Component/Book/Book Page/BookPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
   <>
   <BrowserRouter basename="/">

    <Routes>
      <Route path="/" element={<StudentPage />}/>
      <Route path="book" element={<BookPage />}/>
    </Routes>

   </BrowserRouter>


   </>
  );
}

export default App;
