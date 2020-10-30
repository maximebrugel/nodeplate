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
   * SCRAM authentication mechanism
   */
  MONGO_AUTH_MECANISM: "SCRAM-SHA-256",

  /**
   * Authentication collection where the login is stored
   */
  MONGO_AUTH_SOURCE: "test1",

  /**
   * MongoDB database Name
   */
  MONGO_DATABASE: "test1",

  /**
   * MongoDB database host (localhost or IP adress)
   */
  MONGO_HOST: "localhost",

  /**
   * MongoDB connection password
   */
  MONGO_PASSWORD: "test1password",

  /**
   * MongoDB database Port (mainly 27017)
   */
  MONGO_PORT: 28018,

  /**
   * MongoDB connection username
   */
  MONGO_USER: "test1user",

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
