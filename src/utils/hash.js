import { genSaltSync, hashSync, compareSync } from "bcrypt";

const createHash = (password) => hashSync(password, genSaltSync(10));

const verifyHash = (reqPass, mongoPass) => compareSync(reqPass, mongoPass);

export { createHash, verifyHash };