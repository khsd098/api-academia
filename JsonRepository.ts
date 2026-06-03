export class Repository<T extends { id: number }> {
    protected data: T[];

    constructor(data: T[]) {
        this.data = data;
    }

    findAll(): T[] {
        return this.data;
    }

    findById(id: number): T | undefined {
        return this.data.find(item => item.id === id);
    }

    create(item: T): T {
        this.data.push(item);
        return item;
    }
}
