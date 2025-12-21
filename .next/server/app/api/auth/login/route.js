"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/auth/login/route";
exports.ids = ["app/api/auth/login/route"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2Flogin%2Froute&page=%2Fapi%2Fauth%2Flogin%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Flogin%2Froute.ts&appDir=C%3A%5Capnisec-assignment%5Cbackend%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5Capnisec-assignment%5Cbackend&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2Flogin%2Froute&page=%2Fapi%2Fauth%2Flogin%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Flogin%2Froute.ts&appDir=C%3A%5Capnisec-assignment%5Cbackend%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5Capnisec-assignment%5Cbackend&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_apnisec_assignment_backend_src_app_api_auth_login_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/auth/login/route.ts */ \"(rsc)/./src/app/api/auth/login/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/auth/login/route\",\n        pathname: \"/api/auth/login\",\n        filename: \"route\",\n        bundlePath: \"app/api/auth/login/route\"\n    },\n    resolvedPagePath: \"C:\\\\apnisec-assignment\\\\backend\\\\src\\\\app\\\\api\\\\auth\\\\login\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_apnisec_assignment_backend_src_app_api_auth_login_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/auth/login/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZhdXRoJTJGbG9naW4lMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmF1dGglMkZsb2dpbiUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmF1dGglMkZsb2dpbiUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDYXBuaXNlYy1hc3NpZ25tZW50JTVDYmFja2VuZCU1Q3NyYyU1Q2FwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9QyUzQSU1Q2FwbmlzZWMtYXNzaWdubWVudCU1Q2JhY2tlbmQmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUNjO0FBQ3FCO0FBQ2xHO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnSEFBbUI7QUFDM0M7QUFDQSxjQUFjLHlFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsaUVBQWlFO0FBQ3pFO0FBQ0E7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDdUg7O0FBRXZIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLz8wYzVhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIkM6XFxcXGFwbmlzZWMtYXNzaWdubWVudFxcXFxiYWNrZW5kXFxcXHNyY1xcXFxhcHBcXFxcYXBpXFxcXGF1dGhcXFxcbG9naW5cXFxccm91dGUudHNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL2F1dGgvbG9naW4vcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9hdXRoL2xvZ2luXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9hdXRoL2xvZ2luL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiQzpcXFxcYXBuaXNlYy1hc3NpZ25tZW50XFxcXGJhY2tlbmRcXFxcc3JjXFxcXGFwcFxcXFxhcGlcXFxcYXV0aFxcXFxsb2dpblxcXFxyb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmNvbnN0IG9yaWdpbmFsUGF0aG5hbWUgPSBcIi9hcGkvYXV0aC9sb2dpbi9yb3V0ZVwiO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICBzZXJ2ZXJIb29rcyxcbiAgICAgICAgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBvcmlnaW5hbFBhdGhuYW1lLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2Flogin%2Froute&page=%2Fapi%2Fauth%2Flogin%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Flogin%2Froute.ts&appDir=C%3A%5Capnisec-assignment%5Cbackend%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5Capnisec-assignment%5Cbackend&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/auth/login/route.ts":
/*!*****************************************!*\
  !*** ./src/app/api/auth/login/route.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST),\n/* harmony export */   runtime: () => (/* binding */ runtime)\n/* harmony export */ });\n/* harmony import */ var _app_handlers_AuthHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/app/handlers/AuthHandler */ \"(rsc)/./src/app/handlers/AuthHandler.ts\");\n\nconst runtime = \"nodejs\";\nconst handler = new _app_handlers_AuthHandler__WEBPACK_IMPORTED_MODULE_0__.AuthHandler();\nasync function POST(request) {\n    return handler.Login(request);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9hdXRoL2xvZ2luL3JvdXRlLnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUF5RDtBQUNsRCxNQUFNQyxVQUFVLFNBQVM7QUFFaEMsTUFBTUMsVUFBVSxJQUFJRixrRUFBV0E7QUFFeEIsZUFBZUcsS0FBS0MsT0FBZ0I7SUFDekMsT0FBT0YsUUFBUUcsS0FBSyxDQUFDRDtBQUN2QiIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9hcHAvYXBpL2F1dGgvbG9naW4vcm91dGUudHM/ZDMxYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBdXRoSGFuZGxlciB9IGZyb20gXCJAL2FwcC9oYW5kbGVycy9BdXRoSGFuZGxlclwiO1xuZXhwb3J0IGNvbnN0IHJ1bnRpbWUgPSBcIm5vZGVqc1wiO1xuXG5jb25zdCBoYW5kbGVyID0gbmV3IEF1dGhIYW5kbGVyKCk7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQT1NUKHJlcXVlc3Q6IFJlcXVlc3QpIHtcbiAgcmV0dXJuIGhhbmRsZXIuTG9naW4ocmVxdWVzdCk7XG59XG4iXSwibmFtZXMiOlsiQXV0aEhhbmRsZXIiLCJydW50aW1lIiwiaGFuZGxlciIsIlBPU1QiLCJyZXF1ZXN0IiwiTG9naW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/auth/login/route.ts\n");

