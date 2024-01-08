const app = require('./app');

async function main(){
    await app.listen(process.env.PORT_SERVER||4000);
    console.log(`Server on port ${process.env.PORT_SERVER||4000}`);
}
main();