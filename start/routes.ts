import router from '@adonisjs/core/services/router'

router.on('/').render('pages/home').as('home')

router
  .get('/movies/my-awesome-movie', async (ctx) => {
    return ctx.view.render('pages/movies', { movie: 'TESTE Meu filme incrível!' })
  })
  .as('movies.show')
