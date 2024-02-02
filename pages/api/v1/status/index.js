import database from "infra/database.js";

export default async function status(req, res) {
  const updatedAt = new Date().toISOString(); //Formato ISO: ano-mes-diaThora:minuto:segundo.milisegundoZ === "Z" Indica uma timezone, cada para cada letra do alfabeto

  res.status(200).json({
    updated_at: updatedAt,
  });
}
