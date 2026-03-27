const { dbConnection } = require('./config/db')
const app  = require('./app')
const PORT = 3000;

dbConnection();

app.listen(PORT, () => console.log(`Server started on port http://localhost:${PORT}`));

