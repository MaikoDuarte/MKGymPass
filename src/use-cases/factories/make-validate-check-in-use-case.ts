import { PrismaUsersRepository } from '@/repositories/prisma/prisma-users-repository'
import { GetUserProfileUseCase } from '../get-user-profile'

export function makeValidateCheckInsUseCase() {
  const checkInsRespository = new PrismaUsersRepository()
  const useCase = new GetUserProfileUseCase(checkInsRespository)

  return useCase
}
