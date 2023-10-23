const navbar = `<div class="navbar">
<a href="cartelitos.html">colescion de cosas</a>
<a href="aprendiendo uwu.html">conocimiento</a>
<a href="htmlmat2.html">paginas epicas</a>
<a href="ascii.html">ascii</a>
</div>`;

const body = document.body;

body.insertAdjacentHTML("beforeBegin", navbar);

/* body.insertBefore(navbar, body.firstChild); */