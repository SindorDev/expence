import Sidebar from "../components/sidebar/Sidebar"
import Headers from "../components/header/Headers"
import ExpenseContainer from "../components/expense-container";
import { Breadcrumb, Button, Layout } from "antd";
import { useState } from "react";
const { Content } = Layout;
const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
              <Layout>
                     <Headers collapsed={collapsed} setCollapsed={setCollapsed} />
                <Layout>
                     <Sidebar collapsed={collapsed}/>
                  <Layout style={{ padding: '0 24px 24px' }}>
                    <div className="flex items-center justify-between">
                    <Breadcrumb style={{ margin: '16px 0', fontSize: "24px", fontWeight: "bold" }}>
                      <Breadcrumb.Item>Manager</Breadcrumb.Item>
                      <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
                    </Breadcrumb>

                      <Button type="primary" onClick={() => setIsModalOpen(true)}>
                         Create Transaction
                      </Button>
                    </div>
                    <Content
                      style={{
                        padding: 24,
                        margin: 0,
                        minHeight: 280,
                        background: "#fff",
                        borderRadius: "16px",
                      }}
                    >
              <ExpenseContainer isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
                     
                    </Content>
                  </Layout>
                </Layout>
              </Layout>
            );
}

export default Dashboard