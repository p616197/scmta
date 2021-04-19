/**
* SYS-NAME: SAI
*
*/
sap.ui.define([
               'sap/ui/core/mvc/Controller',
               'sap/ui/core/routing/History',
               ], function(Controller, History){
	"use strict";
	return Controller.extend('com.nike.sc.tui.scapproveui.controller.BaseController',{
		
		_oView: function(){
			return this.getView();
		},
		/**
		 * 
		 */
		getEventBus: function(){
			return this.getOwnerComponent().getEventBus();
		},
	
		/**
		 * 
		 */
		getRouter: function(){
			return this.getOwnerComponent().getRouter();
		},
		
		/**
		 * 
		 */
		getModel: function(oModel){
			return this.getView().getModel(oModel) || this.getOwnerComponent().getModel(oModel);
		},
		
		/**
		 * 
		 */
		setModel: function(oModel, mRef){
			return this.getOwnerComponent().setModel(oModel, mRef);
		},
		
		/**
		 * 
		 */
		getResourceBundle: function(){
			return this.getOwnerComponent().getModel('i18n').getResourceBundle();
		},
		
		/**
		 * 
		 */
		getDataSource: function(){
			return this.getOwnerComponent().getMetadata().getMainfestEntry('sap.app').dataSoruces;
		},
		
		/**
		 * 
		 */
		myNavBack: function(sRoute, mData){
			var oHistory = History.getInstance();
			var sPreviousHash = oHistory.getPreviousHash();
			if(sPreviousHash != undefined){
				history.go(-1);
			}else{
				var bReplace = true;
				// @ts-ignore
				this.getRouter().navTo(sRouter, mData, bReplace);
			}
		}
	});
});