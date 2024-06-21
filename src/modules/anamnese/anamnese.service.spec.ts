import { Test, TestingModule } from '@nestjs/testing';
import { AnamneseService } from './anamnese.service';
import { AnamneseRepository } from './anamnese.repository';
import { Prisma } from '@prisma/client';
import { CreateAnamneseDto } from './dto/create-anamnese.dto';
import { CreateCirurgiaDto } from './dto/create-cirurgia.dto';
import { CreateDoencaDto } from './dto/create-doenca.dto';

describe('AnamneseService', () => {
  let service: AnamneseService;
  let repository: AnamneseRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AnamneseService,
        {
          provide: AnamneseRepository,
          useValue: {
            createAnamnese: jest.fn(),
            createCirurgia: jest.fn(),
            createDoencaConcomitante: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<AnamneseService>(AnamneseService);
    repository = module.get<AnamneseRepository>(AnamneseRepository);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should create an anamnese, cirurgias and doencas', async () => {
      const trx = {} as Prisma.TransactionClient;
      const createAnamneseDto: CreateAnamneseDto = {
        queixa_principal: 'Dor abdominal',
        hma: 'História da moléstia atual',
        hmp: 'História médica pregressa',
        avd: 'Atividades de vida diária e trabalho',
        cirurgias: [
          {
            realizou: true,
            quais: 'Cirurgia X',
            resultados_exames: 'Resultado X',
          },
        ],
        doencas_concomitantes: [
          {
            dm: true,
            has: true,
            outros: 'Outros problemas',
          },
        ],
      };
      const id_prontuario = 1;

      const anamneseMock = { id_anamnese: 1 };
      const cirurgiaMock: CreateCirurgiaDto = {
        realizou: true,
        quais: 'Cirurgia X',
        resultados_exames: 'Resultado X',
      };
      const doencaMock: CreateDoencaDto = {
        dm: true,
        has: true,
        outros: 'Outros problemas',
      };

      (repository.createAnamnese as jest.Mock).mockResolvedValue(anamneseMock);
      (repository.createCirurgia as jest.Mock).mockResolvedValue(cirurgiaMock);
      (repository.createDoencaConcomitante as jest.Mock).mockResolvedValue(
        doencaMock,
      );

      const result = await service.create(
        trx,
        createAnamneseDto,
        id_prontuario,
      );

      expect(result).toEqual({
        anamnese: anamneseMock,
        cirurgias: [cirurgiaMock],
        doencas: [doencaMock],
      });

      expect(repository.createAnamnese).toHaveBeenCalledWith(
        trx,
        createAnamneseDto,
        id_prontuario,
      );
      expect(repository.createCirurgia).toHaveBeenCalledWith(
        trx,
        createAnamneseDto.cirurgias[0],
        anamneseMock.id_anamnese,
      );
      expect(repository.createDoencaConcomitante).toHaveBeenCalledWith(
        trx,
        createAnamneseDto.doencas_concomitantes[0],
        anamneseMock.id_anamnese,
      );
    });
  });
});
