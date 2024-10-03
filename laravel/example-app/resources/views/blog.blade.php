@extends('layouts.app')
@section('title',"บทความทั้งหมด")
@section('content')
    @if (count($blogs)>0)
    <h1 class="text-center">บทความทั้งหมด</h1>
    <hr>
    <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">หัวข้อ</th>
            <th scope="col">รายละเอียด</th>
            <th scope="col">สถานะ</th>
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
              <td>{{$item->title}}</td>
              <td>{!!Str::limit($item->content,80)!!}</td>
              <td>@if ($item->status==true)
                <a  href="{{route('change',$item->id)}}"  class="btn btn-success">เผยแพร่</a>
            @else
                <a href="{{route('change',$item->id)}}" class="btn btn-danger">ฉบับร่าง</a>   
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