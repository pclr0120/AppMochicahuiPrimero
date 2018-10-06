
const UserModel = require('../models/MReporte');

module.exports = app => {

  app.post('/reporte', (req, res) => {
    console.log("solo"+JSON.stringify(req.body.IdUsuario));

    var userData = {
 


      IdUsuario:req.body.IdUsuario,
      //IdTipoProblema:req.body.IdTipoProblema,
      CategoriaProblema :req.body.CategoriaProblema,
      DetalleProblema :req.body.DetalleProblema,
      //bicacion :req.body.Ubicacion,
      DescripcionUbicacion:req.body.DescripcionUbicacion,
      UbicacionEnvioRep:req.body.UbicacionEnvioRep,
      Foto1 :req.body.Foto1,
      Foto2 :req.body.Foto2,
      Foto3 :req.body.Foto3,
      EstadoR :req.body.EstadoR,
      Grado:req.body.Grado,
      //FechaRegistro :req.body.FechaRegistro,
      Estatus :req.body.Estatus


    };
 
  

    UserModel.insertReporte(userData, (err, data) => {
    
    try {
      console.log("dentro:"+userData.IdUsuario);
     
      if (data && data.insertId) {
        console.log("hola");
        res.status(200).json({
          success: true,
          msg: "Success",
          data: data
        });
     
      } else {
        console.log("00000");
        res.status(500).json({
          success: false,
          msg: "Error"
        });
      }
    } catch (error) {
      console.log("error"+JSON.stringify(data));
    }
     
    });
  });


  app.get('/GetReporte/:user', (req, res) => {
    var user = req.params.user;
    UserModel.getReporte(user,(err, data) => {
      
      res.status(200).json(data);
    });
  });



  ////administrador App

  app.get('/GetReportes', (req, res) => {
    var user = req.params.user;
    UserModel.getReportes(user,(err, data) => {
      
      res.status(200).json(data);
    });
  });

          app.put('/ReporteAtendido', (req, res) => {

        
          const userData = {
            Id: req.body.Id,
          
            //FotoPerfil:req.body.FotoPerfil,
          // FotoIdentificacion:req.body.FotoIdentificacion,
            //NombreCompleto:req.body.NombreCompleto,
            //FechaNacimiento:req.body.FechaNacimiento,
            EstadoR:req.body.EstadoR,
            //Email:req.body.Email,
            Estatus:req.body.Estatus
            //IdTipoUser:1,
          // IdTipoUser:"1",
            
        
          };
        


          UserModel.ReporteAtendido(userData, function (err, data) {
            if (data && data.msg) {
              res.status(200).json({data});
            } else {
              res.status(500).json({
                success: false,
                msg: 'Error'
              });
            }
          });
        });

 };
 
