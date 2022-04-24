var dbHost = process.env.dbHost || "localhost";
module.exports = {
  name: "greenmedia",
  title: "greenmedia",
  commands: {
    package:
      "electron-packager electron.js green media --electronVersion=2.0.12 --overwrite --icon=/public/images/logo/logo.png --prune=true --out=release",
    build: ""
  },
  http: {
    host: "localhost",
    port: 8000
  },
  author: "Green Media",
  version: "2.0.0",
  db: {
    connectionUri: "mongodb+srv://ecowebsite:eco987gnm@cluster0.13oxi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    params: {},
    collections: ["moment", "user", "feeling", "ask"]
  }
};
