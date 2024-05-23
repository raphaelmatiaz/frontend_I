window.onload = () => {

    let animID = null;
    const button = document.querySelector("button");
    button.onclick = () => {
        if(animID) {
            cancelAnimationFrame(animID);
            animID = null;
            button.innerText = "Start";
        } else {
            draw();
            button.innerText = "Stop";
        }
    }


    const canvas = document.querySelector('canvas');
    const ctx = canvas.getContext("2d");

    const width = canvas.width;
    const height = canvas.height;

    const img = new Image();
    img.onload = () => {
        // ctx.drawImage(img, 200, 200, 100, 100, 100, 100, 300,300);
    }
    img.src = "https://imgs.search.brave.com/uvnrdXo28Rk_o7wZYO-EKCKJLxknex-iE2IL8jOhVdY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTM0/MTM0MDQ3L3Bob3Rv/L3N1cmZlci5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9NHFL/bzlYeFgwbDZzTWFM/N2NNa2pJYmlFcmFP/bTJzQUJ3cWdQZXIy/ZDV6TT0";


    ctx.fillStyle = "blue";
    ctx.font = "48px serif";
    ctx.fillText("Hello world", 10, 50);

    const colors = ["green", "yellow", "blue", "pink", "orange", "purple", "brown", "black", "white"];
    const blockWidth = width / colors.length;

    const arr = new Uint8ClampedArray(width * height * 4);
    for (let i = 0; i < arr.length; i+=4) {
        arr[i] = 255;
        arr[i+1] = 255;
        arr[i+2] = 255;
        arr[i+3] = 255;
    }

    arr[4] = 255;
    arr[5] = 0;
    arr[6] = 0;
    arr[7] = 255;
    ctx.putImageData(new ImageData(arr, width, height), 0, 0);


    // for (let i = 0; i < colors.length; i++) {
    //     ctx.fillStyle = colors[i];
    //     ctx.fillRect(blockWidth*i, 0, blockWidth, height);
    // }


    // const vector = {
    //     x: 0,
    //     y: 0
    // }
    // const draw = () => {

    //     ctx.clearRect(0, 0, width, height);

    //     ctx.strokeStyle = "rgba(255, 0, 0, 0.5)";
    //     ctx.lineWidth = 5;
    //     ctx.beginPath();
    //     ctx.moveTo(0, 0);
    //     ctx.lineTo(vector.x, vector.y);
    //     ctx.stroke();

    //     vector.x += 1;
    //     vector.y += 1;

    //     animID = requestAnimationFrame(draw);
    // }

    // draw();
}












// window.onload = () => {

//     let animID = null;
//     const btn = document.querySelector("button")
//     btn.onclick = () => {
//         if(animID) {
//             cancelAnimationFrame(animID);
//             animID = null;
//             btn.innerText = "Start";
//         } else {
//             animate();
//             btn.innerText = "Stop";
//         }
//     };

//     const canvas = document.querySelector('canvas');
//     const ctx = canvas.getContext('2d');
    
//     const rainbowColors = ['#ff0000', '#ff7f00', '#ffff00', '#00ff00', '#0000ff', '#4b0082', '#9400d3'];

//     const stars = [];

//     // Create stars
//     for (let i = 0; i < 1000; i++) {
//         stars.push({
//             x: Math.random() * canvas.width,
//             y: Math.random() * canvas.height,
//             z: Math.random() * canvas.width, // Depth
//             speed: 1, // Adjust speed here
//             color: rainbowColors[Math.floor(Math.random() * rainbowColors.length)]
//         });
//     }

//     const draw = () => {
//         for (let i = 0; i < stars.length; i++) {
//             const star = stars[i];
//             const x = (star.x - canvas.width / 2) * (canvas.width / star.z) + canvas.width / 2;
//             const y = (star.y - canvas.height / 2) * (canvas.width / star.z) + canvas.height / 2;
//             const radius = Math.max(0, 1 - star.z / canvas.width) * 20;
            
//             ctx.fillStyle = star.color;
//             ctx.beginPath();
//             ctx.arc(x, y, radius, 0, Math.PI * 2);
//             ctx.fill();
            
//             // Move star
//             star.z -= star.speed;
            
//             // Reset star position if it's out of the screen
//             if (star.z <= 0) {
//                 star.x = Math.random() * canvas.width;
//                 star.y = Math.random() * canvas.height;
//                 star.z = canvas.width;
//                 star.color = rainbowColors[Math.floor(Math.random() * rainbowColors.length)]; // Change star color
//             }
//         }
//     };

//     const animate = () => {
//         ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas
//         draw();
//         animID = requestAnimationFrame(animate);
//     };


//     animate();
// }