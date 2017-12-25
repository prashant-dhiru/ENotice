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

/***/ "../../../../../src/app/admin/admin-route.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return adminRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__post_notice_post_notice_component__ = __webpack_require__("../../../../../src/app/admin/post-notice/post-notice.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__manage_user_manage_user_component__ = __webpack_require__("../../../../../src/app/admin/manage-user/manage-user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_admin_manage_boards_manage_boards_component__ = __webpack_require__("../../../../../src/app/admin/manage-boards/manage-boards.component.ts");



var adminRoutes = [
    {
        path: '',
        redirectTo: '/admin/postNotice',
        pathMatch: 'full'
    }, {
        path: 'postNotice',
        component: __WEBPACK_IMPORTED_MODULE_0__post_notice_post_notice_component__["a" /* PostNoticeComponent */]
    }, {
        path: 'manageUser',
        component: __WEBPACK_IMPORTED_MODULE_1__manage_user_manage_user_component__["a" /* ManageUserComponent */]
    }, {
        path: 'manageBoards',
        component: __WEBPACK_IMPORTED_MODULE_2_app_admin_manage_boards_manage_boards_component__["a" /* ManageBoardsComponent */]
    }
];


/***/ }),

/***/ "../../../../../src/app/admin/admin.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".page-flexbox-wrapper {\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\tmin-height: 100vh;\n\t-webkit-box-orient: vertical;\n\t-webkit-box-direction: normal;\n\t    -ms-flex-direction: column;\n\t        flex-direction: column;\n}\n\nmain {\n\t-webkit-box-flex: 1;\n\t    -ms-flex: 1 0 auto;\n\t        flex: 1 0 auto;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/admin.component.html":
/***/ (function(module, exports) {

module.exports = "<br>\n<div class=\"row\">\t\n\t<div class=\"sideBar col s12 m3 l2 \" >\n\t\t<ul class=\"collection with-header\">\n\t\t\t<li class=\"collection-item grey lighten-2\"><a routerLink=\"/user\">User</a></li>\n\t\t\t<li class=\"collection-item\"><a routerLink=\"/user/update\">Update profile</a></li>\n\t\t\t<li class=\"collection-item\"><a routerLink=\"/user/subscribed\">My Subscription</a></li>\n\t\t\t<li class=\"collection-item\"><a routerLink=\"/user/membership\">My Membership</a></li>\n\t\t\t<li class=\"collection-item\"><a routerLink=\"/user/deleteMe\">Delete Account</a></li>\t\t\t\n\t\t\t<div *ngIf=\"isAdmin\">\n\t\t\t<li class=\"collection-item grey lighten-2\">Admin</li>\n\t\t\t<li class=\"collection-item\"><a a routerLink=\"/admin/postNotice\">Manage Notice</a></li>\n\t\t\t<li class=\"collection-item\"><a routerLink=\"/admin/manageBoards\" >Manage Boards</a></li>\t\t\t\n\t\t\t<li class=\"collection-item\"><a routerLink=\"/admin/manageUser\">Manage Users</a></li>\n\t\t\t</div>\n\t\t</ul>\n\t</div>\n\n\t<div class=\"col s12 m6 l6 offset-m1 offset-l1 mainSection\">\n\t\t<router-outlet></router-outlet>\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/admin/admin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_services_board_service__ = __webpack_require__("../../../../../src/app/services/board.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdminComponent = (function () {
    function AdminComponent(boardService) {
        this.boardService = boardService;
        this.isAdmin = false;
    }
    AdminComponent.prototype.ngOnInit = function () {
        this.isAdmin = (localStorage.getItem('adminStatus') === 'true') ? true : false;
    };
    AdminComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'enb-admin',
            template: __webpack_require__("../../../../../src/app/admin/admin.component.html"),
            styles: [__webpack_require__("../../../../../src/app/admin/admin.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_app_services_board_service__["a" /* BoardService */]])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "../../../../../src/app/admin/manage-boards/manage-boards.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card-action{\n\tpadding-bottom: 0px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/manage-boards/manage-boards.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"form-card\">\n  <ul materialize=\"collapsible\" class=\"collapsible z-depth-0\" data-collapsible=\"accordion\">\n    <li>\n      <div class=\"collapsible-header active\">\n        <strong>Create New Notice Boards</strong>\n      </div>\n      <div class=\"collapsible-body\">\n        <!-- body of primary data of notice -->\n        <form [formGroup]=\"createBoardForm\">\n          <div class=\"row\">\n            <div class=\"input-field\">\n              <input\n                id=\"boardName\"\n                type=\"text\"\n                class=\"validate\"\n                minlength=\"1\"\n                formControlName=\"boardName\"\n                required>\n              <label for=\"boardName\">Name of board</label>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field\">\n              <textarea \n                id=\"discription\" \n                class=\"materialize-textarea\"\n                formControlName=\"discription\"                              \n                required>\n              </textarea>\n              <label for=\"discription\">Discription of the board</label>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field\" >\n              <select formControlName=\"isPrivate\" materialize=\"material_select\" >\n                <option value=\"false\" selected>False</option>\n                <option value=\"true\">True</option>\n              </select>\n              <label>Is this board private ?</label>\n            </div>\n          </div>\n          <div class=\"row\">\n            <button class=\"btn\" (click)=\"onSubmit()\">Submit</button>\n          </div>\n        </form>\n      </div>\n    </li>\n    <li>\n      <div class=\"collapsible-header \">\n        <strong>Manage Notice Boards</strong>\n      </div>\n      <div class=\"collapsible-body\">\n        <!--section for notice managment -->\n        <div class=\"row\">\n          <div class=\"col s12\">\n            <div *ngFor=\"let board of allBaords\" class=\"card\">\n              <div class=\"card-content\">\n                  <span class=\"card-title bold\"><a routerLink = \"/board/{{board?._id}}\">{{board?.boardName}}</a></span>\n                <hr>\n                <div *ngIf=\"board?.isPrivate\" >\n                  <p class=\"grey-text\"> \n                    This board is private\n                  </p>\n                </div>\n                <div *ngIf=\"!board?.isPrivate\" >\n                  <p class=\"grey-text\"> \n                    This board is public\n                  </p>\n                </div>\n                <br>\n                <p>\n                  {{board?.discription}}\n                </p>\n                <br>\n                <div class=\"row grey-text\">\n                  <div class=\"col s6\">\n                    <i class=\"material-icons tiny\">add_alert</i>{{board.subscriberList.length}}\n                  </div>\n                  <div class=\"col s6\">\n                    <span class=\"left-align\">\n                      <i class=\"material-icons tiny\">assignment_ind</i>{{board.memberList.length}}\n                    </span> \n                  </div>\n                </div>\n                <div class=\"card-action\">\n                  <div class=\"row\">\n                    <div class=\"col s6\">\n                      <a href=\"#\">Update Board</a>\n                    </div>\n                    <div class=\"col s6\">\n                        <a href=\"#\">Manage Users</a>                        \n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </li>\n  </ul>\n</div>"

/***/ }),

/***/ "../../../../../src/app/admin/manage-boards/manage-boards.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManageBoardsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_services_board_service__ = __webpack_require__("../../../../../src/app/services/board.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ManageBoardsComponent = (function () {
    function ManageBoardsComponent(boardService) {
        this.boardService = boardService;
        this.createBoardForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            'boardName': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            'discription': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            'isPrivate': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]("false")
        });
    }
    ManageBoardsComponent.prototype.ngOnInit = function () {
        this.getAllBoard();
    };
    ManageBoardsComponent.prototype.getAllBoard = function () {
        var _this = this;
        this.GBsubscription = this.boardService.getAllBoards()
            .subscribe(function (res) {
            _this.allBaords = res.json();
            console.log(_this.allBaords);
        });
    };
    ManageBoardsComponent.prototype.putBoard = function () {
        var _this = this;
        this.CBsubscription = this.boardService.putBoard(this.createBoardForm.value)
            .subscribe(function (res) {
            _this.getAllBoard();
            console.log(JSON.stringify(res));
        }, function (error) {
            if (error.status === 400) {
                console.log(error.json().message);
            }
            else if (error.status === 500) {
                console.log("Internal database error");
            }
            else if (error.status === 401) {
                console.log(error);
            }
            else {
                console.log("error while creating new board");
            }
        }, function () {
            _this.CBsubscription.unsubscribe();
        });
    };
    ManageBoardsComponent.prototype.onSubmit = function () {
        this.putBoard();
    };
    ManageBoardsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'enb-manage-boards',
            template: __webpack_require__("../../../../../src/app/admin/manage-boards/manage-boards.component.html"),
            styles: [__webpack_require__("../../../../../src/app/admin/manage-boards/manage-boards.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_app_services_board_service__["a" /* BoardService */]])
    ], ManageBoardsComponent);
    return ManageBoardsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/admin/manage-user/manage-user.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".inner-row{\n\tmargin-bottom: 0px;\n}\n.btn{\n\tbackground-color: #4285F4;\t\n}\n.delete{\n\tbackground-color: #EA4335;\n}\n.modalContent{\n\ttext-align: justify;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/manage-user/manage-user.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"viewProfile\">\n  <div *ngFor=\"let user of allUser; let i = index\" class=\"row card\">\n    <div class=\"col s12 m12 l3 picSection \">\n      <i class=\"large material-icons\">account_circle</i>\n    </div>\n    <div class=\"col s12 m12 l7 infoSection\">\n      <h5>{{user?.name}}</h5><hr>\n      <p *ngIf=\"user?.isAdmin\">This user <strong>have</strong> admin privilages</p>\n      <p *ngIf=\"!user?.isAdmin\">This user <strong>does not have</strong> admin privilages</p>\n      <p><strong>Email :</strong> {{user?.email}}</p>\n      <p><strong>Phone :</strong> {{user?.phone}}</p>\n      <p><strong>Date :</strong> {{user?.registerationDate | date:mediumDate}}</p>\n      <hr><br>\n      <div class=\"row inner-row\" *ngIf=\"user?._id != me?._id\">\n        <div class=\"col m4 s6\">\n           <a class=\"btn\" data-target=\"confirmAdmin\" (click)=\"openConfirmAdmin(i)\">Admin</a>\n        </div>\n        <div class=\"col s6 m4 offset-m3\">\n          <a class=\"btn delete\" data-target=\"confirmDelete\" (click)=\"openConfirmDelete(i)\">Delete</a>\n        </div>\n      </div>\n      <br><br>\n    </div>\n  </div>\n\n  <!-- model for comfirm admin -->\n  <div id=\"confirmAdmin\" class=\"modal\" materialize=\"modal\" [materializeParams]=\"[{dismissible: true}]\" [materializeActions]=\"confirmAdminActions\">\n    <div class=\"modal-content\">\n      <h4 *ngIf=\"selectedUser?.isAdmin\">Revoke admin privilages from {{selectedUser?.name}}</h4>\n      <h4 *ngIf=\"!selectedUser?.isAdmin\">Grant admin privilages to {{selectedUser?.name}}</h4>\n      \n      <p *ngIf=\"selectedUser?.isAdmin\" class=\"modalContent\">\n        Are you sure you want to change to revoke admin privilages from {{selectedUser?.name}},\n        If so then he/she will <strong>not to able</strong> to perform the following actions and hence will be converted\n        into a normal user\n      </p>\n      <p *ngIf=\"!selectedUser?.isAdmin\" class=\"modalContent\">\n        Are you sure you want to change to grant admin privilages to {{selectedUser?.name}},\n        If so then he/she will <strong>be able</strong> to perform the following actions and hence will be converted\n        into a admin user\n      </p>\n      <ul>\n        <li>Post Notices</li>\n        <li>Manage Notices</li>\n        <li>Manage Notice Boards</li>\n        <li>Manage Users</li>\n      </ul>\n    </div>\n    <div class=\"modal-footer\">\n      <a class=\"waves-effect waves-red btn-flat\" (click)=\"closeConfirmAdmin()\">Close</a>\n      <a class=\"modal-action modal-close waves-effect waves-green btn-flat\" (click)=\"changeAdminStatus()\">Agree</a>\n    </div>\n  </div>\n\n  <div id=\"confirmDelete\" class=\"modal\" materialize=\"modal\" [materializeParams]=\"[{dismissible: true}]\" [materializeActions]=\"confirmDeleteActions\">\n      <div class=\"modal-content\">\n        <h4>Delete {{selectedUser?.name}}'s account</h4>\n        <p class=\"modalContent\">\n          Are your sure you want to delete the account of {{selectedUser?.name}}.\n          Note that this action is irreversible and all the information of the user\n          will be deleted including his subscription list and his membership to private Boards.\n        </p>\n      </div>\n      <div class=\"modal-footer\">\n        <a class=\"waves-effect waves-red btn-flat\" (click)=\"closeConfirmDelete()\">Close</a>\n        <a class=\"modal-action modal-close waves-effect waves-green btn-flat\" (click)=\"deleteUser()\">Agree</a>\n      </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/admin/manage-user/manage-user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManageUserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ManageUserComponent = (function () {
    function ManageUserComponent(userService) {
        this.userService = userService;
        this.confirmAdminActions = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.confirmDeleteActions = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.me = JSON.parse(localStorage.getItem('currentUser'));
        console.log(this.me);
    }
    ManageUserComponent.prototype.ngOnInit = function () {
        this.getAllUsers();
    };
    ManageUserComponent.prototype.openConfirmAdmin = function (i) {
        this.selectedUser = this.allUser[i];
        this.confirmAdminActions.emit({ action: "modal", params: ['open'] });
    };
    ManageUserComponent.prototype.closeConfirmAdmin = function () {
        this.confirmAdminActions.emit({ action: "modal", params: ['close'] });
        this.selectedUser = null;
    };
    ManageUserComponent.prototype.openConfirmDelete = function (i) {
        this.selectedUser = this.allUser[i];
        this.confirmDeleteActions.emit({ action: "modal", params: ['open'] });
    };
    ManageUserComponent.prototype.closeConfirmDelete = function () {
        this.confirmDeleteActions.emit({ action: "modal", params: ['close'] });
        this.selectedUser = null;
    };
    ManageUserComponent.prototype.getAllUsers = function () {
        var _this = this;
        this.subscription = this.userService.getAllUser()
            .subscribe(function (res) {
            _this.allUser = res.json();
            console.log(_this.allUser);
        }, function (error) {
            if (error.status === 404) {
                console.error("no users found");
            }
            else {
                console.log("error while fetching all users");
            }
        }, function () {
            _this.subscription.unsubscribe();
        });
    };
    ManageUserComponent.prototype.onFilter = function () { };
    ManageUserComponent.prototype.deleteUser = function () {
        var _this = this;
        this.DUsubscriptin = this.userService.deleteUserByAdmin(this.selectedUser._id).subscribe(function (res) {
            _this.selectedUser = null;
            _this.getAllUsers();
            console.log(res);
        }, function (error) {
            if (error.status === 404) {
                console.log("this user was not found");
            }
            else if (error.status === 401) {
                console.log(error.message);
            }
            else if (error.status === 500) {
                console.log("internal database error");
            }
            else {
                console.log("error while changing the user admin status");
            }
        }, function () {
            _this.DUsubscriptin.unsubscribe();
        });
    };
    ManageUserComponent.prototype.changeAdminStatus = function () {
        var _this = this;
        this.CASsubscription = this.userService.changeAdminStatus(this.selectedUser._id).subscribe(function (res) {
            _this.selectedUser = null;
            _this.getAllUsers();
            console.log(res);
        }, function (error) {
            if (error.status === 404) {
                console.log("this user was not found");
            }
            else if (error.status === 401) {
                console.log(error.message);
            }
            else {
                console.log("error while changing the user admin status");
            }
        }, function () {
            _this.CASsubscription.unsubscribe();
        });
    };
    ManageUserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'enb-manage-user',
            template: __webpack_require__("../../../../../src/app/admin/manage-user/manage-user.component.html"),
            styles: [__webpack_require__("../../../../../src/app/admin/manage-user/manage-user.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_app_services_user_service__["a" /* UserService */]])
    ], ManageUserComponent);
    return ManageUserComponent;
}());



/***/ }),

/***/ "../../../../../src/app/admin/post-notice/post-notice.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".btn{\n\tbackground-color: #4285F4;\t\n}\n.outer{\n\tbackground-color: #4285F4;\t\n}\n.delete{\n\tbackground-color: #EA4335;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/post-notice/post-notice.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"form-card\">\n  <ul materialize=\"collapsible\" class=\"collapsible\" data-collapsible=\"accordion\">\n    <li>\n      <div class=\"collapsible-header active\">\n        <strong>Post Notice</strong>\n      </div>\n      <div class=\"collapsible-body\">\n        <!-- body of primary data of notice -->\n        <form [formGroup]=\"postForm\">\n          <div class=\"row\">\n            <div class=\"input-field\">\n              <input \n                id=\"title\" \n                type=\"text\" \n                class=\"validate\" \n                minlength=\"1\"\n                formControlName=\"title\"                \n                required>\n              <label for=\"title\">Title</label>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field\">\n              <textarea \n                id=\"textData\" \n                class=\"materialize-textarea\"\n                formControlName=\"textData\"                              \n                required>\n              </textarea>\n              <label for=\"textData\">Content</label>\n            </div>\n          </div>\n          <div class=\"row\">\n              <select \n                multiple \n                id=\"publishBoards\"\n                materialize=\"material_select\" \n                [materializeSelectOptions]=\"allBoards\" \n                formControlName=\"publishBoards\"\n                required>\n                  <option value=\"\" disabled selected>Select Notice Board to host ...</option>\n                  <option *ngFor=\"let board of allBoards\" [value]=\"board._id\">{{board.boardName}}</option>\n              </select>  \n              <button class=\"btn\" (click)=\"onSubmit()\"  >submit</button>\n            </div> \n        </form>\n      </div>\n    </li>\n    <li>\n      <div class=\"collapsible-header \">\n        <strong>Manage Notice</strong>\n      </div>\n      <div class=\"collapsible-body\">\n        <!--section for notice managment -->\n        <div class=\"row\">\n          <div class=\"col s12 m5 l3\">\n            <a (click)=\"onClear()\" class=\"btn btn-block\">clear</a>\n          </div>\n          <div class=\"col s12 m7 l9\">\n            <input \n              materialize=\"pickadate\"\n              [materializeParams]=\"[{format: 'mm/dd/yyyy'}]\"\n              type=\"text\" \n              class=\"datepicker\"\n              placeholder=\"Date Filter\"\n              [ngModel]=\"myDate\" (ngModelChange)=\"onFilter($event)\"\n              />\n          </div>\n        </div>\n        <ul materialize=\"collapsible\" class=\"collapsible z-depth-0\" data-collapsible=\"accordion\">\n          <li *ngFor=\"let notice of allNotices\">\n            <div class=\"collapsible-header\">\n              <div class=\"col s8\">\n                <strong>{{notice.title}}</strong>\n              </div>\n              <div class=\"col s4 left\">\n                <span>{{notice.publishDate | date:mediumDate }} </span>\n              </div>\n            </div>\n            <div class=\"collapsible-body no-side-border\">\n              <!-- body of primary data of notice -->\n              <div class=\"row\">\n                <div class=\"col s7\">\n                  <span class =\" left grey-text lighten-2\">Publisher : {{notice?.publisher?.name}} </span>\n                </div>\n              </div>\n              <hr>\n              <div class=\"textData\">\n                <span>{{notice?.textData}}</span>\n              </div>\n              <br>\n              <div class=\"grey-text lighten-2\">\n                <span>Notice Published On</span> \n                <hr>\n                <ul>\n                  <li *ngFor=\"let board of notice.publishBoards\">{{board.boardName}}</li>\n                </ul>\n                <br>\n                <br>\n              </div>\n                <a (click)=\"onDelete(notice?._id)\" class=\"btn delete\"> Delete </a>\n            </div> \n          </li>\n        </ul>\n      </div>\n    </li>\n  </ul>\n</div>"

/***/ }),

