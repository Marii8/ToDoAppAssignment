// - Todoを画面に追加する処理
let removeIcon = '<i class="fas fa-trash-alt fa-2x"></i>';
let doneIcon = '<i class="fas fa-check-circle fa-2x"></i>'


//#addボタンを押したら、input内のvalueを変数に入れて、ul#not-yetにli要素で表示する
let add = document.getElementById('add');
add.addEventListener('click', function(){
    let taskName = document.getElementById('task').value;
    document.getElementById('task').value=""; //入力を消す
    let li = document.createElement('li');
    li.append(taskName);
    document.getElementById('not-yet').appendChild(li);
//アイコンを設置したい。liにbuttons要素を用意
    let buttons = document.createElement('div');
    buttons.classList.add('buttons');
    li.appendChild(buttons);
//.removeをつけたbutton要素に削除アイコンを入れる
    let remove = document.createElement('button');
    remove.classList.add('remove');
    remove.innerHTML = removeIcon;
    buttons.appendChild(remove);
//.doneをつけたbuttonに完了ボタンをつける
    let done = document.createElement('button');
    done.classList.add('done');
    done.innerHTML = doneIcon;
    buttons.appendChild(done);

// - 未完了を削除する処理
    remove.addEventListener('click', function(){
        let task = this.parentNode.parentNode;
        task.remove();
    })

// - 未完了を完了にする処理
    done.addEventListener('click', function(){
        let task = this.parentNode.parentNode;
        document.getElementById('done').appendChild(task);
    })

})



// - 完了を削除する処理
// - 画面をリロードしても消えないようにする処理