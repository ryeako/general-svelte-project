import Home from './routes/Home.svelte';
import About from './routes/About.svelte';
import Treasure from './routes/ose/Treasure.svelte';

export default {
    '/': Home,
    '/about': About,
    '/ose/treasure': Treasure
};