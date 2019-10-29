import React, { Component } from 'react';

import {Link} from 'react-router-dom'

class NewsList extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li>
                        {/* <Link to="/newsdetail/1001">特没谱和金将军在38线聚会</Link> */}
                        {/* <Link to="/newsdetail?newsId=1001&address=韩国">特没谱和金将军在38线聚会</Link> */}

                        <Link to={{pathname:'/newsdetail',search:'?newsId=1001&address=韩国'}}>特没谱和金将军在38线聚会</Link>
                    </li>
                    <li>北京新机场竣工</li>
                    <li>
                        {/* <Link to="/newsdetail/1003">杜兰特加盟篮网</Link> */}
                        <Link to="/newsdetail?newsId=1003&address=中国">杜兰特加盟篮网</Link>
                    </li>
                </ul>
            </div>
        );
    }
}

export default NewsList;