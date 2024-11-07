const button_add = document.querySelector('.main-header-svg');
const model_list = document.querySelector('.model-list');
const model_list_tarefa_button = document.querySelector('.model-list-tarefa-button');
const ul_tarefas = document.querySelector('.ul-tarefas');
const input_tarefa = document.querySelector('.model-list-tarefa-input');

//esconde o model
model_list.style.display = 'none';


//mostra a model 
button_add.addEventListener('click', function(){
    model_list.style.display='block';
});

//click para adicionar uma tarefa nova
model_list_tarefa_button.addEventListener('click', function(){
    const content_tarefa =  input_tarefa.value;

    //se o input não está vazio
    if (content_tarefa.trim() !== ''){
        alert('Sua nova tarefa foi adicionada.');
        model_list.style.display = 'none';

        const item_circle = document.createElement('span');
        item_circle.classList.add('item_circle');
        item_circle.textContent = '';
        ul_tarefas.appendChild(item_circle);

        //caso click no botao de check
        item_circle.addEventListener('click', function(){
            item_circle.classList.toggle('checked');
            if(item_circle.classList.contains('checked')){
                item_circle.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 1200 1200"><path fill="gray" d="M600 0C268.63 0 0 268.63 0 600s268.63 600 600 600s600-268.63 600-600S931.369 0 600 0m0 130.371c259.369 0 469.556 210.325 469.556 469.629S859.369 1069.556 600 1069.556c-259.37 0-469.556-210.251-469.556-469.556C130.445 340.696 340.63 130.371 600 130.371m229.907 184.717L482.153 662.915L369.36 550.122L258.691 660.718l112.793 112.793l111.401 111.401l110.597-110.669l347.826-347.754z" /></svg>';
                item_circle.style.border = 'none'
            }else{
                item_circle.innerHTML = '';
                item_circle.style.border = '1px solid black';
            }
        });

        const item_li = document.createElement('li');
        item_li.classList.add('item_li');
        item_li.textContent = content_tarefa;
        ul_tarefas.appendChild(item_li);

        input_tarefa.value = '';

        const item_button = document.createElement('button');
        item_button.classList.add('item_button');
        item_button.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><g fill="none"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" /><path fill="black" d="M20 5a1 1 0 1 1 0 2h-1l-.003.071l-.933 13.071A2 2 0 0 1 16.069 22H7.93a2 2 0 0 1-1.995-1.858l-.933-13.07L5 7H4a1 1 0 0 1 0-2zm-3.003 2H7.003l.928 13h8.138zM14 2a1 1 0 1 1 0 2h-4a1 1 0 0 1 0-2z" /></g></svg>'
        ul_tarefas.appendChild(item_button);

        //botao para deletar a tarefa selecionada
        item_button.addEventListener('click', function(){
            ul_tarefas.removeChild(item_li);
            ul_tarefas.removeChild(item_button);
            ul_tarefas.removeChild(item_circle);
        })

    }
    //caso o input esteja vazio
    else{
        alert('Por favor, insira uma tarefa.')
    }

});