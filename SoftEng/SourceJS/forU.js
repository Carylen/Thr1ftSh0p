/* untuk membuat container si card card recommendations */
const reccommend = document.createElement("div");

/* assign className si container diatas */
reccommend.className = 'forYou';

/* append container diatas ke dalam HTML kita */
document.body.appendChild(reccommend);

/* Function untuk membuat tiap cardnya */
function bagan() {
    const div = document.createElement('div');
    const howMuch = document.getElementsByClassName('card');
    
    div.className = 'card test';

    if (howMuch.length > 5) {
        
    }
    
    div.innerHTML = `
        <div class="caption addOn">Air Force 1</div>
        <img class="catalog" src = "/SourceIMG/AirForce1-3.png" >
        <div class="caption ">Rp. 1.xxx.xxx</div>
    `;
        
    reccommend.appendChild(div);
}


for (i = 0; i < 6; i++){
    bagan();
}

