const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();
const port = 3000

router.get('/', ctx =>{
    ctx.status = 200
    ctx.body = '<h1>WELCOME TO INDEX PAGE!</h1>'
})

router.get('/about', ctx =>{
    ctx.status = 200
    ctx.body = '<h1>WELCOME TO ABOUT PAGE!</h1>'
})

router.get('/contact', ctx =>{
    ctx.status = 200
    ctx.body = '<h1>WELCOME TO CONTACT PAGE!</h1>'
})

app.use(router.routes())

app.listen(port, () =>{
    console.log(`Server initialized in port ${port}`)
})