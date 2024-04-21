export type TableProps = {
  searchTerm: string;
};

export type Ingrediente = {
  name: string;
  amount: number;
};

export type IngredienteDB = Ingrediente & {
  id: number;
  created_at: string;
};
