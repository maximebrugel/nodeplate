import environnement from "./environnement";

const swaggerDefinition = {
    basePath: "/",
    host: `${environnement.API_URL}:${environnement.PORT}`,
    info: {
      description: "Nodeplate API documentation",
      title: "Nodeplate",
      version: environnement.VERSION
    },
    securityDefinitions: {
      bearerAuth: {
        in: "header",
        name: "Authorization",
        scheme: "bearer",
        type: "apiKey"
      }
    }
  },
  swaggerOptions = {
    apis: ["./src/routes/*.ts"],
    swaggerDefinition
  };

export default swaggerOptions;
