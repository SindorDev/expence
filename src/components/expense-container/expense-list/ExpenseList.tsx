import { useSelector } from "react-redux";
import { Col, Row, Statistic, Typography } from "antd";
import { ITransaction } from "../../../types";

const { Title } = Typography;

const ExpenseList = () => {
  const {
    transactionHistory: { income, expense },
  } = useSelector((state: any) => state.transaction);
  return (
    <div className="flex gap-4">
      <div className="flex flex-1 flex-col gap-1">
        <Title level={3}>Income</Title>
        {income.map((item: ITransaction, index: number) => (
          <div
            className="bg-green-200 border-[1px] p-2 border-green-600"
            key={index}
          >
            <Row gutter={16}>
              <Col span={12}>
                <Statistic prefix="UZS" valueStyle={{ color: "green" }} title={item.name} value={item.amount} />
              </Col>
            </Row>
          </div>
        ))}
      </div>
      <div className="flex flex-1 flex-col gap-1">
        <Title level={3}>Expense</Title>
        {expense.map((item: ITransaction, index: number) => (
          <div
            className="bg-red-200 border-[1px] p-2 border-red-600"
            key={index}
          >
            <Row gutter={16}>
              <Col span={12}>
                <Statistic prefix="UZS" valueStyle={{ color: "green" }} title={item.name} value={item.amount} />
              </Col>
            </Row>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExpenseList;
