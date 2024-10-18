let filas = [
    {horas: 5, titulo: 'estudiar', horasMarcadas: [2,3,5]},
    {horas: 7, titulo: 'html fun', horasMarcadas: [2,4]}
];

const contenido = document.getElementById('contenido');

function crearFila(horas, titulo, horasMarcadas) {

    const fila = document.createElement('div'); // div q contiene toda la fila
    fila.className = 'fila';
    fila.id = `${titulo}-fila`;

    const nombre = document.createElement('span'); // titulo
    nombre.className = 'item';
    nombre.id = `${titulo}-nombre`;
    nombre.textContent = titulo;
    fila.appendChild(nombre);
    
    const checkboxBox = document.createElement('span'); // checkboxes
    checkboxBox.className = 'item';
    checkboxBox.id = `${titulo}-checkboxes`;
    fila.appendChild(checkboxBox);

    for(let i = 1; i <= horas; i++) { // agregar checkboxes
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = `${titulo}-checkbox${i}`;
        checkbox.checked = horasMarcadas.includes(i)
        checkboxBox.appendChild(checkbox);
        if(i==5){checkboxBox.appendChild(document.createElement('br'))}
    }

    const contador = document.createElement('span'); // ??/total ,, cuantas horas van
    contador.className = 'item';
    contador.id = `${titulo}-contador`;
    console.log(titulo);
    contador.textContent = `${horasMarcadas.length}/${horas}`;
    fila.appendChild(contador);

    const suma = document.createElement('span'); // suma total de horas
    suma.className = 'item';
    suma.id = `${titulo}-suma`;
    suma.textContent = titulo;
    fila.appendChild(suma);

    const semanas = document.createElement('span'); // suma total de semanas
    semanas.className = 'item';
    semanas.id = `${titulo}-semana`;
    semanas.textContent = titulo;
    fila.appendChild(semanas);

    contenido.appendChild(fila);

}

function cuantasSemanasVan() {
    /* hacer en el servidor */
}

function contarCheckboxes(id) { //devuelve un array con css query de las checkboxes chequeadas

    return document.getElementById(id).querySelectorAll('input:checked')
}

filas.forEach(({horas, titulo, horasMarcadas}/* destructurando el objeto */) => {
    
    crearFila(horas, titulo, horasMarcadas)

});




