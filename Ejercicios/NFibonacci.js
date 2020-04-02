//numero -> N números que se van a imprimir
  
function fibonacci(numero)

    {

        let numeros=[0,1];

        for (let i = 2; i < numero; i++) {

            numeros[i] = numeros[i - 2] + numeros[i - 1];

        }

        return numeros;

    }

    document.write(fibonacci(10)); // 0,1,1,2,3,5,8,13,21,34
