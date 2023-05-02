import { buscarHeroe, buscarHeroeAsync } from "./promesas";

const heroesIds = ['capi','iron','spider'];

export const obtenerHeroesArr = async() => {

    // const heroesArr = [];

    // for (const id of heroesIds) {
    //     heroesArr.push(buscarHeroe(id));
    // }

    // return await Promise.all(heroesArr);

    return await Promise.all( heroesIds.map(buscarHeroe));
}