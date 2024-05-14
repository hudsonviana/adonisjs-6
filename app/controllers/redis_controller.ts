import cache from '#services/cache_service'
import type { HttpContext } from '@adonisjs/core/http'

export default class RedisController {
  public async destroy({ response, params }: HttpContext) {
    await cache.delete(params.slug)
    return response.redirect().back()
  }

  public async flush({ response }: HttpContext) {
    console.log('teste de Flush')
    await cache.flushDb()
    return response.redirect().back()
  }
}