/***/ }),

/***/ "(rsc)/./src/app/errors/BaseError.ts":
/*!*************************************!*\
  !*** ./src/app/errors/BaseError.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   BaseError: () => (/* binding */ BaseError)\n/* harmony export */ });\nclass BaseError extends Error {\n    constructor(message, statusCode){\n        super(message);\n        this.statusCode = statusCode;\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2Vycm9ycy9CYXNlRXJyb3IudHMiLCJtYXBwaW5ncyI6Ijs7OztBQUFPLE1BQU1BLGtCQUFrQkM7SUFHN0JDLFlBQVlDLE9BQWUsRUFBRUMsVUFBa0IsQ0FBRTtRQUMvQyxLQUFLLENBQUNEO1FBQ04sSUFBSSxDQUFDQyxVQUFVLEdBQUdBO0lBQ3BCO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2Vycm9ycy9CYXNlRXJyb3IudHM/MGRlNCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgQmFzZUVycm9yIGV4dGVuZHMgRXJyb3Ige1xyXG4gIHN0YXR1c0NvZGU6IG51bWJlcjtcclxuXHJcbiAgY29uc3RydWN0b3IobWVzc2FnZTogc3RyaW5nLCBzdGF0dXNDb2RlOiBudW1iZXIpIHtcclxuICAgIHN1cGVyKG1lc3NhZ2UpO1xyXG4gICAgdGhpcy5zdGF0dXNDb2RlID0gc3RhdHVzQ29kZTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbIkJhc2VFcnJvciIsIkVycm9yIiwiY29uc3RydWN0b3IiLCJtZXNzYWdlIiwic3RhdHVzQ29kZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/app/errors/BaseError.ts\n");

/***/ }),

/***/ "(rsc)/./src/app/errors/ValidationError.ts":
/*!*******************************************!*\
  !*** ./src/app/errors/ValidationError.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ValidationError: () => (/* binding */ ValidationError)\n/* harmony export */ });\n/* harmony import */ var _BaseError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseError */ \"(rsc)/./src/app/errors/BaseError.ts\");\n\nclass ValidationError extends _BaseError__WEBPACK_IMPORTED_MODULE_0__.BaseError {\n    constructor(message){\n        super(message, 400);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2Vycm9ycy9WYWxpZGF0aW9uRXJyb3IudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDd0M7QUFFakMsTUFBTUMsd0JBQXdCRCxpREFBU0E7SUFDNUNFLFlBQVlDLE9BQWUsQ0FBRTtRQUMzQixLQUFLLENBQUNBLFNBQVM7SUFDakI7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9hcHAvZXJyb3JzL1ZhbGlkYXRpb25FcnJvci50cz9kYjMxIl0sInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgeyBCYXNlRXJyb3IgfSBmcm9tIFwiLi9CYXNlRXJyb3JcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBWYWxpZGF0aW9uRXJyb3IgZXh0ZW5kcyBCYXNlRXJyb3Ige1xyXG4gIGNvbnN0cnVjdG9yKG1lc3NhZ2U6IHN0cmluZykge1xyXG4gICAgc3VwZXIobWVzc2FnZSwgNDAwKTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbIkJhc2VFcnJvciIsIlZhbGlkYXRpb25FcnJvciIsImNvbnN0cnVjdG9yIiwibWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/app/errors/ValidationError.ts\n");

/***/ }),

