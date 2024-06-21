import { Test, TestingModule } from '@nestjs/testing';
import { Prisma, StatusTonus } from '@prisma/client';
import { ExamesFisicosService } from './exames-fisicos.service';
import { ExamesFisicosRepository } from './exames-fisicos.repository';
import { CreateExamesFisicosDto } from './dto/create-exames-fisicos.dto';

describe('ExamesFisicosService', () => {
  let service: ExamesFisicosService;
  let repository: ExamesFisicosRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ExamesFisicosService,
        {
          provide: ExamesFisicosRepository,
          useValue: {
            createExamesFisicos: jest.fn(),
            createForcaMuscular: jest.fn(),
            createAdm: jest.fn(),
            createComplemento: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<ExamesFisicosService>(ExamesFisicosService);
    repository = module.get<ExamesFisicosRepository>(ExamesFisicosRepository);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
    expect(repository).toBeDefined();
  });

  describe('create', () => {
    it('should create exames fisicos', async () => {
      const mockTransactionClient = {} as Prisma.TransactionClient;
      const mockIdProntuario = 1;
      const mockExamesFisicosDto: CreateExamesFisicosDto = {
        pa: '120/80',
        fc: '75',
        fr: '16',
        ap: 'Normal',
        spo2: '98%',
        temp: '37°C',
        exames_especificos: 'Exames específicos',
        tonus_muscular: StatusTonus.NORMAL,
        distribuicao_topografica: 'Normal',
        coordenacao_dinamica_e_estatica: 'Normal',
        triciptal: true,
        biciptal: true,
        radial: true,
        patelar: true,
        calcanear: true,
        cutaneo_abdominal: true,
        cutaneo_plantar: true,
        contraturas_deformidades: true,
        ulceras: true,
        deambula: true,
        forca_muscular: [
          {
            musculo: 'Bíceps',
            grupo: 'Braço',
            grau: '5',
          },
        ],
        adm: [
          {
            movimento: 'Flexão',
            ativa: 'true',
            passiva: 'true',
          },
        ],
        complemento: {
          sensibilidade: 'Normal',
          dor: 10,
          clonus: 'Nenhum',
          reflexo_ou_reacoes: 'Normais',
          ausculta_cardiaca: 'Normal',
          testes_especiais: 'Nenhum',
          avaliacao_funcional: 'Boa',
        },
      };

      const mockExameFisicoResult = { id_exames_fisicos: 1 } as any;
      const mockForcaMuscularResult = {
        id_forca_muscular: 1,
        id_exames_fisicos: 1,
        musculo: 'Bíceps',
        grupo: 'Braço',
        grau: '5',
      };
      const mockAdmResult = {
        id_adm: 1,
        id_exames_fisicos: 1,
        movimento: 'Flexão',
        ativa: 'true',
        passiva: 'true',
      };
      const mockComplementoResult = {
        id_complementos: 1,
        sensibilidade: 'Normal',
        dor: 10,
        clonus: 'Nenhum',
        reflexo_ou_reacoes: 'Normais',
        ausculta_cardiaca: 'Normal',
        testes_especiais: 'Nenhum',
        avaliacao_funcional: 'Boa',
        observacoes: '',
        exames_complementares_ou_laudos: '',
      };

      jest
        .spyOn(repository, 'createExamesFisicos')
        .mockResolvedValue(mockExameFisicoResult);
      jest
        .spyOn(repository, 'createForcaMuscular')
        .mockResolvedValue(mockForcaMuscularResult);
      jest.spyOn(repository, 'createAdm').mockResolvedValue(mockAdmResult);
      jest
        .spyOn(repository, 'createComplemento')
        .mockResolvedValue(mockComplementoResult);

      const result = await service.create(
        mockTransactionClient,
        mockExamesFisicosDto,
        mockIdProntuario,
      );

      expect(repository.createExamesFisicos).toHaveBeenCalledWith(
        mockTransactionClient,
        mockExamesFisicosDto,
        mockIdProntuario,
      );
      expect(repository.createForcaMuscular).toHaveBeenCalledWith(
        mockTransactionClient,
        mockExamesFisicosDto.forca_muscular[0],
        mockExameFisicoResult.id_exames_fisicos,
      );
      expect(repository.createAdm).toHaveBeenCalledWith(
        mockTransactionClient,
        mockExamesFisicosDto.adm[0],
        mockExameFisicoResult.id_exames_fisicos,
      );
      expect(repository.createComplemento).toHaveBeenCalledWith(
        mockTransactionClient,
        mockExamesFisicosDto.complemento,
        mockIdProntuario,
      );

      expect(result).toEqual({
        examesFisicos: mockExameFisicoResult,
        forcaMuscular: [mockForcaMuscularResult],
        adm: [mockAdmResult],
        complemento: mockComplementoResult,
      });
    });
  });
});
