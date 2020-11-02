import dev from "./environments/dev";

import prod from "./environments/prod";

export default process.env.NODE_ENV === "production" ? prod : dev;
