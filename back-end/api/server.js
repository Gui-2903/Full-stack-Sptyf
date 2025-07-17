

import express from "express";
import fs from "fs";
import cors from "cors";
// import { db } from "./connect.js"; caso fosse usar o MongoDB

const app = express();
const PORT = 3001;                 

app.use(cors());


app.get("/", (request, response) => {
  response.send("Só vamos trabalhar com os endpoints '/artists' e '/songs'");
});


app.get("/artists", async (request, response) => {
  fs.readFile("artists.json", "utf8", (err, data) => {
        if (err) {
            return response.status(500).send("Erro ao ler o arquivo0");
          }
          const artists = JSON.parse(data);
          response.send(artists);
        });
      });

app.get("/songs", async (request, response) => {
  fs.readFile("songs.json", "utf8", (err, data) => {
    if (err) {
      return response.status(500).send("Erro ao ler o arquivo1");
    }
    const songs = JSON.parse(data);
    response.send(songs);
  });
});
      
app.listen(PORT, () => {
  console.log(`Servidor está escutando na porta ${PORT}`);
});


/*
    app.get("/artists", async (request, response) => {
    response.send(await db.collection("artists").find({}).toArray());
  });
  
  */
  