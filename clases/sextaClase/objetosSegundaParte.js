/* const vehiculo = 
{
    marca: "ferrari",
    color: "rojo",
    modelo: "2019",   
} */

class Vehiculo
{
    constructor(id, marca, color, modelo, estado)
    {
        this.id = id;
        this.marca = marca;
        this.color = color;
        this.modelo = modelo;
        this.estado = estado;
    }

    arrancar()
    {
        console.log("El carro arranco");
    }
}

// const ferrari = new Vehiculo(1, "Ferrari", "Rojo", "2024", "Nuevo");
// ferrari.arrancar();

class Camioneta extends Vehiculo
{
    constructor(id, marca, color, modelo, estado, pesoMax, pasajeros, tipoCombustible)
    {
        super(id, marca, color, modelo, estado);
        this.pesoMax = pesoMax;
        this.pasajeros = pasajeros;
        this.tipoCombustible = tipoCombustible;
    }

    combustible() 
    {
        if (this.tipoCombustible == true)
        {
            console.log("La camioneta trabaja con ACPM");
        }
        else
        {
            console.log("La camioneta no trabaja con gasolina");
        }
    }
}

// const Ford = new Camioneta(2, "Ford", "Azul Oscuro", "2024", "Usada", 250, 4, true);
// Ford.combustible();