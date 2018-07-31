(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".stream-container {\r\n\tpadding: 0;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"main-container\" class=\"container\">\r\n\t<div *ngIf=\"!session\" id=\"join\">\r\n\t\t<div id=\"img-div\"><img src=\"assets/images/openvidu_grey_bg_transp_cropped.png\" /></div>\r\n\t\t<div id=\"join-dialog\" class=\"jumbotron vertical-center\">\r\n\t\t\t<h1>Join a video session</h1>\r\n\t\t\t<form class=\"form-group\" (submit)=\"joinSession()\">\r\n\t\t\t\t<p>\r\n\t\t\t\t\t<label>Participant</label>\r\n\t\t\t\t\t<input class=\"form-control\" type=\"text\" id=\"userName\" name=\"userName\" [(ngModel)]=\"myUserName\" required>\r\n\t\t\t\t</p>\r\n\t\t\t\t<p>\r\n\t\t\t\t\t<label>Session</label>\r\n\t\t\t\t\t<input class=\"form-control\" type=\"text\" id=\"sessionId\" name=\"sessionId\" [(ngModel)]=\"mySessionId\" required>\r\n\t\t\t\t</p>\r\n\t\t\t\t<p class=\"text-center\">\r\n\t\t\t\t\t<input class=\"btn btn-lg btn-success\" type=\"submit\" name=\"commit\" value=\"Join!\">\r\n\t\t\t\t</p>\r\n\t\t\t</form>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<div *ngIf=\"session\" id=\"session\">\r\n\t\t<div id=\"session-header\">\r\n\t\t\t<h1 id=\"session-title\">{{mySessionId}}</h1>\r\n\t\t\t<input class=\"btn btn-large btn-danger\" type=\"button\" id=\"buttonLeaveSession\" (click)=\"leaveSession()\" value=\"Leave session\">\r\n\t\t</div>\r\n\t\t<div *ngIf=\"mainStreamManager\" id=\"main-video\" class=\"col-md-6\">\r\n\t\t\t<user-video [streamManager]=\"mainStreamManager\"></user-video>\r\n\t\t</div>\r\n\t\t<div id=\"video-container\" class=\"col-md-6\">\r\n\t\t\t<div *ngIf=\"publisher\" class=\"stream-container col-md-6 col-xs-6\">\r\n\t\t\t\t<user-video [streamManager]=\"publisher\" (clicked)=\"updateMainStreamManager(publisher)\"></user-video>\r\n\t\t\t</div>\r\n\t\t\t<div *ngFor=\"let sub of subscribers\" class=\"stream-container col-md-6 col-xs-6\">\r\n\t\t\t\t<user-video [streamManager]=\"sub\" (clicked)=\"updateMainStreamManager(sub)\"></user-video>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var openvidu_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! openvidu-browser */ "./node_modules/openvidu-browser/lib/index.js");
/* harmony import */ var openvidu_browser__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(openvidu_browser__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppComponent = /** @class */ (function () {
    function AppComponent(httpClient) {
        this.httpClient = httpClient;
        this.OPENVIDU_SERVER_URL = 'https://' + location.hostname + ':4443';
        this.OPENVIDU_SERVER_SECRET = 'MY_SECRET';
        this.subscribers = []; // Remotes
        this.generateParticipantInfo();
    }
    AppComponent.prototype.beforeunloadHandler = function () {
        // On window closed leave session
        this.leaveSession();
    };
    AppComponent.prototype.ngOnDestroy = function () {
        // On component destroyed leave session
        this.leaveSession();
    };
    AppComponent.prototype.joinSession = function () {
        // --- 1) Get an OpenVidu object ---
        var _this = this;
        this.OV = new openvidu_browser__WEBPACK_IMPORTED_MODULE_4__["OpenVidu"]();
        // --- 2) Init a session ---
        this.session = this.OV.initSession();
        // --- 3) Specify the actions when events take place in the session ---
        // On every new Stream received...
        this.session.on('streamCreated', function (event) {
            // Subscribe to the Stream to receive it. Second parameter is undefined
            // so OpenVidu doesn't create an HTML video by its own
            var subscriber = _this.session.subscribe(event.stream, undefined);
            _this.subscribers.push(subscriber);
        });
        // On every Stream destroyed...
        this.session.on('streamDestroyed', function (event) {
            // Remove the stream from 'subscribers' array
            _this.deleteSubscriber(event.stream.streamManager);
        });
        // --- 4) Connect to the session with a valid user token ---
        // 'getToken' method is simulating what your server-side should do.
        // 'token' parameter should be retrieved and returned by your own backend
        this.getToken().then(function (token) {
            // First param is the token got from OpenVidu Server. Second param can be retrieved by every user on event
            // 'streamCreated' (property Stream.connection.data), and will be appended to DOM as the user's nickname
            _this.session.connect(token, { clientData: _this.myUserName })
                .then(function () {
                // --- 5) Get your own camera stream ---
                // Init a publisher passing undefined as targetElement (we don't want OpenVidu to insert a video
                // element: we will manage it on our own) and with the desired properties
                var publisher = _this.OV.initPublisher(undefined, {
                    audioSource: undefined,
                    videoSource: undefined,
                    publishAudio: true,
                    publishVideo: true,
                    resolution: '640x480',
                    frameRate: 30,
                    insertMode: 'APPEND',
                    mirror: false // Whether to mirror your local video or not
                });
                // --- 6) Publish your stream ---
                _this.session.publish(publisher);
                // Set the main video in the page to display our webcam and store our Publisher
                _this.mainStreamManager = publisher;
                _this.publisher = publisher;
            })
                .catch(function (error) {
                console.log('There was an error connecting to the session:', error.code, error.message);
            });
        });
    };
    AppComponent.prototype.leaveSession = function () {
        // --- 7) Leave the session by calling 'disconnect' method over the Session object ---
        if (this.session) {
            this.session.disconnect();
        }
        ;
        // Empty all properties...
        this.subscribers = [];
        delete this.publisher;
        delete this.session;
        delete this.OV;
        this.generateParticipantInfo();
    };
    AppComponent.prototype.generateParticipantInfo = function () {
        // Random user nickname and sessionId
        this.mySessionId = 'SessionA';
        this.myUserName = 'Participant' + Math.floor(Math.random() * 100);
    };
    AppComponent.prototype.deleteSubscriber = function (streamManager) {
        var index = this.subscribers.indexOf(streamManager, 0);
        if (index > -1) {
            this.subscribers.splice(index, 1);
        }
    };
    AppComponent.prototype.updateMainStreamManager = function (streamManager) {
        this.mainStreamManager = streamManager;
    };
    /**
     * --------------------------
     * SERVER-SIDE RESPONSIBILITY
     * --------------------------
     * This method retrieve the mandatory user token from OpenVidu Server,
     * in this case making use Angular http API.
     * This behaviour MUST BE IN YOUR SERVER-SIDE IN PRODUCTION. In this case:
     *   1) Initialize a session in OpenVidu Server	 (POST /api/sessions)
     *   2) Generate a token in OpenVidu Server		   (POST /api/tokens)
     *   3) The token must be consumed in Session.connect() method of OpenVidu Browser
     */
    AppComponent.prototype.getToken = function () {
        var _this = this;
        return this.createSession(this.mySessionId).then(function (sessionId) {
            return _this.createToken(sessionId);
        });
    };
    AppComponent.prototype.createSession = function (sessionId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var body = JSON.stringify({ customSessionId: sessionId });
            var options = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                    'Authorization': 'Basic ' + btoa('OPENVIDUAPP:' + _this.OPENVIDU_SERVER_SECRET),
                    'Content-Type': 'application/json'
                })
            };
            return _this.httpClient.post(_this.OPENVIDU_SERVER_URL + '/api/sessions', body, options)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
                if (error.status === 409) {
                    resolve(sessionId);
                }
                else {
                    console.warn('No connection to OpenVidu Server. This may be a certificate error at ' + _this.OPENVIDU_SERVER_URL);
                    if (window.confirm('No connection to OpenVidu Server. This may be a certificate error at \"' + _this.OPENVIDU_SERVER_URL +
                        '\"\n\nClick OK to navigate and accept it. If no certificate warning is shown, then check that your OpenVidu Server' +
                        'is up and running at "' + _this.OPENVIDU_SERVER_URL + '"')) {
                        location.assign(_this.OPENVIDU_SERVER_URL + '/accept-certificate');
                    }
                }
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
            }))
                .subscribe(function (response) {
                console.log(response);
                resolve(response['id']);
            });
        });
    };
    AppComponent.prototype.createToken = function (sessionId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var body = JSON.stringify({ session: sessionId });
            var options = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                    'Authorization': 'Basic ' + btoa('OPENVIDUAPP:' + _this.OPENVIDU_SERVER_SECRET),
                    'Content-Type': 'application/json'
                })
            };
            return _this.httpClient.post(_this.OPENVIDU_SERVER_URL + '/api/tokens', body, options)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
                reject(error);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
            }))
                .subscribe(function (response) {
                console.log(response);
                resolve(response['token']);
            });
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", openvidu_browser__WEBPACK_IMPORTED_MODULE_4__["StreamManager"])
    ], AppComponent.prototype, "mainStreamManager", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:beforeunload'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], AppComponent.prototype, "beforeunloadHandler", null);
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _user_video_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-video.component */ "./src/app/user-video.component.ts");
/* harmony import */ var _ov_video_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ov-video.component */ "./src/app/ov-video.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _user_video_component__WEBPACK_IMPORTED_MODULE_5__["UserVideoComponent"],
                _ov_video_component__WEBPACK_IMPORTED_MODULE_6__["OpenViduVideoComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/index.ts":
/*!**************************!*\
  !*** ./src/app/index.ts ***!
  \**************************/
/*! exports provided: AppComponent, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return _app_component__WEBPACK_IMPORTED_MODULE_0__["AppComponent"]; });

/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.module */ "./src/app/app.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return _app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"]; });





