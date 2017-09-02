import React from 'react';

class FelizeBaseAuthComponent extends React.Component {
    render() {
        return (
            <div>
                <div>
                    {this.props.content}
                </div>
            </div>
        );
    }
}

export default FelizeBaseAuthComponent;
