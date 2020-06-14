// TODO: Once your application is deployed, copy an API id here so that the frontend could interact with it
const apiId = 'e7cws78ts6'
export const apiEndpoint = `https://${apiId}.execute-api.us-west-1.amazonaws.com/dev`

export const authConfig = {
  // TODO: Create an Auth0 application and copy values from it into this map
  domain: 'jainhemant163.auth0.com',            // Auth0 domain
  clientId: 'MuozSqSVOOzyI67kCJCQkd8PwteAabjC',          // Auth0 client id
  callbackUrl: 'http://localhost:3000/callback'
}
