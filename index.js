//aqui solo va el manejo del DOM
window.onload =() => {
    const btnCifrar = document.getElementById("cifrar");//identificando el boton con una variable
    btnCifrar.addEventListener("click", ()=>{ //Asignandole una funcion al boton
        let menssage1 = document.getElementById("mensaje").value; //evaluando lo que se encuentra dentro de mi caja de usuario
        let desplazamiento1 = document.getElementById("desplazamiento").value;
        document.getElementById("resuelto").innerHTML= window.cipher.encode(desplazamiento1,menssage1); //Indicandole que escriba en mi textarea el resultado del cifrar
        return window.cipher.encode(desplazamiento1,menssage1)//Aqui estoy retornando el valor del texto codificado

    })
    const btnDescifrar = document.getElementById("descifrar");
    btnDescifrar.addEventListener("click", ()=>{ 
        let menssage1 = document.getElementById("mensaje").value; 
        let desplazamiento1 = document.getElementById("desplazamiento").value;
        document.getElementById("resuelto").innerHTML= window.cipher.decode(desplazamiento1,menssage1);  
        return window.cipher.decode(desplazamiento1,menssage1)
})
}