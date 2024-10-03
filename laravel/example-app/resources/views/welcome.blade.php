@extends('layouts.app')
@section('title',"หน้าแรกของเว็ปไซต์")
@section('content')
    <div class="container">
       <h1 class="text-center">บทความทั้งหมด</h1>
       <hr>
        @foreach ($blogs as $item)
        <h1>ชื่อ: {{$item->title}}</h1>
        <p>{!!Str::limit($item->content)!!}</p>
        <a class="btn btn-primary" href="/detail/{{$item->id}}">อ่านเพิ่มเติม</a>  
        <hr>          
        @endforeach
    </div>
@endsection