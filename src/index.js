//import { buscarHeroe, buscarHeroeAsync } from './js/promesas';
import { obtenerHeroesArr } from './js/await';
import './styles.css';
//import { promesaLenta, promesaMedia, promesaRapida } from "./js/promesas";



// promesaLenta.then(console.log);
// promesaMedia.then(console.log);
// promesaRapida.then(console.log);

// Promise.race([promesaLenta, promesaMedia, promesaRapida])
//     .then(console.log)
//     .catch(console.warn)

// buscarHeroe('capi').then(heroe => console.log(heroe))
//     .catch(console.warn);

// buscarHeroeAsync('iron2').then(heroe => console.log(heroe))
//     .catch(console.warn);

//const heroes = obtenerHeroesArr();
//console.log(heroes);


console.time('await');

obtenerHeroesArr().then(heroes => {
    console.log(heroes);

    console.timeEnd('await');
});