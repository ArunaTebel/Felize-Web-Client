import React from 'react';
import TopNavigationComponent from '../TopNavigationComponent';

class FelizeBaseLayoutComponent extends React.Component {
    render() {
        return (
            <div>
                <TopNavigationComponent/>
                <div>
                    {this.props.content}
                </div>
            </div>
        );
    }
}

export default FelizeBaseLayoutComponent;
