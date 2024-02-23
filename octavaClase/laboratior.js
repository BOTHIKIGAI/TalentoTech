/* 

Ejercico

Se debe hacer un programa en el cual la clase
principal empleado  

Clase Empleado 
    -> Atributos
        -> Id
        -> Nombre
        -> Apellido
        -> Tipo de documento
        -> Numero de documento
        -> Tipo de contrato
        -> Cargo
        -> Salario
        -> Horario
        -> Area
    -> Metodos
        -> 

Clase Supervisor -> Atributos
    -> Id
    -> PersonasCargo
    -> 

Clase Operario -> Atributos
    -> Id
    -> Tipo de equipo

 */

class Empleado
{   
    // Constructor
    constructor(id, nombre, apellido, tipoDocumento, numDocumento, tipContrato, salario, cargo)
    {
        this._id = id;
        this._nombre = nombre;
        this._apellido = apellido;
        this._tipoDocumento = tipoDocumento;
        this._numDocumento = numDocumento;
        this._tipoContrato = tipContrato;
        this._cargo = cargo;
        this._salario = salario;
    }

    // { Get and Set }

    // ID
    get getId()
    {
        return this._id; // Corregido aquí
    }

    set setId(id)
    {
        this._id = id;
    }

    // Nombre
    get getNombre()
    {
        return this._nombre; // Corregido aquí
    }

    set setNombre(nombre)
    {
        this._nombre = nombre;
    }

    // Apellido
    get getApellido()
    {
        return this._apellido; // Corregido aquí
    }

    set setApellido(apellido)
    {
        this._apellido = apellido;
    }

    // Tipo de documento
    get getTipoDocumento()
    {
        return this._tipoDocumento; // Corregido aquí
    }

    set setTipoDocumento(tipoDocumento)
    {
        this._tipoDocumento = tipoDocumento;
    }

    // Numero de documento
    get getNumDocumento()
    {
        return this._numDocumento; // Corregido aquí
    }

    set setNumDocumento(numDocumento)
    {
        this._numDocumento = numDocumento;
    }

    // Tipo de contrato
    get getTipContrato()
    {
        return this._tipoContrato; // Corregido aquí
    }

    set setTipContrato(tipContrato)
    {
        this._tipoContrato = tipContrato;
    }

    // Salario
    get getSalario()
    {
        return this._salario; // Corregido aquí
    }

    set setSalario(salario)
    {
        this._salario = salario;
    }

    // Cargo
    get getCargo()
    {
        return this._cargo; // Corregido aquí
    }

    set setCargo(cargo)
    {
        this._cargo = cargo;
    }
    
    // Metodo
    getInformation()
    {
        return `
        id: ${this._id} nombre: ${this._nombre} apellido: ${this._apellido}\n
        Tipo de documento: ${this._tipoDocumento} Num documento: ${this._numDocumento}\n
        Tipo de contrato: ${this._tipoContrato} Cargo: ${this._cargo}
        Salario: \$${this._salario}`;
    }
}

let empleado1 = new Empleado(1, "Juan", "Cajiao", "Cedula", 1000590144, "Indefinido", 1500000, "Desarrollador");
console.log(empleado1.getInformation());


// { Clase Supervisor }
class Supervisor extends Empleado
{
    constructor(id, nombre, apellido, tipoDocumento, numDocumento, tipContrato, salario, cargo, pCargo)
    {
        super(id, nombre, apellido, tipoDocumento, numDocumento, tipContrato, salario, cargo);
        this._pCargo = pCargo;
    }

    // Get and Set
    get getPCargo()
    {
        return this._pCargo;
    }

    set setPCargo(pCargo)
    {
        this._pCargo = pCargo;
    }

    // Constructor
    getInformation()
    {
        return `${super.getInformation()} Cargo: ${this.getPCargo}`
    }

}

let supervisor1 = new Supervisor(2, "Diego", "Boada", "Cedula", 1345890234, "Indefinido", 5000000, "Instructor", "Jede de Fabrica");
console.log(supervisor1.getInformation());