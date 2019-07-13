/* eslint-disable no-undef */
"use strict";

import _app from "./app";

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var port = process.env.PORT || 3000; /* eslint-disable no-console */
/* eslint-disable no-undef */


_app2.default.listen(port);

console.log('server started on port', port);