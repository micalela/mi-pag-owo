const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Enable CORS for all origins
app.use(cors());

// Function to calculate the current week number
function getCurrentWeekNumber() {
    const currentDate = new Date();
    const startOfYear = new Date(currentDate.getFullYear(), 0, 1);
    const daysDifference = (currentDate - startOfYear) / (1000 * 60 * 60 * 24);
    return Math.ceil((daysDifference + startOfYear.getDay() + 1) / 7);
  }

// Function to open the SQLite database
const openDb = () => {
    return new sqlite3.Database('./data.db');
};

// PUT /container endpoint
app.put('/containers', (req, res) => {

    const db = openDb();

    const containers = req.body.containers;
    if (!Array.isArray(containers)) {
      return res.status(400).json({ error: 'Invalid containers format' });
    }
  
    const weekNumber = getCurrentWeekNumber();
    console.log(weekNumber);
  
    // Check if the current weekNumber exists in the database
    db.get('SELECT * FROM containers WHERE weekNumber = ?', [weekNumber], (err, row) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
  
      if (row) {
        // If weekNumber exists, update the containers
        const updatedContainers = JSON.stringify(containers);
        db.run(
          'UPDATE containers SET containers = ? WHERE weekNumber = ?',
          [updatedContainers, weekNumber],
          function (err) {
            if (err) {
              return res.status(500).json({ error: err.message });
            }
            res.json({ message: 'Containers updated successfully for week ' + weekNumber });
          }
        );
      } else {
        // If weekNumber does not exist, insert new data
        const newContainers = JSON.stringify(containers);
        db.run(
          'INSERT INTO containers (weekNumber, containers) VALUES (?, ?)',
          [weekNumber, newContainers],
          function (err) {
            if (err) {
              return res.status(500).json({ error: err.message });
            }
            res.json({ message: 'Containers added for week ' + weekNumber });
          }
        );
      }
    });
  });

app.get('/containers', (req, res) => {
    const db = openDb();

    const query = 'SELECT * FROM containers';

    const currentWeekNumber = getCurrentWeekNumber();
    
    db.all(query, [], (err, rows) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
  
      // Map the results to a more readable format (parsing the JSON stored in the containers column)
      const result = rows.map(row => ({
        weekNumber: row.weekNumber,
        containers: JSON.parse(row.containers)
      }));
  
      res.json({currentWeekNumber, result});
    });
  });
  

app.get('/test', (req, res) => {
    res.send("hola");
});


// Start the server
app.listen(port, () => {
const db = new sqlite3.Database('./data.db');

db.serialize(() => {
    db.run(`
      CREATE TABLE IF NOT EXISTS containers (
        weekNumber INTEGER PRIMARY KEY,
        containers TEXT
      )
    `);
  });

db.close();
    console.log(`Server is running on http://localhost:${port}`);
});




