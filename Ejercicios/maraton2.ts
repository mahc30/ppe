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
2 4 5
100 200
Entr1 Valv1
Entr2 Valv2
Sal1
Sal2
Sal3
Sal4
Valv1 Valv3 Valv4
Valv2 Valv4 Valv5
Valv3 Sal1 Sal2
Valv4 Sal2 Sal3
Valv5 Sal3 Sal4
R L R L R
L L L R L
L R L R L
*
9999 9999 9999
*/
let raw_input: string[] = ["3 3 7", "200 40 73",
    "W1 V1", "W2 V2", "W3 V3",
    "S1", "S2", "S3",
    "V1 S1 V4", "V2 V4 V5", "V3 V5 V7", "V4 S1 V6",
    "V5 V6 V7", "V6 S1 V7", "V7 S2 S3",
    "R L R L R L R",
    "L R L R L R L",
    "*",
    "2 4 5", "100 200",
    "Entr1 Valv1", "Entr2 Valv2",
    "Sal1", "Sal2", "Sal3", "Sal4",
    "Valv1 Valv3 Valv4",
    "Valv2 Valv4 Valv5",
    "Valv3 Sal1 Sal2",
    "Valv4 Sal2 Sal3",
    "Valv5 Sal3 Sal4",
    "R L R L R",
    "L L L R L",
    "L R L R L",
    "*",
    "9999 9999 9999"
];

let buffer: string[] = [];
let entrada: string[] = [];
let raw_lane: number = 0;

for (var conjunto: number = 0; conjunto < 4; conjunto++) {

    let input: string;
    let n_in: number;
    let n_out: number;
    let n_valves: number;
    let gallons: number[] = [];
    let entries: string[] = [];
    let exits: Exit[] = [];
    let valves: Valve[] = [];
    let configs: boolean[][] = [];


    //Guardar Conjunto
    for (var i = 0; true; i++) {
        entrada.push(raw_input[raw_lane]);
        raw_lane++;

        if (entrada[i] === "*" || entrada[i] === "9999 9999 9999")
            break;
    }

    if (entrada[0] === "9999 9999 9999") {
        break;
    }

    //Trabajo con este conjunto
    console.log("Sistema de Irrigación # ", conjunto + 1);

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
        configs.push([]);

        //R = true, L = False
        for (var i = 0; i < n_valves; i++) {
            buffer[i] === "R" ? configs[row].push(true) : configs[row].push(false);
        }

        //console.log(input);
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
    let runConfig = (valves: Valve[], config: boolean[]) => {

        //Config sequence
        for (var i = 0; i < n_valves; i++) {
            valves[i].conf = config[i];
            //console.log(config[i]);
        }

        let parent_valve: number = 0;
        //Para Cada Valvula
        for (var i = 0; i < n_valves; i++) {
            let current: any;

            //Si es una entrada
            if (isInput(valves[i])) {
                current = valves[i];
                current.water = gallons[parent_valve];
                parent_valve++;

                //console.log("Parent Valve found", valves[i].tag);
                //console.log("Current:", current);
                //Mientras no sea una salida
                while (!(current instanceof Exit)) {
                    //Busco la siguiente
                    let next_position: number;

                    if (current.conf) //Right
                    {
                        next_position = findValve(current.right);

                        //Ver si la siguiente posición es Valvula o Salida
                        if (next_position != -1) {
                            //Es Valvula
                            transfer(current, valves[next_position]);
                            current = valves[next_position];

                        } else {
                            //Es salida
                            next_position = findExit(current.right);
                            transfer(current, exits[next_position]);

                            current = exits[next_position];

                            //console.log("Exit pos:", next_position);
                            //console.log("Exit Found:", current);
                            break;
                        }
                    }
                    else //Left
                    {
                        //console.log("Left");

                        next_position = findValve(current.left);

                        if (next_position != -1) {
                            //Es Valvula
                            transfer(current, valves[next_position]);
                            current = valves[findValve(current.left)];
                        } else {
                            //Es salida
                            next_position = findExit(current.left);
                            transfer(current, exits[next_position]);

                            current = exits[next_position];

                            //console.log("Exit Found:", current);
                            break;
                        }
                    }

                    //console.log("Current:", current);
                }
            }
        }

        for (var i = 0; i < exits.length; i++) {
            console.log("Salida # ", i + 1, "flujo ", exits[i].water);
            exits[i].water = 0;
        }


    }

    let findValve = (tag: string) => {
        let compare = (valve: Valve) => valve.tag === tag;
        return valves.findIndex(compare);
    }

    let findExit = (tag: string) => {
        let compare = (exit: Exit) => exit.tag === tag;
        return exits.findIndex(compare);
    }

    let transfer = (valve1: Valve, valve2: any) => {
        let amount = valve1.water;
        valve2.fill(amount);
        valve1.empty(amount);
    }

    let isInput = (valve: Valve) => {
        return entries.indexOf(valve.tag) > -1;
    }

    let nextIsExit = (valve: Valve) => {

        let compare;

        if (valve.conf) //Right
        {
            compare = (exit: Exit) => exit.tag === valve.right;
            console.log("Next Going Right")

        }
        else //Left
        {
            compare = (exit: Exit) => exit.tag === valve.left;
            console.log("Next Going left")
        }

        return exits.find(compare);
    }

    for (var i = 0; i < configs.length - 1; i++) {
        console.log("Configuración de válvulas # ", i + 1);
        runConfig(valves, configs[i]);
    }

    entrada = [];
}
