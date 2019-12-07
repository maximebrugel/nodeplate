export default {
  /**
   * URL of the API : http://API_URL:PORT/...
   */
  API_URL: "localhost",

  /**
   * Logs localisation
   */
  LOG_COMBINED_PATH: "logs/combined.log",

  /**
   * Error logs localisation
   */
  LOG_ERROR_PATH: "logs/error.log",

  /**
   * SCRAM authentification mechanism
   */
  MONGO_AUTH_MECANISM: "SCRAM-SHA-256",

  /**
   * Authentification collection where the login is stored
   */
  MONGO_AUTH_SOURCE: "admin",

  /**
   * MongoDB database Name
   */
  MONGO_DATABASE: "Database",

  /**
   * MongoDB database host (localhost or IP adress)
   */
  MONGO_HOST: "localhost",

  /**
   * MongoDB connection password
   */
  MONGO_PASSWORD: "admin",

  /**
   * MongoDB database Port (mainly 27017)
   */
  MONGO_PORT: 27017,

  /**
   * MongoDB connection username
   */
  MONGO_USER: "admin",

  /**
   * Server port that you will find in the URL :
   * http://API_URL:PORT/...
   */
  PORT: 3005,

  /**
   * Application version
   */
  VERSION: "0.0.1"
};
