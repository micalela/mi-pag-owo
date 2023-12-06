const tabla1 = ["hola", "buenas", "tardes"];

const tabla2 = ['<img src="assets/iconos/hongo.png"/>','<img src="assets/iconos/pescaos.png"/>','<img src="assets/iconos/tesito.ico"/>']

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function elegir(tabla, donde) {

  let min = 0;
  let max = tabla.length;

  const div = document.getElementById(donde);

  const elegido = tabla[getRndInteger(min, max)];

 /*  console.log(elegido); */

  div.innerHTML = elegido;
}


/* function ejemplo(param) {
  console.log(param);
}

boton1.addEventListener("click", ()=>{
    ejemplo("hola")
});

boton2.onclick = ()=>{
    ejemplo("chau")
}; */ 

/* otras formas de llamar la función desde js en vez de en el html. (esto es mejor [mas escalabrjel] dice pier0) */