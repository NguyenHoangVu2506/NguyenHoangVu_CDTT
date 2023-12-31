<?php

namespace App\Http\Controllers\Api;
use App\Models\Topic;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class TopicController extends Controller
{
   
  /*lay danh sach*/
  public function index(){
    $topics = Topic::all();
    return response()->json(['success'=>true,'message'=>"Tải dữ liệu thành công",'topics'=>$topics],200);
}
public function show($id){
    if(is_numeric($id)){
        $topic = Topic::find($id);
    }
    else{
        $topic = Topic::where('slug','=',$id)->first();
    }
    if ($topic==null){
        return response()->json(
            ['success' => false, 'message' => 'Tải dữ liệu không thành công', 'topics' => null],404
        );
    }
    return response()->json(['success'=>true,'message'=>"Tải dữ liệu thành công",'topics'=>$topic],200);
}
//Post- them store
public function store(Request $request)
{
    $Topic = new Topic();
    $Topic->name = $request->name; //form
    $Topic->slug = Str::of($request->name)->slug('-');
    //$brand->image=$request->name;//xử lý riêng
    $Topic->metakey = $request->metakey; //form
    $Topic->metadesc = $request->metadesc; //form
    $Topic->parent_id = $request->parent_id;
    $Topic->created_at = date('Y-m-d H:i:s');
    $Topic->created_by = 1;
    $Topic->status = $request->status; //form
    $Topic->save(); //lưu vào Csdl
    return response()->json(
        ['success' => true, 'message' => 'Thanh cong', 'topics' => $Topic],
        201
    );
}
//Topic-update
public function update(Request $request, $id)
{

    $Topic = Topic::find($id);

    $Topic->name = $request->name; //form
    $Topic->slug = Str::of($request->name)->slug('-');
    //$brand->image=$request->name;//xử lý riêng
    $Topic->metakey = $request->metakey; //form
    $Topic->metadesc = $request->metadesc; //form
    $Topic->parent_id = $request->parent_id;
    $Topic->created_at = date('Y-m-d H:i:s');
    $Topic->created_by = 1;
    $Topic->status = $request->status; //form
    $Topic->save(); //lưu vào Csdl

    return response()->json(

        ['success' => true, 'message' => 'Thanh cong', 'topics' => $Topic],

        200

    );
}
//xoa
public function destroy($id)
{
    $Topic = Topic::find($id);
    if ($Topic == null) {
        return response()->json(
            ['message' => 'Tai du lieu khong thanh cong', 'success' => false, 'topics' => null],
            404
        );
    }
    $Topic->delete();
    return response()->json(['message' => 'Thanh cong', 'success' => true, 'topics' => $Topic], 200);

}
public function topic_list($parent_id = 0)
    {
        $args = [
            ['parent_id', '=', $parent_id],
            ['status', '=', 1]
        ];
        $Topics = Topic::where($args)
            ->get();
        return response()->json(
            [
                'success' => true,
                'message' => 'Tải dữ liệu thành công',
                'topics' => $Topics
            ],
            200
        );
    }
}
