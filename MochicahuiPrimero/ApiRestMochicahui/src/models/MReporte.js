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
    //console.log('INSERT INTO   Reporte  (IdUsuario,CategoriaProblema, DetalleProblema, DescripcionUbicacion,UbicacionEnvioRep, Foto1, Foto2, Foto3,EstadoR ,  Grado,Estatus)values('+connection.escape(userData.CategoriaProblema)+','+connection.escape(userData.DetalleProblema)+','+connection.escape(userData.DescripcionUbicacion)+','+connection.escape(userData.UbicacionEnvioRep)+','+connection.escape(userData.Foto1)+','+connection.escape(userData.Foto2)+','+connection.escape(userData.Foto3)+','+connection.escape(userData.EstadoR)+','+connection.escape(userData.Grado)+','+connection.escape(userData.Estatus)+');');
    if (connection) {
      connection.query('INSERT INTO   Reporte  (IdUsuario,CategoriaProblema, DetalleProblema, DescripcionUbicacion,UbicacionEnvioRep, Foto1, Foto2, Foto3,EstadoR ,  Grado,Estatus)values('+connection.escape(userData.IdUsuario)+','+connection.escape(userData.CategoriaProblema)+','+connection.escape(userData.DetalleProblema)+','+connection.escape(userData.DescripcionUbicacion)+','+connection.escape(userData.UbicacionEnvioRep)+','+connection.escape(userData.Foto1)+','+connection.escape(userData.Foto2)+','+connection.escape(userData.Foto3)+','+connection.escape(userData.EstadoR)+','+connection.escape(userData.Grado)+','+connection.escape(userData.Estatus)+');'),
        (err, result) => {
          if (err) {
           // console.log(JSON.stringify(err))
           throw err
          } else {
            callback(null, {'insertId': result.insertId})
          }
        }
      
    }
  
  } catch (error) {
    
  }
};
userModel.getReporte = (user,callback) => {

  if (connection) {

    connection.query('select *from Reporte where IdUsuario='+connection.escape(user)+' ORDER by FechaRegistro;',
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


///Administrador


userModel.getReportes= (user,callback) => {

  if (connection) {

    connection.query('select *from Reporte ORDER by FechaRegistro;',
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

//esto es solo para salir del apuro
userModel.ReporteAtendido = (userData, callback) => {

  if (connection) {
    const sql = `
      UPDATE reporte SET
     
      EstadoR = ${connection.escape(userData.EstadoR)},
        
      Estatus = ${connection.escape(userData.Estatus)}
 
      WHERE Id =  ${connection.escape(userData.Id)};`;

    connection.query(sql, function (err, result) {
      if (err) {
        //quitar cuando este en produccion
        throw err;
      } else {
        //Console.log(JSON.stringify(result))
        callback(null, {
          "msg": "success"
        })
      }
    });
  }
};
module.exports = userModel;
