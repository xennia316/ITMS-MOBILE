const { Pool, Client } = require("pg");
const PASSWORD = process.env.PASSWORD;

const connectionString = `postgresql://postgres.wlbjoivuilrezhdeensx:${PASSWORD}@aws-0-us-east-1.pooler.supabase.com:5432/postgres`;

const pool = new Pool({
  connectionString,
  ssl: {
    rejectUnauthorized: false, // For development only, set to true for production
  },
});

module.exports = pool;
