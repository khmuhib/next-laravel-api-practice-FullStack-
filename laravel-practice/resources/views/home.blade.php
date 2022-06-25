@include('inc.header')


@if (session('message'))
    <div class="alert alert-success">{{ session('message') }}</div>
@endif

<div class="d-flex">
    @foreach ($posts as $postItem)
        <div class="card m-3" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">{{$postItem->title}}</h5>
                <p class="card-text">{{$postItem->desc}}</p>
                <a href="{{url('/edit/'.$postItem->id)}}" class="btn btn-primary">Edit</a>
                <a href="{{url('/delete/'.$postItem->id)}}" class="btn btn-danger">Delete</a>
            </div>
        </div>
    @endforeach
</div>


@include('inc.footer')
