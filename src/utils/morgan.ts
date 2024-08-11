import morgan from "morgan";
import logger from "./logger";

const morganInstance = morgan("dev", {
  stream: {
    write: (str) => {
      logger.info(str);
    },
  },
});

export default morganInstance;
