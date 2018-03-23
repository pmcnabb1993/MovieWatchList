const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Movies collection and inserts the movies below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/reactmovielist",
  {
    useMongoClient: true
  }
);

const movieSeed = [

{
    title: "Blade Runner 2049",
    director: "Denis Villeneuve",
    synopsis:
    "Thirty years after the events of the first film, a new blade runner, LAPD Officer K, unearths a long-buried secret that has the potential to plunge what’s left of society into chaos. K’s discovery leads him on a quest to find Rick Deckard, a former LAPD blade runner who has been missing for 30 years.",
    date: new Date(Date.now())
  },
  {
    title: "Good Time",
    director: "Benny and Josh Safdie",
    synopsis:
      "After a heist goes awry, a bank robber tries to free his brother from Rikers Island, all in one night.",
    date: new Date(Date.now())
  },
  {
    title: "Blow-UP",
    director: "Michelangelo Antonioni",
    synopsis:
    	"A successful mod photographer in London whose world is bounded by fashion, pop music, marijuana, and easy sex, feels his life is boring and despairing. But in the course of a single day he accidentally captures on film the commission of a murder. The fact that he has photographed a murder does not occur to him until he studies and then blows up his negatives, uncovering details, blowing up smaller and smaller elements, and finally putting the puzzle together.",
    date: new Date(Date.now())
  },
  {
    title: "Garden State",
    director: "Zach Braff",
    synopsis:
      "Andrew returns to his hometown for the funeral of his mother, a journey that reconnects him with past friends. The trip coincides with his decision to stop taking his powerful antidepressants. A chance meeting with Sam – a girl also suffering from various maladies – opens up the possibility of rekindling emotional attachments, confronting his psychologist father, and perhaps beginning a new life.",
    date: new Date(Date.now())
  },
  {
    title: "Cinema Paradiso",
    director: "Giuseppe Tornatore",
    synopsis:
    	"A filmmaker recalls his childhood, when he fell in love with the movies at his village’s theater and formed a deep friendship with the theater’s projectionist.",
    date: new Date(Date.now())
  },
  {
    title: "12 Monkeys",
    director: "Terry Gilliam",
    synopsis:
		"In the year 2035, convict James Cole reluctantly volunteers to be sent back in time to discover the origin of a deadly virus that wiped out nearly all of the earth’s population and forced the survivors into underground communities. But when Cole is mistakenly sent to 1990 instead of 1996, he’s arrested and locked up in a mental hospital. There he meets psychiatrist Dr. Kathryn Railly, and patient Jeffrey Goines, the son of a famous virus expert, who may hold the key to the mysterious rogue group, the Army of the 12 Monkeys, thought to be responsible for unleashing the killer disease.",
	date: new Date(Date.now())
  },
  {
    title: "Coherence",
    director: "James Ward Byrkit",
    synopsis:
      "On the night a comet is passing near Earth, eight friends at a dinner party experience a troubling chain of reality bending events. When the power goes out, they discover that the only house on the street left with power also holds many secrets.",
    date: new Date(Date.now())
  },
  
  {
    title: "Triangle",
    director: "Christopher Smith",
    synopsis:
      "The story revolves around the passengers of a yachting trip in the Atlantic Ocean who, when struck by mysterious weather conditions, jump to another ship only to experience greater havoc on the open seas.",
    date: new Date(Date.now())
  }
];

db.Movie
  .remove({})
  .then(() => db.Movie.collection.insertMany(movieSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
