import { fileLoader, mergeTypes } from "merge-graphql-schemas";
//fiileLoard busca todos arquivos com extensao graphql
import path from 'path';

//__dirname representa pasta onde esta arquivo, modules pasta a acessar, ** dentro de modules acesse qualquer pasta, *.gql dentro dessa pasta procure por tudo com extensao gql
const typesArray = fileLoader(path.join(__dirname, 'modules', '**', '*.gql'));
const typeDefs = mergeTypes(typesArray);
console.log(typeDefs);
export default typeDefs;