
@extends('layouts.app')
@section('title',"เขียนบทความ")
@section('content')
    <h1 class="text-center">เขียนบทความใหม่</h1>
    <form method="POST" action="/insert">
        @csrf
        <div class="from-group">
            <label for="title">ชื่อบทความ</label>
            <input type="text" name="title" class="form-control">
        </div>
        @error('title')
            <div class="my-2">
                <span class="text-danger">{{$message}}</span>
            </div>
            
        @enderror
        <div class="from-group">
            <label for="content">เนื้อหาบทความใหม่</label>
            <textarea name="content" id="" cols="30" rows="5" class="form-control"></textarea>
        </div>
        @error('content')
            <div class="my-2">
                <span class="text-danger">{{$message}}</span>
            </div>
            
        @enderror
        <input type="submit" value="บันทึก" class="btn btn-primary my-3">
        <a href="{{route('blog')}}" class="btn btn-success">บทความทั้งหมด</a>
    </form>
@endsection