import { useSelector } from "react-redux";
import { Typography } from "antd";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import currencyFormatter from 'currency-formatter';
import { Doughnut } from 'react-chartjs-2';
import { useEffect, useState } from "react";
import { ITransaction } from "../../../types";
const {Title} = Typography;

ChartJS.register(ArcElement, Tooltip, Legend);

const ExpenseDisplay = () => {
  const [incomeAmount, setIncomeAmount] = useState(0)
  const [expenseAmount, setExpenseAmount] = useState(0)
  const {totalAmount} = useSelector((state: any) => state.transaction)
  const {transactionHistory: {income, expense}} = useSelector((state: any) => state.transaction)

  useEffect(() => {
    if(income.length > 0){
      if(expense.length > 0){
        let result: number = 0
        for (let i = 0 ; i < expense.length; i++) {
          result += expense[i].amount;
        }
        setExpenseAmount(result)
      }
    setIncomeAmount(income[0].amount)
    }
  }, [income, expense])


  const data = {
    labels: ['Expense', 'Income'],
    datasets: [
      {
        label: 'Votes',
        data: [expenseAmount, incomeAmount],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(75, 192, 192, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(75, 192, 192, 1)',
        ],
        borderWidth: 4
      },
    ],
  };

  return (
    <div className="flex items-center justify-between w-full flex-col">
      <div className="grid grid-cols-4 gap-5  w-full">
        {
          income.slice(0, 2).map((item: ITransaction) => {
            return (
              <div className="flex justify-start gap-5 w-full max-w-[210px] min-h-[100px] bg-green-200 p-2 rounded-md flex-col">
                <h3 className="text-black-600 text-end text-lg pl-5 font-bold">Income</h3>
                <div className="flex items-center gap-2">
                <h1 className="text-black-600 text-lg font-bold">{item.name}:</h1>
                <p className="text-black-600 text-lg font-bold">{item.amount}</p>
                </div>
              </div>
            )
          })
        }
           {
          expense.slice(0, 2).map((item: ITransaction) => {
            return (
              <div className="flex justify-start gap-5 w-full max-w-[210px] min-h-[100px] bg-red-200 p-2 rounded-md flex-col">
                <h3 className="text-black-600 text-end text-lg pl-5 font-bold">Expense</h3>
                <div className="flex items-center gap-2">
                <h1 className="text-black-600 text-lg font-bold">{item.name}:</h1>
                <p className="text-black-600 text-lg font-bold">{item.amount}</p>
                </div>
              </div>
            )
          })
        }
      </div>
      {
        totalAmount ? (
          <div className="flex items-center justify-center w-[40%] flex-col mt-10">
      <Doughnut data={data} />
      <Title className="text-center mt-8" level={1}>{currencyFormatter.format(totalAmount, { code: 'UZS' }).replace("сўм", "UZS")}</Title>  
      </div>
        ) : (
          <div className="flex items-center justify-center w-[40%] flex-col mt-10">
            <h1 className="text-black-600 text-lg font-bold">No transactions</h1>
          </div>
        )
      }
     </div>
  )
}

export default ExpenseDisplay