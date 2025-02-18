const addNewButtonn = document.getElementById('magic-btn');

addNewButtonn.addEventListener('click', ()=>{
    const newBtn = document.createElement('button');
    newBtn.id = 'magic-btn-2';
    newBtn.textContent = 'Я изменю тебя';
    newBtn.style.backgroundColor = '#a78b71';
    newBtn.style.color = 'white';
    newBtn.style.width = '150px'
    newBtn.style.height = '150px'
    document.body.appendChild(newBtn);

    newBtn.addEventListener('click', () => {
        addNewButtonn.style.backgroundColor = '#9c4a1a';
        addNewButtonn.style.color = 'black';
    });
});

