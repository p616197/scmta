sap.ui.define([
    "./BaseController",
    "sap/ui/core/mvc/Controller"
],
	/**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (BaseController, Controller) {
        "use strict";

        return BaseController.extend("com.nike.sc.scuploadui.controller.Main", {
            onInit: function () {
                this.MainMRef = this.getModel('MainMRef');
                var appId = this.getOwnerComponent().getManifestEntry("/sap.app/id");
                this.appPath = appId.replaceAll(".", "/");
                // @ts-ignore
                this.appModulePath = $.sap.getModulePath(this.appPath);
            },

            onStart: function (e) {
                var that = this;
                var xData = [
                    { "FirstName": "Sai", "LastName": "Battula" }
                ]
                var token = this._fetchToken2();
                if (token === null || token == undefined) return;
                for (var i = 0; i < xData.length; i++) {
                    let workflowStartPayload = { definitionId: "scflow", context: xData[i] };
                    // @ts-ignore
                    $.ajax({
                        url: "/scuploadui.comnikescscuploadui/bpmworkflowruntime/v1/workflow-instances",
                        type: "POST",
                        data: JSON.stringify(workflowStartPayload),
                        headers: {
                            "X-CSRF-Token": token,
                            "Content-Type": "application/json"
                        }
                    });
                }
            },

            _fetchToken: function () {
                var that = this;
                var token;
                // @ts-ignore
                $.ajax({
                    url: "/scuploadui.comnikescscuploadui-1.0.0/bpmworkflowruntime/v1/xsrf-token",
                    method: "GET",
                    async: false,
                    headers: {
                        "X-CSRF-Token": "Fetch"
                    },
                    success: function (result, xhr, data) {
                        token = data.getResponseHeader("X-CSRF-Token");
                    }
                });
                return token;
            },

            _fetchToken2: function () {
                var that = this;
                var token;
                // @ts-ignore
                $.ajax({
                    url: "/scuploadui.comnikescscuploadui/bpmworkflowruntime/v1/xsrf-token",
                    method: "GET",
                    async: false,
                    headers: {
                        "X-CSRF-Token": "Fetch"
                    },
                    success: function (result, xhr, data) {
                        token = data.getResponseHeader("X-CSRF-Token");
                    }
                });
                return token;
            }
        });
    });
