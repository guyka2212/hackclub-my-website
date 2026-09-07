function showphoto() {
    const photo = document.getElementById("kimi-and-max");
    const textkimiandmax = document.getElementById("textkimiandmax");
    photo.style.display = photo.style.display === "none" ? "block" : "none";
    textkimiandmax.style.display = textkimiandmax.style.display === "none" ? "block" : "none";
}

function themeChange() {

    const isDark = document.body.classList.toggle("dark-theme");

    document.getElementById("text").style.color = isDark ? "white" : "black";
}