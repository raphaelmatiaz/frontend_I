
window.onload = () => {

let divA = document.querySelector(".a")
console.log(divA)


let divB = document.querySelector(".b")
divB.style.backgroundColor = "yellow"
console.log(divB[0])


divB.addEventListener('mouseover', function() {
    divB.style.backgroundColor = "yellow";
  });
  
  divB.addEventListener('mouseout', function() {  // Use 'mouseout' for consistency
    divB.style.backgroundColor = "green";

  });



  divA.addEventListener('mouseenter', function() {
    divA.style.backgroundColor = "yellow";
    divA.textContent = "SUPRISE"
    divA.style.backgroundImage = "url(https://i.pinimg.com/736x/76/60/8b/76608be0e55bf6f142bf2ff6bafb465b.jpg)"
    divA.style.minWidth = "50vw";
    divA.style.backgroundRepeat = "no-repeat";


    on

  });

  
  divA.addEventListener('mouseout', function() {
    divA.style.backgroundColor = "red";
    divA.textContent = "Isto é a Div A com a cor vermelha"
    divA.style.backgroundImage = ""
    divA.style.minWidth = "10px";
  
});

}