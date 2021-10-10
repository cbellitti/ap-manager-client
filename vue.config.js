module.exports = {
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://localhost:8085',
        changeOrigin: true,
        logLevel: 'debug',
        pathRewrite: { '^/api/': '/' }, 
      },
    },
  },
}
