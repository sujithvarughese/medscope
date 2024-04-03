import * as dotenv from "dotenv"

module.exports = {
  // use the variable if it's defined, otherwise use the fallback
  API_URL: process.env.API_URL || '',

};
/*
// eas doesn't load values from `.env`, so make sure they are loaded here
dotenv.config({
  path: [path.resolve(__dirname, '.env'), path.resolve(__dirname, '.env.local')],
})*/