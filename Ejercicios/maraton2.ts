const message: string = 'hello world';
var entero: number = 23.54

class Valve {
    tag: string;
    left: string;
    right: string;
    conf: boolean = false;
    water: number = 0;
    is_input: boolean = false;

    constructor(tag: string, left: string, right: string) {
        this.tag = tag;
        this.left = left;
        this.right = right;
    }

    greet() {
        this.conf ? console.log("L") : console.log("R");
        return "Hello, " + this.tag;
    }

    fill(amount: number) {
        this.water += amount;
    }

    empty(amount: number) {
        this.water -= amount;
    }
}

class Exit {
    tag: string;
    water: number = 0;

    constructor(tag: string) {
        this.tag = tag;
    }

    fill(amount: number) {
        this.water += amount;
    }
}

/*
Ejemplo de Entrada
3 3 7
200 40 73
W1 V1
W2 V2
W3 V3
S1
S2
S3
V1 S1 V4
V2 V4 V5
V3 V5 V7
V4 S1 V6
V5 V6 V7
V6 S1 V7
V7 S2 S3
R L R L R L R
L R L R L R L
*
*/
let entrada = ["3 3 7", "200 40 73",
    "W1 V1", "W2 V2", "W3 V3",
    "S1", "S2", "S3",
    "V1 S1 V4", "V2 V4 V5", "V3 V5 V7", "V4 S1 V6",
    "V5 V6 V7", "V6 S1 V7", "V7 S2 S3",
    "R L R L R L R",
    "L R L R L R L",
    "*"];

let input: string;
let buffer: string[] = [];
let n_in: number;
let n_out: number;
let n_valves: number;
let gallons: number[] = [];
let entries: string[] = [];
let exits: Exit[] = [];
let valves: Valve[] = [];
let configs: boolean[][] = [[]];

//Primeros datos para hacer ciclos para guardar el resto de configuraciones más bonito c:
input = entrada[0];
buffer = input.split(" ");

n_in = parseInt(buffer[0]);
n_out = parseInt(buffer[1]);
n_valves = parseInt(buffer[2]);

input = entrada[1];
buffer = input.split(" ");

buffer.forEach(e => {
    gallons.push(parseInt(e));
});


let line: number = 1;

//Leer entradas

for (var i = 0; i < n_in; i++) {
    line++;
    input = entrada[line];
    buffer = input.split(" ");
    entries.push(buffer[1]);
}

//Leer salidas
for (var i = 0; i < n_out; i++) {
    line++;
    input = entrada[line];
    let exit: Exit = new Exit(input);
    exits.push(exit);
}

//Arreglo de valvulas
for (var i = 0; i < n_valves; i++) {
    line++;
    input = entrada[line];
    buffer = input.split(" ");

    let valve = new Valve(buffer[0], buffer[1], buffer[2]);
    valves.push(valve);

    if (entries.indexOf(valves[i].tag) > -1) {
        valves[i].is_input = true;
    }
}

let row: number = 0;

while (input != "*") {
    line++;
    input = entrada[line];
    buffer = input.split(" ");
    //R = true, L = False
    for (var i = 0; i < n_valves; i++) {
        buffer[i] === "R" ? configs[row].push(true) : configs[row].push(false);
    }

    configs.push([]);
    row++;
}

//Para probar que se leyeron bien los datos
/* ***********************************************************
console.log("%cNumero de Entradas", "color:red", n_in);
console.log("%cNumero de Salidas", "color:green", n_out);
console.log("%cNumero de Valvulas", "color:blue", n_valves);

for (var i = 0; i < entries.length; i++){
    console.log("%cEntradas", "color:red", entries[i]);
}

for (var i = 0; i < exits.length; i++){
    console.log("%cSalidas", "color:green", exits[i]);
}

for (var i = 0; i < entries.length; i++){
    console.log("%cValvulas", "color:purple", valves[i].tag);
}

for (var i = 0; i < configs.length - 2; i++){
    console.log("%cConfiguracion", "font-weigth: italic; color: red",i);
    for (var j = 0; j < n_valves; j++){
        configs[i][j] ? console.log(valves[j].tag, configs[i][j]) : console.log(valves[j].tag, configs[i][j]);
    }
}
************************************************************* */

//Correr diferentes sistemas
let runSystem = (valves: Valve[], config: boolean[]) => {

    //Final Config
    for (var i = 0; i < config.length; i++) {
        valves[i].conf = config[i];
    }

    //TODO apuntar cada valvula a la siguiente
}

let transfer = (valve1: Valve, valve2: Valve) => {
    let amount = valve1.water;
    valve2.fill(amount);
    valve1.empty(amount);
}

runSystem(valves, configs[1]);
