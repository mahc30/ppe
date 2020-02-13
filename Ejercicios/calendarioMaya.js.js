/*
HAAB
Año de 365 Días
19 Meses
18 Meses de 20 Días
El último Mes de 5
Nombres de los meses:
pop,no, zip, zotz, tzec, xul, yoxkin, mol, chen, yax, zac, ceh, macm, kankin, muan, pax, koyab, cumhu
Los días van de 0 a 19
TZOLKIN
Año de 365
13 Meses de 20 días c/u
Nombres de los meses:
imix, ik, akbal, kan, chicchan, cimi, manik, lamat, muluk, ok, chuen, eb, ben, ix, mem, cib, caban, eznab, canac, ahau, uayet
Van acompañados de un número
Primer día del primer año:
HAAB: 0. Pop 0
Tzolkin: 1. imix 0
Entrada:
HAAB
Número del día. Mes Año
10. pop 0
Salida:
Número NombreDelDía Año
1 imix 0
*/
  
var meses_haab = ["pop","no", "zip", "zotz", "tzec", "xul", "yoxkin"," mol"," chen"," yax"," zac"," ceh"," macm"," kankin"," muan"," pax"," koyab"," cumhu", "uayet"];
var dias_tzolkin = ["imix","ik","akbal","kan","chicchan"," cimi"," manik"," lamat"," muluk"," ok"," chuen"," eb"," ben"," ix"," mem"," cib"," caban"," eznab"," canac","ahau"];

var br = false;
var input = "0. pop 1";
var format_input = input.split(' ');
var dia = format_input[0].substring(0, format_input[0].length - 1);
var mes = format_input[1].trim(); 
var año = format_input[2].trim();
var lim;
var count = 0;
var day_count = 0;
//Run thru HAAB
console.log("HAAB:", input);
for(var i = 0; i <= año; i++){
    //Every Month
    for(var j = 0; j < 19; j++){
        //Every day
        //console.log("j: ", j)
        j === 18 ? lim = 5 : lim = 20;
        for(var k = 0; k < lim; k++){
           // console.log("dia: ", k, dia, "mes:", meses_haab[j], mes, "año: ", i,año)
          
          
           if(k == dia && meses_haab[j] == mes && i == año){
                br = true
                break;
            }
            
            count++;           
            
        }
        
        if(br){
            break;
        }
    }
    if(br){
      break;
    }
}


//Run thru TZOLKIN
 br = false;
var max_year = 5000;
var tz_count = 0;
var tz_day = 1;
for(var i = 0; i < max_year; i++){
    //Every Month
    for(var j = 1; j <= 13; j++){
        //Every Day
        for(var k = 0; k < 20; k++){
           if(tz_day >= 14){
                tz_day = 1;
            } 
            
            if(count === tz_count){
                console.log("Tzolkin: " + (tz_day) + " " + dias_tzolkin[k] + " " + i)
                br = true;
                break;
            }    
           
            
            tz_count++;
            tz_day++;
            
            
            

        }

        if(br){
            break;
        }
    }

    if(br){
        break;
    }
}