const fs = require("fs");

const db = JSON.parse(fs.readFileSync("db.json", "utf8"));

Object.keys(db).forEach((key) => {
  db[key] = db[key].map((item, index) => ({
    id: index + 1,
    ...item,
  }));
});

fs.writeFileSync("db.json", JSON.stringify(db, null, 2));
console.log("IDs added successfully to db.json");
