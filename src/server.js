//CommonJs => require (metodo antigo de importação)
//const http = require('http')

// ESModules => import/export ( metodo mais usado atualmente - necessário adcionar o type: "module") para usar o padrão ES.

import http from "http"

const server = http.createServer((req , res) =>{
    return res.end('Hello World')
})

server.listen(3333)