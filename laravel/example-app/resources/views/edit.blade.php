
@extends('layouts.app')
@section('title',"แก้ไขบทความ")
@section('content')
    <h1 class="text-center">เแก้ไขบทความ</h1>
    <form method="POST" action="/insert">
        @csrf
        <div class="from-group">
            <label for="title">ชื่อบทความ</label>
            <input type="text" name="title" class="form-control" value="{{$blog->title}}">
        </div>
        @error('title')
            <div class="my-2">
                <span class="text-danger">{{$message}}</span>
            </div>
            
        @enderror
        <div class="from-group">
            <label for="content">เนื้อหาบทความใหม่</label>
            <textarea name="content" id="" cols="30" rows="5" class="form-control" >{{$blog->content}}</textarea>
        </div>
        @error('content')
            <div class="my-2">
                <span class="text-danger">{{$message}}</span>
            </div>
            
        @enderror
        <input type="submit" value="อัพเดท" class="btn btn-primary my-3">
       
        <a href="{{route('blog')}}" class="btn btn-success">บทความทั้งหมด</a>
    </form>
@endsection