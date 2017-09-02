import React from 'react';

class TopNavigationComponent extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-primary" role="navigation">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse"
                                data-target="#bs-example-navbar-collapse-1">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"/>
                            <span className="icon-bar"/>
                            <span className="icon-bar"/>
                        </button>
                        <a href="/"><img height={60} src="/img/felize-logo.png" className="img-circle"/></a>
                    </div>
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav navbar-right">
                            <li className="active">
                                <a href="/dashboard"> <i className="material-icons">dashboard</i>Dashboard</a>
                            </li>
                            <li className="dropdown">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                                    <i className="material-icons">account_circle</i>
                                    <b className="caret"/>
                                    <div className="ripple-container"/></a>
                                <ul className="dropdown-menu dropdown-menu-right">
                                    <li><a href="/auth/login">Login</a></li>
                                    <li><a href="/auth/register">Register</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default TopNavigationComponent;
