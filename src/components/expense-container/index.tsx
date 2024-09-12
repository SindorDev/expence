import ExpenseDisplay from "./expense-display/ExpenseDisplay"
import ExpenseForm from "./expense-form/ExpenseForm"
import ExpenseList from "./expense-list/ExpenseList"

const index = ({isModalOpen, setIsModalOpen}: any) => {


  return (
    <div className="max-w-[850px] mx-auto flex-1 p-10">
        <div className="flex justify-between">
        <ExpenseForm isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
        <ExpenseDisplay/>
        </div>
        <ExpenseList/>
    </div>
  )
}

export default index