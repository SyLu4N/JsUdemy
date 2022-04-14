export class Database {
  constructor(
    private host: string,
    private username: string,
    private password: string,
  ) {}

  connect(): void {
    console.log(`Conectado: ${this.host} ${this.username} ${this.password}`);
  }
}

const db1 = new Database('localhost', 'root', '123456');
db1.connect();

const db2 = new Database('localhost', 'root', '123456');
db2.connect();