/***/ "(rsc)/./src/app/handlers/AuthHandler.ts":
/*!*****************************************!*\
  !*** ./src/app/handlers/AuthHandler.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AuthHandler: () => (/* binding */ AuthHandler)\n/* harmony export */ });\n/* harmony import */ var _validators_AuthValidator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../validators/AuthValidator */ \"(rsc)/./src/app/validators/AuthValidator.ts\");\n/* harmony import */ var _services_AuthService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/AuthService */ \"(rsc)/./src/app/services/AuthService.ts\");\n\n\nclass AuthHandler {\n    async Register(request) {\n        try {\n            const body = await request.json();\n            _validators_AuthValidator__WEBPACK_IMPORTED_MODULE_0__.AuthValidator.register(body);\n            const result = await this.authService.register(body.name, body.email, body.password);\n            return Response.json(result, {\n                status: 201\n            });\n        } catch (error) {\n            // Re-throw to be handled by route handler\n            throw error;\n        }\n    }\n    async Login(request) {\n        const body = await request.json();\n        _validators_AuthValidator__WEBPACK_IMPORTED_MODULE_0__.AuthValidator.login(body);\n        const result = await this.authService.login(body.email, body.password);\n        return Response.json(result);\n    }\n    constructor(){\n        this.authService = new _services_AuthService__WEBPACK_IMPORTED_MODULE_1__.AuthService();\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2hhbmRsZXJzL0F1dGhIYW5kbGVyLnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE0RDtBQUNOO0FBRS9DLE1BQU1FO0lBR1QsTUFBTUMsU0FBU0MsT0FBZ0IsRUFBRTtRQUM3QixJQUFJO1lBQ0EsTUFBTUMsT0FBTyxNQUFNRCxRQUFRRSxJQUFJO1lBQy9CTixvRUFBYUEsQ0FBQ08sUUFBUSxDQUFDRjtZQUV2QixNQUFNRyxTQUFTLE1BQU0sSUFBSSxDQUFDQyxXQUFXLENBQUNGLFFBQVEsQ0FDMUNGLEtBQUtLLElBQUksRUFDVEwsS0FBS00sS0FBSyxFQUNWTixLQUFLTyxRQUFRO1lBR2pCLE9BQU9DLFNBQVNQLElBQUksQ0FBQ0UsUUFBUTtnQkFBRU0sUUFBUTtZQUFJO1FBQy9DLEVBQUUsT0FBT0MsT0FBWTtZQUNqQiwwQ0FBMEM7WUFDMUMsTUFBTUE7UUFDVjtJQUNKO0lBRUEsTUFBTUMsTUFBTVosT0FBZ0IsRUFBRTtRQUMxQixNQUFNQyxPQUFPLE1BQU1ELFFBQVFFLElBQUk7UUFFL0JOLG9FQUFhQSxDQUFDaUIsS0FBSyxDQUFDWjtRQUNwQixNQUFNRyxTQUFTLE1BQU0sSUFBSSxDQUFDQyxXQUFXLENBQUNRLEtBQUssQ0FDdkNaLEtBQUtNLEtBQUssRUFDVk4sS0FBS08sUUFBUTtRQUVqQixPQUFPQyxTQUFTUCxJQUFJLENBQUNFO0lBQ3pCOzthQTdCUUMsY0FBYyxJQUFJUiw4REFBV0E7O0FBK0J6QyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9hcHAvaGFuZGxlcnMvQXV0aEhhbmRsZXIudHM/MThmZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBdXRoVmFsaWRhdG9yIH0gZnJvbSBcIi4uL3ZhbGlkYXRvcnMvQXV0aFZhbGlkYXRvclwiO1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvQXV0aFNlcnZpY2VcIjtcblxuZXhwb3J0IGNsYXNzIEF1dGhIYW5kbGVyIHtcbiAgICBwcml2YXRlIGF1dGhTZXJ2aWNlID0gbmV3IEF1dGhTZXJ2aWNlKCk7XG5cbiAgICBhc3luYyBSZWdpc3RlcihyZXF1ZXN0OiBSZXF1ZXN0KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBib2R5ID0gYXdhaXQgcmVxdWVzdC5qc29uKCk7XG4gICAgICAgICAgICBBdXRoVmFsaWRhdG9yLnJlZ2lzdGVyKGJvZHkpO1xuXG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLmF1dGhTZXJ2aWNlLnJlZ2lzdGVyKFxuICAgICAgICAgICAgICAgIGJvZHkubmFtZSxcbiAgICAgICAgICAgICAgICBib2R5LmVtYWlsLFxuICAgICAgICAgICAgICAgIGJvZHkucGFzc3dvcmRcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIHJldHVybiBSZXNwb25zZS5qc29uKHJlc3VsdCwgeyBzdGF0dXM6IDIwMSB9KTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xuICAgICAgICAgICAgLy8gUmUtdGhyb3cgdG8gYmUgaGFuZGxlZCBieSByb3V0ZSBoYW5kbGVyXG4gICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIExvZ2luKHJlcXVlc3Q6IFJlcXVlc3QpIHtcbiAgICAgICAgY29uc3QgYm9keSA9IGF3YWl0IHJlcXVlc3QuanNvbigpO1xuXG4gICAgICAgIEF1dGhWYWxpZGF0b3IubG9naW4oYm9keSk7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMuYXV0aFNlcnZpY2UubG9naW4oXG4gICAgICAgICAgICBib2R5LmVtYWlsLFxuICAgICAgICAgICAgYm9keS5wYXNzd29yZFxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gUmVzcG9uc2UuanNvbihyZXN1bHQpO1xuICAgIH1cblxufVxuIl0sIm5hbWVzIjpbIkF1dGhWYWxpZGF0b3IiLCJBdXRoU2VydmljZSIsIkF1dGhIYW5kbGVyIiwiUmVnaXN0ZXIiLCJyZXF1ZXN0IiwiYm9keSIsImpzb24iLCJyZWdpc3RlciIsInJlc3VsdCIsImF1dGhTZXJ2aWNlIiwibmFtZSIsImVtYWlsIiwicGFzc3dvcmQiLCJSZXNwb25zZSIsInN0YXR1cyIsImVycm9yIiwiTG9naW4iLCJsb2dpbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/app/handlers/AuthHandler.ts\n");

