"use strict";

const originalRule = require("eslint/lib/rules/no-unreachable");

module.exports = Object.assign({}, originalRule, {
    meta: {
        docs: {
            description: "disallow unreachable code after `return`, `throw`, `continue`, and `break` statements (edited by Claude Petit)",
            category: "Possible Errors",
            recommended: true,
            url: "https://eslint.org/docs/rules/no-unreachable"
        },

        schema: []
    },

	create(context) {
		const handlers = Object.assign({}, originalRule.create(context));
		delete handlers.EmptyStatement;
		return handlers;
	},
});
