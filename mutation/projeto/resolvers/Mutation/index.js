const { usuarios } = require("../../data/db");
const usuario = require("./usuario");
const perfil = require("./usuario");

module.export = {
    ...usuario,
    ...perfil, 
}
