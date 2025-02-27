const allowedOrigins = require("./allowedOrigins");

const corsOptions = {
  origin: (origin, callback) => {
    // Allow requests with no origin, like mobile apps, or Postman
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true); // Origin is allowed
    } else {
      callback(new Error("Not allowed by CORS")); // Origin is not allowed
    }
  },
  credentials: true, // If your app uses cookies, authentication headers, etc.
  optionsSuccessStatus: 200, // For legacy browsers that do not handle 204 correctly
};

module.exports = corsOptions;
