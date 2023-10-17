const linksydesc = [
    {
        "url": "https://new.math.uiuc.edu/oldnew",
        "desc": "una buena página para explorar"
    },
    {
        "url": "http://new.math.uiuc.edu/oldnew/optiverse/",
        "desc": "acá nacieron los legendarios videos de cómo dar vuelta una esfera. hay un montón de material original de los videos y muchas reliquias para chusmear"
    },
    {
        "url": "https://new.math.uiuc.edu/oldnew/optiverse/tshirts.html",
        "desc": "cuando quieran coordinamos y les mandamos un mail, a ver si nos conseguimos unas remeras para el cmat"
    },
    {
        "url": "https://new.math.uiuc.edu/zipproof/conwaypng/",
        "desc": "descripcion"
    },
    {
        "url": "https://www.vanderbilt.edu/AnS/psychology/cogsci/chaos/workshop/Fractals.html",
        "desc": "descripcion"
    },
    {
        "url": "https://www.wahl.org/fe/HTML_version/link/FE4W/c4.htm",
        "desc": "descripcion"
    },
    {
        "url": "http://www.rogmann.org/math/tori/torus2en.html",
        "desc": "descripcion"
    },
    {
        "url": "https://www.kleinbottle.com/",
        "desc": "descripcion"
    },
    {
        "url": "https://personal.math.ubc.ca/~cass/courses/m308-03b/projects-03b/skinner/ex-dimension-koch_snowflake.htm",
        "desc": "descripcion"
    },
    {
        "url": "https://personal.math.ubc.ca/~cass/courses/m308-03b/projects-03b/skinner/",
        "desc": "descripcion"
    },
    {
        "url": "https://www2.karlin.mff.cuni.cz/~pyrih/e/e2001v2/c/ect/node52.html",
        "desc": "descripcion"
    },
    {
        "url": "http://web1.kcn.jp/hp28ah77/index.html#chapters",
        "desc": "descripcion"
    },
    {
        "url": "http://web1.kcn.jp/hp28ah77/us27i_klpr.htm",
        "desc": "descripcion"
    },
    {
        "url": "https://www2.karlin.mff.cuni.cz/~pyrih/e/e2001v2/c/ect/node1.html",
        "desc": "descripcion"
    },
    {
        "url": "http://www.complang.tuwien.ac.at/schani/",
        "desc": "descripcion"
    },
    {
        "url": "https://www.math.leidenuniv.nl/~desmit/",
        "desc": "descripcion"
    },
    {
        "url": "http://pi.math.cornell.edu/~dtaimina/hypplanes.htm",
        "desc": "descripcion"
    },
    {
        "url": "https://www.georgehart.com/virtual-polyhedra/vp.html",
        "desc": "descripcion"
    },
    {
        "url": "https://www.georgehart.com/index.html",
        "desc": "descripcion"
    },
    {
        "url": "https://www.cs.ubc.ca/~tmm/gc/",
        "desc": "descripcion"
    },
    {
        "url": "https://www.geometrygames.org/HyperbolicBlanket/index.html",
        "desc": "descripcion"
    },
    {
        "url": "https://www.geometrygames.org/TorusGames/",
        "desc": "descripcion"
    },
    {
        "url": "http://www.biscuitsandjam.com/stripe_maker.php",
        "desc": "descripcion"
    },
    {
        "url": "http://madeleineshepherd.blogspot.com/search/label/random%20knitting",
        "desc": "descripcion"
    },
    {
        "url": "https://themathematiciansshirts.wordpress.com/",
        "desc": "descripcion"
    },
    {
        "url": "http://www.woollythoughts.com/borromeancubes.html",
        "desc": "descripcion"
    },
    {
        "url": "http://www.woollythoughts.com/dragons.html",
        "desc": "descripcion"
    },
    {
        "url": "http://www.mentalblocks.co.uk/aboutus.html",
        "desc": "descripcion"
    },
    {
        "url": "http://www.rogmann.org/archiv/math/hyp/Dreiecke.html",
        "desc": "descripcion"
    },
    {
        "url": "http://www.rogmann.org/archiv/math/hyp/anim/Animationen.html",
        "desc": "descripcion"
    },
    {
        "url": "http://aleph0.clarku.edu/~djoyce/poincare/poincare.html",
        "desc": "descripcion"
    },
    {
        "url": "https://www.ics.uci.edu/~eppstein/junkyard/hyper.html",
        "desc": "descripcion"
    },
    {
        "url": "https://www.geometrygames.org/HyperbolicGames/",
        "desc": "descripcion"
    },
    {
        "url": "https://www.ics.uci.edu/~eppstein/junkyard/tiling.html",
        "desc": "descripcion"
    },
    {
        "url": "http://www.rogmann.org/math/csaszar/",
        "desc": "descripcion"
    },
    {
        "url": "https://mathcurve.com/surfaces.gb/paraboloidhyperbolic/paraboloidhyperbolic.shtml",
        "desc": "descripcion"
    },
    {
        "url": "http://mathpuzzle.com/",
        "desc": "descripcion"
    },
    {
        "url": "https://kleinbottle.com/?utm_source=substack&utm_medium=email",
        "desc": "descripcion"
    },
    {
        "url": "https://mathcurve.com/surfaces.gb/mobiussurface/mobiussurface.shtml",
        "desc": "descripcion"
    },
    {
        "url": "http://andrewbayly.com/PR/pr.html",
        "desc": "descripcion"
    },
    {
        "url": "https://www.epsilones.com/paginas/laboratorio/laboratorio-002-teseladopenrose.html",
        "desc": "descripcion"
    },
    {
        "url": "https://www.epsilones.com/paginas/0-bestiario/bestiario-000.html",
        "desc": "descripcion"
    }
]


const et = document.getElementById("lista de links");

for (var i = 0; i < linksydesc.length; i++){

    const item = document.createElement("dt"); 
    const pg = document.createElement("a");
    const desc = document.createElement("dd");
    const br = document.createElement("br")
    pg.setAttribute("href", linksydesc[i].url);
    pg.setAttribute("target", "_blank");
    pg.innerHTML = linksydesc[i].url; /* i.url */
    desc.innerHTML = linksydesc[i].desc; /* i.desc */

    item.appendChild(pg);
    et.appendChild(item);
    et.appendChild(desc);
    et.appendChild(br);
}
