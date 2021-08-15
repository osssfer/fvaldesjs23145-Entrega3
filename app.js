
// Crear numero random
randomNumber = Math.floor(Math.random() * 10)
// Registro en la consola
console.log(' El numero random es '+randomNumber)

i=1

while(i >0){
    // Input Numero del jugagador
     userNumber = parseInt(prompt('Ingresa un numero entero entre 1 y 10' + ' [ APRETE 0 para salir]'))
     if (userNumber > 1 &&  userNumber<11){
  
    if (userNumber == 0){
        alert('saliste... Apreta f5 para reiniciar')
        break  
    }
    else if (userNumber == randomNumber){
        alert('✔ Ganaste.... que crack 👏')
        break
    }
    else if ( userNumber > randomNumber){
        alert('❌mmmm....Muy alto... intenta un numero menor 👇')
    }
    else {
        alert('❌mmmm...Muy bajo... intenta un numero mayor 👆')
    }

    }else{
        alert('Numero invalido😑...Igrese numero ENTERO ENTRE 1 y 10 😤')
} 
}
