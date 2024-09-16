import Sidebar from "../../components/sidebar/Sidebar"
import Headers from "../../components/header/Headers"
import { Breadcrumb, Layout } from "antd";
import { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
const { Content } = Layout;
const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(false);

  const {pathname} = useLocation()

  return (
              <Layout>
                     <Headers collapsed={collapsed} setCollapsed={setCollapsed} />
                <Layout>
                     <Sidebar collapsed={collapsed}/>
                  <Layout style={{ padding: '0 24px 24px' }}>
                    <div className="flex items-center justify-between">
                    <Breadcrumb style={{ margin: '16px 0', fontSize: "24px", fontWeight: "bold" }}>
                      <Breadcrumb.Item>Admin</Breadcrumb.Item>
                      <Breadcrumb.Item>{pathname === "/" ? "Dashboard" : pathname.split("/")[2]}</Breadcrumb.Item>
                    </Breadcrumb>

                    </div>
                    <Content
                      style={{
                        padding: 24,
                        margin: 0,
                        minHeight: "100vh",
                        background: "#fff",
                        borderRadius: "16px",
                      }}
                    >
                      <Outlet/>
                    </Content>
                  </Layout>
                </Layout>
              </Layout>
            );
}

export default Dashboard