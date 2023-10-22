const cartelitos = [
  {
    link: "https://setiathome.berkeley.edu/",
    img: "https://starlocked.neocities.org/home-img/seti-button.gif",
  },
  {
    link: "https://pastelhello.com/",
    img: "assets/botones/32marsh.gif",
  },
  {
    link: "http://lu.tiny-universes.net/",
    img: "assets/botones/stamp-yrownwebsite.png",
  },
  {
    link: "https://skelenby.neocities.org/dump/icons",
    img: "https://piranhebula.neocities.org/images_general/bestviewed.gif",
  },
  {
    link: "https://lu.tiny-universes.net/graphix.html",
    img: "https://piranhebula.neocities.org/images_general/myownwebsite.gif",
  },
  {
    link: "https://skelenby.neocities.org/dump/icons",
    img: "https://piranhebula.neocities.org/images_buttons/blinkiesCafe-9l.gif",
  },
];

const pixeles = [
  {
    link: "https://fruitmelt.neocities.org/",
    img: "assets/botones/te.png",
  },
  {
    link: "https://pastelhello.com/",
    img: "assets/cachivaches/stickers/snow.png",
  },
  {
    link: "https://pastelhello.com/",
    img: "assets/cachivaches/t.gif",
  },
  {
    link: "https://pastelhello.com/",
    img: "assets/cachivaches/grimm.png",
  },
  {
    link: "https://pastelhello.com/",
    img: "assets/cachivaches/tesitos/teacup-pastellhell.gif",
    title: "tastes like lemon rose - made by pastelhell",
  },
  {
    link: "https://starfighter.neocities.org/",
    img: "assets/cachivaches/tesitos/starfighter-tiny-company.gif",
    title: "tastes like tiny company - made by Starfighter",
  },
  {
    link: "https://slashdiv.neocities.org/home.html",
    img: "assets/cachivaches/tesitos/slashdiv-anim.webp",
    title: "tastes like crisp air and shimmering starlight - made by slashdiv",
  },
  {
    link: "https://solaria.neocities.org/",
    img: "assets/cachivaches/tesitos/solariateacup.png",
    title: "made by Solaria",
  },
  {
    link: "https://cobyzaby.neocities.org/collections/cliques",
    img: "assets/cachivaches/stickers/still life.png",
  },
  {
    link: "https://wasongo.art/",
    img: "assets/cachivaches/stickers/wasongo_mushroom.png",
  },
  {
    link: "https://slashdiv.neocities.org/home?z=/cliques/stickersheet",
    img: "assets/cachivaches/stickers/slashdiv-bubbletea.png",
  },
  {
    link: "https://slashdiv.neocities.org/home?z=/cliques/stickersheet",
    img: "assets/cachivaches/stickers/slashdiv-fruittea.png",
  },
  {
    link: "https://cinni.net/",
    img: "assets/cachivaches/stickers/miao.png",
  },
  {
    link: "https://bloopywoopy.neocities.org/cool-stuff/collections",
    img: "assets/cachivaches/beberajes/JdK3dU7.png",
    title: "lemon flavoured soda - By bloopywoopy",
    alt: "a pink can with a lemon logo",
  },
  {
    link: "https://bloopywoopy.neocities.org/cool-stuff/collections",
    img: "assets/cachivaches/stickers/sticker-rainbow.png",
  },
  {
    link: "https://bloopywoopy.neocities.org/cool-stuff/collections",
    img: "assets/cachivaches/stickers/discord.png",
  },
];

const nuse = [
  {
    link: "https://cinni.net/?z=/web",
    img: "assets/cachivaches/stamps/pastel.gif",
  },
];

const cachivaches = [
  {
    link: "https://shroom.ink/decay/adopt-a-shroom/",
    img: "https://shroom.ink/images/adoptables/Amanita_muscaria.png",
    height: "50px",
  },
];

const apis = [
  {
    img: "https://cataas.com/cat",
    height: "120px",
  },
];

function poner(ls, donde, titulo) {
  const div = document.getElementById(donde);
  const h3 = document.createElement("h3");

    h3.text = titulo;
    div.appendChild(h3);

  for (var i = 0; i < ls.length; i++) {
    const a = document.createElement("a");
    const img = document.createElement("img");

    if (ls[i].link) {
      a.setAttribute("href", ls[i].link);
    }

    a.setAttribute("target", "_blank");

    img.setAttribute("src", ls[i].img);

    if (ls[i].title) {
      img.setAttribute("title", ls[i].title);
    }
    /* si tiene title lo pone, si no deja sin nada */

    img.setAttribute("alt", ls[i].desc ? ls[i].desc : "imagen");
    /* si tiene alt lo pone, si no pone el link */

    if (ls[i].height) {
      img.setAttribute("height", ls[i].height);
    }

    a.appendChild(img);
    div.appendChild(h3)
    div.appendChild(a);
  }
}

poner(cartelitos, "cartelitos", "cartelitos");
poner(pixeles, "pixeles", "pixel art");
poner(nuse, "estampillas", "estampillas¿?");
poner(cachivaches, "cachivaches", "cachivaches");
poner(apis, "apis", "apis");
