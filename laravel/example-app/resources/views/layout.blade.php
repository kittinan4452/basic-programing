<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <title>@yield('title')</title>
</head>
<body>
    <nav class="navbar navbar-expand-lg navbar-light bg-light  ">
        <div class="container  d-flex justify-content-between">
        <div>
            <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        </div>
        <div class="collapse navbar-collapse d-flex justify-content-end" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="/">หน้าแรก </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="{{route('blog')}}">บทความทั้งหมด</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="{{route('create')}}">เขียนบทความ</a>
              </li>
            <li class="nav-item">
              <a class="nav-link" href="{{route('about')}}">เกี่ยวกับเรา</a>
            </li>
            
          </ul>
        </div>
    </div>
      </nav>

    <div class="container">
        @yield('content')
    </div>
</body>
</html>