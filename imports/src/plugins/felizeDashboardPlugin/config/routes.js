/**
 * Created by arunatebel on 9/2/17.
 */

import {FlowRouter} from 'meteor/kadira:flow-router'
import React from 'react'
import {mount} from 'react-mounter'

import FelizeBaseLayoutComponent from '../../../core/components/layouts/FelizeBaseLayoutComponent'
import FelizeBaseDashboardComponent from "../components/FelizeBaseDashboardComponent";

const dashboardRoutes = FlowRouter.group({
    prefix: '/dashboard',
    name: 'dashboard',
    triggersEnter: [function (context, redirect) {
    }]
});

dashboardRoutes.route('/', {
    action: function () {
        mount(FelizeBaseLayoutComponent, {
            content: <FelizeBaseDashboardComponent />
        })
    },
    triggersEnter: [function (context, redirect) {
    }]
});

dashboardRoutes.route('/temp', {
    action: function () {
        mount(FelizeBaseLayoutComponent, {
            content: <code>Temp!</code>
        })
    },
    triggersEnter: [function (context, redirect) {
    }]
});

export default FlowRouter;