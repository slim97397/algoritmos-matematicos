function suma() {
    alert("Algoritmo que realiza una suma entre dos valores ingresados.");

    let a = parseInt(prompt("Ingrese el primer valor"));
    let b = parseInt(prompt("Ingrese el segundo valor"));
    let s = a + b;

    alert("El resultado de la suma es: " + s);
}

function opBasicas() {
    alert("Operaciones básicas");

    let a = parseInt(prompt("Ingrese el primer valor"));
    let b = parseInt(prompt("Ingrese el segundo valor"));

    let s = a + b;
    let r = a - b;
    let m = a * b;
    let d = a / b;

    alert("El resultado de la suma es: " + s);
    alert("El resultado de la resta es: " + r);
    alert("El resultado de la multiplicación es: " + m);
    alert("El resultado de la división es: " + d);
}

function cuadrado() {
    alert("Operaciones cuadradas");

    let a = parseInt(prompt("Ingrese el valor"));
    let b = parseInt(prompt("Ingrese el valor al elevar"));

    let s = a ** b;

    alert("El resultado al elevar al cuadrado es: " + s);
}

function Atriangulo() {
    alert("Operaciones área de un triángulo");

    let altura = parseInt(prompt("Ingrese el valor de la altura"));
    let base = parseInt(prompt("Ingrese el valor de la base"));

    let area = (altura * base) / 2;

    alert("El área del triángulo es: " + area);
}

function Conversion() {
    alert("Operaciones de conversión");

    let metros = parseInt(prompt("Ingrese los metros a convertir"));

    let cm = metros * 100;
    let km = metros / 1000;
    let mm = metros * 1000;

    alert("El resultado de la conversión a centímetros es: " + cm + " cm");
    alert("El resultado de la conversión a kilómetros es: " + km + " km");
    alert("El resultado de la conversión a milímetros es: " + mm + " mm");
}

function Mayor2N() {
    alert("Operaciones Mayor entre dos números");

    let m = parseInt(prompt("Ingrese el primer valor"));
    let c = parseInt(prompt("Ingrese el segundo valor"));

    if (m > c) {
        alert("El número mayor es: " + m);
    } else if (c > m) {
        alert("El número mayor es: " + c);
    } else {
        alert("Los números son iguales: " + m);
    }
}

function Menor3N() {
    alert("Operaciones Menor de 3 números");

    let m = parseInt(prompt("Ingrese el primer valor"));
    let c = parseInt(prompt("Ingrese el segundo valor"));
    let x = parseInt(prompt("Ingrese el tercer valor"));

    let menor = Math.min(m, c, x);

    if (m === c && c === x) {
        alert("Los tres números son iguales: " + m);
    } else {
        alert("El número menor es: " + menor);
    }
}


function Promedio() {
    alert("Operaciones promedio");

    let total = 0;

    for (let i = 1; i <= 7; i++) {
        total += parseInt(prompt("Ingrese la nota " + i));
    }

    let promedio = total / 7;

    if (promedio >= 6) {
        alert("El estudiante aprobó con un promedio de: " + promedio);
    } else {
        alert("El estudiante reprobó con un promedio de: " + promedio);
    }
}

function Fruver() {
    alert("Operaciones fruver");

    const PRECIO_MANZANA = 100;

    let kilos = parseInt(prompt("Ingrese la cantidad de kilos de manzanas a comprar"));

    let totalSinDescuento = kilos * PRECIO_MANZANA;
    let descuento = totalSinDescuento * 0.1;
    let totalConDescuento = totalSinDescuento - descuento;

    alert("Usted compró " + kilos + " kilos de manzanas a $" + PRECIO_MANZANA + " por kilo.");
    alert("El total sin descuento es: $" + totalSinDescuento);
    alert("Con el descuento del 10%, el total es: $" + totalConDescuento);
}

function SSVL() {
    alert("Operaciones salario");

    const SALARIO_HORA_NORMAL = 12500;
    const SALARIO_HORA_EXTRA = 18000;

    let horasTrabajadas = parseInt(prompt("Ingrese las horas trabajadas:"));

    let salarioNormal = Math.min(40, horasTrabajadas) * SALARIO_HORA_NORMAL;
    let horasExtras = Math.max(0, horasTrabajadas - 40);
    let salarioExtra = horasExtras * SALARIO_HORA_EXTRA;

    let salarioTotal = salarioNormal + salarioExtra;

    alert("El salario semanal es: $" + salarioTotal);
}