/***/ }),

/***/ "./src/app/ov-video.component.ts":
/*!***************************************!*\
  !*** ./src/app/ov-video.component.ts ***!
  \***************************************/
/*! exports provided: OpenViduVideoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpenViduVideoComponent", function() { return OpenViduVideoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var openvidu_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! openvidu-browser */ "./node_modules/openvidu-browser/lib/index.js");
/* harmony import */ var openvidu_browser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(openvidu_browser__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OpenViduVideoComponent = /** @class */ (function () {
    function OpenViduVideoComponent() {
    }
    OpenViduVideoComponent.prototype.ngAfterViewInit = function () {
        this._streamManager.addVideoElement(this.elementRef.nativeElement);
    };
    Object.defineProperty(OpenViduVideoComponent.prototype, "streamManager", {
        set: function (streamManager) {
            this._streamManager = streamManager;
            if (!!this.elementRef) {
                this._streamManager.addVideoElement(this.elementRef.nativeElement);
            }
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('videoElement'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], OpenViduVideoComponent.prototype, "elementRef", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", openvidu_browser__WEBPACK_IMPORTED_MODULE_1__["StreamManager"]),
        __metadata("design:paramtypes", [openvidu_browser__WEBPACK_IMPORTED_MODULE_1__["StreamManager"]])
    ], OpenViduVideoComponent.prototype, "streamManager", null);
    OpenViduVideoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ov-video',
            template: '<video #videoElement></video>'
        })
    ], OpenViduVideoComponent);
    return OpenViduVideoComponent;
}());



