@include('inc.header')


@if (session('message'))
<div class="alert alert-success">{{session('message')}}</div>
@endif

<div>
    <form class="col-6 m-auto" action="{{url('/update/'.$post->id)}}" method="POST" enctype="multipart/form-data">
        @csrf
        @method('PUT')
        <div class="mb-3">
            <label>Title</label>
            <input type="text" class="form-control" name="title" value="{{$post->title}}">
        </div>
        <div class="mb-3">
            <label>Description</label>
            <textarea type="text" class="form-control" name="desc">{{$post->desc}}</textarea>
        </div>
        <button type="submit" class="btn btn-primary" >Update</button>
    </form>
</div>


@include('inc.footer')
