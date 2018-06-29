const express = require('express');
const router = express.Router();
const app = express();
const path = require('path');
const mysql = require('mysql');

const 
  fs   = require('fs');

const envPath = path.resolve('.env');

try {
  if ( !fs.statSync(envPath).isFile() ) {
    throw new Error('.env is not a file...');
  }
} catch(e) {
  throw new Error('.env file is missing from root directory...');
}

fs
  .readFileSync(envPath,'utf-8')
  .split('\n')
  .filter(x => x && x !== '')
  .map(x => x.trim() && x.split('='))
  .forEach(x => {
    if ( !x || x.length !== 2 ) {
      throw new Error('Expected key=value format, check your .env file format...');
    }

    const [ key,value ] = x;

    process.env[key] = process.env[key] || value;
  });

const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'djole',
  password : process.env.DB_PASSWORD,
  database : 'topnews'
});

connection.connect((err) => {
  if ( err ) {
    return console.log(err);
  }

  console.log('connected successfully!');
})

app.use(express.static('/'));
app.use(express.static('dist'));
app.use('/*', express.static(path.resolve('dist')));

router.get('/categories/get',(req,res,next) => {
  const sql = 'select * from categories';

  connection.query(sql,(err,result) => {
    if ( err ) return next(err);

    return res.json(result);
  });
});

router.get('/stories/one/:id',(req,res,next) => {
  const sql = `
    SELECT * 
    FROM stories
    WHERE id = ${req.params.id}
  `;

  connection.query(sql,(err,result) => {
    if ( err ) return next(err);

    return res.json({
      story:result[0] ? result[0] : null
    });
  });
});

router.get('/stories/get',(req,res,next) => {
  const where = req.query.cName ? `
    INNER JOIN categories c
    ON s.categorie_id = c.id
    WHERE c.categorie_name = '${req.query.cName}'
  ` : '';

  const sql = `
    SELECT s.created_at,s.description,s.id as sID, s.image, s.title
    FROM stories s
    ${where}
    ORDER BY s.created_at DESC
    LIMIT 4
  `;

  connection.query(sql,(err,result) => {
    if ( err ) return next(err);

    return res.json(result);
  });
});

router.get('/stories/getStoriesPagination',(req,res,next) => {
  const sql = `
    SELECT s.created_at,s.description,s.id as sID, s.image, s.title, c.categorie_name
    FROM stories s
    INNER JOIN categories c
    ON s.categorie_id = c.id
    WHERE c.categorie_name = '${req.query.name}'
    ORDER BY s.created_at DESC
    LIMIT ${req.query.limit}
    OFFSET ${req.query.offset}
  `;

  connection.query(sql,(err,result) => {
    if ( err ) return next(err);

    return res.json(result);
  });
});

router.get('/paragraphs/get/:id',(req,res,next) => {
  // id = storie id

  const sql = `
    SELECT *
    FROM paragraphs
    WHERE story_id = ${req.params.id}
  `;

  connection.query(sql,(err,result) => {
    if ( err ) return next(err);

    return res.json(result);
  });
});

router.get('/galeries/one/:id',(req,res,next) => {
  // id = storie id

  const sql = `
    SELECT *
    FROM galeries
    WHERE stories_id = ${req.params.id}
  `;

  connection.query(sql,(err,result) => {
    if ( err ) return next(err);

    return res.json(result);
  });
});

router.post('/contact/insert',(req,res,next) => {
  res.json({
    success:true
  });
}); 

module.exports = router;