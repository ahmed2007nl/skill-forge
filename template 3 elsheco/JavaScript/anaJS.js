
// auto type effect 
var typed = new Typed('.auto-type', {
    strings: ["an E-Learning Platform dedicated for High school"],
    typeSpeed: 70, 
    backSpeed : 70,
    loop : false 
  });


  document.addEventListener('DOMContentLoaded', () => {
    let OtherLinks = document.querySelector("header ul li:nth-child(4)");
    let megaMenu = document.querySelector(".mega-menu");
    
    // Toggle the mega menu visibility when clicking on "OtherLinks"
    OtherLinks.onclick = (event) => {
        megaMenu.classList.toggle("show");
        // Stop the event from propagating to the document as the onclick
        // event will propagate making collisons 
        event.stopPropagation();
    };
    
    // Close the mega menu when clicking outside of it
    document.addEventListener('click', (event) => {
        // If the mega menu is open and the clicked target is not the mega menu or "OtherLinks"
        if (megaMenu.classList.contains("show") && !megaMenu.contains(event.target) && event.target !== OtherLinks) {
            megaMenu.classList.remove("show");
            // 
        }
    });
    
   
    
});


let articlesContainer = document.getElementById("Cont-art") 
let arrOfartiles = Array.from(articlesContainer.querySelectorAll(".box  >  p"));
// console.log(arrOfartiles)

arrOfartiles.forEach((p)=>{
    if(p.innerText.length > 60){
     let CutText = p.innerText.substring(0 , 60)
     let newInnerText = `${CutText}.....` 
     console.log(newInnerText)
     p.innerText = newInnerText
    }
})


// let imagesArr = []
