const config = {
    mongoUrl: "mongodb+srv://yo_dst:eiCiefo3ohWo@)@cluster-project-x.3bb3y.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    port: process.env.PORT || 5000,
    secretKey: "mylittlesecret"
};

export const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }

export default config;