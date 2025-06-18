const sql = require('mssql');

const ParameterDirection = {
    Input: 'Input',
    Output: 'Output',
    InputOutput: 'InputOutput',
    ReturnValue: 'ReturnValue',
}

const SqlDbType = {
    Int: sql.Int,
    VarChar: sql.VarChar,
    Text: sql.Text,
    DateTime: sql.DateTime,
    UniqueIdentifier: sql.UniqueIdentifier,
    SmallInt: sql.SmallInt,
    Bit: sql.Bit,
    BigInt: sql.BigInt
}

const CommandType = {
    TEXT: 'TEXT',
    STORED_PROCEDURE: 'STORED_PROCEDURE',
    TABLE: 'TABLE'
}
module.exports = {ParameterDirection,SqlDbType,CommandType}