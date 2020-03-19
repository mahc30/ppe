const message: string = 'hello world';
var entero: number = 23.54

class Valve {
    tag: string;
    conf: boolean;
    
    constructor(tag: string, conf: boolean) {
        this.tag = tag;
        this.conf = conf;
    }

    greet() {
        this.conf ? console.log("L") : console.log("R");
        return "Hello, " + this.tag;
    }
}

let valve = new Valve("Valve 1", true);
valve.greet();
