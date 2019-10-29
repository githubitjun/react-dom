import React, { Component } from 'react';

class NewsDetail extends Component {
    constructor(props){
        super()

        const query = new URLSearchParams(props.location.search)

        this.state = {
            newsId:query.get('newsId'),
            address:query.get('address')
        }
    }

    render() {
        return (
            <div>
                {/* params传参之后，获取值 */}
                {/* 新闻id---{this.props.match.params.newsId} */}
                新闻id---{this.state.newsId}---{this.state.address}
            </div>
        );
    }
}

export default NewsDetail;