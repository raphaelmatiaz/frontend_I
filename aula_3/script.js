window.onload = () => {

const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

const width = canvas.width;
const height = canvas.height;

console.log(width, height);



const colors = ["green", "yellow", "blue", "red", "pink", "orange", "purple", "bisque", "lightblue", "white", "black", "white"]
const blockWidth = width / colors.length;

for (let i = 0; i < colors.length; i++) {
    context.fillStyle = colors[i];
    context.fillRect(blockWidth*i, 0, blockWidth, height)
    
}

const draw = () => {

}


// Button
let animID = null;
const button = document.querySelector('button');
button.onclick = () => {
    if (animID) {
        cancelAnimationFrame(animID);
        animID = null;
        button.innerText = "Start"
    } else {
        drawLine();
        button.innerText = "Stop"
    }
}



const vector = {
    x: 0,
    y: 0,
    width: 1
}


const drawLine = () => {
    context.strokeStyle = "bisque";
    context.lineWidth = vector.width;
    context.beginPath()
    context.moveTo(0, 0);
    context.lineTo(vector.x, vector.y,);
    context.stroke()

    vector.x += 0.01
    vector.y += 0.5
    
    if (vector.width <= 100) {
        vector.width++;
        vector.x += 0.4
        vector.y += 0.09
    } else 
    if (vector.width = 0) {
        vector.width--
    } 

   animID = requestAnimationFrame(drawLine)
}

drawLine();

const follower = document.getElementById('follower');

document.addEventListener('mousemove', (event) => {
  // Get cursor position (clientX and clientY) relative to the viewport
  const cursorX = event.clientX;
  const cursorY = event.clientY;

  // Calculate adjustments to position the element slightly below and to the right of the cursor
  const offsetX = 10; // Adjust for desired horizontal offset
  const offsetY = 10; // Adjust for desired vertical offset

  // Set the follower element's position using CSS translate
  follower.style.transform = `translate(${cursorX + offsetX}px, ${cursorY + offsetY}px)`;
});



}



