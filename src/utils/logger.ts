import path from "path";
import { createLogger, format, transports } from "winston";
const { combine, timestamp, colorize, printf, align } = format;
import moment from "moment";

const myFormat = printf((info) => {
  if (info.stack) {
    return `[${[info.timestamp]}] [${info.level}] : ${info.message} : ${
      info.stack
    }`;
  }
  return `[${info.timestamp}] [${info.level}]: ${info.message}`;
});

const logger = createLogger({
  level: "info",
  format: combine(
    timestamp({
      format: "YY-MM-DD HH:mm:ss",
    }),
    myFormat
  ),
  transports: [
    new transports.File({
      filename: `storage/logs/error/${moment().format("MMM-DD-YYYY")}.log`,
      level: "error",
      format: combine(
        timestamp({
          format: "YY-MM-DD HH:mm:ss",
        }),
        align(),
        printf((info) => `${info.level}: ${[info.timestamp]}: ${info.stack}`)
      ),
    }),
    new transports.File({
      filename: `storage/logs/info/${moment().format("MMM-DD-YYYY")}.log`,
      level: "info",
      format: combine(
        timestamp({
          format: "YY-MM-DD HH:mm:ss",
        }),
        align(),
        printf((info) => `${info.level}: ${[info.timestamp]}: ${info.message}`)
      ),
    }),

    new transports.Console({
      format: combine(colorize({ all: true }), myFormat),
    }),
  ],
});

export default logger;
