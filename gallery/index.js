var fullImgBox = document.getElementById("fullImgBox");
var fullImg = document.getElementById("fullImg");
function openFullImg(pic){
    fullImgBox.style.display = "flex";
    fullImg.src=pic;
}
function closeFullImg(){
    fullImgBox.style.display = "none";
}

let scroll = document.querySelector(".gallery");
let backBtn = document.getElementById("backBtn");
let nextBtn = document.getElementById("nextBtn");
scroll.addEventListener("wheel",(evt) =>{
    evt.preventDefault();
    scroll.scrollLeft+=evt.deltaY;
    scroll.style.scrollBehavior="auto";
})
nextBtn.addEventListener("click",()=>{
    scroll.style.scrollBehavior="smooth";
    scroll.scrollLeft+=900;
});
backBtn.addEventListener("click",()=>{
    scroll.style.scrollBehavior="smooth";
    scroll.scrollLeft-=900;
});