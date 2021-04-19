sap.ui.define([
    "./BaseController",
    "sap/ui/core/mvc/Controller"
],
	/**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (BaseController, Controller) {
        "use strict";

        return BaseController.extend("com.nike.sc.tui.scapproveui.controller.Main", {
            onInit: function () {
                this.MainMRef = this.getModel('MainMRef');
                this.MainMRef.getData().ApprData = {};
                this.MainMRef.refresh();

                // 1. Get the Task Properties
                var startupParameters = this.getOwnerComponent().getComponentData().startupParameters;
                var taskModel = startupParameters.taskModel;
                var taskData = taskModel.getData();
                var taskId = taskData.InstanceID;

                // 2. Read the Task Data
                var that = this;
                var contextModel = new sap.ui.model.json.JSONModel("/scuploadui.comnikescscuploadui/bpmworkflowruntime/v1/task-instances/" + taskId + "/context");
                var contextData = contextModel.getData();

                // 3. Update UI Context Model with Task Properties Data
                contextModel.attachRequestCompleted(function () {
                    contextData = contextModel.getData();
                    var processContext = {};
                    processContext.context = contextData;
                    processContext.context.task = {};
                    processContext.context.task.Title = taskData.TaskTitle;
                    processContext.context.task.Priority = taskData.Priority;
                    processContext.context.task.Status = taskData.Status;

                    if (taskData.Priority === "HIGH") {
                        processContext.context.task.PriorityState = "Warning";
                    } else if (taskData.Priority === "VERY HIGH") {
                        processContext.context.task.PriorityState = "Error";
                    } else {
                        processContext.context.task.PriorityState = "Success";
                    }

                    processContext.context.task.CreatedOn = taskData.CreatedOn.toDateString();

                    // get task description and add it to the model
                    startupParameters.inboxAPI.getDescription("NA", taskData.InstanceID).done(function (dataDescr) {
                        processContext.context.task.Description = dataDescr.Description;
                        contextModel.setProperty("/task/Description", dataDescr.Description);
                    }).
                        fail(function (errorText) { });

                    contextModel.setData(processContext.context);
                    that.setModel(contextModel);
                    that.MainMRef.getData().ApprData = processContext.context;
                    that.MainMRef.refresh();
                    console.log('test');
                });
                
            }
        });
    });
