// import mongoose from "mongoose";
import throng from "throng";
import debug from "debug";
import app from "./app";
import { MONGO, PORT } from "./config";
import { connect } from "mongoose";

const log = debug("server:main");

throng({
  lifetime: Infinity,
  count: 1,
  worker: async () => {
    connect(
      MONGO,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
      },
      (error) => {
        console.clear();
        if (error) {
          log(error);
          process.exit(1);
        }
        log(`Mongo DB Connected`);
        app.listen(PORT, () => {
          log(`Server is running at localhost:${PORT}`);
        });
      }
    );
  },
});
