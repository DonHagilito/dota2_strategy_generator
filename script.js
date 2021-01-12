const strategies = ['rush Midas', 'buy Dagon', 'support', 'rush Blink', 'hard carry', 'roam'];
const heroes = ['Lina', 'Ogre Magi', 'Sven'];
const places = ['top lane', 'mid lane', 'bottom lane', 'woods'];

const getRandomElement = arr =>{
    const randomIndex = Math.floor(Math.random()*arr.length);
    return arr[randomIndex];
}

console.log(`You should ${getRandomElement(strategies)} with ${getRandomElement(heroes)} ${getRandomElement(places)}.`);
