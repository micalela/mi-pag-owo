const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Enable CORS for all origins
app.use(cors());

// Function to open the SQLite database
const openDb = () => {
    return new sqlite3.Database('./data.db');
};

// PUT endpoint to receive and save containers
app.put('/containers', (req, res) => {
    const db = openDb();
    const containers = req.body;

    db.serialize(() => {
        // Delete existing data
        db.run('DELETE FROM containers');

        // Insert new data
        const stmt = db.prepare('INSERT INTO containers (data) VALUES (?)');
        stmt.run(JSON.stringify(containers));
        stmt.finalize();
    });

    db.close(() => {
        res.status(200).send('Containers data saved.');
    });
});

// GET endpoint to retrieve the latest containers
app.get('/containers', (req, res) => {
    const db = openDb();

    db.get('SELECT data FROM containers ORDER BY id DESC LIMIT 1', (err, row) => {
        if (err) {
            res.status(500).send('Error retrieving data.');
            return;
        }

        if (row) {
            res.status(200).json(JSON.parse(row.data));
        } else {
            res.status(404).send('No containers found.');
        }
    });

    db.close();
});

app.get('/test', (req, res) => {
    res.send("hola");
});


// Start the server
app.listen(port, () => {
const db = new sqlite3.Database('./data.db');

db.serialize(() => {
    db.run('CREATE TABLE IF NOT EXISTS containers (id INTEGER PRIMARY KEY AUTOINCREMENT, data TEXT)');
});

db.close();
    console.log(`Server is running on http://localhost:${port}`);
});




