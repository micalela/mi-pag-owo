const junk = [
    {
        qdiv: 1,
        imagen:"assets/junkjournal/saltar turno.png",
        tamaño: "150px",
        top: "450px",
        left: "100px",
        rotar: "15",
        altura: "3",
        caption: "holaaaaaaa"
    },
    {
        qdiv: 1,
        imagen:"assets/junkjournal/caramelo flor.png",
        tamaño: "150px",
        top: "35px",
        left: "300px",
        rotar: "-80",
        altura: "5",
        caption: "holaaaaaaa"
    },
    {
        qdiv: 1,
        imagen:"assets/junkjournal/flower kiss candy.png",
        tamaño: "300px",
        top: "25px",
        left: "0px",
        rotar: "-5",
        altura: "2",
        caption: "holaaaaaaa"
    },
    {
        qdiv: 1,
        imagen:"assets/junkjournal/carta uno.png",
        tamaño: "150px",
        top: "450px",
        left: "175px",
        rotar: "45",
        altura: "2",
        caption: "holaaaaaaa"
    },
    {
        qdiv: 1,
        imagen:"assets/junkjournal/caramelo señora.png",
        tamaño: "110px",
        top: "180px",
        left: "375px",
        rotar: "45",
        altura: "2",
        caption: "holaaaaaaa"
    },
    {
        qdiv: 1,
        imagen:"assets/junkjournal/silica1.png",
        tamaño: "100px",
        top: "40px",
        left: "475px",
        rotar: "75",
        altura: "2",
        caption: "holaaaaaaa"
    },
    {
        qdiv: 1,
        imagen:"assets/junkjournal/silica2.png",
        tamaño: "100px",
        top: "140px",
        left: "575px",
        rotar: "65",
        altura: "2",
        caption: "holaaaaaaa"
    },
    {
        qdiv: 1,
        imagen:"assets/junkjournal/silica3.png",
        tamaño: "100px",
        top: "40px",
        left: "675px",
        rotar: "165",
        altura: "2",
        caption: "holaaaaaaa"
    },
    {
        qdiv: 1,
        imagen:"assets/junkjournal/silica4.png",
        tamaño: "100px",
        top: "270px",
        left: "500px",
        rotar: "65",
        altura: "2",
        caption: "holaaaaaaa"
    },
    {
        qdiv: 1,
        imagen:"assets/junkjournal/silica5.png",
        tamaño: "100px",
        top: "270px",
        left: "650px",
        rotar: "65",
        altura: "2",
        caption: "holaaaaaaa"
    },
    {
        qdiv: 1,
        imagen:"assets/junkjournal/silica6.png",
        tamaño: "100px",
        top: "180px",
        left: "700px",
        rotar: "65",
        altura: "2",
        caption: "holaaaaaaa"
    },
    {
        qdiv: 1,
        imagen:"assets/junkjournal/lapicera.png",
        tamaño: "150px",
        top: "300px",
        left: "600px",
        rotar: "90",
        altura: "2",
        caption: "holaaaaaaa"
    },
    {
        qdiv: 1,
        imagen:"assets/junkjournal/numero de orden.png",
        tamaño: "350px",
        top: "410px",
        left: "350px",
        rotar: "0",
        altura: "2",
        caption: "holaaaaaaa"
    },
    {
        qdiv: 1,
        imagen:"assets/junkjournal/lapicera2.png",
        tamaño: "350px",
        top: "10px",
        left: "800px",
        rotar: "0",
        altura: "1",
        caption: "holaaaaaaa"
    },
    {
        qdiv: 1,
        imagen:"assets/junkjournal/lapicera3.png",
        tamaño: "150px",
        top: "50px",
        left: "1170px",
        rotar: "10",
        altura: "2",
        caption: "holaaaaaaa"
    },
]



function basura(qdiv, /* str id del div en q quiero q vaya */
    imagen, /* str con directorio relativo */
    top, /* */
    left,
    tamaño, 
    caption,
    rotar,
    altura
) {

    const caja = document.getElementById(`div${qdiv}`);

    const imgfinal = document.createElement("img");

    imgfinal.setAttribute("src", imagen);
    imgfinal.setAttribute("class", "junk")
    imgfinal.setAttribute("width", tamaño);
    imgfinal.setAttribute("alt", caption);
    imgfinal.setAttribute("style", `position: absolute; top:${top}; left:${left}; transform:rotate(${rotar}deg); z-index: ${altura}`);

    caja.appendChild(imgfinal);
}

console.log(`div${junk[0].qdiv}`)

for(var i=0; i<junk.length; i++) {
    basura(junk[i].qdiv, junk[i].imagen, junk[i].top, junk[i].left, junk[i].tamaño, junk[i].caption, junk[i].rotar, junk[i].altura)
    console.log("k chucha");
}