/***/ }),

/***/ "(rsc)/./src/app/prisma/prismaClient.ts":
/*!****************************************!*\
  !*** ./src/app/prisma/prismaClient.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   prisma: () => (/* binding */ prisma)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient({\n    log: [\n        \"warn\",\n        \"error\",\n        \"query\"\n    ]\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL3ByaXNtYS9wcmlzbWFDbGllbnQudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQThDO0FBRXZDLE1BQU1DLFNBQVMsSUFBSUQsd0RBQVlBLENBQUM7SUFDckNFLEtBQUs7UUFBQztRQUFRO1FBQVM7S0FBUTtBQUNqQyxHQUFHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9wcmlzbWEvcHJpc21hQ2xpZW50LnRzPzA5NDYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCI7XHJcblxyXG5leHBvcnQgY29uc3QgcHJpc21hID0gbmV3IFByaXNtYUNsaWVudCh7XHJcbiAgbG9nOiBbXCJ3YXJuXCIsIFwiZXJyb3JcIiwgXCJxdWVyeVwiXSxcclxufSk7XHJcbiJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiLCJwcmlzbWEiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/app/prisma/prismaClient.ts\n");

/***/ }),

/***/ "(rsc)/./src/app/repositories/UserRepository.ts":
/*!************************************************!*\
  !*** ./src/app/repositories/UserRepository.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   UserRepository: () => (/* binding */ UserRepository)\n/* harmony export */ });\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bcryptjs */ \"(rsc)/./node_modules/bcryptjs/index.js\");\n/* harmony import */ var _prisma_prismaClient__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../prisma/prismaClient */ \"(rsc)/./src/app/prisma/prismaClient.ts\");\n\n\nclass UserRepository {\n    async create(data) {\n        const hashedPassword = await bcryptjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"].hash(data.password, 10);\n        return _prisma_prismaClient__WEBPACK_IMPORTED_MODULE_1__.prisma.user.create({\n            data: {\n                email: data.email,\n                password: hashedPassword,\n                name: data.name ?? \"\"\n            }\n        });\n    }\n    async findByEmail(email) {\n        return _prisma_prismaClient__WEBPACK_IMPORTED_MODULE_1__.prisma.user.findUnique({\n            where: {\n                email\n            }\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL3JlcG9zaXRvcmllcy9Vc2VyUmVwb3NpdG9yeS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBOEI7QUFDa0I7QUFDekMsTUFBTUU7SUFDWCxNQUFNQyxPQUFPQyxJQUF3RCxFQUFFO1FBQ3JFLE1BQU1DLGlCQUFpQixNQUFNTCxxREFBVyxDQUFDSSxLQUFLRyxRQUFRLEVBQUU7UUFFeEQsT0FBT04sd0RBQU1BLENBQUNPLElBQUksQ0FBQ0wsTUFBTSxDQUFDO1lBQ3hCQyxNQUFNO2dCQUNKSyxPQUFPTCxLQUFLSyxLQUFLO2dCQUNqQkYsVUFBVUY7Z0JBQ1ZLLE1BQU1OLEtBQUtNLElBQUksSUFBSTtZQUNyQjtRQUNGO0lBQ0Y7SUFFQSxNQUFNQyxZQUFZRixLQUFhLEVBQUU7UUFDL0IsT0FBT1Isd0RBQU1BLENBQUNPLElBQUksQ0FBQ0ksVUFBVSxDQUFDO1lBQzVCQyxPQUFPO2dCQUFFSjtZQUFNO1FBQ2pCO0lBQ0Y7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9hcHAvcmVwb3NpdG9yaWVzL1VzZXJSZXBvc2l0b3J5LnRzPzNhMTMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGJjcnlwdCBmcm9tIFwiYmNyeXB0anNcIjtcbmltcG9ydCB7IHByaXNtYSB9IGZyb20gXCIuLi9wcmlzbWEvcHJpc21hQ2xpZW50XCI7XG5leHBvcnQgY2xhc3MgVXNlclJlcG9zaXRvcnkge1xuICBhc3luYyBjcmVhdGUoZGF0YTogeyBlbWFpbDogc3RyaW5nOyBwYXNzd29yZDogc3RyaW5nOyBuYW1lPzogc3RyaW5nIH0pIHtcbiAgICBjb25zdCBoYXNoZWRQYXNzd29yZCA9IGF3YWl0IGJjcnlwdC5oYXNoKGRhdGEucGFzc3dvcmQsIDEwKTtcblxuICAgIHJldHVybiBwcmlzbWEudXNlci5jcmVhdGUoe1xuICAgICAgZGF0YToge1xuICAgICAgICBlbWFpbDogZGF0YS5lbWFpbCxcbiAgICAgICAgcGFzc3dvcmQ6IGhhc2hlZFBhc3N3b3JkLFxuICAgICAgICBuYW1lOiBkYXRhLm5hbWUgPz8gXCJcIixcbiAgICAgIH0sXG4gICAgfSk7XG4gIH1cblxuICBhc3luYyBmaW5kQnlFbWFpbChlbWFpbDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHByaXNtYS51c2VyLmZpbmRVbmlxdWUoe1xuICAgICAgd2hlcmU6IHsgZW1haWwgfSxcbiAgICB9KTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbImJjcnlwdCIsInByaXNtYSIsIlVzZXJSZXBvc2l0b3J5IiwiY3JlYXRlIiwiZGF0YSIsImhhc2hlZFBhc3N3b3JkIiwiaGFzaCIsInBhc3N3b3JkIiwidXNlciIsImVtYWlsIiwibmFtZSIsImZpbmRCeUVtYWlsIiwiZmluZFVuaXF1ZSIsIndoZXJlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/app/repositories/UserRepository.ts\n");

/***/ }),

