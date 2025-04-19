// Have doubled up here on learning use of the axios library
// so have separated the axios http requests into this module

import { BACKEND_URI } from "../constants/backendRequests";

import { CATCH_ALL_SERVER_ERROR_MESSAGE } from "../constants/backendRequests";

import axios from "axios";

// Configuration for all requests on instance
// could add default headers, etc.
export const axiosInstance = axios.create({
  baseURL: BACKEND_URI,
  timeout: 20000, // 20 seconds
});

/**
 * -------------- HTTP REQUESTS ----------------
 *
 * Axios requests have the following structure:
 * Success (200 codes):
 * - response.status - 200, 400, etc.
 * - response.data - the data sent from the backend using res.json
 * - response.request - the original request
 * - response.headers - the response header
 * - response.statusText
 * - response.config
 *
 * Error (not 200 codes):
 * - error.status
 * - error.response.data - the error data sent from the backend, usually a message
 * - error.statusText
 * - a lot of additional axios-specific error info
 *
 */

/** My backend responses are of the following form:
 * Success:
 * status: 200
 * {
 *   success: true,
 *   data: some_data,
 *   error: null
 * }
 * Managed Failure:
 * status 200:
 * {
 *   success: false,
 *   data: null,
 *   error: {
 *     managed: true,
 *     msg: a_meaningful_error_message where possible
 *   }
 * }
 * Unmanaged failure, app catch all with error status
 * status: not 200!
 * {
 *   success: false,
 *   data: null,
 *   error: {
 *     managed: false,
 *     msg: err.message // standard messages outside my control, e.g. "Not found" for no recognised endpoint
 *   }
 * }
 */

/**
 * Axios utility functions always output:
 * { success, data, msg }. data is the data or null, msg is null or the error msg
 */

// includes built in error handling
export const axiosGet = async (relativeUri) => {
  // returns JSON form

  try {
    // console.log("relativeUri", relativeUri);

    const response = await axiosInstance.get(relativeUri);

    let managedResponse;
    if (response.data.success) {
      // Successful responses
      managedResponse = {
        success: true,
        data: response.data.data,
        msg: null,
      };
    } else {
      // Managed failure
      managedResponse = {
        success: false,
        data: null,
        msg: response.data.error.msg, // null
      };
    }
    // console.log("axiosGet returning managedResponse", managedResponse);
    return managedResponse;
  } catch (error) {
    // Unmanaged failure responses
    console.log("AxiosError", error); // log message but hide from user

    const refinedErrorMessage = errorMessageHandling(error);

    const unmanagedResponse = {
      success: false,
      data: null,
      msg: refinedErrorMessage,
    };
    console.log("axiosPatch returning unmanagedResponse", unmanagedResponse);
    return unmanagedResponse;
  }
};

//
export const axiosPost = async (relativeUri, data) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  // axios stringifies the post data when we send Javascript objects
  try {
    const response = await axiosInstance.post(relativeUri, data, config);
    let managedResponse;
    if (response.data.success) {
      // Successful responses
      managedResponse = {
        success: true,
        data: response.data.data,
        msg: null,
      };
    } else {
      // Managed failure
      managedResponse = {
        success: false,
        data: null,
        msg: response.data.error.msg, // null
      };
    }
    // console.log("axiosPost returning managedResponse", managedResponse);
    return managedResponse;
  } catch (error) {
    // Unmanaged failure responses
    console.log("AxiosError", error); // log message but hide from user

    const refinedErrorMessage = errorMessageHandling(error);

    const unmanagedResponse = {
      success: false,
      data: null,
      msg: refinedErrorMessage,
    };
    console.log("axiosPatch returning unmanagedResponse", unmanagedResponse);
    return unmanagedResponse;
  }
};

// patch - partial updates
export const axiosPatch = async (relativeUri, data) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  // axios stringifies the patch data when we send Javascript objects
  try {
    const response = await axiosInstance.patch(relativeUri, data, config);
    let managedResponse;
    if (response.data.success) {
      // Successful responses
      managedResponse = {
        success: true,
        data: response.data.data,
        msg: null,
      };
    } else {
      // Managed failure
      managedResponse = {
        success: false,
        data: null,
        msg: response.data.error.msg, // null
      };
    }
    console.log("axiosPatch returning managedResponse", managedResponse);
    return managedResponse;
  } catch (error) {
    // Unmanaged failure responses
    console.log("AxiosError", error); // log message but hide from user

    const refinedErrorMessage = errorMessageHandling(error);

    const unmanagedResponse = {
      success: false,
      data: null,
      msg: refinedErrorMessage,
    };
    console.log("axiosPatch returning unmanagedResponse", unmanagedResponse);
    return unmanagedResponse;
  }
};

const errorMessageHandling = (error) => {
  if (error.status === 429) {
    // rate limit, retain this to provide a more friendly message
    // includes the time to rate limiting end for the ip
    return error.response.data.error.msg;
  } else {
    // catch all
    return CATCH_ALL_SERVER_ERROR_MESSAGE;
  }
};
