webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"container\">\n  <flash-messages></flash-messages>\n  <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_clients_clients_component__ = __webpack_require__("../../../../../src/app/components/clients/clients.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_client_details_client_details_component__ = __webpack_require__("../../../../../src/app/components/client-details/client-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_add_client_add_client_component__ = __webpack_require__("../../../../../src/app/components/add-client/add-client.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_edit_client_edit_client_component__ = __webpack_require__("../../../../../src/app/components/edit-client/edit-client.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_sidebar_sidebar_component__ = __webpack_require__("../../../../../src/app/components/sidebar/sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_register_register_component__ = __webpack_require__("../../../../../src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_page_not_found_page_not_found_component__ = __webpack_require__("../../../../../src/app/components/page-not-found/page-not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_settings_settings_component__ = __webpack_require__("../../../../../src/app/components/settings/settings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_client_service__ = __webpack_require__("../../../../../src/app/services/client.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__services_settings_service__ = __webpack_require__("../../../../../src/app/services/settings.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__guards_register_guard__ = __webpack_require__("../../../../../src/app/guards/register.guard.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



























//Create Routes
var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_10__components_dashboard_dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_24__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_18__components_register_register_component__["a" /* RegisterComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_25__guards_register_guard__["a" /* RegisterGuard */]] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_17__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'add-client', component: __WEBPACK_IMPORTED_MODULE_13__components_add_client_add_client_component__["a" /* AddClientComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_24__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'client/:id', component: __WEBPACK_IMPORTED_MODULE_12__components_client_details_client_details_component__["a" /* ClientDetailsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_24__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'edit-client/:id', component: __WEBPACK_IMPORTED_MODULE_14__components_edit_client_edit_client_component__["a" /* EditClientComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_24__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'settings', component: __WEBPACK_IMPORTED_MODULE_20__components_settings_settings_component__["a" /* SettingsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_24__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_19__components_page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_clients_clients_component__["a" /* ClientsComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_client_details_client_details_component__["a" /* ClientDetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_add_client_add_client_component__["a" /* AddClientComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_edit_client_edit_client_component__["a" /* EditClientComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_sidebar_sidebar_component__["a" /* SidebarComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_settings_settings_component__["a" /* SettingsComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_5_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_8__environments_environment__["a" /* environment */].firebase, 'clientpanel'),
                __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__["b" /* AngularFireAuthModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__["a" /* AngularFireDatabase */],
                __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_21__services_client_service__["a" /* ClientService */],
                __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"],
                __WEBPACK_IMPORTED_MODULE_22__services_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_24__guards_auth_guard__["a" /* AuthGuard */],
                __WEBPACK_IMPORTED_MODULE_23__services_settings_service__["a" /* SettingsService */],
                __WEBPACK_IMPORTED_MODULE_25__guards_register_guard__["a" /* RegisterGuard */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/add-client/add-client.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/add-client/add-client.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-6\">\n    <a routerLink=\"/\" href=\"#\" class=\"btn btn-link\">\n    <i class=\"fa fa-arrow-circle-o-left\"></i> Back To DashBoard\n    </a>\n  </div>\n  <div class=\"col-md-6\"></div>\n</div>\n\n<div class=\"card\">\n  <div class=\"card-header\">\n    Add Client\n  </div>\n  <div class=\"card-body\">\n    <form novalidate #f=\"ngForm\" (ngSubmit)=\"onSubmit(f)\">\n      \n      <div class=\"form-group\">\n        <label for=\"firstName\">First Name</label>\n        <input\n        type=\"text\"\n        class=\"form-control\"\n        [ngClass]=\"{'is-invalid':clientFirstName.errors?.required && clientFirstName.touched || clientFirstName.errors?.minlength && clientFirstName.touched}\"\n        [(ngModel)]=\"client.firstName\"\n        name=\"firstName\"\n        #clientFirstName = \"ngModel\"\n        minlength=\"2\"\n        required\n        >\n        <div *ngIf=\"clientFirstName.errors?.required && clientFirstName.touched\" class=\"invalid-feedback\">\n          First Name is required\n        </div>\n        <div *ngIf=\"clientFirstName.errors?.minlength && clientFirstName.touched\" class=\"invalid-feedback\">\n          Must be at least 2 characters\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"lastName\">Last Name</label>\n        <input\n        type=\"text\"\n        class=\"form-control\"\n        [ngClass]=\"{'is-invalid':clientLastName.errors?.required && clientLastName.touched || clientLastName.errors?.minlength && clientLastName.touched}\"\n        [(ngModel)]=\"client.lastName\"\n        name=\"lastName\"\n        #clientLastName = \"ngModel\"\n        minlength=\"2\"\n        required\n        >\n        <div *ngIf=\"clientLastName.errors?.required && clientLastName.touched\" class=\"invalid-feedback\">\n          Last Name is required\n        </div>\n        <div *ngIf=\"clientLastName.errors?.minlength && clientLastName.touched\" class=\"invalid-feedback\">\n          Must be at least 2 characters\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"email\">Email</label>\n        <input\n        type=\"email\"\n        class=\"form-control\"\n        [ngClass]=\"{'is-invalid':clientEmail.errors?.required && clientEmail.touched || clientEmail.errors?.pattern && clientEmail.touched}\"\n        [(ngModel)]=\"client.email\"\n        name=\"email\"\n        #clientEmail = \"ngModel\"\n        required\n        pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\"\n        >\n        <div *ngIf=\"clientEmail.errors?.required && clientEmail.touched\" class=\"invalid-feedback\">\n          Email is Required\n        </div>\n        <div *ngIf=\"clientEmail.errors?.pattern && clientEmail.touched\" class=\"invalid-feedback\">\n          Email is Invalid\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"phone\">Phone</label>\n        <input\n        type=\"text\"\n        class=\"form-control\"\n        [ngClass]=\"{'is-invalid':clientPhone.errors?.required && clientPhone.touched || clientPhone.errors?.minlength && clientPhone.touched}\"\n        [(ngModel)]=\"client.phone\"\n        name=\"phone\"\n        #clientPhone = \"ngModel\"\n        minlength=\"10\"\n        required\n        >\n        <div *ngIf=\"clientPhone.errors?.required && clientPhone.touched\" class=\"invalid-feedback\">\n          Phone is required\n        </div>\n        <div *ngIf=\"clientPhone.errors?.minlength && clientPhone.touched\" class=\"invalid-feedback\">\n          Phone is not a valid number\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"balance\">Balance</label>\n        <input\n        type=\"text\"\n        class=\"form-control\"\n        [(ngModel)]=\"client.balance\"\n        name=\"balance\"\n        #clientBalance = \"ngModel\"\n        minlength=\"2\"\n        required\n        [disabled]=\"disableBalanceOnAdd\"\n        >\n      </div>\n      \n      <input type=\"submit\" value=\"Submit\" class=\"btn btn-primary btn-block\">\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/add-client/add-client.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddClientComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_client_service__ = __webpack_require__("../../../../../src/app/services/client.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_settings_service__ = __webpack_require__("../../../../../src/app/services/settings.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddClientComponent = (function () {
    function AddClientComponent(flashMessagesService, router, clientService, settingsService) {
        this.flashMessagesService = flashMessagesService;
        this.router = router;
        this.clientService = clientService;
        this.settingsService = settingsService;
        this.client = {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            balance: 0
        };
        this.disableBalanceOnAdd = false;
    }
    AddClientComponent.prototype.ngOnInit = function () {
        this.disableBalanceOnAdd = this.settingsService.getSettings()
            .disableBalanceOnAdd;
    };
    AddClientComponent.prototype.onSubmit = function (_a) {
        var value = _a.value, valid = _a.valid;
        if (this.disableBalanceOnAdd) {
            value.balance = 0;
        }
        if (!valid) {
            this.flashMessagesService.show('Please fill all fields', {
                cssClass: 'alert-danger', timeout: 4000
            });
            this.router.navigate(['add-client']);
        }
        else {
            //Add new Client
            this.clientService.newClient(value);
            this.flashMessagesService.show('New Client Added', {
                cssClass: 'alert-success', timeout: 4000
            });
            this.router.navigate(['/']);
        }
    };
    AddClientComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-add-client',
            template: __webpack_require__("../../../../../src/app/components/add-client/add-client.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/add-client/add-client.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__services_client_service__["a" /* ClientService */],
            __WEBPACK_IMPORTED_MODULE_4__services_settings_service__["a" /* SettingsService */]])
    ], AddClientComponent);
    return AddClientComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/client-details/client-details.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/client-details/client-details.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-6\">\n    <a routerLink=\"/\" href=\"#\" class=\"btn btn-link\">\n    <i class=\"fa fa-arrow-circle-o-left\"></i> Back To DashBoard\n    </a>\n  </div>\n  <div class=\"col-md-6\">\n    <div class=\"btn-group pull-right\">\n      <a [routerLink]=\"['/edit-client/'+id]\" class=\"btn btn-dark\">Edit</a>\n      <button class=\"btn btn-danger\" (click)=\"onDeleteClick()\">Delete</button>\n    </div>\n  </div>\n</div>\n<hr>\n<div *ngIf=\"client\" class =\"card\">\n  <h3 class=\"card-header\">{{client.firstName}} {{client.lastName}}</h3>\n  <div class=\"card-body\">\n    <div class=\"row\">\n      <div class=\"col-md-8\">\n        <h4>Client ID: {{id}} </h4>\n      </div>\n      <div class=\"col-md-4\">\n        <h3 class=\"pull-right\">\n          Balance\n          <span \n          [class.text-danger]=\"hasBalance\" \n          [class.text-success]=\"!hasBalance\" \n          >\n          {{client.balance | currency:\"AUD\":true}}\n        </span>\n        <small>\n          <a (click)=\"showBalanceUpdateInput = !showBalanceUpdateInput\"> <i class=\"fa fa-pencil\"></i></a>\n        </small>\n        </h3>\n        <div class=\"clearfix\">\n          <form *ngIf=\"showBalanceUpdateInput\" (submit)=\"updateBalance(id)\">\n            <div class=\"input-group\">\n              <input type=\"text\" name=\"balance\" class=\"form-control\" [(ngModel)]=\"client.balance\">\n              <span class=\"input-group-btn\">\n                <button type=\"submit\" class=\"btn btn-primary\">Update</button>\n              </span>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n\n    <hr>\n    <ul class=\"list-group\">\n      <li class=\"list-group-item\"> Contact Email: {{client.email}}</li>\n      <li class=\"list-group-item\"> Contact Phone: {{client.phone}}</li>\n    </ul>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/client-details/client-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_client_service__ = __webpack_require__("../../../../../src/app/services/client.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ClientDetailsComponent = (function () {
    function ClientDetailsComponent(clientService, router, route, flashMessagesService) {
        this.clientService = clientService;
        this.router = router;
        this.route = route;
        this.flashMessagesService = flashMessagesService;
        this.hasBalance = false;
        this.showBalanceUpdateInput = false;
    }
    ClientDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        //get id from URL
        this.id = this.route.snapshot.params['id'];
        //Get client
        this.clientService.getClient(this.id).subscribe(function (client) {
            if (client.balance > 0) {
                _this.hasBalance = true;
            }
            _this.client = client;
            console.log(_this.client);
        });
    };
    ClientDetailsComponent.prototype.updateBalance = function (id) {
        this.clientService.updateClient(this.id, this.client);
        this.flashMessagesService.show('Balance Updated', {
            cssClass: 'alert-success', timeout: 4000
        });
        this.router.navigate(['/client/' + this.id]);
        this.showBalanceUpdateInput = false;
    };
    ClientDetailsComponent.prototype.onDeleteClick = function () {
        if (confirm("Are you sure you want to delete?")) {
            this.clientService.deleteClient(this.id);
            this.flashMessagesService.show('Client Removed', {
                cssClass: 'alert-success', timeout: 4000
            });
            this.router.navigate(['/']);
        }
    };
    ClientDetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-client-details',
            template: __webpack_require__("../../../../../src/app/components/client-details/client-details.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/client-details/client-details.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_client_service__["a" /* ClientService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]])
    ], ClientDetailsComponent);
    return ClientDetailsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/clients/clients.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/clients/clients.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-6\">\n    <h2>\n      <i class=\"fa fa-users\"></i> Clients\n    </h2>\n  </div>\n  <div class=\"col-md-6\">\n    <h5 class=\"text-right text-secondary\">Total Owed: {{totalOwed | currency:\"AUD\":true}} </h5>\n  </div>\n</div>\n\n<table *ngIf=\"clients?.length > 0;else noClients\" class=\"table table-striped\">\n  <thead class=\"thead-inverse\">\n    <tr>\n      <th>Name</th>\n      <th>Email</th>\n      <th>Balance</th>\n      <th></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let client of clients\">\n      <td>{{client.firstName}} {{client.lastName}}</td>\n      <td>{{client.email}}</td>\n      <td>{{client.balance | currency:\"AUD\":true}} </td>\n      <td>\n        <a [routerLink]=\"['/client/'+client.key]\" href=\"\" class=\"btn btn-secondary btn-sm\"><i class=\"fa fa-arrow-circle-o-right\"> Detials</i></a>\n      </td>\n    </tr>\n  </tbody>\n</table>\n<hr>\n\n<ng-template #noClients>\n  <h5>\n    There Are No Clients in the System.\n  </h5>\n</ng-template>"

/***/ }),

