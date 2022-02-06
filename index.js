//TODO: provide testing library for each of these
const tcGet = require("./lib/getFetch");
const tcPost = require("./lib/postFetch");
const tcPut = require("./lib/putFetch");
const tcDelete = require("./lib/deleteFetch");

module.exports = {
  tcGet,
  tcPost,
  tcPut,
  tcDelete,
};
