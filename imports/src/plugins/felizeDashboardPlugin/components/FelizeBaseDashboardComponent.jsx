import React from 'react';

class FelizeBaseDashboardComponent extends React.Component {
    render() {
        return (
            <div>
                <div className="col-md-5 col-md-offset-1">
                    <div className="card">
                        <h6 className="col-md-offset-4">Allocated Resources</h6>
                        <table className="table">
                            <thead>
                            <tr>
                                <th className="text-center">#</th>
                                <th>Name</th>
                                <th>Job Position</th>
                                <th>Since</th>
                                <th className="text-right">Salary</th>
                                <th className="text-right">Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td className="text-center">1</td>
                                <td>Andrew Mike</td>
                                <td>Develop</td>
                                <td>2013</td>
                                <td className="text-right">&euro; 99,225</td>
                                <td className="td-actions text-right">
                                    <button type="button" rel="tooltip" title="View Profile"
                                            className="btn btn-info btn-simple btn-xs">
                                        <i className="fa fa-user"/>
                                    </button>
                                    <button type="button" rel="tooltip" title="Edit Profile"
                                            className="btn btn-success btn-simple btn-xs">
                                        <i className="fa fa-edit"/>
                                    </button>
                                    <button type="button" rel="tooltip" title="Remove"
                                            className="btn btn-danger btn-simple btn-xs">
                                        <i className="fa fa-times"/>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td className="text-center">2</td>
                                <td>John Doe</td>
                                <td>Design</td>
                                <td>2012</td>
                                <td className="text-right">&euro; 89,241</td>
                                <td className="td-actions text-right">
                                    <button type="button" rel="tooltip" title="View Profile"
                                            className="btn btn-info btn-simple btn-xs">
                                        <i className="fa fa-user"/>
                                    </button>
                                    <button type="button" rel="tooltip" title="Edit Profile"
                                            className="btn btn-success btn-simple btn-xs">
                                        <i className="fa fa-edit"/>
                                    </button>
                                    <button type="button" rel="tooltip" title="Remove"
                                            className="btn btn-danger btn-simple btn-xs">
                                        <i className="fa fa-times"/>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td className="text-center">3</td>
                                <td>Alex Mike</td>
                                <td>Design</td>
                                <td>2010</td>
                                <td className="text-right">&euro; 92,144</td>
                                <td className="td-actions text-right">
                                    <button type="button" rel="tooltip" title="View Profile"
                                            className="btn btn-info btn-simple btn-xs">
                                        <i className="fa fa-user"></i>
                                    </button>
                                    <button type="button" rel="tooltip" title="Edit Profile"
                                            className="btn btn-success btn-simple btn-xs">
                                        <i className="fa fa-edit"></i>
                                    </button>
                                    <button type="button" rel="tooltip" title="Remove"
                                            className="btn btn-danger btn-simple btn-xs">
                                        <i className="fa fa-times"></i>
                                    </button>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="col-md-5">
                    <div className="card">
                        <h6 className="col-md-offset-4">Allocated Resources</h6>
                        <table className="table">
                            <thead>
                            <tr>
                                <th className="text-center">#</th>
                                <th>Name</th>
                                <th>Job Position</th>
                                <th>Since</th>
                                <th className="text-right">Salary</th>
                                <th className="text-right">Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td className="text-center">1</td>
                                <td>Andrew Mike</td>
                                <td>Develop</td>
                                <td>2013</td>
                                <td className="text-right">&euro; 99,225</td>
                                <td className="td-actions text-right">
                                    <button type="button" rel="tooltip" title="View Profile"
                                            className="btn btn-info btn-simple btn-xs">
                                        <i className="fa fa-user"/>
                                    </button>
                                    <button type="button" rel="tooltip" title="Edit Profile"
                                            className="btn btn-success btn-simple btn-xs">
                                        <i className="fa fa-edit"/>
                                    </button>
                                    <button type="button" rel="tooltip" title="Remove"
                                            className="btn btn-danger btn-simple btn-xs">
                                        <i className="fa fa-times"/>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td className="text-center">2</td>
                                <td>John Doe</td>
                                <td>Design</td>
                                <td>2012</td>
                                <td className="text-right">&euro; 89,241</td>
                                <td className="td-actions text-right">
                                    <button type="button" rel="tooltip" title="View Profile"
                                            className="btn btn-info btn-simple btn-xs">
                                        <i className="fa fa-user"/>
                                    </button>
                                    <button type="button" rel="tooltip" title="Edit Profile"
                                            className="btn btn-success btn-simple btn-xs">
                                        <i className="fa fa-edit"/>
                                    </button>
                                    <button type="button" rel="tooltip" title="Remove"
                                            className="btn btn-danger btn-simple btn-xs">
                                        <i className="fa fa-times"/>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td className="text-center">3</td>
                                <td>Alex Mike</td>
                                <td>Design</td>
                                <td>2010</td>
                                <td className="text-right">&euro; 92,144</td>
                                <td className="td-actions text-right">
                                    <button type="button" rel="tooltip" title="View Profile"
                                            className="btn btn-info btn-simple btn-xs">
                                        <i className="fa fa-user"></i>
                                    </button>
                                    <button type="button" rel="tooltip" title="Edit Profile"
                                            className="btn btn-success btn-simple btn-xs">
                                        <i className="fa fa-edit"></i>
                                    </button>
                                    <button type="button" rel="tooltip" title="Remove"
                                            className="btn btn-danger btn-simple btn-xs">
                                        <i className="fa fa-times"></i>
                                    </button>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div>
                    <div className="col-md-4">
                        <div className="card card-nav-tabs">
                            <div className="header header-success">
                                <div className="nav-tabs-navigation">
                                    <div className="nav-tabs-wrapper">
                                        <ul className="nav nav-tabs" data-tabs="tabs">
                                            <li className="active">
                                                <a href="#profile" data-toggle="tab">
                                                    <i className="material-icons">face</i>
                                                    Profile
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#messages" data-toggle="tab">
                                                    <i className="material-icons">chat</i>
                                                    Messages
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#settings" data-toggle="tab">
                                                    <i className="material-icons">build</i>
                                                    Settings
                                                </a>

                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="content">
                                <div className="tab-content text-center">
                                    <div className="tab-pane active" id="profile">
                                        <p> I will be the leader of a company that ends up being worth billions of
                                            dollars,
                                            because
                                            I got the answers. I understand culture. I am the nucleus. I think that’s a
                                            responsibility that I have, to push possibilities, to show people, this is
                                            the
                                            level
                                            that things could be at. </p>
                                    </div>
                                    <div className="tab-pane" id="messages">
                                        <p> I think that’s a responsibility that I have, to push possibilities, to show
                                            people,
                                            this
                                            is the level that things could be at. I will be the leader of a company that
                                            ends up
                                            being worth billions of dollars, because I got the answers. I understand
                                            culture. I
                                            am
                                            the nucleus.</p>
                                    </div>
                                    <div className="tab-pane" id="settings">
                                        <p>I think that’s a responsibility that I have, to push possibilities, to show
                                            people,
                                            this
                                            is the level that things could be at. So when you get something that has the
                                            name
                                            Kanye
                                            West on it, it’s supposed to be pushing the furthest possibilities. I will
                                            be
                                            the
                                            leader
                                            of a company that ends up being worth billions of dollars, because I got the
                                            answers.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card card-nav-tabs">
                            <div className="header header-danger">
                                <div className="nav-tabs-navigation">
                                    <div className="nav-tabs-wrapper">
                                        <ul className="nav nav-tabs" data-tabs="tabs">
                                            <li className="active">
                                                <a href="#profile" data-toggle="tab">
                                                    <i className="material-icons">face</i>
                                                    Profile
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#messages" data-toggle="tab">
                                                    <i className="material-icons">chat</i>
                                                    Messages
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#settings" data-toggle="tab">
                                                    <i className="material-icons">build</i>
                                                    Settings
                                                </a>

                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="content">
                                <div className="tab-content text-center">
                                    <div className="tab-pane active" id="profile">
                                        <p> I will be the leader of a company that ends up being worth billions of
                                            dollars,
                                            because
                                            I got the answers. I understand culture. I am the nucleus. I think that’s a
                                            responsibility that I have, to push possibilities, to show people, this is
                                            the
                                            level
                                            that things could be at.  </p>
                                    </div>
                                    <div className="tab-pane" id="messages">
                                        <p> I think that’s a responsibility that I have, to push possibilities, to show
                                            people,
                                            this
                                            is the level that things could be at. I will be the leader of a company that
                                            ends up
                                            being worth billions of dollars, because I got the answers. I understand
                                            culture. I
                                            am
                                            the nucleus. </p>
                                    </div>
                                    <div className="tab-pane" id="settings">
                                        <p>I think that’s a responsibility that I have, to push possibilities, to show
                                            people,
                                            this
                                            is the level that things could be at. So when you get something that has the
                                            name
                                            Kanye
                                            West on it, it’s supposed to be pushing the furthest possibilities. I will
                                            be
                                            the
                                            leader
                                            of a company that ends up being worth billions of dollars, because I got the
                                            answers.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card card-nav-tabs">
                            <div className="header header-info">
                                <div className="nav-tabs-navigation">
                                    <div className="nav-tabs-wrapper">
                                        <ul className="nav nav-tabs" data-tabs="tabs">
                                            <li className="active">
                                                <a href="#profile" data-toggle="tab">
                                                    <i className="material-icons">face</i>
                                                    Profile
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#messages" data-toggle="tab">
                                                    <i className="material-icons">chat</i>
                                                    Messages
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#settings" data-toggle="tab">
                                                    <i className="material-icons">build</i>
                                                    Settings
                                                </a>

                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="content">
                                <div className="tab-content text-center">
                                    <div className="tab-pane active" id="profile">
                                        <p> I will be the leader of a company that ends up being worth billions of
                                            dollars,
                                            because
                                            I got the answers. I understand culture. I am the nucleus. I think that’s a
                                            responsibility that I have, to push possibilities, to show people, this is
                                            the
                                            level
                                            that things could be at. </p>
                                    </div>
                                    <div className="tab-pane" id="messages">
                                        <p> I think that’s a responsibility that I have, to push possibilities, to show
                                            people,
                                            this
                                            is the level that things could be at. I will be the leader of a company that
                                            ends up
                                            being worth billions of dollars, because I got the answers. I understand
                                            culture. I
                                            am
                                            the nucleus.</p>
                                    </div>
                                    <div className="tab-pane" id="settings">
                                        <p>I think that’s a responsibility that I have, to push possibilities, to show
                                            people,
                                            this
                                            is the level that things could be at. So when you get something that has the
                                            name
                                            Kanye
                                            West on it, it’s supposed to be pushing the furthest possibilities. I will
                                            be
                                            the
                                            leader
                                            of a company that ends up being worth billions of dollars, because I got the
                                            answers.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default FelizeBaseDashboardComponent;
