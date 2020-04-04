    var palabras = ["Casco", "Carra", "Gitana"];

    let firstCharIsEqual = (str1, str2) => {
        var char1 = str1.charAt(0); //Get char

        var char2 = str2.charAt(0);

        if (char1 === char2) { return true } return false;
    }

    let firstCharIsInOrder = (str1, str2) => {
        var char1 = str1.charCodeAt(0); //Parse to Ascii value

        var char2 = str2.charCodeAt(0);

        if (char1 <= char2) { return true } return false;
    }

    let stringIsBigger = (str1, str2) => {
        var char1 = str1.charCodeAt(0); //Parse to Ascii value

        var char2 = str2.charCodeAt(0);

        var i = 0;
        while (char1 === char2) {
            i++;

            char1 = str1.charCodeAt(i);
            char2 = str2.charCodeAt(i);

            console.log("char1: ", char1, "char2: ", char2);
        }

        console.log("char1: ", char1, "char2: ", char2);

        if (char1 > char2) { return true } return false;
    }

    //Check for left
    if (firstCharIsEqual(palabras[0], palabras[1])) {
        document.write("La palabra de la izquierda y la del centro empiezan con el mismo caracter");

        if (stringIsBigger(palabras[0], palabras[1])) {
            document.write("La palabra de la izquierda es mayor que la del centro");
        } else {
            document.write("La palabra del centro es mayor que la de la izquierda");
            //Check for Right
            if (firstCharIsEqual(palabras[1], palabras[2])) {
                if (stringIsBigger(palabras[1], palabras[2])) {
                    document.write("La palabra del centro es mayor que la de la derecha");
                }
            } else if (firstCharIsInOrder(palabras[1], palabras[2])) {
                document.write("La palabra del centro es menor que la derecha");
                document.write("La palabra del centro está entre las dos otras palabras")
            }
        }

    } else if (firstCharIsInOrder(palabras[0], palabras[1])) {
        document.write("La palabra de la izquierda es menor que la del centro");
        //Check for Right
        if (firstCharIsEqual(palabras[1], palabras[2])) {
            if (stringIsBigger(palabras[1], palabras[2])) {
                document.write("La palabra del centro es mayor que la de la derecha");
            }
        } else if (firstCharIsInOrder(palabras[1], palabras[2])) {
            document.write("La palabra del centro es menor que la derecha");
            document.write("La palabra del centro está entre las dos otras palabras")
        }
    } else {
        //Check for Right
        if (firstCharIsEqual(palabras[1], palabras[2])) {
            if (stringIsBigger(palabras[1], palabras[2])) {
                document.write("La palabra del centro es mayor que la de la derecha");
            }
        } else if (firstCharIsInOrder(palabras[1], palabras[2])) {
            document.write("La palabra del centro es menor que la derecha");
            document.write("La palabra del centro está entre las dos otras palabras")
        }
    }
