const showButton = document.getElementById("button")
const showInfoElement = document.getElementById("show-info")
showButton.addEventListener('click', showIntroduction)
function showIntroduction(e) {
    e.preventDefault();
    
    if (showInfoElement.style.display === "none")  {
        const randDeg = Math.floor(Math.random() * 365)
        showInfoElement.style.display = "grid";
        showButton.innerHTML = "Close here";
        showButton.style.filter = `hue-rotate(${randDeg}deg)`;
    }
    else {
        const randDeg = Math.floor(Math.random() * 365)
        showInfoElement.style.display = "none";
        showButton.innerHTML = "Show Info";
        showButton.style.filter = `hue-rotate(${randDeg}deg)`;
    }
}







