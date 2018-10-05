// add plugin code here

videojs.registerPlugin('examplePlugin', function (opts) {
  const player = this

  player.ready(function () {
    console.log('The player is ready!')
  })
})

if (process.env.NODE_ENV === 'development') {
  /*
    Player options in development
  */
  const devPlayerOptions = {}

  // Update line below with the proper plugin name!
  videojs('player').examplePlugin(devPlayerOptions)
}
