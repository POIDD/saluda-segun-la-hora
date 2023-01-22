//el usuario ingresa la hora 
//el sistema le saluda de acuerdo a las siguientes condiciones 
//hora de 6 a 12: buenos dias 
//hora de 12 a 18 : buenas tardes 
// resto de horas bubenas noches 


let hora = prompt ( "🕡ingresa la hora por favor ")
if ( hora >=6 && hora<=12){
    document.write("<h1> 🙌Buenos dias! </h1>")
}
else if(hora>=13 && hora<=18){
    document.write("<h1>👋buenas tardes!</h1>")
}
else {
    document.write( "<h1> 🌕buenas noches!</h1>")
}
