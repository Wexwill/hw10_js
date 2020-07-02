let todo = function() {
    let section = document.createElement('section'),
        div = document.createElement('div'),
        input = document.createElement('input'),
        ul = document.createElement('ul'),
        button = document.createElement('button'),
        clear = document.createElement('button');

    document.body.appendChild(section);
    section.appendChild(div);
    section.appendChild(input);
    section.appendChild(ul);
    section.appendChild(button);
    section.appendChild(clear);

    div.innerHTML = 'ToDo List';
    button.innerHTML = 'Delete';
    clear.innerHTML = 'Clear';

    section.classList.add('container');
    div.classList.add('header');
    input.setAttribute('type', 'text');
    input.setAttribute('placeholder', 'Add New ToDo');
    button.classList.add('btn');
    clear.classList.add('clear');

    input.addEventListener('keyup', function(event) {
        let todo = event.target.value;
        console.log(event.target.value);
            
        if (event.key === 'Enter' & todo == '') alert('Введите дело!');

        if (event.key === 'Enter' & !todo == '') {
            let li = document.createElement('li'),
                inputLi = document.createElement('input');
                span = document.createElement('span');

            ul.appendChild(li);
            li.appendChild(span);
            span.innerHTML = todo;
            li.appendChild(inputLi);
            inputLi.setAttribute('type', 'checkbox');

            input.value = '';

            inputLi.addEventListener('click', function(event){
                
                let parentLi = event.target.closest('li'),
                    childSpan = parentLi.querySelector('span');

                if(childSpan.hasAttribute('class', 'style')) {
                    childSpan.classList.toggle('style');
                } else {
                    childSpan.classList.toggle('style');
                };
            });

            button.addEventListener('click', function (event) {
                let f = document.querySelectorAll('.style');  
                for (let i = 0; i < f.length; i++) {
                    f[i].parentElement.remove();
                } 
            })

            clear.addEventListener('click', function (event) {
                ul.innerHTML = "";
            })
        }
    })
}
document.addEventListener("DOMContentLoaded", todo);