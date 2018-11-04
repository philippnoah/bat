const Nightmare = require('nightmare')
const nightmare = Nightmare({ show: true, typeInterval: 30 })

nightmare
  .goto('https://www.messenger.com/')
  .type('#email', process.env.npm_config_username)
  .type('#pass', process.env.npm_config_password)
  .click('#loginbutton')
  .wait(5000)
  .type('body', "You're the best\u000d")
  // .end()
  .then(console.log)
  .catch(error => {
    console.error('Search failed:', error)
  })
