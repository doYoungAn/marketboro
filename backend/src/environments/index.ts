export default {
  mongodb: {
    user: process.env.MONGODB_USER,
    password: process.env.MONGODB_PASSWORD,
    url: process.env.MONGODB_URL,
    port: parseInt(process.env.MONGODB_PORT as string)
  }
}
