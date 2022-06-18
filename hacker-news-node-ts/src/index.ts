import "graphql-import-node"
import fastify from "fastify"


async function main(){
    const server = fastify()
    server.get("/", (req, res)=>{
        res.send({test: true})
    })
    server.listen(3000, "localhost", ()=>{
        console.log("Server is running on http://localhost:3000")
    })
}

main()
