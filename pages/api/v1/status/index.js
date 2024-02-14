import database from "infra/database.js";

export default async function status(req, res) {
  const updatedAt = new Date().toISOString(); //Formato ISO: ano-mes-diaThora:minuto:segundo.milisegundoZ === "Z" Indica uma timezone, cada para cada letra do alfabeto;

  const databaseVersionResult = await database.query("SHOW server_version;");
  const databaseVersionValue = databaseVersionResult.rows[0].server_version;

  const databaseMaxConnectionsResult = await database.query(
    "SHOW max_connections;",
  );
  const databaseMaxConnectionsValue =
    databaseMaxConnectionsResult.rows[0].max_connections;

  const databaseName = process.env.POSTGRES_DB;
  const openConnectionsResult = await database.query({
    text: "SELECT count(*)::int FROM pg_stat_activity WHERE datname = $1;",
    values: [databaseName],
  });
  const openConnections = openConnectionsResult.rows[0].count;

  res.status(200).json({
    updated_at: updatedAt,
    database: {
      version: databaseVersionValue,
      max_connections: Number(databaseMaxConnectionsValue),
      active_connections: openConnections,
    },
  });
}
