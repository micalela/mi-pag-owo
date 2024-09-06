const navbar = `<div class="navbar">
<a href="tópicos.html">tópicos</a>
<span>✧</span>
<a href="../../htmlmat2.html">atrás!</a></div><br>`;

/* <button id="boton_navbar">✧˖°˖✧°</button> */

/* const boton = document.createElement("button").innertext="hola"; */

const body = document.body;

body.insertAdjacentHTML("beforeBegin", navbar);

const boton_navbar = document.getElementById("boton_navbar");

boton_navbar.onclick=()=>{document.querySelectorAll('style, link[rel="stylesheet"]').forEach(e => e.remove());}

