<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Student;

class StudentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // $students = Student::all();
    

        // return response()->json([

        //     $students,

        // ],200);

        $students = Student::all();
        echo $students;
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $firstname = $request->firstname;
        $lastname = $request->lastname;
        $status = $request->status;

       $student = new Student();
       $student->firstname = $request->firstname;
       $student->lastname = $request->lastname;
       $student->status = $request->status;
       $student->save();

        echo "Successfully add new student";

    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $student = Student::find($id);

        return response()->json([
            $student,
            ],200);

    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $student = Student::find($id);
        if ($student) 
        {

        return response()->json([
            $student,
            ],200);

        }
    else
        {
        return response()->json([
            'message' => "Student does not exist"
            ],404);
        }
    
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        
        $student = Student::find($id);
        $student->firstname = $request->firstname;
        $student->lastname = $request->lastname;
        $student->status = $request->status;
        $student->save();
 
         echo "Successfully update new student";
 
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $student = Student::find( $id );
        
        $student->delete();
    }
}
