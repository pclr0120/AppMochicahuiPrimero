const mysql = require('mysql');

connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '12345',
  database: 'BdReporteM'
});

let userModel = {};

userModel.insertReporte = (  userData, callback) => {
  try {
    if (connection) {
      connection.query('INSERT INTO   Reporte SET ?', userData,
        (err, result) => {
          if (err) {
            throw err;
          } else {
            callback(null, {'insertId': result.insertId})
          }
        }
      )
    }
  
  } catch (error) {
    
  }
};
userModel.getReporte = (user,callback) => {

  if (connection) {

    connection.query('select *from Reporte where IdUsuario='+connection.escape(user)+' ORDER by FechaRegistro;',
      (err, rows) => {
        console.log(JSON.stringify(rows))
        if (err) {

          throw err
        }
        else {
        
          callback(null, rows);
        }
      }
    )
  }
};
module.exports = userModel;
