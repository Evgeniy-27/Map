export default class ErrorRepository {
    constructor() {
        this.errors = new Map([
            [11, 'Ошибка1'],
            [22, 'Ошибка2'],
            [33, 'Ошибка3']
        ]);
    }

    translate(code) {
        return this.errors.get(code) || 'Unknown error';
    }
}
