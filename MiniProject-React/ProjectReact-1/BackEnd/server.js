var express = require('express');
var cors = require('cors');
var app = express();

const mysql = require('mysql2');

// Create a connection pool to the database
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'tii123456789@',
  database: 'travel',
});

// Middleware
app.use(cors());

// Endpoint to get attractions with pagination and sorting
app.get('/api/attractions', function (req, res) {
  const page = parseInt(req.query.page) || 1; 
  const per_page = parseInt(req.query.per_page) || 10; 

  const search = req.query.search; // Get search parameter
  const sort_column = req.query.sort_column; // Get sort column
  const sort_direction = req.query.sort_direction || 'ASC'; // Default to ascending if not provided

  const start_idx = (page - 1) * per_page;
  let params = [];
  let sql = 'SELECT * FROM `attractions` WHERE 1=1'; // Using 1=1 for easier concatenation

  // Search functionality
  if (search) {
    sql += ' AND name LIKE ?'; // Corrected syntax
    params.push('%' + search + '%');
  }

  // Sort functionality
  if (sort_column) {
    sql += ' ORDER BY ' + mysql.escapeId(sort_column) + ' ' + (sort_direction.toUpperCase() === 'DESC' ? 'DESC' : 'ASC');
  }

  sql += ' LIMIT ?, ?';
  params.push(start_idx);
  params.push(per_page);

  // Execute the paginated query
  pool.query(sql, params, function (err, results) {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Database query error.' });
    }

    // Query to get the total count of attractions
    let countSql = 'SELECT COUNT(*) AS total FROM `attractions` WHERE 1=1';
    if (search) {
      countSql += ' AND name LIKE ?';
    }
    pool.query(countSql, search ? ['%' + search + '%'] : [], function (err, countResults) {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: 'Database count query error.' });
      }

      const total = countResults[0].total; // Get the total count of attractions
      const total_page = Math.ceil(total / per_page); // Calculate total pages

      res.json({
        page: page,
        per_page: per_page,
        total: total,
        total_page: total_page,
        data: results,
      }); // results contains rows returned by server
    });
  });
});

// Start the server
app.listen(5000, function () {
  console.log('CORS-enabled web server listening on port 5000');
});
