//aqui solo va el manejo del DOM
window.onload =() => {
    const btnCifrar = document.getElementById("cifrar");//identificando el boton cifrar con una variable
    btnCifrar.addEventListener("click", ()=>{ //Asignandole una funcion flecha al boton
        let menssage1 = document.getElementById("mensaje").value; //evaluando lo que se encuentra dentro de mi caja de usuario
        let desplazamiento1 = document.getElementById("desplazamiento").value;
        document.getElementById("resuelto").innerHTML= window.cipher.encode(desplazamiento1,menssage1); //Indicandole que escriba en el div el resultado del cifrar
        //return window.cipher.encode(desplazamiento1,menssage1)//Aqui estoy retornando el valor del texto codificado

    })
    const btnDescifrar = document.getElementById("descifrar"); //identificando el boton descifrar con una variable
    btnDescifrar.addEventListener("click", ()=>{ //Aqui se le agrega su funcion
        let menssage1 = document.getElementById("mensaje").value; 
        let desplazamiento1 = document.getElementById("desplazamiento").value;
        document.getElementById("resuelto").innerHTML= window.cipher.decode(desplazamiento1,menssage1);  //le indico que imprima en el div "resuelto" el mensaje descifrado
       // return window.cipher.decode(desplazamiento1,menssage1) //retorna el valor del texto descifrado
    })
}
    document.getElementById("Borrar").addEventListener("click", ()=> {
    document.getElementById("mensaje").value ="";
    document.getElementById("desplazamiento").value ="";
    document.getElementById("resuelto").value ="";
})