import {serve} from "std/http/server.ts"
// import {graphql} from "./api.js"

serve(req=>{
    return new Response('Hello World')
})