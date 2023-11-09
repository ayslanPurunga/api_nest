import { Role } from '../enums/role.enum';
import { UserEntity } from '../user/entity/user.entity';

export const userEntityList: UserEntity[] = [
  {
    name: 'ayslan',
    email: 'ayslan@gmail.com',
    birthAt: new Date('2000-01-01'),
    id: 1,
    password: '$2b$10$R/meqr9LthDEz1i3evg6ieI0vq3/enCI.1vYThDXj6Icr/XGYa7C.',
    role: Role.Admin,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: 'purunga',
    email: 'purunga@gmail.com',
    birthAt: new Date('2000-01-01'),
    id: 2,
    password: '$2b$10$R/meqr9LthDEz1i3evg6ieI0vq3/enCI.1vYThDXj6Icr/XGYa7C.',
    role: Role.Admin,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: 'ze das couves',
    email: 'zecouve@gmail.com',
    birthAt: new Date('2000-01-01'),
    id: 3,
    password: '$2b$10$R/meqr9LthDEz1i3evg6ieI0vq3/enCI.1vYThDXj6Icr/XGYa7C.',
    role: Role.Admin,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];
