const sql = require('mssql/msnodesqlv8');
import cadenaConexion from './des-encrypt';

const config = {
  // connectionString: "Driver=SQL Server;Server=ServerName;Database=DatabaseName;Trusted_Connection=true;"
  connectionString: cadenaConexion.NombreCadenaConexion
};

const connection = new sql.ConnectionPool(config, (err: any) => {
  if (err) {
    console.error('Error de conexión: ', err);
    return;
  }
  console.log('Conectado');
});

export default connection;