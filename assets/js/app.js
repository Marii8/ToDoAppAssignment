// - Todoを画面に追加する処理
//#addボタンを押したら、input内のvalueを変数に入れて、ul#not-yetにli要素で表示する

let add = document.getElementById('add');
add.addEventListener('click', function(){
    let taskName = document.getElementById('task').value;
    let li = document.createElement('li');
    li.append('taskName');
    document.getElementById('not-yet').appendChild(li);

})


// - 未完了を完了にする処理
// - 未完了を削除する処理
// - 完了を削除する処理
// - 画面をリロードしても消えないようにする処理