import React from "react";
import type { FormProps } from "antd";
import { Button, Form, Input, InputNumber, Select, Typography } from "antd";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../redux/store";
import { createTransaction } from "../../../redux/slices/transactionHistory";
import { FieldType, ITransaction } from "../../../types";
import { useForm } from "antd/es/form/Form";

const { Option } = Select;
const { Title } = Typography;


declare global {
  interface String {
    capitalize(): string;
  }
}

String.prototype.capitalize = function () {
  return this[0]?.toUpperCase() + this?.slice(1);
};

const ExpenseForm = () => {
  const [form] = useForm();
  const dispatch = useDispatch<AppDispatch>();
  const [actionType, setActionType] = React.useState<"income" | "expense">(
    "income"
  );
  
  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    const id = Math.floor(Math.random() * 1000).toString();
    const transaction = {...values, id} as ITransaction;
    dispatch(createTransaction(transaction));
    form.resetFields();
  };


  return (
    <div>
      
  <Form
      form={form}
      name="basic"
      layout="horizontal"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      autoComplete="off"
    >
      <Title level={2}>Create an income or expense</Title>
      <Form.Item<FieldType>
        label="Income or Expense"
        name="expense_or_income"
        rules={[
          { required: true, message: "Please input your income or expense!" },
        ]}
      >
        <Select
          onChange={(value) => setActionType(value)}
          placeholder="Select income or expense"
        >
          <Option value="income">Income</Option>
          <Option value="expense">Expense</Option>
        </Select>
      </Form.Item>
      <Form.Item<FieldType>
        label={`${actionType.capitalize()} name`}
        name="name"
        rules={[{ required: true, message: "Please input your expense name!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item<FieldType>
        label={`${actionType.capitalize()} date`}
        name="date"
        rules={[
          { required: true, message: "Please input your expense amount!" },
        ]}
      >
        <Select>
          {Array.from({ length: (new Date().getFullYear() - 2019) * 365 }, (_, index) => {
            const date = new Date(2020, 0, 1);
            date.setDate(date.getDate() + index);
            const year = date.getFullYear();
            const month = date.getMonth() + 1;
            const day = date.getDate();
            const value = date.toISOString().slice(0, 10);
            return (
              <Option key={value} value={value}>
                {`${year}-${month}-${day}`}
              </Option>
            );
          })}
        </Select>
      </Form.Item>

      <Form.Item<FieldType>
        label={`${actionType.capitalize()} amount`}
        name="amount"
        rules={[
          { required: true, message: "Please input your expense amount!" },
        ]}
      >
        <InputNumber className="w-full" />
      </Form.Item>

      <Form.Item<FieldType>
        label={`${actionType.capitalize()} type`}
        name="type"
        rules={[{ required: true, message: "Please input your expense type!" }]}
      >
        <Select placeholder={`Select ${actionType} type`}>
          {actionType === 'expense' ? (
            <>
              <Option value="food">Food</Option>
              <Option value="travel">Travel</Option>
              <Option value="entertainment">Entertainment</Option>
              <Option value="utilities">Utilities</Option>
              <Option value="rent">Rent</Option>
              <Option value="healthcare">Healthcare</Option>
              <Option value="education">Education</Option>
              <Option value="shopping">Shopping</Option>
              
            </>
          ) : (
            <>
              <Option value="salary">Salary</Option>
              <Option value="bonus">Bonus</Option>
              <Option value="investment">Investment</Option>
              <Option value="freelance">Freelance</Option>
              <Option value="gift">Gift</Option>
              <Option value="rental">Rental Income</Option>
              <Option value="refund">Refund</Option>
              
            </>
          )}
          <Option value="other">Other</Option>
        </Select>
      </Form.Item>


      <Form.Item<FieldType>
        label={`${actionType.capitalize()} payment method`}
        name="payment_method"
        rules={[{ required: true, message: "Please input your expense payment method!" }]}
      >
        <Select placeholder={`Select ${actionType} payment method`}>
          <Option value="cash">Cash</Option>
          <Option value="card">Card</Option>
        </Select>
      </Form.Item>

      <Form.Item wrapperCol={{span: 24 }}>
        <Button type="primary" htmlType="submit" className="w-full !py-6">
          Create an {actionType}
        </Button>
      </Form.Item>
    </Form>
    </div>
  );
};

export default ExpenseForm;
