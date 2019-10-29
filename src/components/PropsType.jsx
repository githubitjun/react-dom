import React, { Component } from 'react';
import PropTypes from 'prop-types'

class PropsType extends Component {
    static propTypes = {
        name:PropTypes.string.isRequired,
        age:PropTypes.number
    }

    static defaultProps = {
        age: 100
    }

    render() {
        return (
            <div>
                {this.props.name}---{this.props.age}
            </div>
        );
    }
}

// 静态属性
// PropsType.propTypes = {
//     name:PropTypes.string.isRequired,
//     age:PropTypes.number
// }

export default PropsType;