const AWS = require('aws-sdk')

AWS.config.update({ region: 'us-east-2' })

const sns = new AWS.SNS()
const TOPIC_ARN = 'arn:aws:sns:us-east-2:320742549300:hamster-topic'

function publish (msg) {
  const params = {
    Message: msg,
    TopicArn: TOPIC_ARN
  }

  return new Promise((resolve, reject) => {
    sns.publish(params, (err, data) => {
      if (err) reject(err)
      else resolve(data)
    })
  })
}

module.exports = { publish }
