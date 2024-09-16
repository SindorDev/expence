import { AiOutlineDelete } from "react-icons/ai"; 
import { TbEdit } from "react-icons/tb"; 
import React, { useState } from 'react';
import { Button, Space, Table, Tag } from 'antd';
import type { TableProps } from 'antd';
import { useSelector } from 'react-redux';

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  type: string[];
}

const ExpenseList: React.FC = () => {
  const [selected, setSelected] = useState<"income" | "expense">("income")

  const {transactionHistory: { income, expense }} = useSelector((state: any) => state.transaction);

  const columns: TableProps<DataType>['columns'] = [
    

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
      render: () => (
        <Space size="middle">
          <button className="rounded-full bg-gray-500 text-white p-2">
            <TbEdit size={20} />
          </button>
          <button className="rounded-full bg-red-500 text-white p-2">
            <AiOutlineDelete size={20} />
          </button>
        </Space>
      ),
    },
  ];

  return (
    <>
    
    <Space style={{ marginBottom: 16 }}>
    <Button onClick={() => setSelected("income")}>Income</Button>
    <Button onClick={() => setSelected("expense")}>Expense</Button>
  </Space>
    <Table key={selected} columns={columns} dataSource={selected === "income" ? income : expense} />
    </>
  )
}

export default ExpenseList;