@include('inc.header')


@if (session('message'))
<div class="alert alert-success">{{session('message')}}</div>
@endif

<div>
    <form class="col-6 m-auto" action="{{url('/add')}}" method="POST" enctype="multipart/form-data">
        @csrf
        <div class="mb-3">
            <label>Title</label>
            <input type="text" class="form-control" name="title">
        </div>
        <div class="mb-3">
            <label>Description</label>
            <textarea type="text" class="form-control" name="desc"></textarea>
        </div>
        <button type="submit" class="btn btn-primary" >Submit</button>
    </form>
</div>


@include('inc.footer')
