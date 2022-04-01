
export const getContentful = async () => {
  const contentful = require("contentful");
  const client = contentful.createClient({
    // This is the space ID. A space is like a project folder in Contentful terms
    space: "vfn5vz47rj44",
    // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
    accessToken: "IonKz0BLWzxgmUT3lwdkh6dISqjNpv85HCyDwZXjEyE"
    
  });

  return await client.getEntries({content_type: 'page'})
}