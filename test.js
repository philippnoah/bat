const Nightmare = require('nightmare')
const nightmare = Nightmare({ show: true, typeInterval: 30 })

nightmare
  .goto('https://www.messenger.com/t/100005576054730')
  .type('#email', 'philipp.eibl@outlook.com')
  .type('#pass', 'Styria18')
  .click('#loginbutton')
  .wait(5000)
  .type('body', 'hello, how are you Ray\u000d')
  .type('body', 'hello, how are you Ray\u000d')
  .type('body', 'hello, how are you Ray\u000d')
  .type('body', 'hello, how are you Ray\u000d')
  .type('body', 'hello, how are you Ray\u000d')
  .type('body', 'hello, how are you Ray\u000d')
  .type('body', 'hello, how are you Ray\u000d')
  .type('body', 'hello, how are you Ray\u000d')
  .type('body', 'hello, how are you Ray\u000d')
  .type('body', 'hello, how are you Ray\u000d')
  .type('body', 'hello, how are you Ray\u000d')
  .type('body', 'hello, how are you Ray\u000d')
  .type('body', 'hello, how are you Ray\u000d')
  .type('body', 'hello, how are you Ray\u000d')
  // .end()
  .then(console.log)
  .catch(error => {
    console.error('Search failed:', error)
  })
