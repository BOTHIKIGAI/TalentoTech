// { QUINTA PARTE }

/* class Moto extends Vehiculo
{
    constructor(id, marca, color, modelo, estado, tFreno, cilindraje)
    {
        super(id, marca, color, modelo, estado);
        this.tFreno = tFreno;
        this.cilindraje = cilindraje;
    }

    toString()
    {
        console.log(`Datos de la moto: ${this.marca} - ${this.color} - ${this.modelo}`);
    }

    cilindrajeMoto()
    {
        if (this.cilindraje <= 200)
        {
            console.log("La moto es de cilindraje bajo");
        }
        else if(this.cilindraje > 200 && this.cilindraje <= 300)
        {
            console.log("La moto es de cilindraje medio");            
        }
        else if(this.cilindraje > 300)
        {
            console.log("La moto es cilindraje alto");
        }
        else 
        {
            console.log("No existe clasificación para la moto");            
        }
    }
}

let Kawasaki = new Moto(1, "Kawasaki Japon", "Negro", "2020", "Nuevo", "Disco", 300);
console.log(Kawasaki);
Kawasaki.toString();
Kawasaki.cilindrajeMoto();

let Yahama = new Moto(1, "Yamaka tokyo", "White", "2023", "Nuevo", "Magneticos", 400);
console.log(Yahama);
Yahama.toString();
Yahama.cilindrajeMoto(); */

// {  SEXTA PARTE }

class Bus extends Vehiculo
{
    constructor(id, marca, color, modelo, estado, numPasajeros, tipoBus)
    {
        super(id, marca, color, modelo, estado);
        this.numPasajeros = numPasajeros;
        this.tipoBus = tipoBus;
    }

    nPasajeros()
    {
        if(this.numPasajeros == 0)
        {
            console.log("No tiene pasajeros");
        }
        else if(this.numPasajeros <= 10)
        {
            console.log("Tiene menos de 10 pasajeros");
        }
        else if(this.numPasajeros > 10 && this.numPasajeros <= 20)
        {
            console.log("Tiene mas de 10 y menos que 20 pasajeros");
        }
        else
        {
            console.log("Tiene mas de 20");
        }
    }
}

let BlueBird = new Bus(1,"BlueBird", "Rojo", "2021", "Nuevo", 20, "Transporte Publico");
console.log(BlueBird);
BlueBird.nPasajeros();