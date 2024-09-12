import { TbFileAnalytics } from "react-icons/tb"; 
import { RxDashboard } from "react-icons/rx"; 
import { AiFillHome } from "react-icons/ai"; 
import { Layout, Menu, } from 'antd';
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
            icon: <AiFillHome size={20} />,
            label: 'Home',
            style: {
              color: "#000",
            }
          },
          {
            key: '2',
            icon: <RxDashboard size={20} />,
            label: 'Dashboard',
            style: {
              color: "#000",
            }
          },
          {
            key: '3',
            icon: <TbFileAnalytics size={20} />,
            label: 'Analytics',
            style: {
              color: "#000",
            }
          },
         ]}
       />
     </Sider>
  )
}

export default Sidebar