// { Segunda parte laboratorio }

// Clase Animal
class Animal {
    // Constructor
    constructor(id, nombre, color){
        this._id = id;
        this._nombre = nombre;
        this._color = color;
    }

    // Get
    get getId(){
        return this._id;
    }
    get getNombre(){
        return this._nombre;
    }
    get getColor(){
        return this._color;
    }

    // Set
    set setId(id){
        this._id = id;
    }
    set setNombre(nombre){
        this._nombre = nombre;
    }
    set setColor(color){
        this._color = color;
    }
}

// Clase Perro hereda de Animal
class Perro extends Animal {
    // Constructor
    constructor(id, nombre, color,raza ,sexo){
        super(id, nombre, color);
        this._raza = raza;
        this._sexo = sexo;
    }

    // Get
    get getRaza(){
        return this._raza;
    }
    get getSexo(){
        return this._sexo;
    }

    // Set
    set setRaza(raza){
        this._raza=raza;
    }
    set setSexo(sexo){
        this._sexo=sexo;
    }
}