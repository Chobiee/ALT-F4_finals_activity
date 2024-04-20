import React, {useState,useEffect} from 'react';
import { useDispatch,useSelector } from 'react-redux';
import {setStudent,setSelectedStudent} from '../../../redux/actions/LibraryActions';
import http from '../../../http';

export default function AddStudent() {
const [ firstname, setFirstname] = useState ('');
const [ lastname, setLastname] = useState ('');
const dispatch = useDispatch();
const students = useSelector((state)  => state.allStudents.students); 
const onestudent = useSelector((state)  => state.singleStudent);

console.log(onestudent);

const addStudent=()=>{
  const newstudent={
    firstname :firstname,
    lastname :lastname,
    status: 'ACTIVE'
  }

  //Database connection
  http.post('students', newstudent).then((result)=>{
   console.log(result.data);
  }).catch(error=>{
    console.log(error.message);
  });

  const oldStudent = [...students];
  oldStudent.push(newstudent);
  dispatch(setStudent(oldStudent));
  
  setFirstname(''); //to clear inputs inside textbox when updating
  setLastname('');  //to clear inputs inside textbox when updating
}



const updateStudent=()=>{
  const newstudent={
    id:onestudent.id,
    firstname :firstname,
    lastname :lastname,
    status: 'ACTIVE'
  }

  const newstudent2={
    firstname :firstname,
    lastname :lastname,
    status: 'ACTIVE'
  }

  http.put(`students/${onestudent.id}`, newstudent2).then((result)=>{
    console.log(result.data);
   }).catch(error=>{
     console.log(error.message);
   }); 


  const oldStudent = [...students];
  const studentIndex = oldStudent.findIndex((student)=>student.id===onestudent.id)
  console.log(studentIndex);

  oldStudent.splice(studentIndex, 1, newstudent);
  dispatch(setStudent(oldStudent));

  onestudent.firstname='';
  onestudent.lastname='';
  onestudent.status='ACTIVE';
  dispatch(setSelectedStudent(onestudent))

  setFirstname(''); //to clear inputs inside textbox when updating
  setLastname('');  //to clear inputs inside textbox when updating
}

useEffect(()=>{
  if(onestudent.firstname===''){

  }else{
    setFirstname(onestudent.firstname);
    setLastname(onestudent.lastname);
  }

}, [onestudent])

  return (
    <>
    <div className="student-form">
      <input type="text" 
                value ={firstname}
                placeholder="Enter first name"
                onChange={(e)=> setFirstname (e.target.value)}/>
      <input type="text" 
                value ={lastname}
                placeholder="Enter last name"
                onChange={(e)=> setLastname (e.target.value)}/>


          {
            onestudent.state==='UPDATING'?
            <button onClick={()=>updateStudent()} className="update-student">Update</button>
            :
            <button onClick={()=>addStudent()} className="add-student">Add</button>
          }
      
   </div>
   </>
  )
}
