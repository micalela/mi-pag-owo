const navbar = `<div class="navbar">
<a href="conjuntos hiperbólicos.html">conjuntos hiperbólicos</a>
<span>✧</span>
<a href="ifs.html">ifs</a>
<span>✧</span>
<a href="keep a necklace from falling apart.html">antoine</a>
<span>✧</span>
<a href="../../htmlmat2.html">atrás!</a></div><br>`;

/* <button id="boton_navbar">✧˖°˖✧°</button> */

/* const boton = document.createElement("button").innertext="hola"; */

const body = document.body;

body.insertAdjacentHTML("beforeBegin", navbar);

const boton_navbar = document.getElementById("boton_navbar");

boton_navbar.onclick=()=>{document.querySelectorAll('style, link[rel="stylesheet"]').forEach(e => e.remove());}

