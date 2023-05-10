/*Create a generic interface called Repository that represents a generic data repository. It should have methods like getAll, getById, create, update, and delete. Define the types for the methods and create a class that implements this interface. */

interface Repository<T>{
    getAll(): T[],
    getById(id: string): T | undefined;
    create(data: T): void,
    update(data: T): void,
    delete(id: number): void
}

class exampleRep<T> implements Repository<T> {
    private data:T[] = []

    getAll(): T[] {
        return this.data
    }

    getById(id: string): T | undefined {
        return this.data.find((item) => item === id)
    }

    create(data: T): void {
        this.data.push(data)
    }
    update(data: T): void {
        const index = this.data.findIndex(item => item === data)
        if(index !== -1) {
            this.data[index] = data
        }
    }
    delete(id: number): void {
        const index = this.data.findIndex(item => item === data)
        if(index !== -1) {
            this.data.slice(index, 1)
        }
    }
}