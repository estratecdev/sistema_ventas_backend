const app = require('./app');

const PORT = process.env.PORT_SERVER || 4000;

async function main() {
    await app.listen(PORT, '0.0.0.0', () => {
        console.log(`Server is running on http://127.0.0.1:${PORT}`);
    });
}

main();