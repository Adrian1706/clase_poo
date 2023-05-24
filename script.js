class lapiz{ /** El class es para crear una clase en la cual vamos a ingresar */ 
    color;
    tamaño
    #material;
    #mina;
    /** estos son los atributos del class en este caso lapiz */ 
    constructor({color="Amarillo", tamaño="9cm", material="Madera", mina="Carbon"}){ /** El constructor es el que construye todas las caracteristicas del class */ 
        this.color=color;
        this.tamaño=tamaño;
        this.#material=material;
        this.#mina=mina;
        /**el this se utiliza para adjudicar el atributo a la variable del constructor */ 
        /** el "#" hace que un atributo se vuelva privado */ 
    }
    get getMina(){ /** El get obtiene el valor */
        return this.#mina;
    }
    set setMina(p1){ /** el set modifica el valor*/
        this.#mina=p1;
    }
    static afilar(p1){ /** El statica hace referencia a un metodo que no pertenece a la clase como tal pero es necesaria */ 
        return `la mina de ${p1} ha sido afilada`;
    }
}
class boligrafo extends lapiz{ /** Este nuevo class se usa con el extends para poder decri que es una clase con herencia de otra*/
    constructor({mina="Metalica"}){ /**Este constructor comom viene por herencia se puede dejar vacio o se puede colocar un atributo en el cual se empieza a reemplazar */
        super({mina}); /** este super es para acceder al constructor de la clase padre */
    }
    static afilar(p1){ /** El statica hace referencia a un metodo que no pertenece a la clase como tal pero es necesaria */ 
        return `la mina de ${p1} no se puede afilar`;
    }
}

let obj = new boligrafo({});
obj.setMina="Aluminio" /**Se modifica el atributo mina*/
console.log(boligrafo.afilar(obj.getMina)); /**se imprime teniendo en cuenta la clase que se utilizara, el metodo */

/** let lapiz1 = new lapiz({material:"Diamante", mina:"Carbon"}); Con esto estamos construyendo la clase y modificando ciertos atributos
    lapiz1.setMina = "Tinta"  Asi se modifica el valor de uno de los atributos
    console.log(lapiz.afilar(lapiz1.getMina)) se imprime toda la class en la consola*/
