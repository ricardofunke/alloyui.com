/*
Copyright (c) 2010, Yahoo! Inc. All rights reserved.
Code licensed under the BSD License:
http://developer.yahoo.com/yui/license.html
version: 3.7.1pr1
build: 3.7.1pr1
*/
if (typeof _yuitest_coverage == "undefined"){
    _yuitest_coverage = {};
    _yuitest_coverline = function(src, line){
        var coverage = _yuitest_coverage[src];
        if (!coverage.lines[line]){
            coverage.calledLines++;
        }
        coverage.lines[line]++;
    };
    _yuitest_coverfunc = function(src, name, line){
        var coverage = _yuitest_coverage[src],
            funcId = name + ":" + line;
        if (!coverage.functions[funcId]){
            coverage.calledFunctions++;
        }
        coverage.functions[funcId]++;
    };
}
_yuitest_coverage["/build/selector/selector.js"] = {
    lines: {},
    functions: {},
    coveredLines: 0,
    calledLines: 0,
    coveredFunctions: 0,
    calledFunctions: 0,
    path: "/build/selector/selector.js",
    code: []
};
_yuitest_coverage["/build/selector/selector.js"].code=["YUI.add('selector', function(Y) {","","","","","}, '3.7.1pr1' ,{requires:['selector-native']});"];
_yuitest_coverage["/build/selector/selector.js"].lines = {"1":0};
_yuitest_coverage["/build/selector/selector.js"].functions = {};
_yuitest_coverage["/build/selector/selector.js"].coveredLines = 1;
_yuitest_coverage["/build/selector/selector.js"].coveredFunctions = 0;
_yuitest_coverline("/build/selector/selector.js", 1);
YUI.add('selector', function(Y) {




}, '3.7.1pr1' ,{requires:['selector-native']});
