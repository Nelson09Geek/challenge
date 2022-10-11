sap.ui.define([
		"test2/test2/controller/BaseController"
	], function (BaseController) {
		"use strict";

		return BaseController.extend("test2.test2.controller.NotFound", {

			/**
			 * Navigates to the worklist when the link is pressed
			 * @public
			 */
			onLinkPressed : function () {
				this.getRouter().navTo("worklist");
			}

		});

	}
);