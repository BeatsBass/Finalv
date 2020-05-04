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

module.exports = model("Musica", NoteSchema);