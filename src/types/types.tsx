export type TableProps = {
  searchTerm: string;
};

type Ingrediente = {
  name: string;
  amount: number;
};

export type IngredienteDB = Ingrediente & {
  id: number;
  created_at: string;
};

export type Totals = {
  name: string;
  total: number;
  most_recent: string;
};