/***/ "../../../../../src/app/admin/post-notice/post-notice.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostNoticeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_services_board_service__ = __webpack_require__("../../../../../src/app/services/board.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_services_notice_service__ = __webpack_require__("../../../../../src/app/services/notice.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PostNoticeComponent = (function () {
    function PostNoticeComponent(boardService, noticeService) {
        this.boardService = boardService;
        this.noticeService = noticeService;
        this.filesToUpload = [];
        this.postForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
            'title': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](),
            'textData': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](),
            'publishBoards': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](),
            'attachedFiles': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]()
        });
    }
    PostNoticeComponent.prototype.ngOnInit = function () {
        this.getBoard();
        this.getNotice();
    };
    PostNoticeComponent.prototype.getBoard = function () {
        var _this = this;
        this.Nsubscription = this.boardService.getAllBoards().subscribe(function (response) {
            _this.allBoards = response.json();
        }, function (error) {
            if (error.status === 500) {
                console.log("internal databse error");
            }
            else {
                console.log("error while fetching board");
            }
        }, function () {
            _this.Nsubscription.unsubscribe();
        });
    };
    PostNoticeComponent.prototype.getNotice = function () {
        var _this = this;
        this.subscription = this.noticeService.getAllNoticeBoard()
            .subscribe(function (res) {
            console.log(res.json());
            _this.allNotices = res.json();
        }, function (error) {
            if (error.status === 500) {
                console.log("internal databse error");
            }
            else {
                console.log("error while fetching board");
            }
        }, function () {
            _this.subscription.unsubscribe();
        });
    };
    PostNoticeComponent.prototype.putNotice = function () {
        this.subscription = this.noticeService.putNotice(this.postForm.value)
            .subscribe(function (response) {
            console.log("notice hase been posted");
        }, function (error) {
            if (error.status === 500) {
                console.error("internal database error");
            }
            else if (error.status === 401) {
                console.error(error.value);
            }
            else {
                console.error("error while posting notice");
            }
        });
    };
    PostNoticeComponent.prototype.onSubmit = function () {
        if (this.postForm.value.publishBoards == null || this.postForm.value.publishBoards.length == 0) {
            console.error("please select a baord ");
            return;
        }
        console.log(this.postForm.value);
        this.putNotice();
    };
    PostNoticeComponent.prototype.onClear = function () {
        this.getNotice();
        this.myDate = "";
    };
    PostNoticeComponent.prototype.onSameDate = function (noticeDate, selectedDate) {
        var nDate = new Date(noticeDate);
        return nDate.getFullYear() === selectedDate.getFullYear() &&
            nDate.getMonth() === selectedDate.getMonth() &&
            nDate.getDate() === selectedDate.getDate();
    };
    PostNoticeComponent.prototype.onFilter = function (dateStr) {
        var _this = this;
        var sDate = new Date(dateStr);
        this.allNotices = this.allNotices.filter(function (notice) { return _this.onSameDate(notice.publishDate, sDate); });
    };
    PostNoticeComponent.prototype.onDelete = function (noticeId) {
        var _this = this;
        this.dSubscription = this.noticeService.deleteNotice(noticeId).subscribe(function (res) {
            setTimeout(function () {
                _this.getNotice();
            }, 2000);
        }, function (error) {
            if (error.status == 404) {
                console.error("no notice was found to delete");
            }
            else {
                console.error("error while deleting notice");
            }
        }, function () {
            _this.dSubscription.unsubscribe();
        });
    };
    PostNoticeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'enb-post-notice',
            template: __webpack_require__("../../../../../src/app/admin/post-notice/post-notice.component.html"),
            styles: [__webpack_require__("../../../../../src/app/admin/post-notice/post-notice.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_app_services_board_service__["a" /* BoardService */],
            __WEBPACK_IMPORTED_MODULE_3_app_services_notice_service__["a" /* NoticeService */]])
    ], PostNoticeComponent);
    return PostNoticeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_user_component__ = __webpack_require__("../../../../../src/app/user/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__board_list_board_list_board_component__ = __webpack_require__("../../../../../src/app/board/list-board/list-board.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_common_login_login_component__ = __webpack_require__("../../../../../src/app/common/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_common_register_register_component__ = __webpack_require__("../../../../../src/app/common/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__user_user_route_module__ = __webpack_require__("../../../../../src/app/user/user-route.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__board_board_route_module__ = __webpack_require__("../../../../../src/app/board/board-route.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__admin_admin_route_module__ = __webpack_require__("../../../../../src/app/admin/admin-route.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_app_admin_admin_component__ = __webpack_require__("../../../../../src/app/admin/admin.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    {
        path: '',
        children: [],
        component: __WEBPACK_IMPORTED_MODULE_3__board_list_board_list_board_component__["a" /* ListBoardComponent */]
    },
    {
        path: 'user',
        children: __WEBPACK_IMPORTED_MODULE_6__user_user_route_module__["a" /* userRoutes */],
        component: __WEBPACK_IMPORTED_MODULE_2__user_user_component__["a" /* UserComponent */]
    }, {
        path: 'boards',
        component: __WEBPACK_IMPORTED_MODULE_3__board_list_board_list_board_component__["a" /* ListBoardComponent */]
    }, {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_4_app_common_login_login_component__["a" /* LoginComponent */]
    }, {
        path: 'register',
        component: __WEBPACK_IMPORTED_MODULE_5_app_common_register_register_component__["a" /* RegisterComponent */]
    }, {
        path: 'board',
        children: __WEBPACK_IMPORTED_MODULE_7__board_board_route_module__["a" /* boardRoutes */]
    }, {
        path: 'admin',
        children: __WEBPACK_IMPORTED_MODULE_8__admin_admin_route_module__["a" /* adminRoutes */],
        component: __WEBPACK_IMPORTED_MODULE_9_app_admin_admin_component__["a" /* AdminComponent */]
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".page-flexbox-wrapper {\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\tmin-height: 100vh;\n\t-webkit-box-orient: vertical;\n\t-webkit-box-direction: normal;\n\t    -ms-flex-direction: column;\n\t        flex-direction: column;\n}\n\nmain {\n\t-webkit-box-flex: 1;\n\t    -ms-flex: 1 0 auto;\n\t        flex: 1 0 auto;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-flexbox-wrapper\">\n\t<header>\n\t\t<enb-nav-bar> </enb-nav-bar>\n\t</header>\n\t<main>\n\t\t<router-outlet></router-outlet>\n\t</main>\n\t<footer>\n\t\t<enb-footer></enb-footer>\t\n\t</footer>\n</div>"

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
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'enb works!';
        document.body.style.background = '#f5f5f5';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'enb-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_materialize_css__ = __webpack_require__("../../../../materialize-css/dist/js/materialize.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_materialize_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_materialize_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_materialize__ = __webpack_require__("../../../../angular2-materialize/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__common_register_register_component__ = __webpack_require__("../../../../../src/app/common/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__board_list_board_list_board_component__ = __webpack_require__("../../../../../src/app/board/list-board/list-board.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__common_nav_bar_nav_bar_component__ = __webpack_require__("../../../../../src/app/common/nav-bar/nav-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__common_login_login_component__ = __webpack_require__("../../../../../src/app/common/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__user_user_component__ = __webpack_require__("../../../../../src/app/user/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__common_footer_footer_component__ = __webpack_require__("../../../../../src/app/common/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__user_update_update_component__ = __webpack_require__("../../../../../src/app/user/update/update.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_app_user_view_profile_view_profile_component__ = __webpack_require__("../../../../../src/app/user/view-profile/view-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__board_view_single_board_view_single_board_component__ = __webpack_require__("../../../../../src/app/board/view-single-board/view-single-board.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__user_view_subscription_view_subscription_component__ = __webpack_require__("../../../../../src/app/user/view-subscription/view-subscription.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__user_view_membership_view_membership_component__ = __webpack_require__("../../../../../src/app/user/view-membership/view-membership.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__user_delete_me_delete_me_component__ = __webpack_require__("../../../../../src/app/user/delete-me/delete-me.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__admin_post_notice_post_notice_component__ = __webpack_require__("../../../../../src/app/admin/post-notice/post-notice.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__admin_admin_component__ = __webpack_require__("../../../../../src/app/admin/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__admin_manage_user_manage_user_component__ = __webpack_require__("../../../../../src/app/admin/manage-user/manage-user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__admin_manage_boards_manage_boards_component__ = __webpack_require__("../../../../../src/app/admin/manage-boards/manage-boards.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__directive_scroll_at_bottom_directive__ = __webpack_require__("../../../../../src/app/directive/scroll-at-bottom.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__services_board_service__ = __webpack_require__("../../../../../src/app/services/board.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__services_notice_service__ = __webpack_require__("../../../../../src/app/services/notice.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






//components



















//services



var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__common_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_11__common_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_10__common_nav_bar_nav_bar_component__["a" /* NavBarComponent */],
                __WEBPACK_IMPORTED_MODULE_9__board_list_board_list_board_component__["a" /* ListBoardComponent */],
                __WEBPACK_IMPORTED_MODULE_12__user_user_component__["a" /* UserComponent */],
                __WEBPACK_IMPORTED_MODULE_13__common_footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_14__user_update_update_component__["a" /* UpdateComponent */],
                __WEBPACK_IMPORTED_MODULE_15_app_user_view_profile_view_profile_component__["a" /* ViewProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_16__board_view_single_board_view_single_board_component__["a" /* ViewSingleBoardComponent */],
                __WEBPACK_IMPORTED_MODULE_17__user_view_subscription_view_subscription_component__["a" /* ViewSubscriptionComponent */],
                __WEBPACK_IMPORTED_MODULE_18__user_view_membership_view_membership_component__["a" /* ViewMembershipComponent */],
                __WEBPACK_IMPORTED_MODULE_19__user_delete_me_delete_me_component__["a" /* DeleteMeComponent */],
                __WEBPACK_IMPORTED_MODULE_20__admin_post_notice_post_notice_component__["a" /* PostNoticeComponent */],
                __WEBPACK_IMPORTED_MODULE_21__admin_admin_component__["a" /* AdminComponent */],
                __WEBPACK_IMPORTED_MODULE_22__admin_manage_user_manage_user_component__["a" /* ManageUserComponent */],
                __WEBPACK_IMPORTED_MODULE_23__admin_manage_boards_manage_boards_component__["a" /* ManageBoardsComponent */],
                __WEBPACK_IMPORTED_MODULE_24__directive_scroll_at_bottom_directive__["a" /* ScrollAtBottomDirective */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_6__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_1_angular2_materialize__["a" /* MaterializeModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_25__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_26__services_board_service__["a" /* BoardService */], __WEBPACK_IMPORTED_MODULE_27__services_notice_service__["a" /* NoticeService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/board/board-route.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return boardRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__view_single_board_view_single_board_component__ = __webpack_require__("../../../../../src/app/board/view-single-board/view-single-board.component.ts");

var boardRoutes = [
    {
        path: '',
        children: [],
    }, {
        path: ':BoardId',
        component: __WEBPACK_IMPORTED_MODULE_0__view_single_board_view_single_board_component__["a" /* ViewSingleBoardComponent */]
    },
];


/***/ }),

/***/ "../../../../../src/app/board/list-board/list-board.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".pinned{\n\tposition: fixed;\n}\n/* .row{\n\tmargin-top: 30px;\n\tmargin-left: 100px;\n} */", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/board/list-board/list-board.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <!-- <div class=\"col s12 m3 l3 pinned\">\n      <a class=\"waves-effect waves-light btn\">button</a><br>\n      <a class=\"waves-effect waves-light btn\">button</a><br>\n      <a class=\"waves-effect waves-light btn\">button</a>\n    </div> -->\n            \n  <div *ngFor=\"let board of boards\" class=\"col s12 l6 m8 offset-m3 offset-l3\">\n    <div class=\"card grey lighten-5 z-depth-2\">\n      <div class=\"card-content\">\n        <span class=\"card-title bold\"><a routerLink = \"/board/{{board?._id}}\">{{board?.boardName}}</a></span>\n        <p>{{board?.discription}}\n        </p>\n      </div>\n      <div class=\"card-action z-depth-2\">\n        <a routerLink=\"/board/{{board?._id}}\">View Notices on board</a>\n        <!-- <a class=\"right\">Subscribe this board</a> -->\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/board/list-board/list-board.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListBoardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_board_service__ = __webpack_require__("../../../../../src/app/services/board.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListBoardComponent = (function () {
    function ListBoardComponent(boardService) {
        this.boardService = boardService;
    }
    ListBoardComponent.prototype.ngOnInit = function () {
        this.getAllBoard();
    };
    ListBoardComponent.prototype.getAllBoard = function () {
        var _this = this;
        this.subscription = this.boardService.getAllBoards().subscribe(function (response) {
            _this.boards = response.json();
            console.log(_this.boards);
        }, function (error) {
            console.log('error occured while fetching the boards');
        }, function () {
            _this.subscription.unsubscribe();
        });
    };
    ListBoardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'enb-list-board',
            template: __webpack_require__("../../../../../src/app/board/list-board/list-board.component.html"),
            styles: [__webpack_require__("../../../../../src/app/board/list-board/list-board.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_board_service__["a" /* BoardService */]])
    ], ListBoardComponent);
    return ListBoardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/board/view-single-board/view-single-board.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".active{\n\n}\n.inactive{\n\t\n}\n.btn{\n\tbackground-color: #4285F4;\n}\n\n.left{\n\twidth: 80% !important;\n}\n\n.material-icons{\n\tcolor: grey;\n}\n\n.discription{\n\ttext-align:justify;\n}\n.textData{\n\ttext-align:justify;\t\n}\n.markView{\n\tcursor: pointer;\n}\n\n.openView{\n\tcursor: pointer;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/board/view-single-board/view-single-board.component.html":
/***/ (function(module, exports) {

module.exports = "<br>\n<div class=\"row\">\n  <div class=\"col card l2 m3 s12 offset-l1\">\n    <div class=\"boardInfo\">\n      <h4>{{board?.boardName}}</h4>\n      <hr>\n      <div *ngIf=\"!subscribedToBoard; else elseBlock1\" >\n        <a class=\"btn btn-block \" (click)=\"onSubscribe()\">Subscribe</a>\n      </div>\n      <ng-template #elseBlock1 >\n        <a class=\"btn btn-block \" (click)=\"onUnSubscribe()\">Unsubscribe</a>        \n      </ng-template>\n      <p>{{board?.buildDate | date:mediumDate}}</p> \n      <div *ngIf=\"board?.isPrivate; else elseBlock2\">\n        <p>This is a private board</p>\n      </div>\n      <ng-template #elseBlock2>\n          <p>This is a public board</p>          \n      </ng-template>\n      <p class=\"grey-text discription\">\"{{board?.discription}}\"</p>\n      <!-- <div class=\"BoardMembers\">\n        <hr>\n        <ul class=\"collapsible z-depth-0 \" style=\"border-color: transparent;\" data-collapsible=\"accordion\">\n          <li>\n            <div class=\"collapsible-header\" style=\"border-color: transparent;\" >Members</div>\n            <div class=\"collapsible-body\" style=\"border-color: transparent;\" >\n              <li>prashant</li>\n              <li>himanshu</li>\n            </div>\n          </li>\n        </ul>\n      </div> -->\n    </div>\n  </div>\n  <div class=\"col l6 offset-l1 m6 offset-m1 s12 notices\">\n    <ul materialize=\"collapsible\" class=\"collapsible\" data-collapsible=\"expandable\">\n      <li *ngFor=\"let notice of notices; let i = index\">\n        <div class=\"collapsible-header\">\n          <span class=\"left\"> {{notice?.title}}</span>\n          <span class=\"right grey-text lighten-2\">{{notice?.publishDate | date:mediumDate}}</span>\n        </div>\n        <div class=\"collapsible-body\">\n          <span class =\" left grey-text lighten-2\">Publisher : {{notice?.publisher?.name}} </span>\n          <span data-target=\"modal1\" class=\"grey-text lighten-2 openView  modal-trigger\" (click)=\"openModal(i)\">\n            <i class=\" tiny material-icons\">visibility</i> {{notice?.userViwed.length}}\n          </span>\n          \n          <hr>\n          <br>\n          <div class=\"textData\">\n            <span>{{notice?.textData}}</span>\n          </div>\n          <br><br>\n          <div>\n            <a class=\"grey-text light-2 markView\" (click)=\"markView(notice._id,i)\" >Mark View</a>\n            &ensp;&ensp;&ensp;\n            <a class=\"grey-text light-2\" href=\"\" >Comment</a>\n          </div>\n        </div>\n      </li>\n      <div id=\"modal1\" class=\"modal modal-fixed-footer\" materialize=\"modal\" [materializeParams]=\"[{dismissible: true}]\" [materializeActions]=\"modalActions\">\n          <div class=\"modal-content center\">\n            <ul class=\"collection with-header\">\n              <li class=\"collection-header\"><h4>People marked the notice as viewed</h4></li>\n              <li *ngFor=\"let userViewd of usersViewd\"\n              class=\"collection-item\">\n                {{userViewd.name}}\n              </li>\n            </ul>\n          </div>\n          <div class=\"modal-footer\">\n            <div class=\"center\">\n              <a class=\"waves-effect waves-green btn-flat\" (click)=\"closeModal()\">Close</a>\n            </div>\n          </div>\n        </div>\n\n    </ul>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/board/view-single-board/view-single-board.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewSingleBoardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_services_notice_service__ = __webpack_require__("../../../../../src/app/services/notice.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_services_board_service__ = __webpack_require__("../../../../../src/app/services/board.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ViewSingleBoardComponent = (function () {
    function ViewSingleBoardComponent(activatedRoute, noticeService, boardService, userService, router) {
        this.activatedRoute = activatedRoute;
        this.noticeService = noticeService;
        this.boardService = boardService;
        this.userService = userService;
        this.router = router;
        this.modalActions = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.boardId = this.activatedRoute.snapshot.params['BoardId'];
    }
    ViewSingleBoardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.currentlyLogedIn.subscribe(function (Status) { return _this.isLogedIn = Status; });
        this.boardSubscription = this.boardService.getBoard(this.boardId).subscribe(function (response) {
            _this.board = response.json();
            console.log(_this.board);
            _this.user = JSON.parse(localStorage.getItem('currentUser'));
            _this.subscribedToBoard = _this.board.subscriberList.includes(_this.user._id);
        }, function (error) {
            if (error.status === 404) {
                console.log("board was not found");
            }
            else if (error.status === 500) {
                console.log("internal database error");
            }
            else {
                console.log("error while fetching data");
            }
        }, function () {
            _this.boardSubscription.unsubscribe();
        });
        this.subscription = this.noticeService.getNoticeForBoard(this.boardId).subscribe(function (response) {
            _this.notices = response.json();
            _this.loaded = true;
        }, function (error) {
            if (error.status === 404) {
                console.log("no notice hosted on this board");
            }
            else {
                console.error('error while fetching the boards');
            }
        }, function () {
            _this.subscription.unsubscribe();
        });
    };
    ViewSingleBoardComponent.prototype.markView = function (noticeId, noticeIndex) {
        var _this = this;
        if (this.isLogedIn == false) {
            this.router.navigate(["/login"]);
            return null;
        }
        this.markViewSub = this.noticeService.markView(noticeId)
            .subscribe(function (response) {
            if (_this.notices[noticeIndex].userViwed.filter(function (uv) { return (uv._id === _this.user._id); }).length == 0) {
                _this.notices[noticeIndex].userViwed.push({ _id: _this.user._id, name: _this.user.name });
            }
            console.log(_this.notices[noticeIndex].userViwed);
        }, function (error) {
            if (error.status === 500) {
                console.error("internal database error");
            }
            else if (error.status === 404) {
                console.log("notice was not found to mark as viewed, please refresh page");
            }
            else {
                console.log("error while marking a notice as view");
            }
        }, function () {
            _this.markViewSub.unsubscribe();
        });
    };
    ViewSingleBoardComponent.prototype.onSubscribe = function () {
        var _this = this;
        if (this.isLogedIn == false) {
            this.router.navigate(["/login"]);
            return null;
        }
        this.subscription = this.boardService.subscribeBoard(this.board._id)
            .subscribe(function (response) {
            _this.subscribedToBoard = !_this.subscribedToBoard;
        }, function (error) {
            if (error.status === 500)
                console.error("internal databse error");
            else
                console.error("error while subscribing to the board");
        }, function () {
            _this.subscription.unsubscribe();
        });
    };
    ViewSingleBoardComponent.prototype.onUnSubscribe = function () {
        var _this = this;
        this.subscription = this.boardService.unSubscribeBoard(this.board._id)
            .subscribe(function (response) {
            _this.subscribedToBoard = !_this.subscribedToBoard;
        }, function (error) {
            if (error.status === 500)
                console.error("internal databse error");
            else
                console.error("error while subscribing to the board");
        }, function () {
            _this.subscription.unsubscribe();
        });
    };
    ViewSingleBoardComponent.prototype.openModal = function (i) {
        this.usersViewd = (this.notices[i].userViwed);
        console.log(this.notices[i].userViwed);
        this.modalActions.emit({ action: "modal", params: ['open'] });
    };
    ViewSingleBoardComponent.prototype.closeModal = function () {
        this.modalActions.emit({ action: "modal", params: ['close'] });
    };
    ViewSingleBoardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'enb-view-single-board',
            template: __webpack_require__("../../../../../src/app/board/view-single-board/view-single-board.component.html"),
            styles: [__webpack_require__("../../../../../src/app/board/view-single-board/view-single-board.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2_app_services_notice_service__["a" /* NoticeService */],
            __WEBPACK_IMPORTED_MODULE_3_app_services_board_service__["a" /* BoardService */],
            __WEBPACK_IMPORTED_MODULE_4_app_services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], ViewSingleBoardComponent);
    return ViewSingleBoardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/common/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".page-footer{\n\tbackground-color: #4285F4;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/common/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "\n<footer class=\"page-footer\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col l6 s12\">\n          <h5 class=\"white-text\">Final Year project</h5>\n          <p class=\"grey-text text-lighten-4\">This project was build to partially statisfy the \n            requirments to complete course BCA part-3  under the Pt. Ravishankar Shukla University. \n          </p>\n        </div>\n        <div class=\"col l4 offset-l2 s12\">\n          <h5 class=\"white-text\">Links</h5>\n          <ul>\n            <li><a class=\"grey-text text-lighten-3\" href=\"#!\">About Me</a></li>\n            <li><a class=\"grey-text text-lighten-3\" href=\"#!\">About Project</a></li>\n            <li><a class=\"grey-text text-lighten-3\" href=\"#!\">Contact Us</a></li>\n          </ul>\n        </div>\n      </div>\n    </div>\n    <div class=\"footer-copyright\">\n      <div class=\"container\">\n        Made with &hearts; for Disha College. A Product by &copy; Prashant Dhirendra    \n      <a class=\"grey-text text-lighten-4 right\" href=\"#!\">About Dev</a>\n      </div>\n    </div>\n  </footer>"

/***/ }),

/***/ "../../../../../src/app/common/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
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

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'enb-footer',
            template: __webpack_require__("../../../../../src/app/common/footer/footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/common/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/common/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".form-bg{\n\tbackground-color: #fcfcfc;\n\tmargin: 10px;\n\tpadding: 20px;\n\tborder-radius: 5px;\n}\n.btn-large{\n\tbackground-color: #4285F4;\n}\n\n#forgotPassword{\n\tpadding-left: 40px;\n\tpadding-right: 10px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/common/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n\t<form  #loginForm=\"ngForm\" class=\"col s12 l6 offset-l3\">\n\t\t<div class=\"form-bg z-depth-4\">\n\t\t\t<h2 align=\"center\">Login Form</h2>\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"input-field col s12\">\n\t\t\t\t\t<input id=\"email\" type=\"email\" ngModel name=\"email\" class=\"validate\" required>\n\t\t\t\t\t<label for=\"email\">Email</label>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"input-field col s12\">\n\t\t\t\t\t<input id=\"password\" type=\"password\" ngModel name=\"password\" class=\"validate\" minlength=\"6\" required> \n\t\t\t\t\t<label for=\"password\">Password</label>\n\t\t\t\t</div>\n\t\t\t\t<button (click)=\"onSubmit(loginForm)\" class=\"waves-effect waves-light btn-large\" [disabled]=\"!loginForm.valid\"><i class=\"material-icons left\">send</i>Login</button>\n\t\t\t</div>\n\t\t\t<div class=\"row\">\n\t\t\t\t<a routerLink=\"/register\"> Not Registered ? click here</a> <a id=\"forgotPassword\" class=\"right\" routerLink=\"/common/forgotPassword/\">Forgot Password</a>\n\t\t\t</div>\n\t\t</div>\n\t\t</form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/common/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
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
    function LoginComponent(http, router) {
        this.http = http;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onSubmit = function (loginForm) {
        var _this = this;
        this.loginData = loginForm.value;
        this.subscription = this.http.LoginUser(this.loginData).subscribe(function (response) {
            localStorage.setItem('currentUser', JSON.stringify(response.json()));
            localStorage.setItem('loginStatus', 'true');
            localStorage.setItem('adminStatus', response.json().isAdmin);
            _this.http.changeLoginStatus(true, response.json().isAdmin);
            _this.router.navigate(['']);
        }, function (error) {
            if (error.status === 404) {
                console.error('user not found');
            }
            else if (error.status === 401) {
                console.error('A user is already loged-in');
            }
            else if (error.status === 403) {
                console.error('Password does not match');
            }
            else {
                console.error('Error Occurd while fetching user: ', error);
            }
        }, function () {
            // this callback is called when all data transfer is complete
            _this.subscription.unsubscribe();
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'enb-login',
            template: __webpack_require__("../../../../../src/app/common/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/common/login/login.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/common/nav-bar/nav-bar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".nav-wrapper{\n\tbackground-color: #4285F4;\n}\n.brand-logo{\n\tpadding-left: 30px;\n}\n\n.dropdown-content{\n\twidth: 200px !important;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/common/nav-bar/nav-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav>\n\t<div class=\"nav-wrapper\">\n\t\t<a routerLink=\"/\" class=\"brand-logo\">E-Notice</a>\n\t\t<a \n\t\tmaterialize=\"sideNav\" [materializeParams]=\"[{edge:'left'}]\"\n\t\thref=\"#\" data-activates=\"mobile-demo\" class=\"button-collapse\"><i class=\"material-icons\">menu</i></a>\n\t\t<ul class=\"right hide-on-med-and-down\">\n\t\t\t<li><a routerLink=\"/boards\">Boards</a></li>\n\t\t\t<li *ngIf=\"!isLogedIn; else logedBlock\"><a routerLink=\"/login\">Log-In</a></li>\n\t\t\t<ng-template #logedBlock >\n\t\t\t\t<li><a routerLink=\"/user\">User</a></li>\n\t\t\t\t<li *ngIf=\"isAdmin\"><a routerLink=\"\">Admin Panel</a></li>\n\t\t\t\t<li><a (click)=\"logOut()\">Log-Out</a></li>\n\t\t\t</ng-template>\n\t\t</ul>\n\t\t<ul class=\"side-nav\" id=\"mobile-demo\">\n\t\t\t<li><a routerLink=\"/boards\">Boards</a></li>\t\t\t\t\n\t\t\t<li *ngIf=\"!isLogedIn; else logedBlockNav\"><a routerLink=\"/login\">Log-In</a></li>\n\t\t\t<ng-template #logedBlockNav>\n\t\t\t\t\t<li><a routerLink=\"/user\">User</a></li>\n\t\t\t\t<li *ngIf=\"isAdmin\"><a routerLink=\"\">Admin Panel</a></li>\n\t\t\t\t<li><a (click)=\"logOut()\" routerLink=\"\">Log-Out</a></li>\n\t\t\t\t<li class=\"diveder\">\n\t\t\t</ng-template>\n\t\t</ul>\n\t</div>\n</nav>"

/***/ }),

/***/ "../../../../../src/app/common/nav-bar/nav-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavBarComponent = (function () {
    function NavBarComponent(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    NavBarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.currentlyLogedIn.subscribe(function (Status) { return _this.isLogedIn = Status; });
        this.userService.currentlyAdmin.subscribe(function (Status) { return _this.isAdmin = Status; });
    };
    NavBarComponent.prototype.logOut = function () {
        var _this = this;
        localStorage.setItem('adminStatus', 'false');
        localStorage.setItem('loginStatus', 'false');
        localStorage.removeItem('currentUser');
        this.userService.changeLoginStatus(false, false);
        this.subscription = this.userService.logoutUser().subscribe(function (response) {
            _this.router.navigate(['/login']);
        }, function (error) {
            if (error.status === 401) {
                console.error("you are not Logged-In");
            }
            else {
                console.error("Error Occured while loggin you out");
            }
        }, function () {
            _this.subscription.unsubscribe();
        });
    };
    NavBarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'enb-nav-bar',
            template: __webpack_require__("../../../../../src/app/common/nav-bar/nav-bar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/common/nav-bar/nav-bar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], NavBarComponent);
    return NavBarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/common/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".depthClass{\n\tbackground-color: #fcfcfc;\n\tmargin: 10px;\n\tpadding: 20px;\n\tborder-radius: 5px;\n}\n\n.btn-large{\n\tbackground-color: #4285F4;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/common/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <form [formGroup]=\"regForm\" class=\"col s12 l6 offset-l3\"> \n    <div class=\"depthClass z-depth-4\">\n      <h3 align=\"center\">Registration Form</h3>\n      <div class=\"row\">\n        <div class=\"input-field col s6\">\n          <input  \n            id=\"first_name\" \n            type=\"text\" \n            class=\"validate\" \n            name=\"first_name\" \n            formControlName=\"first_name\"\n            required />\n          <label for=\"first_name\">First Name</label>\n        </div>\n        <div class=\"input-field col s6\">\n          <input \n            id=\"last_name\" \n            type=\"text\" \n            class=\"validate\" \n            name=\"last_name\" \n            formControlName=\"last_name\"\n            required />\n          <label for=\"last_name\">Last Name</label>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"input-field col s12\">\n          <input \n            id=\"password\" \n            type=\"password\" \n            class=\"validate\" \n            name=\"password\" \n            minlength=6 \n            formControlName=\"password\"\n            required />\n          <label for=\"password\">Password</label>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"input-field col s12\">\n          <input \n            id=\"rtpassword\" \n            type=\"password\" \n            class=\"validate\" \n            name=\"rtpassword\"  \n            minlength=6 \n            formControlName=\"rtpassword\"\n            required />\n          <label for=\"retype password\">Retype Password</label>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"input-field col s12\">\n          <input \n            id=\"email\" \n            type=\"email\" \n            class=\"validate\" \n            name=\"email\" \n            formControlName=\"email\"\n            required />\n          <label for=\"email\">Email</label>\n        </div>\n      </div>\n      <div class=\"row\">\n        <button (click)=\"onSubmit()\" class=\"waves-effect waves-light btn-large\" [disabled]=\"!regForm.valid\"><i class=\"material-icons left\">person_add</i>Submit</button>\n      </div>\n      <div class=\"row\">\n        <a routerLink=\"/login\"> Already Registered ? Login Here</a>\n      </div>\n    </div>\n  </form>\n</div>"

/***/ }),

/***/ "../../../../../src/app/common/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_app_services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash__);
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
    function RegisterComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.regForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            'first_name': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            'last_name': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            'email': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            'password': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            'rtpassword': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]()
        });
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onSubmit = function () {
        var _this = this;
        // ready data from regFrom for the service
        this.regData = this.regForm.value;
        this.regData = __WEBPACK_IMPORTED_MODULE_4_lodash__["omit"](this.regData, ['first_name', 'last_name']);
        this.name = this.regForm.value.first_name + " " + this.regForm.value.last_name;
        this.regData = __WEBPACK_IMPORTED_MODULE_4_lodash__["merge"](this.regData, { 'name': this.name });
        //console.log(this.regData);
        //calling service
        this.subscription = this.userService.registerUser(this.regData).subscribe(function (response) {
            console.log("user registerd");
            _this.router.navigate(['']);
        }, function (error) {
            if (error.status === 400) {
                console.error(error._body);
            }
            else if (error.status === 500) {
                console.error('Internal server error');
            }
            else {
                console.error('Error Occurd while registering user: ', error);
            }
        });
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["n" /* Component */])({
            selector: 'enb-register',
            template: __webpack_require__("../../../../../src/app/common/register/register.component.html"),
            styles: [__webpack_require__("../../../../../src/app/common/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_app_services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/directive/scroll-at-bottom.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScrollAtBottomDirective; });
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

var ScrollAtBottomDirective = (function () {
    function ScrollAtBottomDirective() {
    }
    ScrollAtBottomDirective.prototype.onScroll = function () {
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            console.log("At the bottom");
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostListener */])("window:scroll", []),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ScrollAtBottomDirective.prototype, "onScroll", null);
    ScrollAtBottomDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: '[enbScrollAtBottom]'
        }),
        __metadata("design:paramtypes", [])
    ], ScrollAtBottomDirective);
    return ScrollAtBottomDirective;
}());



/***/ }),

/***/ "../../../../../src/app/services/board.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BoardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BoardService = (function () {
    function BoardService(http) {
        this.http = http;
    }
    BoardService.prototype.getAllBoards = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiUrl + 'boards', { withCredentials: true });
    };
    BoardService.prototype.getBoard = function (BoardId) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiUrl + "board/" + BoardId, { withCredentials: true });
    };
    BoardService.prototype.getAllSubscribedBoard = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiUrl + "getAllSubscribedBoard", { withCredentials: true });
    };
    BoardService.prototype.getAllMembershipBoard = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiUrl + "getAllMembershipBoard", { withCredentials: true });
    };
    BoardService.prototype.subscribeBoard = function (BoardId) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiUrl + "subscribe/" + BoardId, { withCredentials: true });
    };
    BoardService.prototype.unSubscribeBoard = function (BoardId) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiUrl + "unSubscribe/" + BoardId, { withCredentials: true });
    };
    BoardService.prototype.putBoard = function (boardData) {
        return this.http.put(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiUrl + "board", boardData, { withCredentials: true });
    };
    BoardService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], BoardService);
    return BoardService;
}());



