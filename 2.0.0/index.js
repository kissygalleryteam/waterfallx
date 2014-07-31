/**
 * @fileoverview
 * @author
 * @module waterfallx
 **/
KISSY.add(function (S, Node,Base) {
    var EMPTY = '';
    var $ = Node.all;
    /**
     *
     * @class Waterfallx
     * @constructor
     * @extends Base
     */
    function Waterfallx(comConfig) {
        var self = this;
        //调用父类构造函数
        Waterfallx.superclass.constructor.call(self, comConfig);
    }
    S.extend(Waterfallx, Base, /** @lends Waterfallx.prototype*/{

    }, {ATTRS : /** @lends Waterfallx*/{

    }});
    return Waterfallx;
}, {requires:['node', 'base']});



