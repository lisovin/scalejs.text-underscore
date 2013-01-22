/*global require*/
/// <reference path="Scripts/require.js"/>
/// <reference path="Scripts/jasmine.js"/>
require({
    "paths":  {
        "scalejs":  "Scripts/scalejs-0.1.12",
        "scalejs.text-underscore":  "Scripts/scalejs.text-underscore-2.3.0",
        "underscore.string":  "Scripts/underscore.string"
    },
    "scalejs":  {
        "extensions":  [
            "scalejs.text-underscore"
        ]
    }
}, ['tests/all.tests']);
