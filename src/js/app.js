import GameSavingLoader from './GameSavingLoader';

console.log('worked');
GameSavingLoader.load().then((data) => console.log(data));
