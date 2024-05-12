import router from '@adonisjs/core/services/router'
import MoviesController from '#controllers/movies_controller'
import RedisController from '#controllers/redis_controller'

router.get('/', [MoviesController, 'index']).as('home')

router
  .get('/movies/:slug', [MoviesController, 'show'])
  .as('movies.show')
  .where('slug', router.matchers.slug())

router.get('/redis/flush', [RedisController, 'flush']).as('redis.flush')
router.get('/redis/:slug', [RedisController, 'destroy']).as('redis.destroy')