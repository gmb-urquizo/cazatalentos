document.getElementsByName('num1')[0].placeholder='new text for num2';
document.getElementsByName('num2')[0].placeholder='new text for num1';

const lista = document.getElementById('lista');

Sortable.create(lista, {
    animation: 150,
    chosenClass: "seleccionado",
    //ghostClass: "fantasma",
    dragClass: "drag",
});
