export const BACKEND_URI = import.meta.env.VITE_BACKEND_URL;

export const REGISTER_URI = BACKEND_URI + "/user/register";
export const LOGIN_URI = BACKEND_URI + "/user/login";

export const HEADER_JSON_CONFIG = {
  headers: {
    "Content-Type": "application/json",
  },
};

// Expected managed response
export const CATCH_ALL_SERVER_ERROR_MESSAGE =
  "Something went wrong while processing your request. Please try again later.";
