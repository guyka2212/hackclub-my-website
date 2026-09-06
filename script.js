function themeChange() {

    const isDark = document.body.classList.toggle("dark-theme");
    
    document.getElementById("text").style.color = isDark ? "white" : "black";
}