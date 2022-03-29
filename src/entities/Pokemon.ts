class Pokemon {
  id: string;
  name: string;
  type: string;
  createdAt: Date;
  updatedAt: Date;

  constructor(id: string, name: string, type: string, createdAt: Date, updatedAt: Date) {
    this.id = id;
    this.name = name;
    this.type = type;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}

export { Pokemon };
