
// Numero "Random" que no es random 😅 aun no aprendo a crear uno bien.
randomNumber = 7
// Input Numero del jugagador
let userNumber = parseInt(prompt('Ingresa un numero entero entre 1 y 10' + ' [ APRETE 0 para salir]'))


while(userNumber > 0 && userNumber < 11){
    let userNumber = parseInt(prompt('Ingresa un numero entero entre 1 y 10' + ' [ APRETE 0 para salir]'))
    if (userNumber == 0){
        alert('saliste... Apreta f5 para reiniciar')
        break  
    }
    else if (userNumber == randomNumber){
        alert('😲 Ganaste.... que crack')
        break
    }
    else if ( userNumber > randomNumber){
        alert('mmmm....Muy alto... intenta un numero menor 👇')
    }
    else if( userNumber < randomNumber){
        alert('mmmm...Muy bajo... intenta un numero mayor ')
    }
    
}
