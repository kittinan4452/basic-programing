@extends('layouts.app')
@section('title',"บทความทั้งหมด")
@section('content')
    @if (count($blogs)>0)
    <h1 class="text-center">บทความทั้งหมด</h1>
    <hr>
    <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
            <th scope="col">แก้ไข</th></th>
            <th scope="col">ลบ</th>
          </tr>
        </thead>
        <?php
        
        $count = 0
        ?>
        @foreach ($blogs as $item)
        <tbody>
            <tr>
              <th scope="row">{{$count++}}</th>
              <td>{{$item->title}}</td>
              <td>{{Str::limit($item->content,80)}}</td>
              <td>@if ($item->status==true)
                <p class="text text-success"><a  href="{{route('change',$item->id)}}"  class="btn btn-success">เผยแพร่</a></p>
            @else
                <p class="text text-danger"><a href="{{route('change',$item->id)}}" class="btn btn-danger">ฉบับร่าง</a></p>    
            @endif</td>
                <td ><a href="{{route('edit',$item->id)}}" class="btn btn-warning">แก้ไข</a></td>
                <td ><a href="{{route('delete',$item->id)}}" class="btn btn-danger">ลบ</a></td>
            </tr>
        </tbody>
        @endforeach
        
      </table>
      
      {{$blogs->links()}}
    @else
        <h1 class="text-center">ไม่มีข้อมูลบทความ</h1>
    @endif
@endsection