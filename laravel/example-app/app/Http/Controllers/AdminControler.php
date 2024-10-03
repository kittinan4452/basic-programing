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
        $blogs = Blog::paginate(3);
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
        DB::table('blogs')->insert($data);
        return redirect("/blog");
    }
    function delete($id){
        DB::table('blogs')->where('id',$id)->delete();
        return redirect('/blog');
    }
    function change($id){
       $blog = DB::table('blogs')->where('id',$id)->first();
       $data = [
        'status' => !$blog->status  // ใช้เครื่องหมาย -> แทน .
    ];
    
       $blog= DB::table('blogs')->where('id',$id)->update($data);
       return redirect("/blog");


    }
    function edit($id){
        $blog = DB::table('blogs')->where('id',$id)->first();
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
        DB::table('blogs')->where('id',$id)->update($data);
        return redirect("/blog");
    }
}
