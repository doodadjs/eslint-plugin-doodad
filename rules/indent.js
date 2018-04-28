"use strict";

const originalRule = require("eslint/lib/rules/indent");

const astUtils = require("eslint/lib/ast-utils");

module.exports = Object.assign({}, originalRule, {

	create(context) {
		const originalHandlers = originalRule.create(context);

		const handlers = Object.assign({}, originalHandlers, {

			"Program:exit"() {
				// Disable lines where : "If a comment matches the expected indentation of the token immediately before or after, don't report it."
				const oldIsCommentToken = astUtils.isCommentToken;
				astUtils.isCommentToken = function isCommentToken() {
					return false;
				};
				try {
					originalHandlers["Program:exit"]();
				} catch(ex) {
					throw ex;
				} finally {
					astUtils.isCommentToken = oldIsCommentToken;
				};
			},

		});

		return handlers;
	},

});
