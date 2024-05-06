import router from '@adonisjs/core/services/router'
import MoviesController from '#controllers/movies_controller'

router.get('/', [MoviesController, 'index']).as('home')

router
  .get('/movies/:slug', [MoviesController, 'show'])
  .as('movies.show')
  .where('slug', router.matchers.slug())
