import ExpenseDisplay from "./expense-display/ExpenseDisplay"
import ExpenseForm from "./expense-form/ExpenseForm"
import ExpenseList from "./expense-list/ExpenseList"

const index = () => {
  return (
    <div className="max-w-[850px] mx-auto border-2 border-black flex-1 p-10">
        <div className="flex justify-between">
        <ExpenseForm/>
        <ExpenseDisplay/>
        </div>
        <ExpenseList/>
    </div>
  )
}

export default index