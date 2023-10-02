const buttonBasic = document.getElementById("buttonBasic");
const contentBasic = document.getElementById("contentBasic");
contentBasic.style.display="none";
const button2Basic = document.getElementById("button2Basic");
const content2Basic = document.getElementById("content2Basic");
content2Basic.style.display="none";

buttonBasic.addEventListener("click", () => {
    if (contentBasic.style.display === "none") {
        contentBasic.style.display = "block"; 
        buttonBasic.textContent = "Ocultar Info";
    } else {
        contentBasic.style.display = "none"; 
        buttonBasic.textContent = "Mostrar Info";
    }
});
button2Basic.addEventListener("click", () => {
    if (content2Basic.style.display === "none") {
        content2Basic.style.display = "block"; 
        button2Basic.textContent = "Ocultar Info";
    } else {
        content2Basic.style.display = "none"; 
        button2Basic.textContent = "Mostrar Info";
    }
});