module.exports = {
  reactStrictMode: true,
  env: {
    GOOGLE_APPLICATION_CREDENTIALS: process.env.GOOGLE_APPLICATION_CREDENTIALS,
    LIMIT_OF_PLACES: process.env.LIMIT_OF_PLACES,
    FIREBASE_DATABASE_URL: process.env.FIREBASE_DATABASE_URL,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
}
