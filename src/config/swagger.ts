import environment from "./environment";

const swaggerDefinition = {
    basePath: "/",
    host: `${environment.API_URL}:${environment.PORT}`,
    info: {
      description: "Nodeplate API documentation",
      title: "Nodeplate",
      version: environment.VERSION
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
