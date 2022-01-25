const app = require('./app');
const port = process.env.DB_PORT;

app.listen(port || 3000, () =>
  console.log(`Server is running on port ${port}`)
);