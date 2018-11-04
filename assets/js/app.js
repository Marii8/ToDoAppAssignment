let removeIcon = '<i class="fas fa-trash-alt fa-2x"></i>';
let doneIcon ='<i class="fas fa-clipboard-check fa-2x"></i>';

let data;

if (localStorage.getItem('todoList')){
  data = JSON.parse(localStorage.getItem('todoList'));
  rederTodoList();
} else {
  data = {
    li: [],
    done: [],
  };
};


//入力したtaskをnotyetに入れる
let add = document.getElementById('add');
  add.addEventListener('click', function(){
  let taskName = document.getElementById('task').value;
  document.getElementById('task').value='';

//データ配列に入れて保存する
  data.li.push(taskName);
  dataObjectUpdated();
  addTaskToDOM(taskName);
})


// 関数------------------------------
function rederTodoList(data){
  for (let taskName of data.li){
    addTaskToDOM(taskName, false);
  }
  for (let taskName of data.done){
    addTaskToDOM(taskName, true);
  }
}

function addTaskToDOM(taskName, isDone){
  let list;
  if (isDone) {
    list = document.createElement('done');
  } else {
    list = document.getElementById('not-yet');
  }

  let li = document.createElement('li');
  li.append(taskName);
  list.appendChild(li);

  //Iconを用意して入れる場所を作り、liに入れる
  let remove = document.createElement('button');
  remove.classList.add('remove');
  remove.innerHTML = removeIcon;
      console.log(remove);

  let done = document.createElement('button')
  done.classList.add('done');
  done.innerHTML = doneIcon;
      console.log(done);

  let buttons = document.createElement('div');
  buttons.classList.add('buttons');
  li.appendChild(buttons);

  buttons.appendChild(remove);
  buttons.appendChild(done);

  //Iconをクリックしたら消す/移動する
  remove.addEventListener('click', removeTask);
  done.addEventListener('click', doneTask);
}


function removeTask() {
  let task = this.parentNode.parentNode;
  let id = this.parentNode.id;
  let value = task.textContent;
  task.remove();
//配列とDBから削除
  if (id === 'not-yet'){
    data.li.splice(data.li.indexOf(value), 1);
    } else {
    data.done.splice(data.done.indexOf(value), 1);
  }
  dataObjectUpdated();
}

function doneTask() {
    let task = this.parentNode.parentNode;
    let id = this.parentNode.id;

    if (id === 'done') {
      return;
    }

    let value = task.textContent;
    document.getElementById('done').appendChild(task);
    data.li.splice(data.li.indexOf(value), 1);
    data.done.push(value);
    dataObjectUpdated();
  }

function dataObjectUpdated() {
  localStorage.setItem('todoList', JSON.stringify(data));
}