/***/ }),

/***/ "./src/app/user-video.component.ts":
/*!*****************************************!*\
  !*** ./src/app/user-video.component.ts ***!
  \*****************************************/
/*! exports provided: UserVideoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserVideoComponent", function() { return UserVideoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var openvidu_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! openvidu-browser */ "./node_modules/openvidu-browser/lib/index.js");
/* harmony import */ var openvidu_browser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(openvidu_browser__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserVideoComponent = /** @class */ (function () {
    function UserVideoComponent() {
        this.clicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    UserVideoComponent.prototype.getNicknameTag = function () {
        return JSON.parse(this.streamManager.stream.connection.data).clientData;
    };
    UserVideoComponent.prototype.videoClicked = function () {
        this.clicked.emit();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", openvidu_browser__WEBPACK_IMPORTED_MODULE_1__["StreamManager"])
    ], UserVideoComponent.prototype, "streamManager", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], UserVideoComponent.prototype, "clicked", void 0);
    UserVideoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'user-video',
            styles: ["\n        ov-video {\n            width: 100%;\n            height: auto;\n            float: left;\n            cursor: pointer;\n        }\n        div div {\n            position: absolute;\n            background: #f8f8f8;\n            padding-left: 5px;\n            padding-right: 5px;\n            color: #777777;\n            font-weight: bold;\n            border-bottom-right-radius: 4px;\n        }\n        p {\n            margin: 0;\n        }"],
            template: "\n        <div (click)=\"videoClicked()\">\n            <ov-video [streamManager]=\"streamManager\"></ov-video>\n            <div><p>{{getNicknameTag()}}</p></div>\n        </div>"
        })
    ], UserVideoComponent);
    return UserVideoComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polyfills_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./polyfills.ts */ "./src/polyfills.ts");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/ */ "./src/app/index.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app___WEBPACK_IMPORTED_MODULE_4__["AppModule"]);


