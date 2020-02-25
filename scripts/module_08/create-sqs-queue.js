// Imports
const AWS = require('aws-sdk')

AWS.config.update({ region: 'us-east-2' })

// Declare local variables
// TODO: Create sqs object
const queueName = 'hamster-race-results'

createQueue(queueName)
.then(data => console.log(data))

function createQueue (queueName) {
  // TODO: Create params const for creating queue

  return new Promise((resolve, reject) => {
    sqs.createQueue(params, (err, data) => {
      if (err) reject(err)
      else resolve(data)
    })
  })
}
