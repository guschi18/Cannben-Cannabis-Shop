import { PageHeader, Button, Input, Space, Badge } from 'antd';
import { useMoralis } from "react-moralis";
import { Link } from 'react-router-dom';
import './Header.css'
import Cannben from "../images/Logo-Cannben.png";
import Deutschland from '../images/germany.png';
import {ShoppingCartOutlined, MenuOutlined} from '@ant-design/icons';


const {Search} = Input;
const categories = ["Blüten", "Öle", "Grinder", "Paper", "Aktivkohlefilter", "Roller"];

const Header = () => {
  const { authenticate, account } = useMoralis();
  return (
    <div className="site-page-header-ghost-wrapper">
      <PageHeader
        ghost={false}
        extra={[
          <>
            <img src={Cannben} className="logo"></img>
            <Search
              placeholder="Finde dein Produkt"
              enterButton
              className = "searchBar"
            />
            <Button className='login' key="1" type="primary" onClick={() => authenticate()}>
            {account ? <span>{account.slice(0,5)}...</span> : <span>login</span>}
            </Button>
            <Space size={"large"}>
              
              <Badge count={0} showZero>
                <span className="header-buttons">
                  <ShoppingCartOutlined className="header-icon" />
                  Einkaufswagen
                </span>
              </Badge>
              <Space className="header-buttons" size={"small"}>
                <img src={Deutschland} alt="region" className="flag"></img>
              </Space>

              </Space>
          </>
        ]}>
      </PageHeader>
      <div className="site-page-subheader-ghost-wrapper">
      <Space size={"middle"}>
        <Space size={"small"} style={{fontWeight:"bold"}}>
          <MenuOutlined />
          Kategorien
        </Space>
        {categories.map((e) =>{
          return(
            <Link to="/categories" state={e} className="categories">{e}
            </Link>
          )

        })}
        </Space>
        </div>
    </div>
  )
}

export default Header;