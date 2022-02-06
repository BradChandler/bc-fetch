const ACCEPTED_CODES = require("./common");

const tcGet = async (path, options) => {
  try {
    let res;
    let err;
    if (options) {
      res = await fetch(path, options);
    } else {
      res = await fetch(path);
    }
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

module.exports = tcGet;
