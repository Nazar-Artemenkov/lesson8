const changeColorBlack = document.getElementById("change-color");
const changeElement = document.getElementById("change-wi");
const addImg = document.getElementById("add-img");
const img = document.getElementById("IMG");

changeColorBlack.addEventListener('click', ()=>{
    changeElement.style.backgroundColor = "black"
})
changeElement.addEventListener('click', ()=> {
    addImg.style.width = "100px"
    addImg.style.height = "100px"
})
addImg.addEventListener('click', () => {
    img.src = "https://static.wixstatic.com/media/99abab_0f2f75feaf234c298d8497e69a473c54~mv2.jpg/v1/fill/w_392,h_524,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/surikat.jpg"
})
