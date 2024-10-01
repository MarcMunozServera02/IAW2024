var logotip = document.getElementById("logotip");
var btn_ir = document.getElementById("btn-ir");
var categoty = document.getElementById("categoria");
var especialidad = document.getElementById("especialitat");

logotip.addEventListener("mouseover", ()=>{
    console.log("Usuario poniendo el raton encima del logo")
});
logotip.addEventListener("mouseout", ()=>{
    console.log("Usuario quitando el raton encima del logo")
});
btn_ir.addEventListener("click", ()=>{
    console.log("Click")
});
categoty.addEventListener("change", ()=>{
    console.log("El usuario ha cambiado una opcion")
});
especialidad.addEventListener("change", ()=>{
    console.log("El usuario ha cambiado una opcion")
});