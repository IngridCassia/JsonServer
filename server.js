const jsonServer = require('json-server');

const Server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

const port = process.env.PORT || 8080;

Server.use(middlewares);
Server.use(router);
Server.listen(port, () => {
    console.log(`JSON Server is running in ${port}`)
})
