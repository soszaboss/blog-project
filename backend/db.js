import sqlite3 from 'sqlite3';

const sql3 = sqlite3.verbose();


// const DB = new sql3.Database(':memory:', sqlite3.OPEN_READWRITE, connected);
// const DB = new sql3.Database('', sqlite3.OPEN_READWRITE, connected);
const DB = new sql3.Database('./database.db', sql3.OPEN_READWRITE, connected);


function connected(err) {
  if (err) {
    console.log(err.message);
    return;
  }
  console.log('Base de donnée crée ou déjà existante.');
}


async function withDatabaseConnection(callback) {
    try {
        await callback(DB);
    } finally {
        DB.close((err) => {
            if (err) {
                console.error("Erreur lors de la fermeture de la connexion :", err);
            } else {
                console.log("Connexion fermée.");
            }
        });
    }
}


// let sql = `CREATE TABLE IF NOT EXISTS enemies(
//     enemy_id INTEGER PRIMARY KEY,
//     enemy_name TEXT NOT NULL,
//     enemy_reason TEXT NOT NULL
//   )`;
//   DB.run(sql, [], (err) => {
//     //callback function
//     if (err) {
//       console.log('error creating enemies table');
//       return;
//     }
//     console.log('CREATED TABLE');
//   });

// Utilisation du gestionnaire
// withDatabaseConnection(async (db) => {
//     db.serialize(() => {
//         db.run("CREATE TABLE test (name TEXT)");
//         db.run("INSERT INTO test VALUES ('Exemple')");
//         db.each("SELECT name FROM test", (err, row) => {
//             if (err) {
//                 console.error(err);
//             } else {
//                 console.log(row.name);
//             }
//         });
//     });
// });


export { DB };