/***/ }),

/***/ "../../../../../src/app/services/notice.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoticeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NoticeService = (function () {
    function NoticeService(http) {
        this.http = http;
    }
    NoticeService.prototype.getAllNoticeBoard = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiUrl + 'notices', { withCredentials: true });
    };
    NoticeService.prototype.getNoticeForBoard = function (boardId) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiUrl + 'noticeForBoard/' + boardId, { withCredentials: true });
    };
    NoticeService.prototype.deleteNotice = function (noticeId) {
        return this.http.delete(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiUrl + 'notice/' + noticeId, { withCredentials: true });
    };
    NoticeService.prototype.markView = function (noticeId) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiUrl + 'notice/viewed/' + noticeId, { withCredentials: true });
    };
    NoticeService.prototype.putNotice = function (noticeData) {
        return this.http.put(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiUrl + "notice", noticeData, { withCredentials: true });
    };
    NoticeService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], NoticeService);
    return NoticeService;
}());



/***/ }),

/***/ "../../../../../src/app/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserService = (function () {
    function UserService(http) {
        this.http = http;
        this.isLogedIn = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]((localStorage.getItem('loginStatus') === 'true') ? true : false);
        this.currentlyLogedIn = this.isLogedIn.asObservable();
        this.isAdmin = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]((localStorage.getItem('adminStatus') === 'true') ? true : false);
        this.currentlyAdmin = this.isAdmin.asObservable();
    }
    UserService.prototype.getAllUser = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrl + 'users', { withCredentials: true });
    };
    UserService.prototype.registerUser = function (user) {
        return this.http.put(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrl + 'user', user, { withCredentials: true });
    };
    UserService.prototype.LoginUser = function (login) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrl + 'user/login', login, { withCredentials: true });
    };
    UserService.prototype.logoutUser = function () {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrl + 'user/logout', {}, { withCredentials: true });
    };
    UserService.prototype.getMe = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrl + 'me', { withCredentials: true });
    };
    UserService.prototype.updateMe = function (user) {
        return this.http.patch(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrl + 'user', user, { withCredentials: true });
    };
    UserService.prototype.changeAdminStatus = function (UserId) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrl + "user/changeAdminStatus/" + UserId, { withCredentials: true });
    };
    UserService.prototype.deleteUserByAdmin = function (userId) {
        return this.http.delete(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrl + "user/" + userId, { withCredentials: true });
    };
    UserService.prototype.changeLoginStatus = function (loginStatus, adminStatus) {
        this.isLogedIn.next(loginStatus);
        this.isAdmin.next(adminStatus);
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "../../../../../src/app/user/delete-me/delete-me.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/delete-me/delete-me.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  delete-me works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/user/delete-me/delete-me.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeleteMeComponent; });
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

var DeleteMeComponent = (function () {
    function DeleteMeComponent() {
    }
    DeleteMeComponent.prototype.ngOnInit = function () {
    };
    DeleteMeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'enb-delete-me',
            template: __webpack_require__("../../../../../src/app/user/delete-me/delete-me.component.html"),
            styles: [__webpack_require__("../../../../../src/app/user/delete-me/delete-me.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DeleteMeComponent);
    return DeleteMeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/user/update/update.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".btn{\n\tbackground-color: #4285F4;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/update/update.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <h4>Update Profile</h4>\n  <hr>\n  <div class=\"col s12\">\n  <form [formGroup]=\"updateForm\">\n      <div class=\"row\">\n        <div class=\"input-field col s12\">\n          <input id=\"name\" type=\"text\" class=\"validate\" formControlName=\"name\"> \n          <label for=\"name\" class=\"active\">Full Name</label>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"input-field col s12\">\n          <input id=\"email\" type=\"email\" class=\"validate\" formControlName=\"email\">\n          <label for=\"email\" class=\"active\">Email</label>\n        </div>\n      </div>\n\n      <div class=\"row\">\n          <div class=\"input-field col s12\">\n            <input id=\"phone\" type=\"tel\" class=\"validate\" formControlName=\"phone\">\n            <label for=\"phone\" class=\"active\">Phone Number</label>\n          </div>\n      </div>\n      <button type=\"button\" (click)=\"onUpdate()\" class=\"btn btn-large\"> Update Info</button>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/user/update/update.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Validator = __webpack_require__("../../../../validator/index.js");
var UpdateComponent = (function () {
    function UpdateComponent(userService) {
        this.userService = userService;
    }
    UpdateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.updateForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
            name: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](),
            email: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](''),
            phone: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('')
        });
        this.subscription = this.userService.getMe().subscribe(function (response) {
            _this.user = response.json();
            _this.updateForm.setValue({
                name: _this.user.name,
                email: _this.user.email,
                phone: _this.user.phone
            });
        }, function (error) {
            console.log("Error while fetching user info to update");
        }, function () {
            _this.subscription.unsubscribe();
        });
    };
    ;
    UpdateComponent.prototype.onUpdate = function () {
        var _this = this;
        console.log(this.updateForm.value);
        this.subscription = this.userService.updateMe(this.updateForm.value).subscribe(function (respose) {
            console.log(respose);
        }, function (error) {
            if (error.status === 400) {
                console.log(error._body);
            }
            else if (error.status === 500) {
                console.log("internal database error");
            }
            else if (error.status === 401) {
                console.log("you are not logged in");
            }
            else {
                console.log("error while fetching data");
            }
        }, function () {
            _this.subscription.unsubscribe();
        });
    };
    ;
    UpdateComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'enb-update',
            template: __webpack_require__("../../../../../src/app/user/update/update.component.html"),
            styles: [__webpack_require__("../../../../../src/app/user/update/update.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]])
    ], UpdateComponent);
    return UpdateComponent;
}());



