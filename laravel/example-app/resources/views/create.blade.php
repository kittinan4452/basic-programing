
@extends('layouts.app')
@section('title',"เขียนบทความ")
@section('content')
<link rel="stylesheet" href="https://cdn.ckeditor.com/ckeditor5/43.2.0/ckeditor5.css" />
<script src="https://cdn.ckeditor.com/ckeditor5/43.2.0/ckeditor5.umd.js"></script>
<style>
  
</style>

    <h1 class="text-center">เขียนบทความใหม่</h1>
    <form method="POST" action="/author/insert">
        @csrf
        <div class="from-group">
            <label for="title">ชื่อบทความ</label>
            <input type="text" name="title"  placeholder="บทความ" class="form-control">
        </div>
        @error('title')
            <div class="my-2">
                <span class="text-danger">{{$message}}</span>
            </div>
            
        @enderror
        <div class="from-group">
            <label for="content">เนื้อหาบทความใหม่</label>
            <textarea name="content" id="content" placeholder="รายละเอียดบทความ" cols="30"  rows="10" class="form-control "></textarea>
        </div>
        @error('content')
            <div class="my-2">
                <span class="text-danger">{{$message}}</span>
            </div>
            
        @enderror
        <input type="submit" value="บันทึก" class="btn btn-primary my-3">
        <a href="{{route('blog')}}" class="btn btn-success">บทความทั้งหมด</a>
    </form>
    
    <script>
        const {
            ClassicEditor,
            Essentials,
            Bold,
            Italic,
            Font,
            Paragraph
        } = CKEDITOR;
    
        ClassicEditor
            .create( document.querySelector( '#content' ), {
                plugins: [ Essentials, Bold, Italic, Font, Paragraph ],
                toolbar: [
                    'undo', 'redo', '|', 'bold', 'italic', '|',
                    'fontSize', 'fontFamily', 'fontColor', 'fontBackgroundColor'
                ]
            } )
            .then( /* ... */ )
            .catch( /* ... */ );
    </script>
    
@endsection