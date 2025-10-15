// Cuando utilizamos switch-case?
// Cuando tenemos muchos casos posibles 

// Queremos saber a que "gen" pertenecemos

let anioNacimiento = 1993

switch(true){
    case anioNacimiento >= 1920 && anioNacimiento <= 1945:
        console.log("Generacion silenciosa")
    break;
    case anioNacimiento >= 1946 && anioNacimiento <= 1964:
        console.log("Baby boomer")
    break;
    case anioNacimiento >= 1965 && anioNacimiento <= 1979:
        console.log("Generacion X")
    break;
    case anioNacimiento >= 1980 && anioNacimiento <= 2000:
        console.log("Generacion Y")
    break;
    case anioNacimiento >= 2001 && anioNacimiento <= 2010:
        console.log("Generacion z")
    break;
    default:
        console.log("Sos de otra generacion")
    break;
}