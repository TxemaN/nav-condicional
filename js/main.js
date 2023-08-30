document.addEventListener('DOMContentLoaded', () => {
const login = document.querySelector("#login")
const registro = document.querySelector("#registro")
const perfil = document.querySelector("#perfil")
const logout= document.querySelector("#logout")


document.addEventListener("click", ({ target }) => {
   
    if (target.classList.contains("logeado")) {
       login.classList.add("desaparecer")
       registro.classList.add("desaparecer")
       perfil.classList.remove("desaparecer")
       logout.classList.remove("desaparecer")

    }else if (target.classList.contains("noLogeado")) {
        perfil.classList.add("desaparecer")
       logout.classList.add("desaparecer")
       login.classList.remove("desaparecer")
       registro.classList.remove("desaparecer")
    }
    

});




})//LOAD