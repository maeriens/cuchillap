type Ingrediente = {
  nombre: string;
  cantidad: number;
};

export type IngredienteDB = Ingrediente & {
  id: number;
  created_at: string;
};
