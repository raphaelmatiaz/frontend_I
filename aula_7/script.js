window.onload = async () => {

const page1 = document.querySelector(".page1")
const page2 = document.querySelector(".page2");
document.querySelector("#next").onclick = () => {
    page1.style.display = "none";
    page2.style.display = "flex";
}

document.querySelector("#previous").onclick = () => {
    page1.style.display = "flex";
    page2.style.display = "none";
}
};