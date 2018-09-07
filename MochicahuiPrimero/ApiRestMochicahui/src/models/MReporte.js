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
userModel.getUsers = (callback) => {
  console.log("hola");
  if (connection) {
    console.log("hola");
    connection.query('SELECT * FROM Usuario ORDER BY Id',
      (err, rows) => {
        
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

// userModel.insertUserPermisos = (  userData, callback) => {
//   try {
//     if (connection) {
//       connection.query('INSERT INTO PermisosUser SET ?', userData,
//         (err, result) => {
//           if (err) {
//             throw err;
//           } else {
//             callback(null, {'insertId': result.insertId})
//           }
//         }
//       )
//     }
  
//   } catch (error) {
    
//   }
// };




// userModel.updateUser = (userData, callback) => {
//   console.log('jajaj',userData)
//   if (connection) {
//     const sql = `
//       UPDATE usuario SET

//       pass = ${connection.escape(userData.pass)},
//       Estatus= ${connection.escape(userData.Estatus)},
//       Rol= ${connection.escape(userData.Rol)}
     
//       WHERE Id = ${userData.Id}`;

//     connection.query(sql, function (err, result) {
//       if (err) {
//         throw err;
//       } else {
//         callback(null, {
//           "msg": "success"
//         })
//       }
//     });
//   }
// };

// userModel.deleteUser = (id, callback) => {
//   if (connection) {
//     var sqlExists = `
//       SELECT * FROM usuarios WHERE Id = ${connection.escape(id)}
//     `;
//     connection.query(sqlExists, (err, row) => {
//       if (row) {
//         var sql = `DELETE FROM usuarios WHERE Id=` + connection.escape(id);
//         connection.query(sql, (err, result) => {
//           if (err) {
//             throw err;
//           } else{
//             callback(null, {
//               "msg": "deleted"
//             });
//           }
//         });
//       } else {
//         callback(null, {
//           "msg": "not Exists"
//         });
//       }
//     });
//   }
// }
// userModel.getUsuario = (id,callback) => {
//   if (connection) {
//     connection.query('SELECT *from usuarios WHERE IDUsuario='+ connection.escape(id),
//       (err, rows) => {
//         if (err) {
//           throw err
//         }
//         else {
         
//           callback(null, rows);
//         }
//       }
//     )
//   }
// };

userModel.getLog = (user,callback) => {
  if (connection) {
  
    connection.query('SELECT *from Usuario WHERE Email='+ connection.escape(user),
      (err, rows) => {
        if (err) {
          console.log(JSON.stringify(err));
        }
        else {
         console.log(rows)
         if(rows[0]!=undefined)
          callback(null, rows);
          else
            callback(null, false);

        }
      }
    )
  }
};
module.exports = userModel;
