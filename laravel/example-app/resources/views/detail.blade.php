@extends('layouts.app')
@section('title')
{{$blogs->title}}
@endsection
@section('content')
    <div class="container">
        <div class="d-flex justify-content-between">
            <div><h1>{{$blogs->title}}</h1></div>
            <div><a class="btn btn-primary" href="/">กลับหน้าแรก</a></div>
        </div>
        <hr>
        <p>{!!$blogs->content!!}</p>
    </div>
@endsection