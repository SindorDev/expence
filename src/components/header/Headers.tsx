import logo from "../../icons/logo.svg"
import profile from "../../images/profile.png"
import { Button, Layout } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";

const { Header } = Layout;
const Headers = ({ collapsed, setCollapsed }: any) => {
  return (
    <Header style={{ display: "flex", alignItems: "center", background: "#111" }}>
      <div className="flex gap-12 w-full max-w-[1480px] mx-auto items-center justify-between">
        <div className="flex gap-12">
        <img src={logo} width={130} alt="cite logo" />
        <Button
          type="text"
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={() => setCollapsed(!collapsed)}
          style={{
            fontSize: "16px",
            width: 64,
            height: 64,
            color: "#fff",
          }}
        />
        </div>
        <div className="shadow-cm cursor-pointer rounded-full">
          <img src={profile} alt="profile user" />
        </div>
      </div>
    </Header>
  );
};

export default Headers;
