<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use App\Http\Requests\PostRequest;

class PostController extends Controller
{
    public function index () {
        $posts = Post::all();
        return view('home', compact('posts'));
    }

    public function add () {
        return view('add');
    }

    public function edit ($post_id) {
        $post = Post::find($post_id);
        return view('edit', compact('post'));
    }

    public function store (PostRequest $request){
        $data = $request->validated();

        $post = new Post;
        $post->title = $data['title'];
        $post->desc = $data['desc'];

        $post->save();
        return redirect('/')->with('message', 'Post Added Successfully');
    }

    public function update (PostRequest $request, $post_id) {
        $data = $request->validated();
        $post = Post::find($post_id);

        $post->title = $data['title'];
        $post->desc = $data['desc'];
        $post->update();
        return redirect('/')->with('message', 'Post Updated Successfully');


    }

    public function delete ($post_id) {
        $post = Post::find($post_id)->delete();

        return redirect('/')->with('message', 'Post Deleted Successfully');


    }
}
