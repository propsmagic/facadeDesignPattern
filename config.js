const Config = {
  user: 'Admin',
  password: 'Admin123',
  database: 'facade_dev',
  server: 'VIVEK',
  port: 14330,
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 300000
  },
  options: {
    encrypt: true, // for azure
    trustServerCertificate: true // change to true for local dev / self-signed certs
  }
}

module.exports= Config