/***/ "(rsc)/./src/app/services/AuthService.ts":
/*!*****************************************!*\
  !*** ./src/app/services/AuthService.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AuthService: () => (/* binding */ AuthService)\n/* harmony export */ });\n/* harmony import */ var _repositories_UserRepository__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../repositories/UserRepository */ \"(rsc)/./src/app/repositories/UserRepository.ts\");\n/* harmony import */ var _utils_PasswordUtil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/PasswordUtil */ \"(rsc)/./src/app/utils/PasswordUtil.ts\");\n/* harmony import */ var _utils_JwtUtil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/JwtUtil */ \"(rsc)/./src/app/utils/JwtUtil.ts\");\n\n\n\nclass AuthService {\n    async register(name, email, password) {\n        const existingUser = await this.userRepo.findByEmail(email);\n        if (existingUser) {\n            throw new Error(\"User already exists\");\n        }\n        const hashedPassword = await _utils_PasswordUtil__WEBPACK_IMPORTED_MODULE_1__.PasswordUtil.hash(password);\n        const newUser = await this.userRepo.create({\n            name,\n            email,\n            password: hashedPassword\n        });\n        const token = _utils_JwtUtil__WEBPACK_IMPORTED_MODULE_2__.JwtUtil.sign({\n            userId: newUser.id\n        });\n        return {\n            user: newUser,\n            token\n        };\n    }\n    async login(email, password) {\n        const user = await this.userRepo.findByEmail(email);\n        if (!user) {\n            throw new Error(\"invalid credentials\");\n        }\n        const valid = await _utils_PasswordUtil__WEBPACK_IMPORTED_MODULE_1__.PasswordUtil.compare(password, user.password);\n        if (!valid) {\n            throw new Error(\"Invalid credentials\");\n        }\n        const token = _utils_JwtUtil__WEBPACK_IMPORTED_MODULE_2__.JwtUtil.sign({\n            userId: user.id\n        });\n        return {\n            user,\n            token\n        };\n    }\n    constructor(){\n        this.userRepo = new _repositories_UserRepository__WEBPACK_IMPORTED_MODULE_0__.UserRepository();\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL3NlcnZpY2VzL0F1dGhTZXJ2aWNlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDZ0U7QUFDWDtBQUNWO0FBRXBDLE1BQU1HO0lBR1QsTUFBTUMsU0FBU0MsSUFBWSxFQUFFQyxLQUFhLEVBQUVDLFFBQWdCLEVBQUU7UUFDMUQsTUFBTUMsZUFBZSxNQUFNLElBQUksQ0FBQ0MsUUFBUSxDQUFDQyxXQUFXLENBQUNKO1FBRXJELElBQUdFLGNBQWM7WUFDYixNQUFNLElBQUlHLE1BQU07UUFDcEI7UUFFQSxNQUFNQyxpQkFBaUIsTUFBTVgsNkRBQVlBLENBQUNZLElBQUksQ0FBQ047UUFDL0MsTUFBTU8sVUFBVSxNQUFNLElBQUksQ0FBQ0wsUUFBUSxDQUFDTSxNQUFNLENBQUM7WUFDdkNWO1lBQ0FDO1lBQ0FDLFVBQVVLO1FBQ2Q7UUFFQSxNQUFNSSxRQUFRZCxtREFBT0EsQ0FBQ2UsSUFBSSxDQUFDO1lBQUVDLFFBQVFKLFFBQVFLLEVBQUU7UUFBQTtRQUMvQyxPQUFPO1lBQUNDLE1BQU1OO1lBQVNFO1FBQUs7SUFDaEM7SUFFQSxNQUFNSyxNQUFNZixLQUFhLEVBQUVDLFFBQWdCLEVBQUU7UUFDekMsTUFBTWEsT0FBTyxNQUFNLElBQUksQ0FBQ1gsUUFBUSxDQUFDQyxXQUFXLENBQUNKO1FBRTdDLElBQUcsQ0FBQ2MsTUFBSztZQUNMLE1BQU0sSUFBSVQsTUFBTTtRQUNwQjtRQUVBLE1BQU1XLFFBQVEsTUFBTXJCLDZEQUFZQSxDQUFDc0IsT0FBTyxDQUFDaEIsVUFBVWEsS0FBS2IsUUFBUTtRQUNoRSxJQUFHLENBQUNlLE9BQU07WUFDTixNQUFNLElBQUlYLE1BQU07UUFDcEI7UUFDQSxNQUFNSyxRQUFRZCxtREFBT0EsQ0FBQ2UsSUFBSSxDQUFDO1lBQUVDLFFBQVFFLEtBQUtELEVBQUU7UUFBQTtRQUM1QyxPQUFPO1lBQUVDO1lBQU1KO1FBQUs7SUFDeEI7O2FBakNRUCxXQUFXLElBQUlULHdFQUFjQTs7QUFrQ3pDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9zZXJ2aWNlcy9BdXRoU2VydmljZS50cz8xMjYxIl0sInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgeyBVc2VyUmVwb3NpdG9yeSB9IGZyb20gXCIuLi9yZXBvc2l0b3JpZXMvVXNlclJlcG9zaXRvcnlcIjtcclxuaW1wb3J0IHsgUGFzc3dvcmRVdGlsIH0gZnJvbSBcIi4uL3V0aWxzL1Bhc3N3b3JkVXRpbFwiO1xyXG5pbXBvcnQgeyBKd3RVdGlsIH0gZnJvbSBcIi4uL3V0aWxzL0p3dFV0aWxcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBBdXRoU2VydmljZSB7XHJcbiAgICBwcml2YXRlIHVzZXJSZXBvID0gbmV3IFVzZXJSZXBvc2l0b3J5KCk7XHJcblxyXG4gICAgYXN5bmMgcmVnaXN0ZXIobmFtZTogc3RyaW5nLCBlbWFpbDogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKSB7XHJcbiAgICAgICAgY29uc3QgZXhpc3RpbmdVc2VyID0gYXdhaXQgdGhpcy51c2VyUmVwby5maW5kQnlFbWFpbChlbWFpbCk7XHJcblxyXG4gICAgICAgIGlmKGV4aXN0aW5nVXNlcikge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJVc2VyIGFscmVhZHkgZXhpc3RzXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgaGFzaGVkUGFzc3dvcmQgPSBhd2FpdCBQYXNzd29yZFV0aWwuaGFzaChwYXNzd29yZCk7XHJcbiAgICAgICAgY29uc3QgbmV3VXNlciA9IGF3YWl0IHRoaXMudXNlclJlcG8uY3JlYXRlKHtcclxuICAgICAgICAgICAgbmFtZSxcclxuICAgICAgICAgICAgZW1haWwsXHJcbiAgICAgICAgICAgIHBhc3N3b3JkOiBoYXNoZWRQYXNzd29yZFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBjb25zdCB0b2tlbiA9IEp3dFV0aWwuc2lnbih7IHVzZXJJZDogbmV3VXNlci5pZH0pO1xyXG4gICAgICAgIHJldHVybiB7dXNlcjogbmV3VXNlciwgdG9rZW59XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgbG9naW4oZW1haWw6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZykge1xyXG4gICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCB0aGlzLnVzZXJSZXBvLmZpbmRCeUVtYWlsKGVtYWlsKTtcclxuXHJcbiAgICAgICAgaWYoIXVzZXIpe1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJpbnZhbGlkIGNyZWRlbnRpYWxzXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgdmFsaWQgPSBhd2FpdCBQYXNzd29yZFV0aWwuY29tcGFyZShwYXNzd29yZCwgdXNlci5wYXNzd29yZCk7XHJcbiAgICAgICAgaWYoIXZhbGlkKXtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBjcmVkZW50aWFsc1wiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgdG9rZW4gPSBKd3RVdGlsLnNpZ24oeyB1c2VySWQ6IHVzZXIuaWR9KTtcclxuICAgICAgICByZXR1cm4geyB1c2VyLCB0b2tlbn1cclxuICAgIH1cclxufSJdLCJuYW1lcyI6WyJVc2VyUmVwb3NpdG9yeSIsIlBhc3N3b3JkVXRpbCIsIkp3dFV0aWwiLCJBdXRoU2VydmljZSIsInJlZ2lzdGVyIiwibmFtZSIsImVtYWlsIiwicGFzc3dvcmQiLCJleGlzdGluZ1VzZXIiLCJ1c2VyUmVwbyIsImZpbmRCeUVtYWlsIiwiRXJyb3IiLCJoYXNoZWRQYXNzd29yZCIsImhhc2giLCJuZXdVc2VyIiwiY3JlYXRlIiwidG9rZW4iLCJzaWduIiwidXNlcklkIiwiaWQiLCJ1c2VyIiwibG9naW4iLCJ2YWxpZCIsImNvbXBhcmUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/app/services/AuthService.ts\n");

