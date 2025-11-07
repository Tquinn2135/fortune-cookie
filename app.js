
const fortunes = require('./fortunes.json')

const getFortune = () => {
    const randomFortune = Math.floor(Math.random() * fortunes.length)
    return fortunes[randomFortune]
}

module.exports = {
    getFortune
}

console.log(getFortune())