import ErrorRepository from "../errorrepository";

const error = new ErrorRepository();

test('Ошибка1', () => {
    expect(error.translate(11)).toBe('Ошибка1');
});

test('Ошибка2', () => {
    expect(error.translate(22)).toBe('Ошибка2');
});

test('Ошибка3', () => {
    expect(error.translate(33)).toBe('Ошибка3');
});

test('Данный код отсутствует', () => {
    expect(error.translate(44)).toBe('Unknown error');
})