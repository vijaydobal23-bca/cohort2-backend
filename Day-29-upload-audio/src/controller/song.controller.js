const songModel = require("../model/songs.model");
const storageServices = require("../services/storage.service");
const id3 = require("node-id3");

async function uploadSongs(req ,res){
  const songBuffer = req.file.buffer;
  const tags = id.read(songBuffer);

  const [songFile , posterFile] = await Promise.all([
    storageService.uploadFile({
      buffer:songBuffer,
      filename:tags.title+".mp3",
      folder:""
    }),

    storageService.uploadFile({
      buffer:tags.image.imageBuffer,
      filename:tags.title+".jpeg",
      folder:""
    })
  ]);

  const song = songModel.create({
    title:tags.title,
    url:songFile.url,
    posterUrl:posterFile.url,
    mood
  })

    res.status(201).json({
    messsage: "Song created",
    song
  });
}


module.exports = {uploadSongs};