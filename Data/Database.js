const sql = require('mssql')

class Database{
    constructor (dbConfig){
        this.DbConfiq = dbConfig
        this.Pool = null;
        this.Transaction = null;
        this.transactionStatus = false;
    }

    async createConnectionPool(){
        if(!this.Pool){
            this.Pool = new sql.ConnectionPool(this.DbConfiq);
            this.Pool.on("error", (error)=>{
                console.error("SQL Pool Error", err);
            });
            await this.Pool.connect();
        }
        return this.Pool;
    }

    


}
module.exports = Database