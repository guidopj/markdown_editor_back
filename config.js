const config = {
    PORT: process.env.PORT || 3003,
    MONGO_DB: process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/MARKDOWN_EDITOR_DB',
    //SECRET_TOKEN: 'telemedicina',
  };
  module.exports = config;