import "graphql-import-node"
import fastify from "fastify"
import {getGraphQLParameters, processRequest, renderGraphiQL, Request, sendResult, shouldRenderGraphiQL} from "graphql-helix"
import {schema} from "./schema"

async function main(){
    const server = fastify()
    server.route({
        method:["POST","GET"],
        url: "/graphql",
        handler: async (req, res)=>{
            const request: Request = {
                headers: req.headers,
                method: req.method,
                query: req.query,
                body: req.body
           }
           if(shouldRenderGraphiQL(req)){
            res.header("Content-Type", "text/html")
            res.send(
                renderGraphiQL({
                    endpoint: "/graphql"
                })
            )
            return
           }
           const {operationName, query, variables} = getGraphQLParameters(request)
           const result = await processRequest({
            request, schema, operationName, query, variables
           })
           sendResult(result, res.raw)
        }
    })
    server.listen({port:3000, host:"localhost"},()=>{
        console.log("Server is running on http://localhost:3000/graphql")
    })
}

main()
