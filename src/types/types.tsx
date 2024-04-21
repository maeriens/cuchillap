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

export type Totals = {
  name: string;
  sum: number;
};

export type TotalsDB = Totals & {
  id: number;
};
