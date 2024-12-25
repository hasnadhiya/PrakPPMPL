import express from "express";
const app = express();

app.use(express.json());

export function penambahan(a, b) {
  return a + b;
}

app.post("/", (req, res) => {
  const a = req.body.a;
  const b = req.body.b;
  try {
    const hasil = penambahan(a, b).toString();
    res.send(hasil);
  } catch (e) {
    res.send("rusak");
  }
});

export default app;
