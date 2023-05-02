import { buscarHeroe, buscarHeroeAsync } from "./promesas";

const heroesIds = ['capi','iron','spider'];
const heroePromesas = heroesIds.map(buscarHeroe)

export const obtenerHeroesArr = async() => {

    // const heroesArr = [];

    // for (const id of heroesIds) {
    //     heroesArr.push(buscarHeroe(id));
    // }

    // return await Promise.all(heroesArr);

    return await Promise.all( heroesIds.map(buscarHeroe));
}

export const obtenerHeroeAwait = async(id) => {

    try {

        const heroe = await buscarHeroeAsync(id);
        return heroe;
        
    } catch (error) {
        console.log('CATCH!!');
        //throw error;
        return {
            nombre: 'Sin nombre',
            poder: 'Sin poder'
        }
    }

}

export const heroesCiclo = async() => {

    console.time('HeroesCiclo');

    // const heroes = await Promise.all(heroPromesas);
    // heroes.forEach( heroe => console.log(heroe));

    for await (const heroe of heroePromesas) {
        console.log(heroe)
    }

    console.timeEnd('HeroesCiclo');
}


export const heroeIfAwait = async(id) => {

    if ((await buscarHeroeAsync(id)).nombre === 'Iroman') {
        console.log('Es el mejor de todos');
    } else {
        console.log('Naaaa');
    }
}