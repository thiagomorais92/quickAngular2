"use strict";
var router_1 = require('@angular/router');
var hero_detail_component_1 = require('./hero-detail.component');
var hero_list_component_1 = require('./hero-list.component');
var dashboard_component_1 = require('./dashboardComponent/dashboard.component');
var appRoutes = [
    { path: '', component: dashboard_component_1.DashboardComponent },
    { path: 'hero/:id', component: hero_detail_component_1.HeroDetailComponent },
    { path: 'heroes', component: hero_list_component_1.HeroListComponent }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map