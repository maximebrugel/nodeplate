import dev from "./environnements/dev";

import prod from "./environnements/prod";

export default process.env.NODE_ENV === "production" ? prod : dev;
