import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { IDespesa, Despesa } from '../despesa.model';

import { DespesaService } from './despesa.service';

describe('Despesa Service', () => {
  let service: DespesaService;
  let httpMock: HttpTestingController;
  let elemDefault: IDespesa;
  let expectedResult: IDespesa | IDespesa[] | boolean | null;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    expectedResult = null;
    service = TestBed.inject(DespesaService);
    httpMock = TestBed.inject(HttpTestingController);

    elemDefault = {
      id: 0,
      descricao: 'AAAAAAA',
    };
  });

  describe('Service methods', () => {
    it('should find an element', () => {
      const returnedFromService = Object.assign({}, elemDefault);

      service.find(123).subscribe(resp => (expectedResult = resp.body));

      const req = httpMock.expectOne({ method: 'GET' });
      req.flush(returnedFromService);
      expect(expectedResult).toMatchObject(elemDefault);
    });

    it('should create a Despesa', () => {
      const returnedFromService = Object.assign(
        {
          id: 0,
        },
        elemDefault
      );

      const expected = Object.assign({}, returnedFromService);

      service.create(new Despesa()).subscribe(resp => (expectedResult = resp.body));

      const req = httpMock.expectOne({ method: 'POST' });
      req.flush(returnedFromService);
      expect(expectedResult).toMatchObject(expected);
    });

    it('should update a Despesa', () => {
      const returnedFromService = Object.assign(
        {
          id: 1,
          descricao: 'BBBBBB',
        },
        elemDefault
      );

      const expected = Object.assign({}, returnedFromService);

      service.update(expected).subscribe(resp => (expectedResult = resp.body));

      const req = httpMock.expectOne({ method: 'PUT' });
      req.flush(returnedFromService);
      expect(expectedResult).toMatchObject(expected);
    });

    it('should partial update a Despesa', () => {
      const patchObject = Object.assign(
        {
          descricao: 'BBBBBB',
        },
        new Despesa()
      );

      const returnedFromService = Object.assign(patchObject, elemDefault);

      const expected = Object.assign({}, returnedFromService);

      service.partialUpdate(patchObject).subscribe(resp => (expectedResult = resp.body));

      const req = httpMock.expectOne({ method: 'PATCH' });
      req.flush(returnedFromService);
      expect(expectedResult).toMatchObject(expected);
    });

    it('should return a list of Despesa', () => {
      const returnedFromService = Object.assign(
        {
          id: 1,
          descricao: 'BBBBBB',
        },
        elemDefault
      );

      const expected = Object.assign({}, returnedFromService);

      service.query().subscribe(resp => (expectedResult = resp.body));

      const req = httpMock.expectOne({ method: 'GET' });
      req.flush([returnedFromService]);
      httpMock.verify();
      expect(expectedResult).toContainEqual(expected);
    });

    it('should delete a Despesa', () => {
      service.delete(123).subscribe(resp => (expectedResult = resp.ok));

      const req = httpMock.expectOne({ method: 'DELETE' });
      req.flush({ status: 200 });
      expect(expectedResult);
    });

    describe('addDespesaToCollectionIfMissing', () => {
      it('should add a Despesa to an empty array', () => {
        const despesa: IDespesa = { id: 123 };
        expectedResult = service.addDespesaToCollectionIfMissing([], despesa);
        expect(expectedResult).toHaveLength(1);
        expect(expectedResult).toContain(despesa);
      });

      it('should not add a Despesa to an array that contains it', () => {
        const despesa: IDespesa = { id: 123 };
        const despesaCollection: IDespesa[] = [
          {
            ...despesa,
          },
          { id: 456 },
        ];
        expectedResult = service.addDespesaToCollectionIfMissing(despesaCollection, despesa);
        expect(expectedResult).toHaveLength(2);
      });

      it("should add a Despesa to an array that doesn't contain it", () => {
        const despesa: IDespesa = { id: 123 };
        const despesaCollection: IDespesa[] = [{ id: 456 }];
        expectedResult = service.addDespesaToCollectionIfMissing(despesaCollection, despesa);
        expect(expectedResult).toHaveLength(2);
        expect(expectedResult).toContain(despesa);
      });

      it('should add only unique Despesa to an array', () => {
        const despesaArray: IDespesa[] = [{ id: 123 }, { id: 456 }, { id: 84057 }];
        const despesaCollection: IDespesa[] = [{ id: 123 }];
        expectedResult = service.addDespesaToCollectionIfMissing(despesaCollection, ...despesaArray);
        expect(expectedResult).toHaveLength(3);
      });

      it('should accept varargs', () => {
        const despesa: IDespesa = { id: 123 };
        const despesa2: IDespesa = { id: 456 };
        expectedResult = service.addDespesaToCollectionIfMissing([], despesa, despesa2);
        expect(expectedResult).toHaveLength(2);
        expect(expectedResult).toContain(despesa);
        expect(expectedResult).toContain(despesa2);
      });

      it('should accept null and undefined values', () => {
        const despesa: IDespesa = { id: 123 };
        expectedResult = service.addDespesaToCollectionIfMissing([], null, despesa, undefined);
        expect(expectedResult).toHaveLength(1);
        expect(expectedResult).toContain(despesa);
      });

      it('should return initial array if no Despesa is added', () => {
        const despesaCollection: IDespesa[] = [{ id: 123 }];
        expectedResult = service.addDespesaToCollectionIfMissing(despesaCollection, undefined, null);
        expect(expectedResult).toEqual(despesaCollection);
      });
    });
  });

  afterEach(() => {
    httpMock.verify();
  });
});
