import React, { Component } from 'react';

class For extends Component {
    constructor(){
        super()

        this.state = {
            persons:[
                {id:1001,name:'张起灵',address:'洛阳'},
                {id:1002,name:'胡八一',address:'北京'},
                {id:1003,name:'吴邪',address:'长沙'},
                {id:1004,name:'小胖',address:'衡阳'}
            ]
        }
    }
    render() {
        return (
            <div>
                <ul>
                    {
                        this.state.persons.map(item => {
                            return <li key={item.id}>
                                {item.name}---{item.address}
                            </li>
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default For;