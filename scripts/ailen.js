/* var et = document.getElementById("ailen");
for(let i = 0; i < 10; i++){
    et.innerHTML+=`<img src="assets/ailen.png" alt="ailen" height="15px">`
} */

/* var et = document.getElementById("ailen");
for (let i = 0; i < 10000; i++) {
    const image = document.createElement('img')
    image.setAttribute('src','assets/ailen.png')
    image.setAttribute('height','15px')
    et.appendChild(image);
}
 */
var et = document.getElementById("ailen");

Array.from(Array(10000).keys()).map(() => {
    const image = document.createElement('img')
    image.setAttribute('src','assets/ailen.png')
    image.setAttribute('height','15px')
    et.appendChild(image);
})