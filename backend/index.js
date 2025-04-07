import express from "express";

const app = express();

const PORT = 3000;

app.get("/", (req, res)=>{
    res.send("Hello World!")
});

// app.get("/", (req, res)=>{
//     res.json(
//         [
//             {
//               "PostID": 1,
//               "Title": "Introduction à Express.js",
//               "Content": "Express.js est un framework léger et rapide pour Node.js...",
//               "Category": "Développement Web",
//               "PublicationDate": "2024-03-25T10:00:00Z",
//               "Tags": "Express, Node.js, API"
//             },
//             {
//               "PostID": 2,
//               "Title": "Les bases de MongoDB",
//               "Content": "MongoDB est une base de données NoSQL orientée documents...",
//               "Category": "Bases de données",
//               "PublicationDate": "2024-03-24T15:30:00Z",
//               "Tags": "MongoDB, NoSQL, Backend"
//             }
//           ]
//     )
// })

app.listen(3000,()=>{
    console.log(`my app is running on url http://localhost:${PORT}`);
});
