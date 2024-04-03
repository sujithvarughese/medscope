import { PROD_API, DEV_API } from '@env'

const prod = {
  url: {
    API_URL: PROD_API
  }
};

const dev = {
  url: {
    API_URL: DEV_API
  }
};

export const config =
  process.env.NODE_ENV === "development" ? dev : prod;