const { app } = require('./app/index.js')

app.listen(app.get('port'), () => {
  console.log(`Listening on ${app.get('port')} port`)
})
