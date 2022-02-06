const ACCEPTED_CODES = require("./common");

const tcDelete = async (path, options) => {
  try {
    let res;
    let err = new Error();
    if (!options) {
      err = new Error("Options object required for delete request.");
      throw err;
    }
    if (options) {
      err.message =
        options.method !== "delete"
          ? `${err.message} Delete method is required for delete request.`
          : err.message;
      err.message = !options.body
        ? `${err.message} Body must be supplied to delete request.`
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

module.exports = tcDelete;
