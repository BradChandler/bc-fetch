const ACCEPTED_CODES = require("./common");

const tcPut = async (path, options) => {
  try {
    let res;
    let err = new Error();
    if (!options) {
      err = new Error("Options object required for put request.");
      throw err;
    }
    if (options) {
      err.message =
        options.method !== "PUT"
          ? `${err.message} Put method is required for put request.`
          : err.message;
      err.message = !options.body
        ? `${err.message} Body must be supplied to put request.`
        : err.message;
      err.message =
        typeof JSON.parse(options.body) !== "object" ||
        typeof options.body !== "string"
          ? `${err.message} Body must be a stringified object or array.`
          : err.message;
      if (err.message) throw err;
    }
    res = await fetch(path, options);
    if (ACCEPTED_CODES.includes(res.status)) {
      const data = await res.json();
      return Promise.resolve(data);
    }
    err = new Error(res.statusText);
    err.status = res.status;
    throw err;
  } catch (err) {
    return Promise.reject(err);
  }
};

export default tcPut;
