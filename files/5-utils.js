const sayHi = (name) => {
  console.log(`Hello there ${name[0].toUpperCase() + name.slice(1)}`)
}

module.exports = sayHi