export default function status(req, res) {
  res.status(200).json({ chave: "são acima da média" });
  console.log(res.body);
}
