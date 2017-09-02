import React from 'react';

class FelizeAuthRegisterComponent extends React.Component {
    render() {
        return (
            <div className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-md-offset-4">
                            <div className="card card-signup">
                                <form className="form" method="" action="">
                                    <div className="header header-primary text-center">
                                        <h3>Sign Up</h3>
                                        <div className="social-line"/>
                                    </div>
                                    <div className="content">

                                        <div className="input-group">
										<span className="input-group-addon">
											<i className="material-icons">face</i>
										</span>
                                            <div className="form-group is-empty"><input type="text"
                                                                                        className="form-control"
                                                                                        placeholder="First Name..."
                                                                                        autoComplete="off"/><span
                                                className="material-input"/></div>
                                        </div>

                                        <div className="input-group">
										<span className="input-group-addon">
											<i className="material-icons">email</i>
										</span>
                                            <div className="form-group is-empty"><input type="text"
                                                                                        className="form-control"
                                                                                        placeholder="Email..."
                                                                                        autoComplete="off"
                                            /><span
                                                className="material-input"/></div>
                                        </div>

                                        <div className="input-group">
										<span className="input-group-addon">
											<i className="material-icons">lock_outline</i>
										</span>
                                            <div className="form-group is-empty"><input type="password"
                                                                                        placeholder="Password..."
                                                                                        className="form-control"
                                                                                        autoComplete="off"
                                            /><span
                                                className="material-input"/></div>
                                        </div>
                                    </div>
                                    <div className="footer text-center">
                                        <a href="#" className="btn btn-simple btn-primary btn-lg">Get Started</a>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default FelizeAuthRegisterComponent;
