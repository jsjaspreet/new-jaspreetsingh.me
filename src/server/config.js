import s3 from 's3'

export const AWS_ACCESS_KEY_ID = process.env.AWS_ACCESS_KEY_ID
export const AWS_SECRET = process.env.AWS_SECRET

export const awsClient = s3.createClient({
  s3Options: {
    accessKeyId: AWS_ACCESS_KEY_ID,
    secretAccessKey: AWS_SECRET,
    region: 'us-west-2'
  }
})