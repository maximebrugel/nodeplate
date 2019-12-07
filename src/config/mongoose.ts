import mongoose from "mongoose";
import environnement from "./environnement";

const mongoUri = `mongodb://${environnement.MONGO_USER}:${environnement.MONGO_PASSWORD}@${environnement.MONGO_HOST}:${environnement.MONGO_PORT}
/${environnement.MONGO_DATABASE}?serverSelectionTimeoutMS=5000&connectTimeoutMS=10000&authSource=${environnement.MONGO_AUTH_SOURCE}&authMechanism=${environnement.MONGO_AUTH_MECANISM}`;

mongoose.set("useCreateIndex", true);
mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.on("error", () => {
  throw new Error(`unable to connect to database: ${mongoUri}`);
});