/***/ }),

/***/ "../../../../../src/app/user/user-route.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return userRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__update_update_component__ = __webpack_require__("../../../../../src/app/user/update/update.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__view_profile_view_profile_component__ = __webpack_require__("../../../../../src/app/user/view-profile/view-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_user_view_subscription_view_subscription_component__ = __webpack_require__("../../../../../src/app/user/view-subscription/view-subscription.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_user_view_membership_view_membership_component__ = __webpack_require__("../../../../../src/app/user/view-membership/view-membership.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__delete_me_delete_me_component__ = __webpack_require__("../../../../../src/app/user/delete-me/delete-me.component.ts");





var userRoutes = [
    {
        path: '',
        children: [],
        component: __WEBPACK_IMPORTED_MODULE_1__view_profile_view_profile_component__["a" /* ViewProfileComponent */]
    }, {
        path: 'update',
        component: __WEBPACK_IMPORTED_MODULE_0__update_update_component__["a" /* UpdateComponent */]
    }, {
        path: 'subscribed',
        component: __WEBPACK_IMPORTED_MODULE_2_app_user_view_subscription_view_subscription_component__["a" /* ViewSubscriptionComponent */]
    }, {
        path: 'membership',
        component: __WEBPACK_IMPORTED_MODULE_3_app_user_view_membership_view_membership_component__["a" /* ViewMembershipComponent */]
    }, {
        path: 'deleteMe',
        component: __WEBPACK_IMPORTED_MODULE_4__delete_me_delete_me_component__["a" /* DeleteMeComponent */]
    }
];


/***/ }),

