function run(){

    let htmlCode = document.getElementById("html-code").value;
    let cssCode = document.getElementById("css-code").value;
    let jsCode = document.getElementById("js-code").value;
    let outPut = document.getElementById("output");

    outPut.contentDocument.body.innerHTML = htmlCode + "<style>" + cssCode + "</style>";
    outPut.contentWindow.eval(jsCode);

}
function run() {
    let htmlCode = document.getElementById("html-code");
    let cssCode = document.getElementById("css-code").value;
    let jsCode = document.getElementById("js-code").value;
    let output = document.getElementById("output");

    if (htmlCode.value.includes('~~')) {
        htmlCode.value = "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n\t<meta charset=\"UTF-8\">\n\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n\t<title>Your Title</title>\n\t<link rel=\"stylesheet\" href=\"your-stylesheet.css\">\n</head>\n<body>\n\n\t<h1>Hello, World!</h1>\n\n\t<script src=\"your-script.js\"></script>\n</body>\n</html>";
        output.contentDocument.body.innerHTML = "";
    }
    output.contentDocument.body.innerHTML = htmlCode.value + "<style>" + cssCode + "</style>";
    output.contentWindow.eval(jsCode);
}

window.addEventListener('load', () => {
    setTimeout(() => {
        document.querySelector('.loader').style.display = 'none';
    }, 1300);
});


const customCursor = document.querySelector(".cursor");
const navLinks = document.querySelectorAll(".nav-links li");

document.addEventListener("mousemove",moveCursor);

function moveCursor(e){
    updateCursorPosition(e);
}

function updateCursorPosition(e){
    customCursor.style.top = e.pageY + "px";
    customCursor.style.left = e.pageX + "px";
}


navLinks.forEach((link)=>{
    link.addEventListener('mouseenter',()=>{
        animateCursor();
        highlightLink(link);
    });

    link.addEventListener('mouseleave',()=>{
        removeCursorAnimation();
        unhighlightLink(link);
    });
});

function animateCursor(){
    customCursor.classList.add("link-animate")
}

function removeCursorAnimation(){
    customCursor.classList.remove("link-animate");
}

function highlightLink(link){
    link.classList.add("link-hovering");
}

function unhighlightLink(link){
    link.classList.remove("link-hovering");
}


