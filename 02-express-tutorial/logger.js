const options = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  timeZone: 'Europe/Amsterdam'
}


const logger = (req, res, next) => {
  const user = req.user
  const method = req.method
  const url = req.url
  const time = new Date().toLocaleDateString('en-GB', options)
  console.log(method, url, time, user)
  next()
}
  
module.exports = logger