/***/ }),

/***/ "(rsc)/./src/app/utils/JwtUtil.ts":
/*!**********************************!*\
  !*** ./src/app/utils/JwtUtil.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   JwtUtil: () => (/* binding */ JwtUtil)\n/* harmony export */ });\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonwebtoken */ \"(rsc)/./node_modules/jsonwebtoken/index.js\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);\n\nclass JwtUtil {\n    static sign(payload) {\n        return (0,jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__.sign)(payload, process.env.JWT_SECRET, {\n            expiresIn: \"7d\"\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL3V0aWxzL0p3dFV0aWwudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQW9DO0FBRTdCLE1BQU1DO0lBQ1gsT0FBT0QsS0FBS0UsT0FBZSxFQUFVO1FBQ25DLE9BQU9GLGtEQUFJQSxDQUFDRSxTQUFTQyxRQUFRQyxHQUFHLENBQUNDLFVBQVUsRUFBRztZQUM1Q0MsV0FBVztRQUNiO0lBQ0Y7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9hcHAvdXRpbHMvSnd0VXRpbC50cz81OWI3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHNpZ24gfSBmcm9tIFwianNvbndlYnRva2VuXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgSnd0VXRpbCB7XHJcbiAgc3RhdGljIHNpZ24ocGF5bG9hZDogb2JqZWN0KTogc3RyaW5nIHtcclxuICAgIHJldHVybiBzaWduKHBheWxvYWQsIHByb2Nlc3MuZW52LkpXVF9TRUNSRVQhLCB7XHJcbiAgICAgIGV4cGlyZXNJbjogXCI3ZFwiLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJzaWduIiwiSnd0VXRpbCIsInBheWxvYWQiLCJwcm9jZXNzIiwiZW52IiwiSldUX1NFQ1JFVCIsImV4cGlyZXNJbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/app/utils/JwtUtil.ts\n");

