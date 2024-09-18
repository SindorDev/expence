export interface ITransaction {
  id: string; 
  name: string;
  amount: number;
  expense_or_income: string;
  type: string;
}

export interface IExpenseType {
    id: string;
    name: string;
    type: string;
    createdAt: string;
    amount: number;
}

export type FieldType = {
  id?: string;
  name?: string;
  amount?: number;
  expense_or_income?: string;
  type?: string;
  date?: string;
  payment_method?: string;
};