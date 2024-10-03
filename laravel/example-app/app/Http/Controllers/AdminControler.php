<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\Blog;
class AdminControler extends Controller
{
    public function  __construct(){
        $this->middleware('auth');
    }
    //ข้อมูลเกี่ยวกับเรา
    function about(){
        $name = "kittinan";
        $date= "19 september 2544";
        return view('about',compact('name','date'));
    }
    // ข้อมูลของบทความ
    function blog(){
        $blogs = Blog::paginate(10);
            return view('blog',compact('blogs'));
    }
    // เขียนบทความ
    function create(){
        return view("create");
    }
    function insert(Request $request){
        $request->validate([
            'title'=>'required',
            'content'=>'required'
        ]);
        $data=[
            'title'=>$request->title,
            'content'=>$request->content
        ];
       Blog::insert($data);
        return redirect("/author/blog");
    }
    function delete($id){
        Blog::find($id)->delete();
        return redirect()->back();
    }
    function change($id){
       $blog = Blog::find($id)->first();
       $data = [
        'status' => !$blog->status  // ใช้เครื่องหมาย -> แทน .
    ];
    
       $blog= Blog::find($id)->update($data);
       return redirect("author/blog");


    }
    function edit($id){
        $blog = Blog::find($id);
        return view('edit',compact('blog'));
    }
    function update(Request $request,$id){
        $request->validate([
            'title'=>'required',
            'content'=>'required'
        ]);
        $data=[
            'title'=>$request->title,
            'content'=>$request->content
        ];
        print_r($data);
        print_r($id);
        Blog::find($id)->update($data);
        return redirect("author/blog");     
    }
}
