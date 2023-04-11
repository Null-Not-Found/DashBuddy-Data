import express from 'express';
import mongoose from 'mongoose';
import routes from './Routes/routes';

const app = express();
const PORT = 4080; // Change this to your desired port

// Connect to MongoDB
mongoose.connect('mongodb://localhost:4001/DashBuddy')
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.error('Failed to connect to MongoDB', error);
        process.exit(1);
    });

// Middleware
app.use(express.json());

// Routes
app.use('/api', routes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
/*import express from 'express';

// Create Express app
const app = express();
const port = 3000; // Change this to the desired port number

// Define a route for getting the "pong" message
app.get('/ping', (req, res) => {
    res.send('pong');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});*/

