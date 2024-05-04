import router from '@adonisjs/core/services/router'

router.on('/').render('pages/home')

router.get('/teste', async (ctx) => {
  return 'Mas que nada, um samba como esse...'
})