/***/ }),

/***/ "./src/polyfills.ts":
/*!**************************!*\
  !*** ./src/polyfills.ts ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_es6_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/es6/symbol */ "./node_modules/core-js/es6/symbol.js");
/* harmony import */ var core_js_es6_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_es6_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_es6_object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/es6/object */ "./node_modules/core-js/es6/object.js");
/* harmony import */ var core_js_es6_object__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_es6_object__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_es6_function__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/es6/function */ "./node_modules/core-js/es6/function.js");
/* harmony import */ var core_js_es6_function__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_es6_function__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_es6_parse_int__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/es6/parse-int */ "./node_modules/core-js/es6/parse-int.js");
/* harmony import */ var core_js_es6_parse_int__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_es6_parse_int__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_es6_parse_float__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/es6/parse-float */ "./node_modules/core-js/es6/parse-float.js");
/* harmony import */ var core_js_es6_parse_float__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_es6_parse_float__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_es6_number__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/es6/number */ "./node_modules/core-js/es6/number.js");
/* harmony import */ var core_js_es6_number__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_es6_number__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_es6_math__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/es6/math */ "./node_modules/core-js/es6/math.js");
/* harmony import */ var core_js_es6_math__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_es6_math__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_es6_string__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/es6/string */ "./node_modules/core-js/es6/string.js");
/* harmony import */ var core_js_es6_string__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_es6_string__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_es6_date__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/es6/date */ "./node_modules/core-js/es6/date.js");
/* harmony import */ var core_js_es6_date__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_es6_date__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_es6_array__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/es6/array */ "./node_modules/core-js/es6/array.js");
/* harmony import */ var core_js_es6_array__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_es6_array__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_es6_regexp__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/es6/regexp */ "./node_modules/core-js/es6/regexp.js");
/* harmony import */ var core_js_es6_regexp__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_es6_regexp__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_es6_map__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/es6/map */ "./node_modules/core-js/es6/map.js");
/* harmony import */ var core_js_es6_map__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_es6_map__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_es6_set__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/es6/set */ "./node_modules/core-js/es6/set.js");
/* harmony import */ var core_js_es6_set__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_es6_set__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_es6_reflect__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/es6/reflect */ "./node_modules/core-js/es6/reflect.js");
/* harmony import */ var core_js_es6_reflect__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_es6_reflect__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_es7_reflect__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/es7/reflect */ "./node_modules/core-js/es7/reflect.js");
/* harmony import */ var core_js_es7_reflect__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_es7_reflect__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! zone.js/dist/zone */ "./node_modules/zone.js/dist/zone.js");
/* harmony import */ var zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_15__);
// This file includes polyfills needed by Angular 6 and is loaded before
// the app. You can add your own extra polyfills to this file.
















window.global = window;


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\aqeel\Desktop\openvidu-tutorials\openvidu-insecure-angular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map