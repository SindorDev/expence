import { AiOutlineDelete } from "react-icons/ai"; 
import { TbEdit } from "react-icons/tb"; 
import React, { useState } from 'react';
import { Button, Input, Space, Table } from 'antd';
import type { TableProps } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { ITransaction } from "../../../types";
import { deleteTransaction } from "../../../redux/slices/transactionHistory";

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  type: string[];
}

const ExpenseList: React.FC = () => {
  const [selected, setSelected] = useState<"income" | "expense">("income")
  const [searchValue, setSearchValue] = useState<string>("")
  const dispatch = useDispatch();
  const {transactionHistory: { income, expense }} = useSelector((state: any) => state.transaction);

  const handleDelete = (data: ITransaction) => {
    dispatch(deleteTransaction(data))
  }

  const filteredData = (data: ITransaction[]) => {
    return data.filter((item) => item.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()))
  }

  const handleSearch = (value: string) => {
    setSearchValue(value.toLocaleLowerCase())
  }


  const columns: TableProps<ITransaction>['columns'] = [
    

    {
      title: "Name",
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>,
    },
    
    {
      title: selected === "income" ? "Income" : "Expense",
      dataIndex: 'expense_or_income',
      key: selected === "income" ? "income" : "expense",
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount',
    },
    {
      title: 'Type',
      key: 'type',
      dataIndex: 'type',
    },
    {
      title: 'Action',
      key: 'action',
      render: (data) => (
        <Space size="middle">
          <button className="rounded-full bg-gray-500 text-white p-2">
            <TbEdit size={20} />
          </button>
          <button onClick={() => {
            handleDelete(data)
          }} className="rounded-full bg-red-500 text-white p-2">
            <AiOutlineDelete size={20} />
          </button>
        </Space>
      ),
    },
  ];
  
  return (
    <>
    <Space style={{ marginBottom: 16 }} className="flex items-center justify-between">
     <Input onChange={(e) => handleSearch(e.target.value)} placeholder="Search by name" prefix={<SearchOutlined />} className="w-[140%] justify-between items-center flex-row-reverse"/>
     <div className="flex items-center gap-5">
    <Button onClick={() => setSelected("income")}>Income</Button>
    <Button onClick={() => setSelected("expense")}>Expense</Button>
     </div>
  </Space>
    <Table key={selected} columns={columns} dataSource={filteredData(selected === "income" ? income : expense)} />
    </>
  )
}

export default ExpenseList;