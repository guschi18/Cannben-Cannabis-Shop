import { Modal, Select, Button, Input} from "antd";
import {ShoppingCartOutlined} from "@ant-design/icons";
import {useState} from "react";
import { useMoralis} from "react-moralis";


const {Option} = Select;
function Purchase({produkte}) {
const [isModalVisible, setIsModalVisible] = useState(false);
const [delivery, setDelivery] = useState("");
const {Moralis} = useMoralis();

const handleOk = async () => {

    // Get The Price of ETH
    const options1 = {
        address: "0x2170ed0880ac9a755fd29b2688956bd959f933f8",
        chain: "bsc",
        exchange: "PancakeSwapv2",
      };
      const price = await Moralis.Web3API.token.getTokenPrice(options);
      const priceEth = produkte.price / price.usdPrice;

      // Send ETh to store owner address

      const options = {
        type: "native",
        amount: Moralis.Units.ETH(priceEth),
        receiver: "0x3b4d18C5c623536b8e65Cee48bc5185F1313DdEA",
      };
      let result = await Moralis.transfer(options1);


    setIsModalVisible(false);
}

return (
    <>
<span className="price"> €{produkte.price}</span>
      <p>Versandkostenfrei</p>
      <h1 style={{ color: "green" }}> Vorrätig </h1>
      <h3>Anzahl</h3>
      <Select defaultValue={1} style={{ width: "100%" }}>
        <Option value={1}>1</Option>
        <Option value={2}>2</Option>
        <Option value={3}>3</Option>
        <Option value={4}>4</Option>
        <Option value={5}>5</Option>
      </Select>
      <Button
      className="login"
      style={{ width: "100%", marginTop: "50px" }}
      onClick={()=>setIsModalVisible(true)}
      >
      <ShoppingCartOutlined /> Jetzt kaufen 
    </Button>
<Modal 
title="Bestellung abschließen"
visible={isModalVisible}
onOk={handleOk}
        onCancel={()=>setIsModalVisible(false)}
        >
        <div style={{ display: "flex" }}>
          <img src={produkte.image} alt="product" style={{ width: "200px" }}></img>
          <div>
            <h3>{produkte.Name}</h3>
            <h2>€{produkte.price}</h2>
            <h4>Versandadresse eingeben</h4>
            <Input onChange={(value) => setDelivery(value.target.value)}></Input>
          </div>
        </div>



        </Modal>
    </>
)
}

export default Purchase;