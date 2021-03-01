/* function colorear() {
    event.target.style.color = "purple";
    let siblings = event.target.nextElementSibling;
    siblings.style.color = "blue";
  
  }
  
*/

document.getElementById('icon1').addEventListener("mouseenter", colorear);
document.getElementById('icon2').addEventListener("mouseenter", colorear);
document.getElementById('icon3').addEventListener("mouseenter", colorear);
document.getElementById('icon4').addEventListener("mouseenter", colorear);
document.getElementById('icon5').addEventListener("mouseenter", colorear);

document.getElementById('icon1').addEventListener("mouseleave", normalizar);
document.getElementById('icon2').addEventListener("mouseleave", normalizar);
document.getElementById('icon3').addEventListener("mouseleave", normalizar);
document.getElementById('icon4').addEventListener("mouseleave", normalizar);
document.getElementById('icon5').addEventListener("mouseleave", normalizar);

document.getElementById('icon1').addEventListener("click", toggleClass);
document.getElementById('icon2').addEventListener("click", toggleClass);
document.getElementById('icon3').addEventListener("click", toggleClass);
document.getElementById('icon4').addEventListener("click", toggleClass);
document.getElementById('icon5').addEventListener("click", toggleClass);
document.querySelector('body').addEventListener('click', toggleClass);


function colorear(event) {
    if (!(event.target.classList.contains('colorDef'))) {
        //event.target.style.color = "purple";
        let icons = document.querySelectorAll('i');
        for (i = 0; i < icons.length; i++) {
            if (event.target == icons[i]) {

                if (i >= 0) {
                    for (j = i; j >= 0; j--) {
                        //icons[j].style.color = "purple";
                        icons[j].classList.add('colorTemp');
                    }
                }
            }
        }
    }
}

function normalizar(event) {
    if (!(event.target.classList.contains('colorDef'))) {
      //  event.target.style.color = "black";
        let icons = document.querySelectorAll('i');
        for (i = 0; i < icons.length; i++) {
            if (event.target == icons[i]) {

                if (i >= 0) {
                    for (j = i; j >= 0; j--) {
                       // icons[j].style.color = "black";
                       icons[j].classList.remove('colorTemp');
                    }
                }
            }
        }
    }
}




function toggleClass(event) {

    let icons = document.querySelectorAll('i');

    if (!compareTargets(event)) {
        for (i = 0; i < icons.length; i++) {
            // icons[i].style.color = 'black';
            icons[i].classList.remove('colorTemp');
            icons[i].classList.remove('colorDef');
        }
    }
    else {
        for (i = 0; i < icons.length; i++) {
            if (event.target == icons[i]) {
                    for (j = i; j >= 0; j--) {
                        icons[i].classList.remove('colorTemp');
                        icons[j].classList.add('colorDef');
                    }
            }
        }
    }
}

function compareTargets(event) {
    let icons = document.getElementById('iconos').children
    let found = false;
    for (icon of icons) {
        if (event.target === icon) {
            found = true;
        }
    }
    return found;
}