/***/ }),

/***/ "(rsc)/./src/app/utils/PasswordUtil.ts":
/*!***************************************!*\
  !*** ./src/app/utils/PasswordUtil.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   PasswordUtil: () => (/* binding */ PasswordUtil)\n/* harmony export */ });\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_0__);\n\nclass PasswordUtil {\n    static async hash(password) {\n        return (0,bcrypt__WEBPACK_IMPORTED_MODULE_0__.hash)(password, 10);\n    }\n    static async compare(password, hash) {\n        return (0,bcrypt__WEBPACK_IMPORTED_MODULE_0__.compare)(password, hash);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL3V0aWxzL1Bhc3N3b3JkVXRpbC50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBdUM7QUFFaEMsTUFBTUU7SUFDWCxhQUFhRixLQUFLRyxRQUFnQixFQUFtQjtRQUNuRCxPQUFPSCw0Q0FBSUEsQ0FBQ0csVUFBVTtJQUN4QjtJQUVBLGFBQWFGLFFBQVFFLFFBQWdCLEVBQUVILElBQVksRUFBb0I7UUFDckUsT0FBT0MsK0NBQU9BLENBQUNFLFVBQVVIO0lBQzNCO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3V0aWxzL1Bhc3N3b3JkVXRpbC50cz82NDdiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGhhc2gsIGNvbXBhcmUgfSBmcm9tIFwiYmNyeXB0XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUGFzc3dvcmRVdGlsIHtcclxuICBzdGF0aWMgYXN5bmMgaGFzaChwYXNzd29yZDogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgIHJldHVybiBoYXNoKHBhc3N3b3JkLCAxMCk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgYXN5bmMgY29tcGFyZShwYXNzd29yZDogc3RyaW5nLCBoYXNoOiBzdHJpbmcpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgIHJldHVybiBjb21wYXJlKHBhc3N3b3JkLCBoYXNoKTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbImhhc2giLCJjb21wYXJlIiwiUGFzc3dvcmRVdGlsIiwicGFzc3dvcmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/app/utils/PasswordUtil.ts\n");

/***/ }),

