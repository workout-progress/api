import { expect, describe, it, beforeEach } from 'vitest'
import { InMemoryCheckInsRepository } from '@/repositories/in-memory/in-memory-check-ins-repository'
import { FetchUserCheckInsHistoryUseCase } from './fetch-user-check-ins-history'

let checkInsRepository: InMemoryCheckInsRepository
let sut: FetchUserCheckInsHistoryUseCase

describe('Fetch User Check-in History Use Case', () => {
  beforeEach(() => {
    checkInsRepository = new InMemoryCheckInsRepository()
    sut = new FetchUserCheckInsHistoryUseCase(checkInsRepository)
  })

  it('should be able to fetch check in history', async () => {
    await checkInsRepository.create({
      user_id: 'user-01',
    })

    const { checkIns } = await sut.execute({
      userId: 'user-01',
    })

    expect(checkIns).toHaveLength(1)
    expect(checkIns).toEqual([expect.objectContaining({ user_id: 'user-01' })])
  })
})
