<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Book;

class BookController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // $books = Book::all();
    

        // return response()->json([

        //     $books,

        // ],200);

        $books = Book::all();
        echo $books;
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
        $bookname = $request->bookname;
        $description = $request->description;
        $status = $request->status;

       $book = new Book();
       $book->bookname = $request->bookname;
       $book->description = $request->description;
       $book->status = $request->status;
       $book->save();

        echo "Successfully add new book";


    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $books = Book::find($id);

        return response()->json([
            $books,
            ],200);

    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $books = Book::find($id);
        if ($books) 
        {

        return response()->json([
            $books,
            ],200);

        }
    else
        {
        return response()->json([
            'message' => "Book does not exist"
            ],404);
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $book = Book::find($id);
        $book->bookname = $request->bookname;
        $book->description = $request->description;
        $book->status = $request->status;
        $book->save();
 
         echo "Successfully update new book";


    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $books = Book::find( $id );
        
        $books->delete();
    }
}