/***/ "(rsc)/./src/app/validators/AuthValidator.ts":
/*!*********************************************!*\
  !*** ./src/app/validators/AuthValidator.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AuthValidator: () => (/* binding */ AuthValidator)\n/* harmony export */ });\n/* harmony import */ var _errors_ValidationError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../errors/ValidationError */ \"(rsc)/./src/app/errors/ValidationError.ts\");\n\nclass AuthValidator {\n    static register(data) {\n        const { name, email, password } = data;\n        if (!name || !email || !password) {\n            throw new _errors_ValidationError__WEBPACK_IMPORTED_MODULE_0__.ValidationError(\"All fields are required\");\n        }\n        if (password.length < 6) {\n            throw new _errors_ValidationError__WEBPACK_IMPORTED_MODULE_0__.ValidationError(\"Password must be at least 6 char long\");\n        }\n    }\n    static login(data) {\n        const { email, password } = data;\n        if (!email || !password) {\n            throw new _errors_ValidationError__WEBPACK_IMPORTED_MODULE_0__.ValidationError(\"Email and Password are required\");\n        }\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL3ZhbGlkYXRvcnMvQXV0aFZhbGlkYXRvci50cyIsIm1hcHBpbmdzIjoiOzs7OztBQUE0RDtBQUVyRCxNQUFNQztJQUNULE9BQU9DLFNBQVNDLElBQVEsRUFBRTtRQUN0QixNQUFNLEVBQUNDLElBQUksRUFBRUMsS0FBSyxFQUFFQyxRQUFRLEVBQUMsR0FBR0g7UUFFaEMsSUFBRyxDQUFDQyxRQUFRLENBQUNDLFNBQVMsQ0FBQ0MsVUFBVTtZQUM3QixNQUFNLElBQUlOLG9FQUFlQSxDQUFDO1FBQzlCO1FBRUEsSUFBR00sU0FBU0MsTUFBTSxHQUFHLEdBQUU7WUFDbkIsTUFBTSxJQUFJUCxvRUFBZUEsQ0FBQztRQUM5QjtJQUNKO0lBRUEsT0FBT1EsTUFBTUwsSUFBUyxFQUFFO1FBQ3BCLE1BQU0sRUFBQ0UsS0FBSyxFQUFFQyxRQUFRLEVBQUMsR0FBR0g7UUFFOUIsSUFBRyxDQUFDRSxTQUFTLENBQUNDLFVBQVU7WUFDcEIsTUFBTSxJQUFJTixvRUFBZUEsQ0FBQztRQUM5QjtJQUNBO0FBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3ZhbGlkYXRvcnMvQXV0aFZhbGlkYXRvci50cz8wZTcwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFZhbGlkYXRpb25FcnJvciB9IGZyb20gXCIuLi9lcnJvcnMvVmFsaWRhdGlvbkVycm9yXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQXV0aFZhbGlkYXRvciB7XHJcbiAgICBzdGF0aWMgcmVnaXN0ZXIoZGF0YTphbnkpIHtcclxuICAgICAgICBjb25zdCB7bmFtZSwgZW1haWwsIHBhc3N3b3JkfSA9IGRhdGE7XHJcblxyXG4gICAgICAgIGlmKCFuYW1lIHx8ICFlbWFpbCB8fCAhcGFzc3dvcmQpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IFZhbGlkYXRpb25FcnJvcihcIkFsbCBmaWVsZHMgYXJlIHJlcXVpcmVkXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYocGFzc3dvcmQubGVuZ3RoIDwgNil7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBWYWxpZGF0aW9uRXJyb3IoXCJQYXNzd29yZCBtdXN0IGJlIGF0IGxlYXN0IDYgY2hhciBsb25nXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgbG9naW4oZGF0YTogYW55KSB7XHJcbiAgICAgICAgY29uc3Qge2VtYWlsLCBwYXNzd29yZH0gPSBkYXRhO1xyXG5cclxuICAgIGlmKCFlbWFpbCB8fCAhcGFzc3dvcmQpIHtcclxuICAgICAgICB0aHJvdyBuZXcgVmFsaWRhdGlvbkVycm9yKFwiRW1haWwgYW5kIFBhc3N3b3JkIGFyZSByZXF1aXJlZFwiKTtcclxuICAgIH1cclxuICAgIH1cclxufSJdLCJuYW1lcyI6WyJWYWxpZGF0aW9uRXJyb3IiLCJBdXRoVmFsaWRhdG9yIiwicmVnaXN0ZXIiLCJkYXRhIiwibmFtZSIsImVtYWlsIiwicGFzc3dvcmQiLCJsZW5ndGgiLCJsb2dpbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/app/validators/AuthValidator.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/semver","vendor-chunks/next","vendor-chunks/jsonwebtoken","vendor-chunks/jws","vendor-chunks/ecdsa-sig-formatter","vendor-chunks/bcryptjs","vendor-chunks/safe-buffer","vendor-chunks/ms","vendor-chunks/lodash.once","vendor-chunks/lodash.isstring","vendor-chunks/lodash.isplainobject","vendor-chunks/lodash.isnumber","vendor-chunks/lodash.isinteger","vendor-chunks/lodash.isboolean","vendor-chunks/lodash.includes","vendor-chunks/jwa","vendor-chunks/buffer-equal-constant-time"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2Flogin%2Froute&page=%2Fapi%2Fauth%2Flogin%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Flogin%2Froute.ts&appDir=C%3A%5Capnisec-assignment%5Cbackend%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5Capnisec-assignment%5Cbackend&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();