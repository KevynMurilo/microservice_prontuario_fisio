import { Test, TestingModule } from '@nestjs/testing';
import { CondutasService } from './condutas.service';
import { CondutasRepository } from './condutas.repository';
import { Prisma } from '@prisma/client';
import { CreateCondutaDto } from './dto/create-conduta.dto';

describe('CondutasService', () => {
  let service: CondutasService;
  let repository: CondutasRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CondutasService,
        {
          provide: CondutasRepository,
          useValue: {
            create: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<CondutasService>(CondutasService);
    repository = module.get<CondutasRepository>(CondutasRepository);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should create condutas', async () => {
      const trx = {} as Prisma.TransactionClient;
      const createCondutaDto: CreateCondutaDto[] = [
        {
          descricao_conduta_fisioterapeutica:
            'Realizar exercícios de fortalecimento',
        },
      ];
      const id_prontuario = 1;

      const condutaMock: CreateCondutaDto = {
        descricao_conduta_fisioterapeutica:
          'Realizar exercícios de fortalecimento',
      };

      (repository.create as jest.Mock).mockResolvedValue(condutaMock);

      const result = await service.create(trx, createCondutaDto, id_prontuario);

      expect(result).toEqual([condutaMock]);
      expect(repository.create).toHaveBeenCalledWith(
        trx,
        createCondutaDto[0],
        id_prontuario,
      );
    });
  });
});
