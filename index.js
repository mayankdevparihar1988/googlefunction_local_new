const functions = require('@google-cloud/functions-framework');
const { Datastore } = require('@google-cloud/datastore');
const datastore = new Datastore({ apiEndpoint: 'http://localhost:9999' });


// Register an HTTP function with the Functions Framework
functions.http('myHttpFunction', async(req, res) => {
    console.log('DataStore obj', datastore);
    let query = datastore.createQuery('dev', 'AUDIENCE_MAPPING');
    let [results] = await datastore.runQuery(query);
    console.log('Result', JSON.stringify(results,0,2));

  // Send an HTTP response
  res.send(results);
});