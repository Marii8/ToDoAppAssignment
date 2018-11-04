let removeIcon = '<i class="fas fa-trash-alt fa-2x"></i>';
let doneIcon ='<i class="fas fa-clipboard-check fa-2x"></i>';


//入力したtaskをnotyetに入れる
let add = document.getElementById('add');
add.addEventListener('click', function(){
    let taskName = document.getElementById('task').value;
    let li = document.createElement('li');
    li.append(taskName);
    let list = document.getElementById('not-yet');
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




})


