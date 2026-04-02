const connection = require("./db");
const express = require("express");
const app = express();

app.use(express.json());

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
 
 // Create 
app.post("/funcionarios", (req, res) => {
  const { nome, cargo, salario } = req.body;

  const sql = "INSERT INTO funcionarios (nome, cargo, salario) VALUES (?, ?, ?)";
  connection.query(sql, [nome, cargo, salario], (err) => {
    if (err) return res.status(500).send(err);
    res.send("Funcionário criado");
  });
});

 // Read
app.get("/funcionarios", (req, res) => {
  connection.query("SELECT * FROM funcionarios", (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
});
app.get("/funcionarios/:id", (req, res) => {
  const { id } = req.params;

  connection.query(
    "SELECT * FROM funcionarios WHERE id = ?",
    [id],
    (err, results) => {
      if (err) return res.status(500).send(err);
      res.json(results);
    }
  );
});

 // Update
app.put("/funcionarios/:id", (req, res) => {
  const { id } = req.params;
  const { nome, cargo, salario } = req.body;

  const sql = "UPDATE funcionarios SET nome=?, cargo=?, salario=? WHERE id=?";
  connection.query(sql, [nome, cargo, salario, id], (err) => {
    if (err) return res.status(500).send(err);
    res.send("Funcionário atualizado");
  });
});

 // Delete
app.delete("/funcionarios/:id", (req, res) => {
  const { id } = req.params;

  connection.query(
    "DELETE FROM funcionarios WHERE id = ?",
    [id],
    (err) => {
      if (err) return res.status(500).send(err);
      res.send("Funcionário removido");
    }
  );
});