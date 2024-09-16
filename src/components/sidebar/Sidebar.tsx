import { BsFileEarmarkPlusFill } from "react-icons/bs"; 
import { TbFileAnalytics } from "react-icons/tb"; 
import { RxDashboard } from "react-icons/rx";  
import { Layout, Menu, } from 'antd';
import { Link } from "react-router-dom";
const { Sider } = Layout;


const Sidebar = ({collapsed}: any) => {
  return (
       <Sider  trigger={null} collapsible collapsed={collapsed} width={240} style={{ background: "#fff", padding: "1rem" }}>
       <Menu
         mode="inline"
         defaultSelectedKeys={['1']}
         style={{ height: '100%', borderRight: 0, display: "flex", flexDirection: "column", gap: "15px" }}
         items={[
          {
            key: '1',
            icon: <RxDashboard size={20} />,
            label: <Link to="">Dashboard</Link>,
            style: {
              color: "#000",
            }
          },
          {
            key: '2',
            icon: <TbFileAnalytics size={20} />,
            label: <Link to="dashboard/transactions">Transactions</Link>,
            style: {
              color: "#000",
            }
          },

          {
            key: '3',
            icon: <BsFileEarmarkPlusFill size={20} />,
            label: <Link to="dashboard/new-transaction">New Transaction</Link>,
            style: {
              color: "#222",
            }
          },
         ]}
       />
     </Sider>
  )
}

export default Sidebar