/***/ "../../../../../src/app/user/user.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".sideBar{\n\tmargin-top: 20px !important;\n\t/* margin-left: 20px !important; */\n\tpadding-left: 30px;\n}\n\n.mainSection{\n\tmargin-top: 20px !important;\n\t/* margin-left: 20px !important; */\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/user.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\t\n\t<div class=\"sideBar col s12 m3 l2 \" >\n\t\t<ul class=\"collection with-header\">\n\t\t\t<li class=\"collection-item grey lighten-2\"><a routerLink=\"/user\">User</a></li>\n\t\t\t<li class=\"collection-item\"><a routerLink=\"/user/update\">Update profile</a></li>\n\t\t\t<li class=\"collection-item\"><a routerLink=\"/user/subscribed\">My Subscription</a></li>\n\t\t\t<li class=\"collection-item\"><a routerLink=\"/user/membership\">My Membership</a></li>\n\t\t\t<li class=\"collection-item\"><a routerLink=\"/user/deleteMe\">Delete Account</a></li>\t\t\t\n\t\t\t<div *ngIf=\"isAdmin\">\n\t\t\t<li class=\"collection-item grey lighten-2\">Admin</li>\n\t\t\t<li class=\"collection-item\"><a routerLink=\"/admin/postNotice\">Manage Notice</a></li>\n\t\t\t<li class=\"collection-item\"><a routerLink=\"/admin/manageBoards\" >Manage Boards</a></li>\n\t\t\t<li class=\"collection-item\"><a routerLink=\"/admin/manageUser\">Manage Users</a></li>\n\t\t\t</div>\n\t\t</ul>\n\t</div>\n\n\t<div class=\"col s12 m6 l6 offset-m1 offset-l1 mainSection\">\n\t\t<router-outlet></router-outlet>\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/user/user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserComponent; });
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

var UserComponent = (function () {
    function UserComponent() {
        this.isAdmin = false;
    }
    UserComponent.prototype.ngOnInit = function () {
        this.isAdmin = (localStorage.getItem('adminStatus') === 'true') ? true : false;
    };
    UserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'enb-user',
            template: __webpack_require__("../../../../../src/app/user/user.component.html"),
            styles: [__webpack_require__("../../../../../src/app/user/user.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "../../../../../src/app/user/view-membership/view-membership.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/view-membership/view-membership.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let board of boards\" >\n  <div class=\"card grey lighten-5 z-depth-2\">\n    <div class=\"card-content\">\n      <span class=\"card-title bold\"><a routerLink = \"/board/{{board?._id}}\">{{board?.boardName}}</a></span>\n      <p>{{board?.discription}}\n      </p>\n    </div>\n    <div class=\"card-action z-depth-2\">\n      <a routerLink=\"/board/{{board?._id}}\">View Notices on board</a>\n      <!-- <a class=\"right\">Subscribe this board</a> -->\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/user/view-membership/view-membership.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewMembershipComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_services_board_service__ = __webpack_require__("../../../../../src/app/services/board.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ViewMembershipComponent = (function () {
    function ViewMembershipComponent(boardService) {
        this.boardService = boardService;
    }
    ViewMembershipComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.boardService.getAllMembershipBoard()
            .subscribe(function (respose) {
            _this.boards = respose.json();
            console.log(_this.boards);
        }, function (error) {
        }, function () {
            _this.subscription.unsubscribe();
        });
    };
    ViewMembershipComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'enb-view-membership',
            template: __webpack_require__("../../../../../src/app/user/view-membership/view-membership.component.html"),
            styles: [__webpack_require__("../../../../../src/app/user/view-membership/view-membership.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_app_services_board_service__["a" /* BoardService */]])
    ], ViewMembershipComponent);
    return ViewMembershipComponent;
}());



/***/ }),

/***/ "../../../../../src/app/user/view-profile/view-profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".viewProfile{\n\tmargin-top: 20px;\n}\n.row{\n\tpadding-top: 20px;\n\tpadding-bottom: 20px;\n}\n.picSection{\n\tpadding-top: 20px;\n\tpadding-left: 30px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/view-profile/view-profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"viewProfile\">\n  <div class=\"row card\">\n    <div class=\"col s12 m12 l3 picSection \">\n      <i class=\"large material-icons\">account_circle</i>\n    </div>\n    <div class=\"col s12 m12 l7 infoSection\">\n      <h5>{{user?.name}}</h5><hr>\n      <p *ngIf=\"user?.isAdmin\">You <strong>have</strong> admin privilages</p>\n      <p *ngIf=\"!user?.isAdmin\">You <strong>do not have</strong> admin privilages</p>\n      <p><strong>Email :</strong> {{user?.email}}</p>\n      <p><strong>Phone :</strong> {{user?.phone}}</p>\n      <p><strong>Date :</strong> {{user?.registerationDate | date:mediumDate}}</p>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/user/view-profile/view-profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ViewProfileComponent = (function () {
    function ViewProfileComponent(userService) {
        this.userService = userService;
    }
    ViewProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.userService.getMe().subscribe(function (response) {
            _this.user = response.json();
        }, function (error) {
            console.log("Error while fetching user info to update");
        }, function () {
            _this.subscription.unsubscribe();
        });
    };
    ViewProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'enb-view-profile',
            template: __webpack_require__("../../../../../src/app/user/view-profile/view-profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/user/view-profile/view-profile.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_app_services_user_service__["a" /* UserService */]])
    ], ViewProfileComponent);
    return ViewProfileComponent;
}());



