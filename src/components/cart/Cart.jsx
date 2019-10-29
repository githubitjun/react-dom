import React, { Component } from "react";

import { Table, Button, InputNumber, MessageBox } from "element-react";

import store from "./store/store";

export default class Cart extends Component {
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
      goodsList: store.getState(),
      totalPrice: this.calcTotalPrice()
    };
  }

  // 计算总价格
  calcTotalPrice = () => {
    let totalPrice = 0;

    store.getState().forEach(item => {
      totalPrice += item.num * item.price;
    });

    return totalPrice;
  };

  // componentWillMount() {
  //   this.setState({
  //     goodsList: store.getState()
  //   });
  // }

  componentDidMount() {
    store.subscribe(() => {
      this.setState({
        goodsList: store.getState(),
        totalPrice: this.calcTotalPrice()
      });
    });
  }

  componentWillUnmount() {
    store.unsubscribe && store.unsubscribe();
  }

  // 修改商品
  editGoods = (id, newNum) => {
    // console.log(id,newNum)
    // 触发action
    store.dispatch({
      type: "UPDATE_GOODS",
      goods: {
        id,
        newNum
      }
    });
  };

  // 删除商品
  deleteGoods = id => {
    MessageBox.confirm("确定删除该商品吗?", "提示", {
      type: "warning"
    })
      .then(() => {
        store.dispatch({
          type: "DELETE_GOODS",
          id
        });
      })
      .catch(() => {});
  };

  render() {
    return (
      <div style={{ marginLeft: 5 }}>
        <Table
          style={{ width: "100%" }}
          columns={this.state.columns}
          data={this.state.goodsList}
        />
        <p>总价：{this.state.totalPrice}</p>
        <Button type="success">结算</Button>
      </div>
    );
  }
}
