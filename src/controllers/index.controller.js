'use strict';

const fs = require('fs');

const indexCtrl = {};

const Musica = require('../models/musica.model');

indexCtrl.renderIndex = (req, res) => {
    fs.readFile('list.json', (err, data) => {
        if (err) throw err;
        let musica = JSON.parse(data);
        musica.forEach(async element => {
            const musica = new Musica(element);
            console.log(musica);

            const artist = await Musica.findOne({ album_artist: element.album_artist });
            console.log(artist)
            if (artist) console.log('ya')
            else {
                const user = await musica.save();
            }
        });
    });
    res.send('index');
};

indexCtrl.dos = async (req, res) => {
    const artist = await Musica.find({ album_artist: 'David Guetta & MORTEN' });
    //if (artist)
    if(artist ===null){
        console.log('no hay')
    }
    else{
        console.log(artist)
    }
    res.send(artist);
};

indexCtrl.tres = async (req, res) => {
    let objeto = [];
    fs.readFile("j.txt", (err, buf) => {
        let a = buf.toString();
        let h = a.split('\n');
        let i=0;
        console.log(h.length)
        /*h.forEach(async ele => {
            const artist = ele.split(' / ');
            const genre = artist[4].replace('\r','');
            
            let pista = {
                'album_artist': artist[0]=== undefined ? "":artist[0],
                'album': artist[1]=== undefined ? "":artist[1],
                'title': artist[2]=== undefined ? "":artist[2],
                'year': artist[3]=== undefined ? "":artist[3],
                'genre': genre === undefined ? "":genre
            }
            //console.log(pista)
            const newUser = await Musica.find({ artista: artist[0] });
            if (newUser.length === 0) {
                console.log('eekjviu',i)
                i++;
                const newUser = new Musica(pista);
                const user = await newUser.save();
            }
        });*/
    });
    res.send('jiu')
};

module.exports = indexCtrl;