/***/ }),

/***/ "../../../../../src/app/user/view-subscription/view-subscription.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/view-subscription/view-subscription.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let board of boards\" >\n  <div class=\"card grey lighten-5 z-depth-2\">\n    <div class=\"card-content\">\n      <span class=\"card-title bold\"><a routerLink = \"/board/{{board?._id}}\">{{board?.boardName}}</a></span>\n      <p>{{board?.discription}}\n      </p>\n    </div>\n    <div class=\"card-action z-depth-2\">\n      <a routerLink=\"/board/{{board?._id}}\">View Notices on board</a>\n      <!-- <a class=\"right\">Subscribe this board</a> -->\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/user/view-subscription/view-subscription.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewSubscriptionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_services_board_service__ = __webpack_require__("../../../../../src/app/services/board.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ViewSubscriptionComponent = (function () {
    function ViewSubscriptionComponent(boardService) {
        this.boardService = boardService;
    }
    ViewSubscriptionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.boardService.getAllSubscribedBoard()
            .subscribe(function (respose) {
            _this.boards = respose.json();
            console.log(_this.boards);
        }, function (error) {
        }, function () {
            _this.subscription.unsubscribe();
        });
    };
    ViewSubscriptionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'enb-view-subscription',
            template: __webpack_require__("../../../../../src/app/user/view-subscription/view-subscription.component.html"),
            styles: [__webpack_require__("../../../../../src/app/user/view-subscription/view-subscription.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_app_services_board_service__["a" /* BoardService */]])
    ], ViewSubscriptionComponent);
    return ViewSubscriptionComponent;
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
    //  apiUrl: "http://localhost:3000/api/",
    apiUrl: "http://192.168.43.101:3000/api/",
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map