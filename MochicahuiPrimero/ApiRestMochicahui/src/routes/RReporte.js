
const UserModel = require('../models/MReporte');

module.exports = app => {

  app.post('/usuario', (req, res) => {
    var userData = {
      // Id: null,
      // userrr: req.body.Usuario,
      // pass: req.body.Password,
      // Estatus:req.body.Estatus,
      // idEmpleado:req.body.NE,
      // Rol: req.body.Rol,


      //Id: req.body.Id,
      IdUsuario:req.body.IdUsuario,
      IdTipoProblema:req.body.IdTipoProblema,
      IdCProblema :req.body.IdCProblema,
  
      DetalleProblema :req.body.DetalleProblema,
      Ubicacion :req.body.Ubicacion,
      UbicacionEnvioRep:req.body.UbicacionEnvioRep,
      Foto :req.body.Foto,
      IdEstadoR :req.body.IdEstadoR,
      //FechaRegistro :req.body.FechaRegistro,
      Estatus :req.body.Estatus,

    };
   
    UserModel.insertReporte(userData, (err, data) => {
    try {
      if (data && data.insertId) {

        res.status(200).json({
          success: true,
          msg: "Success",
          data: data
        });
     
      } else {
        res.status(500).json({
          success: false,
          msg: "Error"
        });
      }
    } catch (error) {
      
    }
     
    });
  });




  app.get('/LogIn/:user', (req, res) => {
 
    var user = req.params.user;
    UserModel.getLog(user,(err, data) => {
        res.status(200).json(data);
        
  
      });
  });

  app.get('/GetUser', (req, res) => {
    UserModel.getUsers((err, data) => {
      console.log("hola00:"+data)
      res.status(200).json(data);
    });
  });



 };
