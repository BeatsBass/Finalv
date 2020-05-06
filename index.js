'use strict';
require('dotenv').config();
const mongoose = require("mongoose");
mongoose
    .connect(process.env.URI2, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(db => console.log("DB is connected"))
    .catch(err => console.error(err));

/*const fs = require('fs');

fs.readFile('list.json', (err, data) => {
    if (err) throw err;
    let student = JSON.parse(data);
    console.log(student.length);
});*/

const { Schema, model } = require("mongoose");

const NoteSchema = new Schema(
    {
        album_artist: 'String',
        album: 'String',
        title: 'String',
        year: 'String',
        genre: 'String'
    },
    {
        timestamps: true
    }
);
const Musica = model("Musica", NoteSchema)
const fs = require('fs');

const a = async () => {
    fs.readFile('list.json', async (err, data) => {
        if (err) throw err;
        let musica = JSON.parse(data);
        await Musica.create(musica);
    });
    /*fs.readFile("j.txt", async (err, buf) => {
        let a = buf.toString();
        let h = a.split('\n');
        //console.log(h)
        let i = 0;
        for (let z in h) {
            const artist = h[z].split(' / ');
            //const newUser = await Musica.find({ album_artist: artist[0] });
            const pp = await Musica.find({})
                .where('album_artist')
                .equals(artist[0])
                .where('album')
                .equals(artist[1]).exec();
            //console.log('eeee', pp.length)
            //console.log(`index = ${i} de`, artist[1]);
            if (pp.length === 0) {
                const genre = artist[4].replace('\r', '');
                let pista = {
                    'album_artist': artist[0],
                    'album': artist[1],
                    'title': artist[2],
                    'year': artist[3],
                    'genre': genre
                }
                const musica = new Musica(pista);
                await musica.save();
                console.log('s')
            }
            //i++;
        }
    });*/
    /*const query = 'David Guetta & MORTEN'
    const docs = await Musica.findOne({ album_artist: query });
    const idString = docs._id
    const aggRes = await Musica.aggregate([{ $match: { _id: idString } }])
    console.log(aggRes);*/
    //console.log(await Musica.find({}));
    const query = 'Camila Cabello'
    const newUser = await Musica.find({ album_artist: query });
    const pp = await Musica.find({})
        .where('album_artist')
        .equals(query)
        .select('album_artist album').exec()

    console.log(newUser.length);
    console.log(pp);
}
a()
/*AlumnoModel.find({}).where('ap').equals('').where('am').equals('').sort('-ap').select('ap am nombre carrera dni ema foto fecha_na genero').exec(function (error, personal) {
    if(error){
      console.log('Ha surgido un error.'+error);
    }else{
      console.log(personal);
    }
  });
  AlumnoModel.aggregate([
        { $match:
          {
            _id:'5953d4ca7e6d1a1738f0c6bd'
          } 
        },
        { $unwind: '$matriculas'},
        { $lookup:{
            from: "cursos",
            localField: "matriculas.enlaze",
            foreignField: "enlaze",
            as: "cursos"
          }
        },
        { $unwind: {
            path :'$cursos'
          }
        },
        {$project:
          {
            nombre: '$nombre',
            nota: '$matriculas.nota',
            creditosx:'$cursos.creditos',
            semestre:'$matriculas.semestre'
          }
        },
        {$group: 
          {
            _id: {
              cod_alumno : '$_id',
              nombre : '$nombre',
              semestre:'$semestre'
            },
            totalcrts: {
                $sum: '$creditosx'
            },
            totalnts:{
              $sum: {
                $multiply : ['$creditosx','$nota']
              }
            }
          }
        },
        {$project:
          {
            promedio:{
              $divide: ['$totalnts','$totalcrts']
            },
            ponderado:{
              $cond:[
                {
                  $gte: [ {$divide: ['$totalnts','$totalcrts']}, 13 ]
                },
                1,
                0
              ]
            }
          }
        },
        {$project:
          {
            _id:0,
            semestre:'$_id.semestre',
            promedio:1,
            ponderado:1
          }
        },
        {$sort:{
            semestre: 1
          }
        }
    ], function (err, result) {
        if (err) {
          console.log(err);
        }
        else{
          console.log(result);
        }
    });
  
  */