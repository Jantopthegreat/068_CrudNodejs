import express, { Router } from "express";
const router = express.Router();

const musik = [
  {
    judul: "Seeing Green",
    artis: "Nicki Minaj, Drake, Lil Wayne",
    rilis: "2017",
    genre: "Hip-hop",
  },
  {
    judul: "Bitch lets Do It",
    artis: "YoungBoy Never Broke Again",
    rilis: "2017",
    genre: "Hip-hop / Rap ",
  },
  {
    judul: "Butterfly Effect",
    artis: "Travis Scott",
    rilis: "2017",
    genre: "Hip-hop",
  },
  {
    judul: "16",
    artis: "Baby Keem",
    rilis: "2018",
    genre: "Hip-hop",
  },
];

router.get("/", (req, res) => {
  res.send(musik);
});

export default router;