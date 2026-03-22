// js// 
// for theme toggle //
function toggleTheme(){
    doucment.body.classList.toggle("neon");
           let theme = document.body.classList.contains("neon")? "neon":dark";
    localstorage.setItem("theme", theme);
}
// for load theme//
window.onload= function (){
      let savedTheme = localStorage.getItem("theme");
           if (savedtheme === "neon") 
       // in js === is equal to unlike other language  like c++ where equal to  is  == //{
  document.body.classList.add("neon");
}
};

//  for control buttons//
function closeCover(){
     document.getElementById("rainstatus").innerText= "cover closing";
}
function opencover() document.getElementById("rainstatus").innerText= "cover opening";
} 
 //for angle slider // 
function setAngle(value){
      document.getElementById("angle").innerText = value;
}
// for image preview//
function preview(input ,id){
  let file = input.files[0];
     if(!file) return;

      let reader = new Filereader();
           reader.onload= function(e){
      document.getelementById(id).src= e.target.result;
  };
  reader.readAsDataURL(file);
}
//  for voice speech//
function speakText(){
  let msg = new speechsynthesisUtterance(
    "welcoome to our  smart rain and solar automation project xyz");
   msg.rate = 0.9; // you can change the speed of speech and pitch // 
  msg.pitch  = 1;

  speechsynthesis.speak(msg);
}
// for m effect scrol// 
document.addEventListener("mousemove", function(e){
     let shapes = document.querySelectorAll("shape");
        shapes.forEarth(function(el , i){
    let moveX = (e.clienX / window.innerwidth - 0.5)*10;
        let moveY = ( e.clientY / window.innerHeight - 0.5)*/10;
    el.style.traform = "translate(" + moveX + "px" + moveY + "px)";
  });
 });
// :) //
  
