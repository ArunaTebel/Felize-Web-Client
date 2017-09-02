import React from 'react'
import {mount} from 'react-mounter'

require('../../src/plugins/felizeAuthPlugin/config/routes');
require('../../src/plugins/felizeDashboardPlugin/config/routes');

import FelizeBaseLayoutComponent from '../../src/core/components/layouts/FelizeBaseLayoutComponent'

FlowRouter.route('/', {
    name: 'homepage',
    action() {
        mount(FelizeBaseLayoutComponent, {
            content: <div className="container">
                <div className="jumbotron">
                    <h1>Welcome to Felize</h1>
                    <p className="small">~ An Open Source Project Management App ...</p>
                    <p><a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a></p>
                </div>
            </div>
        })
    }
});