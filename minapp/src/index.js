document.querySelector('#app').textContent = 'Hello, World!'

if (module.hot) {
  module.hot.accept((err) => {
    if (err) {
      console.error(err)
    }
  })
}
