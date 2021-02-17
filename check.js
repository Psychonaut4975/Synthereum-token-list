const Ajv = require('ajv').default;
const fs = require('fs');
const path = require('path');
const addFormats = require('ajv-formats').default;

const ajv = new Ajv();
addFormats(ajv);

const schemaPath = path.join(__dirname, "./schema.json");
const tokenListPath = path.join(__dirname, "./token-list.json");

const schema = JSON.parse(fs.readFileSync(schemaPath).toString());
const tokenList = JSON.parse(fs.readFileSync(tokenListPath).toString());

console.log(schema);

const validate = ajv.compile(schema);

const valid = validate(tokenList)
if (!valid) console.log(validate.errors);