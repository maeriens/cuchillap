export type TableProps = {
  searchTerm: string;
};

export type Ingrediente = {
  nombre: string;
  cantidad: number;
};

export type IngredienteDB = Ingrediente & {
  id: number;
  created_at: string;
};
