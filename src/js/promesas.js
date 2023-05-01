const heroes = {
    capi: {
        nombre: 'Capitan America',
        poder: 'Aguantar inyecciones sin morir'
    },
    iron: {
        nombre: 'Iroman',
        poder: 'Absurda cantidad de dinero'
    },
    spider: {
        nombre: 'Spiderman',
        poder: 'La mejor reaccion alergica a las picaduras de insectos'
    }
}

export const buscarHeroe = (id) => {
    const heroe = heroes[id];

    return new Promise((resolve, reject) => {

        if (heroe) {
            resolve(heroe);        
        } else {
            reject(`no existe un heroe con el id ${id}`);        
        }
    })


}