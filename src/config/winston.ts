import environnement from "./environnement";
import winston from "winston";

const myMessage = winston.format.printf(
    info => `${info.timestamp} ${info.level}: ${info.message}`
  ),
  logger = winston.createLogger({
    exceptionHandlers: [
      new winston.transports.File({
        filename: `${environnement.LOG_ERROR_PATH}`
      })
    ],
    format: winston.format.combine(
      winston.format.errors({ stack: true }),
      winston.format.align(),
      winston.format.timestamp(),
      myMessage
    ),
    level: "info",
    transports: [
      //
      // - Write to all logs with level `info` and below to `combined.log`
      // - Write all logs error (and below) to `error.log`.
      //
      new winston.transports.File({
        filename: `${environnement.LOG_ERROR_PATH}`,
        level: "error"
      }),
      new winston.transports.File({
        filename: `${environnement.LOG_COMBINED_PATH}`
      })
    ]
  });

// If we're not in production then log to the `console` colorized
if (process.env.NODE_ENV !== "production") {
  logger.add(
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.align(),
        winston.format.colorize(),
        winston.format.timestamp(),
        myMessage
      ),
      handleExceptions: true,
      level: "info"
    })
  );
}

export default logger;
