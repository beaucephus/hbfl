// Imports
const AWS = require('aws-sdk')

AWS.config.update({ region: 'us-east-2' })

// Declare local variables
// TODO: Create sns object
const topicName = 'hamster-topic'

createTopic(topicName)
.then(data => console.log(data))

function createTopic (topicName) {
  // TODO: Create params const

  return new Promise((resolve, reject) => {
    // TODO: Create topic
  })
}
