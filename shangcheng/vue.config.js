module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'https://m.youxiake.com',
        ws: true,
        changeOrigin: true
      }
    }
  }
}