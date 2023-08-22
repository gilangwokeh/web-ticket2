module.exports = {
    // ... other webpack config options ...
  
    resolve: {
      fallback: {
        "path": require.resolve("path-browserify"),
      },
    },
  };
  