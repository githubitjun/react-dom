import React, { Component } from "react";

import { Table, Button, InputNumber, MessageBox } from "element-react";

// 建立当前Cart组件与Store的关联
import {connect} from 'react-redux'

// 导入 actionCreators
import {updateGoodsAction,deleteGoodsAction} from './store/actionCreators'

class Cart extends Component {
  constructor() {
    super();

    this.state = {
      columns: [
        {
          label: "名字",
          prop: "name"
        },
        {
          label: "图片",
          render: data => {
            return <img style={{ width: 100, height: 100 }} src={data.url} />;
          }
        },
        {
          label: "数量",
          render: data => {
            return (
              <InputNumber
                min={1}
                size="small"
                value={data.num}
                onChange={this.editGoods.bind(this, data.id)}
                defaultValue={data.num}
              />
            );
          }
        },
        {
          label: "单价",
          prop: "price"
        },
        {
          label: "总价",
          render: ({ num, price }) => {
            return <span>{num * price}</span>;
          }
        },
        {
          label: "操作",
          render: data => {
            return (
              <Button
                onClick={this.deleteGoods.bind(this, data.id)}
                type="danger"
              >
                删除
              </Button>
            );
          }
        }
      ],
    };
  }

  // 修改商品
  editGoods = (id, newNum) => {
    this.props.updateGoods({
      id,
      newNum
    })
  };

  // 删除商品
  deleteGoods = id => {
    MessageBox.confirm("确定删除该商品吗?", "提示", {
      type: "warning"
    })
      .then(() => {
        this.props.deleteGoods(id)
      })
      .catch(() => {});
  };

  render() {
    return (
      <div style={{ marginLeft: 5 }}>
        <Table
          style={{ width: "100%" }}
          columns={this.state.columns}
          data={this.props.goodsList}
        />
        <p>总价：{this.props.totalPrice}</p>
        <Button type="success">结算</Button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateGoods(item){
      dispatch(updateGoodsAction(item))
    },
    deleteGoods(id){
      dispatch(deleteGoodsAction(id))
    }
  }
}

export default connect(
  state => {
    const calcTotalPrice = () => {
      let totalPrice = 0
      state.forEach(item => {
        totalPrice += item.num * item.price
      })

      return totalPrice
    }

    return {
      goodsList:state,
      totalPrice:calcTotalPrice()
    }
  }
,mapDispatchToProps)(Cart)