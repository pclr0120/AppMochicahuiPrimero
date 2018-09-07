
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
      Estatus :req.body.Estatus,


    };
 
  

    UserModel.insertReporte(userData, (err, data) => {
    
    try {
      alert("dentro:"+userData.IdUsuario);
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


  app.get('/GetReporte/:user', (req, res) => {
    var user = req.params.user;
    UserModel.getReporte(user,(err, data) => {
      console.log("hola00:"+data)
      res.status(200).json(data);
    });
  });

  

 };
