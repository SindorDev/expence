import ExpenseDisplay from "./expense-display/ExpenseDisplay"
import ExpenseForm from "./expense-form/ExpenseForm"

const index = () => {


  return (
    <div className="max-w-[850px] mx-auto flex-1 p-10">
        <div className="flex justify-between">
        <ExpenseForm/>
        <ExpenseDisplay/>
        </div>
    </div>
  )
}

export default index