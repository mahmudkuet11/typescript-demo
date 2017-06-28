System.register("test1", [], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Test1;
    return {
        setters: [],
        execute: function () {
            Test1 = (function () {
                function Test1() {
                }
                Test1.prototype.print = function () {
                    console.log('in test 1');
                };
                return Test1;
            }());
            exports_1("Test1", Test1);
        }
    };
});
System.register("test2", ["test1"], function (exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
    var test1_1, Test2;
    return {
        setters: [
            function (test1_1_1) {
                test1_1 = test1_1_1;
            }
        ],
        execute: function () {
            Test2 = (function () {
                function Test2() {
                    this.test1 = new test1_1.Test1();
                }
                Test2.prototype.print = function () {
                    console.log('in test 2');
                };
                Test2.prototype.print_test1 = function () {
                    this.test1.print();
                };
                return Test2;
            }());
            exports_2("Test2", Test2);
        }
    };
});
System.register("blog", ["test1", "test2"], function (exports_3, context_3) {
    "use strict";
    var __moduleName = context_3 && context_3.id;
    var test1_2, test2_1, Blog;
    return {
        setters: [
            function (test1_2_1) {
                test1_2 = test1_2_1;
            },
            function (test2_1_1) {
                test2_1 = test2_1_1;
            }
        ],
        execute: function () {
            Blog = (function () {
                function Blog() {
                    this.test1 = new test1_2.Test1();
                    this.test2 = new test2_1.Test2();
                }
                Blog.prototype.init = function () {
                    this.test1.print();
                    this.test2.print();
                    this.test2.print_test1();
                };
                return Blog;
            }());
            exports_3("Blog", Blog);
        }
    };
});
//# sourceMappingURL=modules.js.map