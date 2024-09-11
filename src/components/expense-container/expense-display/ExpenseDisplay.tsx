import { useSelector } from "react-redux";
import { Typography } from "antd";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import currencyFormatter from 'currency-formatter';
import { Doughnut } from 'react-chartjs-2';
import { useEffect, useState } from "react";
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
        const result = expense[0]?.amount + expense[1].amount
        setExpenseAmount(result)
      }
    setIncomeAmount(income[0].amount)
    }
  }, [income, expense])

  const data = {
    labels: ['Expense', 'Income'],
    datasets: [
      {
        label: '# of Votes',
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
    <div>
      <Doughnut data={data} />
      <Title className="text-center mt-8" level={3}>{currencyFormatter.format(totalAmount, { code: 'UZS' }).replace("сўм", "UZS")}</Title>
    </div>
  )
}

export default ExpenseDisplay