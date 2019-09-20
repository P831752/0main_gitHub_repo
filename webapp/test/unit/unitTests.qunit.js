/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"com/git/gitUI5/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});