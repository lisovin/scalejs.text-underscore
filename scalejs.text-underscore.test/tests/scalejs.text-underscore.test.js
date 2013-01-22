/*global define,describe,expect,it*/
/*jslint sloppy: true*/
/// <reference path="../Scripts/jasmine.js"/>
define([
    'scalejs!core',
    'scalejs!application'
], function (core) {
    var text = core.text;

    describe('text extension', function () {
        it('is defined', function () {
            expect(text).toBeDefined();
        });

        it('sprintf is correct', function () {
            expect(text.sprintf("%.1f", 1.17)).toEqual("1.2");
            expect(text.sprintf("%2$.1f %1$s %2$f", "Hello", 1.17)).toEqual("1.2 Hello 1.17");
        });
    });
});