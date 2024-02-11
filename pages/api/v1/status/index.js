import database from "infra/database.js";

export default async function status(req, res) {
  const updatedAt = new Date().toISOString(); //Formato ISO: ano-mes-diaThora:minuto:segundo.milisegundoZ === "Z" Indica uma timezone, cada para cada letra do alfabeto

  const dbStatusResult = await database.query(`
  SELECT
    current_setting('server_version')::float as version,
    current_setting('max_connections')::int AS max_connections
  FROM pg_stat_activity;
`);

  const [dbStatus] = dbStatusResult.rows;

  const databaseName = process.env.POSTGRES_DB;
  const openConnectionsResult = await database.query({
    text: "SELECT count(*)::int FROM pg_stat_activity WHERE datname = $1;",
    values: [databaseName],
  });

  const openConnections = openConnectionsResult.rows[0].count;

  res.status(200).json({
    updated_at: updatedAt,
    database: {
      version: dbStatus.version,
      max_connections: dbStatus.max_connections,
      active_connections: openConnections,
    },
  });
}
