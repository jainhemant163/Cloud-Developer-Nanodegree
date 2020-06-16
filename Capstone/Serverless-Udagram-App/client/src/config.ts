//Once your application is deployed, copy an API id here so that the frontend could interact with it
const apiId = 'fck9o9dbv8'
export const apiEndpoint = `https://${apiId}.execute-api.us-west-1.amazonaws.com/dev`

export const authConfig = {
  //Create an Auth0 application and copy values from it into this map
  domain: 'jainhemant163.auth0.com',               //domain: Auth0 Domain
  clientId: 'MuozSqSVOOzyI67kCJCQkd8PwteAabjC',   //clientId: Auth0 Client ID
  callbackUrl: 'http://localhost:3000/callback'
}
