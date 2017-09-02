/**
 * Created by arunatebel on 9/2/17.
 */

import {FlowRouter} from 'meteor/kadira:flow-router'
import React from 'react'
import {mount} from 'react-mounter'

import FelizeAuthRegisterComponent from "../components/FelizeAuthRegisterComponent";
import FelizeAuthLoginComponent from "../components/FelizeAuthLoginComponent";
import FelizeBaseAuthComponent from "../components/FelizeBaseAuthComponent";
import FelizeBaseLayoutComponent from '../../../core/components/layouts/FelizeBaseLayoutComponent'

const authRoutes = FlowRouter.group({
    prefix: '/auth',
    name: 'auth',
    triggersEnter: [function (context, redirect) {
    }]
});

authRoutes.route('/register', {
    action: function () {
        mount(FelizeBaseLayoutComponent, {
            content: <FelizeAuthRegisterComponent/>
        })
    },
    triggersEnter: [function (context, redirect) {
    }]
});


authRoutes.route('/login', {
    action: function () {
        mount(FelizeBaseAuthComponent, {
            content: <FelizeAuthLoginComponent/>
        })
    },
    triggersEnter: [function (context, redirect) {
    }]
});

export default FlowRouter;