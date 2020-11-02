import mongoose from "mongoose";
import environment from "./environment";

const mongoUri = `mongodb://${environment.MONGO_USER}:${environment.MONGO_PASSWORD}@${environment.MONGO_HOST}:${environment.MONGO_PORT}
/${environment.MONGO_DATABASE}?serverSelectionTimeoutMS=5000&connectTimeoutMS=10000&authSource=${environment.MONGO_AUTH_SOURCE}&authMechanism=${environment.MONGO_AUTH_MECANISM}`;

mongoose.set("useCreateIndex", true);
mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.on("error", () => {
  throw new Error(`unable to connect to database: ${mongoUri}`);
});
