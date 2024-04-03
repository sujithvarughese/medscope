const prod = {
  url: {
    API_URL: process.env.EXPO_PUBLIC_PROD_API
  }
};

const dev = {
  url: {
    API_URL: process.env.EXPO_PUBLIC_DEV_API
  }
};

export const config =
  process.env.NODE_ENV === "development" ? dev : prod;