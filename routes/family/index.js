"use strict";

module.exports = async function (fastify, opts) {
  fastify.get("/", async function (request, reply) {
    return {
      spouse: "Chani",
      kids: ["Eliyahu", "Yosef", "Asher Yitzchok", "Moshe Noach", "Shmuel Dan"],
    };
  });
};