/***/ "../../../../../src/app/components/clients/clients.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_client_service__ = __webpack_require__("../../../../../src/app/services/client.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ClientsComponent = (function () {
    function ClientsComponent(clientService) {
        this.clientService = clientService;
    }
    ClientsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.clientService.getClients().subscribe(function (clients) {
            _this.clients = clients;
            _this.getTotalOwed();
        });
    };
    ClientsComponent.prototype.getTotalOwed = function () {
        var total = 0;
        for (var i = 0; i < this.clients.length; i++) {
            total += parseFloat(this.clients[i].balance);
        }
        this.totalOwed = total;
    };
    ClientsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-clients',
            template: __webpack_require__("../../../../../src/app/components/clients/clients.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/clients/clients.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_client_service__["a" /* ClientService */]])
    ], ClientsComponent);
    return ClientsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-md-10\">\r\n        <app-clients></app-clients>\r\n    </div>\r\n    <div class=\"col-md-2\">\r\n        <app-sidebar></app-sidebar>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/edit-client/edit-client.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/edit-client/edit-client.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-6\">\n    <a routerLink=\"/\" href=\"#\" class=\"btn btn-link\">\n    <i class=\"fa fa-arrow-circle-o-left\"></i> Back To DashBoard\n    </a>\n  </div>\n  <div class=\"col-md-6\"></div>\n</div>\n\n<div class=\"card\">\n  <div class=\"card-header\">\n    Edit Client\n  </div>\n  <div class=\"card-body\">\n    <form novalidate #f=\"ngForm\" (ngSubmit)=\"onSubmit(f)\">\n      \n      <div class=\"form-group\">\n        <label for=\"firstName\">First Name</label>\n        <input\n        type=\"text\"\n        class=\"form-control\"\n        [ngClass]=\"{'is-invalid':clientFirstName.errors?.required && clientFirstName.touched || clientFirstName.errors?.minlength && clientFirstName.touched}\"\n        [(ngModel)]=\"client.firstName\"\n        name=\"firstName\"\n        #clientFirstName = \"ngModel\"\n        minlength=\"2\"\n        required\n        >\n        <div *ngIf=\"clientFirstName.errors?.required && clientFirstName.touched\" class=\"invalid-feedback\">\n          First Name is required\n        </div>\n        <div *ngIf=\"clientFirstName.errors?.minlength && clientFirstName.touched\" class=\"invalid-feedback\">\n          Must be at least 2 characters\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"lastName\">Last Name</label>\n        <input\n        type=\"text\"\n        class=\"form-control\"\n        [ngClass]=\"{'is-invalid':clientLastName.errors?.required && clientLastName.touched || clientLastName.errors?.minlength && clientLastName.touched}\"\n        [(ngModel)]=\"client.lastName\"\n        name=\"lastName\"\n        #clientLastName = \"ngModel\"\n        minlength=\"2\"\n        required\n        >\n        <div *ngIf=\"clientLastName.errors?.required && clientLastName.touched\" class=\"invalid-feedback\">\n          Last Name is required\n        </div>\n        <div *ngIf=\"clientLastName.errors?.minlength && clientLastName.touched\" class=\"invalid-feedback\">\n          Must be at least 2 characters\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"email\">Email</label>\n        <input\n        type=\"email\"\n        class=\"form-control\"\n        [ngClass]=\"{'is-invalid':clientEmail.errors?.required && clientEmail.touched || clientEmail.errors?.pattern && clientEmail.touched}\"\n        [(ngModel)]=\"client.email\"\n        name=\"email\"\n        #clientEmail = \"ngModel\"\n        required\n        pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\"\n        >\n        <div *ngIf=\"clientEmail.errors?.required && clientEmail.touched\" class=\"invalid-feedback\">\n          Email is Required\n        </div>\n        <div *ngIf=\"clientEmail.errors?.pattern && clientEmail.touched\" class=\"invalid-feedback\">\n          Email is Invalid\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"phone\">Phone</label>\n        <input\n        type=\"text\"\n        class=\"form-control\"\n        [ngClass]=\"{'is-invalid':clientPhone.errors?.required && clientPhone.touched || clientPhone.errors?.minlength && clientPhone.touched}\"\n        [(ngModel)]=\"client.phone\"\n        name=\"phone\"\n        #clientPhone = \"ngModel\"\n        minlength=\"10\"\n        required\n        >\n        <div *ngIf=\"clientPhone.errors?.required && clientPhone.touched\" class=\"invalid-feedback\">\n          Phone is required\n        </div>\n        <div *ngIf=\"clientPhone.errors?.minlength && clientPhone.touched\" class=\"invalid-feedback\">\n          Phone is not a valid number\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"balance\">Balance</label>\n        <input\n        type=\"text\"\n        class=\"form-control\"\n        [(ngModel)]=\"client.balance\"\n        name=\"balance\"\n        #clientBalance = \"ngModel\"\n        minlength=\"2\"\n        required\n        [disabled]=\"disableBalanceOnEdit\"\n        >\n      </div>\n      \n      <input type=\"submit\" value=\"Submit\" class=\"btn btn-primary btn-block\">\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/edit-client/edit-client.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditClientComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_client_service__ = __webpack_require__("../../../../../src/app/services/client.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_settings_service__ = __webpack_require__("../../../../../src/app/services/settings.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EditClientComponent = (function () {
    function EditClientComponent(clientService, router, route, flashMessagesService, settingsService) {
        this.clientService = clientService;
        this.router = router;
        this.route = route;
        this.flashMessagesService = flashMessagesService;
        this.settingsService = settingsService;
        this.client = {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            balance: 0
        };
        this.disableBalanceOnEdit = true;
    }
    EditClientComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = this.route.snapshot.params['id'];
        //Get Client
        this.clientService.getClient(this.id).subscribe(function (client) {
            _this.client = client;
        });
        this.disableBalanceOnEdit = this.settingsService.getSettings()
            .disableBalanceOnEdit;
    };
    EditClientComponent.prototype.onSubmit = function (_a) {
        var value = _a.value, valid = _a.valid;
        if (!valid) {
            this.flashMessagesService.show('Please fill all fields', {
                cssClass: 'alert-danger', timeout: 4000
            });
            this.router.navigate(['edit-client/' + this.id]);
        }
        else {
            //Update Client
            this.clientService.updateClient(this.id, value);
            this.flashMessagesService.show('Client Updated', {
                cssClass: 'alert-success', timeout: 4000
            });
            this.router.navigate(['/client/' + this.id]);
        }
    };
    EditClientComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-edit-client',
            template: __webpack_require__("../../../../../src/app/components/edit-client/edit-client.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/edit-client/edit-client.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_client_service__["a" /* ClientService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_4__services_settings_service__["a" /* SettingsService */]])
    ], EditClientComponent);
    return EditClientComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-6 mx-auto\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <img class=\"d-block mx-auto\" src=\"/assets/img/logo.png\" alt=\"\">\n        <h1 class=\"text-center\">Login</h1>\n        <form (submit)=\"onSubmit()\">\n          <div class=\"form-group\">\n            <label for=\"email\">Email</label>\n            <input type=\"email\" class=\"form-control\" [(ngModel)]=\"email\"\n            name=\"email\" required>\n\n          </div>\n          <div class=\"form-group\">\n              <label for=\"email\">Password</label>\n              <input type=\"password\" class=\"form-control\" [(ngModel)]=\"password\"\n              name=\"password\" required>\n          \n            </div>\n            <input type=\"submit\" value=\"Submit\" class=\"btn btn-primary btn-block\">\n        </form>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(authService, router, flashMesssagesService) {
        this.authService = authService;
        this.router = router;
        this.flashMesssagesService = flashMesssagesService;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.authService.login(this.email, this.password)
            .then(function (res) {
            _this.flashMesssagesService.show('You are logged in', {
                cssClass: 'alert-success', timeout: 4000
            });
            _this.router.navigate(['/']);
        })
            .catch(function (err) {
            _this.flashMesssagesService.show(err.message, {
                cssClass: 'alert-danger', timeout: 4000
            });
            _this.router.navigate(['/']);
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/components/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark bg-primary mb-4\">\n  <a class=\"navbar-brand\" href=\"#\">ClientPanel</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarsExampleDefault\" aria-controls=\"navbarsExampleDefault\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarsExampleDefault\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li *ngIf=\"isLoggedIn\" class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\"\n        routerLink=\"/\">DashBoard</a>\n      </li>\n    </ul>\n\n    <ul class=\"navbar-nav ml-auto\">\n      <li *ngIf=\"!isLoggedIn && showRegister\" class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\"\n        routerLink=\"/register\">Register</a>\n      </li>\n      <li *ngIf=\"!isLoggedIn && showRegister\" class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\" routerLink=\"/login\">Login</a>\n      </li>\n\n      <li *ngIf=\"isLoggedIn\" class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">{{loggedInUser}}</a>\n      </li>\n\n      <li *ngIf=\"isLoggedIn\" class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\" routerLink=\"/settings\" >Settings</a>\n      </li>\n\n      <li *ngIf=\"isLoggedIn\" class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\" (click)=\"onLogoutClick()\" >Logout</a>\n      </li>\n    </ul>\n\n  </div>\n</nav>"

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_settings_service__ = __webpack_require__("../../../../../src/app/services/settings.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NavbarComponent = (function () {
    function NavbarComponent(authService, router, flashMesssagesService, settingsService) {
        this.authService = authService;
        this.router = router;
        this.flashMesssagesService = flashMesssagesService;
        this.settingsService = settingsService;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getAuth().subscribe(function (auth) {
            if (auth) {
                _this.isLoggedIn = true;
                _this.loggedInUser = auth.email;
            }
            else {
                _this.isLoggedIn = false;
            }
        });
        this.showRegister = this.settingsService.getSettings().allowRegistration;
    };
    NavbarComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.flashMesssagesService.show('You are logged out', {
            cssClass: 'alert-success', timeout: 4000
        });
        this.router.navigate(['/login']);
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__("../../../../../src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_4__services_settings_service__["a" /* SettingsService */]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/page-not-found/page-not-found.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/page-not-found/page-not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>PAGE NOT FOUND</h1>\n"

/***/ }),

/***/ "../../../../../src/app/components/page-not-found/page-not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__("../../../../../src/app/components/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/page-not-found/page-not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-6 mx-auto\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <img class=\"d-block mx-auto\" src=\"/assets/img/logo.png\" alt=\"\">\n        <h1 class=\"text-center\">Register</h1>\n        <form (submit)=\"onSubmit()\">\n          <div class=\"form-group\">\n            <label for=\"email\">Email</label>\n            <input type=\"email\" class=\"form-control\" [(ngModel)]=\"email\"\n            name=\"email\" required>\n\n          </div>\n          <div class=\"form-group\">\n              <label for=\"email\">Password</label>\n              <input type=\"password\" class=\"form-control\" [(ngModel)]=\"password\"\n              name=\"password\" required>\n          \n            </div>\n            <input type=\"submit\" value=\"Submit\" class=\"btn btn-primary btn-block\">\n        </form>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = (function () {
    function RegisterComponent(authService, router, flashMesssagesService) {
        this.authService = authService;
        this.router = router;
        this.flashMesssagesService = flashMesssagesService;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onSubmit = function () {
        var _this = this;
        this.authService.register(this.email, this.password)
            .then(function (res) {
            _this.flashMesssagesService.show('New user registered', {
                cssClass: 'alert-success', timeout: 4000
            });
            _this.router.navigate(['/']);
        })
            .catch(function (err) {
            _this.flashMesssagesService.show(err.message, {
                cssClass: 'alert-danger', timeout: 4000
            });
            _this.router.navigate(['/register']);
        });
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__("../../../../../src/app/components/register/register.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/settings/settings.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/settings/settings.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-6\">\n    <a routerLink=\"/\" href=\"#\" class=\"btn btn-link\">\n      <i class=\"fa fa-arrow-circle-o-left\"></i> Back To DashBoard\n      </a>\n  </div>\n  <div class=\"col-md-6\">\n\n  </div>\n</div>\n\n<div class=\"card\">\n  <h3 class=\"card-header\">\n    Edit Settings\n  </h3>\n\n  <div class=\"card-body\">\n    <form (submit)=\"onSubmit()\">\n      <div class=\"form-group\">\n        <label>Allow Registration</label>\n        <input type=\"checkbox\" name=\"allowRegistration\" [checked] = \"settings.allowRegistration\" (change)=\"settings.allowRegistration = !settings.allowRegistration\">\n      </div>\n      <div class=\"form-group\">\n        <label>Disable Balance On Add</label>\n        <input type=\"checkbox\" name=\"disableBalanceOnAdd\" [checked] = \"settings.disableBalanceOnAdd\" (change)=\"settings.disableBalanceOnAdd = !settings.disableBalanceOnAdd\">\n      </div>\n      <div class=\"form-group\">\n        <label>Disable Balance On Edit</label>\n        <input type=\"checkbox\" name=\"disableBalanceOnEdit\" [checked] = \"settings.disableBalanceOnEdit\" (change)=\"settings.disableBalanceOnEdit = !settings.disableBalanceOnEdit\">\n      </div>\n\n      <input type=\"submit\" value=\"Submit\" class=\"btn btn-primary btn-block\">\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/settings/settings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_settings_service__ = __webpack_require__("../../../../../src/app/services/settings.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SettingsComponent = (function () {
    function SettingsComponent(settingsService, flashMessagesService, router) {
        this.settingsService = settingsService;
        this.flashMessagesService = flashMessagesService;
        this.router = router;
    }
    SettingsComponent.prototype.ngOnInit = function () {
        this.settings = this.settingsService.getSettings();
    };
    SettingsComponent.prototype.onSubmit = function () {
        this.settingsService.changeSettings(this.settings);
        this.flashMessagesService.show('Settings Saved!', {
            cssClass: 'alert-success', timeout: 4000
        });
        this.router.navigate(['/settings']);
    };
    SettingsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-settings',
            template: __webpack_require__("../../../../../src/app/components/settings/settings.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/settings/settings.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_settings_service__["a" /* SettingsService */],
            __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], SettingsComponent);
    return SettingsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/sidebar/sidebar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/sidebar/sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<a routerLink=\"/add-client\" href=\"#\" class=\"btn btn-success btn-block\">\n  <i class=\"fa fa-plus\"> New</i>\n</a>"

/***/ }),

/***/ "../../../../../src/app/components/sidebar/sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SidebarComponent = (function () {
    function SidebarComponent() {
    }
    SidebarComponent.prototype.ngOnInit = function () {
    };
    SidebarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__("../../../../../src/app/components/sidebar/sidebar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/sidebar/sidebar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(router, afAuth) {
        this.router = router;
        this.afAuth = afAuth;
    }
    AuthGuard.prototype.canActivate = function () {
        var _this = this;
        return this.afAuth.authState.map(function (auth) {
            if (!auth) {
                _this.router.navigate(['/login']);
                return false;
            }
            else {
                return true;
            }
        });
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "../../../../../src/app/guards/register.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_settings_service__ = __webpack_require__("../../../../../src/app/services/settings.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterGuard = (function () {
    function RegisterGuard(router, settingsService) {
        this.router = router;
        this.settingsService = settingsService;
    }
    RegisterGuard.prototype.canActivate = function () {
        if (this.settingsService.getSettings().allowRegistration) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    RegisterGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__services_settings_service__["a" /* SettingsService */]])
    ], RegisterGuard);
    return RegisterGuard;
}());



/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthService = (function () {
    function AuthService(afAuth) {
        this.afAuth = afAuth;
    }
    AuthService.prototype.login = function (email, password) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.afAuth.auth.signInWithEmailAndPassword(email, password)
                .then(function (userData) { return resolve(userData); }, function (err) { return reject(err); });
        });
    };
    AuthService.prototype.register = function (email, password) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.afAuth.auth.createUserWithEmailAndPassword(email, password)
                .then(function (userData) { return resolve(userData); }, function (err) { return reject(err); });
        });
    };
    AuthService.prototype.getAuth = function () {
        return this.afAuth.authState.map(function (auth) { return auth; });
    };
    AuthService.prototype.logout = function () {
        this.afAuth.auth.signOut();
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "../../../../../src/app/services/client.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ClientService = (function () {
    function ClientService(db) {
        this.db = db;
        this.clientsRef = this.db.list('clients');
        this.clients = this.clientsRef.snapshotChanges().map(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        });
    }
    ClientService.prototype.getClients = function () {
        return this.clients;
    };
    ClientService.prototype.newClient = function (client) {
        this.clientsRef.push(client);
    };
    ClientService.prototype.getClient = function (id) {
        this.client = this.db.object('/clients/' + id).valueChanges();
        return this.client;
    };
    ClientService.prototype.updateClient = function (id, client) {
        return this.clientsRef.update(id, client);
    };
    ClientService.prototype.deleteClient = function (id) {
        return this.clientsRef.remove(id);
    };
    ClientService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], ClientService);
    return ClientService;
}());



/***/ }),

/***/ "../../../../../src/app/services/settings.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SettingsService = (function () {
    function SettingsService() {
        this.settings = {
            allowRegistration: true,
            disableBalanceOnAdd: true,
            disableBalanceOnEdit: false,
        };
        if (localStorage.getItem('settings') != null) {
            this.settings = JSON.parse(localStorage.getItem('settings'));
        }
        else {
        }
    }
    SettingsService.prototype.getSettings = function () {
        return this.settings;
    };
    SettingsService.prototype.changeSettings = function (settings) {
        localStorage.setItem('settings', JSON.stringify(settings));
    };
    SettingsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], SettingsService);
    return SettingsService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyChV1UVnaTyi4CHyKwZMvrenhYZotVUj9I",
        authDomain: "clientpanelapp-cc0bb.firebaseapp.com",
        databaseURL: "https://clientpanelapp-cc0bb.firebaseio.com",
        projectId: "clientpanelapp-cc0bb",
        storageBucket: "clientpanelapp-cc0bb.appspot.com",
        messagingSenderId: "934419955529"
    }
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map