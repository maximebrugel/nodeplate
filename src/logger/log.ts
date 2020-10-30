import winston from "../config/winston";

// Add a custom function to display multiple args as a single message (useful during debug)
winston.debug = (...vars: any) => winston.info(vars.join("\t"));

export default winston;
