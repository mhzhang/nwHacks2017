
// Inserts Create New Student into the Database
function insertNewStudent(form) {
    console.log("I WAS CALLED!!!");
    var firstname = form.fn.value;
    var lastname = form.ln.value;
    
    // Connect to SQL Server DB
    var objConnection = new ActiveXObject("ADODB.Connection");
    var strConn = "driver={sql server};" + 
                  "server=nwhacks-server2.database.windows.net;" + 
                  "database=nwhacks-DB;" + 
                  "uid=hmnf2017;" + 
                  "password=HelloMyNewFriends2017";
    objConnections.Open(strConn);

    // Execute a read query & retrieve results from SQL
    // Results stored in record set object
    var recordset = new ActiveXObject("ADODB.Recordset");
    var strQuery = "SELECT * FROM garbageTable";
    recordset.Open(strQuery, objConnection);

    recordset.MoveFirst;
    while (!recordset.EOF) {
       var field = recordset.Fields("field1").value;
       console.log(field);
       rs.MoveNext;
    }
    console.log("Successfully read from DB!");
}


