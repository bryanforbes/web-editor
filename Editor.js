var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@dojo/core/global", "@dojo/core/lang", "@dojo/core/queue", "@dojo/core/util", "@dojo/widget-core/d", "@dojo/widget-core/WidgetBase", "@dojo/widget-core/mixins/Themeable", "@dojo/widget-core/util/DomWrapper", "./project", "./styles/editor.m.css"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var global_1 = require("@dojo/core/global");
    var lang_1 = require("@dojo/core/lang");
    var queue_1 = require("@dojo/core/queue");
    var util_1 = require("@dojo/core/util");
    var d_1 = require("@dojo/widget-core/d");
    var WidgetBase_1 = require("@dojo/widget-core/WidgetBase");
    var Themeable_1 = require("@dojo/widget-core/mixins/Themeable");
    var DomWrapper_1 = require("@dojo/widget-core/util/DomWrapper");
    var project_1 = require("./project");
    var css = require("./styles/editor.m.css");
    var globalMonaco = global_1.default.monaco;
    var EditorService = (function () {
        function EditorService() {
        }
        EditorService.prototype.openEditor = function (input, sideBySide) {
            console.log('openEditor', input);
            return Promise.resolve({});
        };
        EditorService.prototype.resolveEditor = function (input, refresh) {
            console.log('resolveEditor', input);
            return Promise.resolve({});
        };
        return EditorService;
    }());
    exports.EditorService = EditorService;
    var ThemeableBase = Themeable_1.ThemeableMixin(WidgetBase_1.default);
    /**
     * A Widget which will render a wrapped `monaco-editor`
     */
    var Editor = (function (_super) {
        __extends(Editor, _super);
        function Editor() {
            var _this = _super.call(this) || this;
            _this._doLayout = function () { return __awaiter(_this, void 0, void 0, function () {
                var onEditorLayout;
                return __generator(this, function (_a) {
                    this._queuedLayout = false;
                    if (!this._editor) {
                        return [2 /*return*/];
                    }
                    this._editor.layout();
                    onEditorLayout = this.properties.onEditorLayout;
                    onEditorLayout && onEditorLayout();
                    return [2 /*return*/];
                });
            }); };
            _this._onAttached = function () {
                if (!_this._editor) {
                    var _a = _this, _onDidChangeModelContent = _a._onDidChangeModelContent, _root = _a._root, _b = _a.properties, onEditorInit = _b.onEditorInit, options = _b.options;
                    var editorService = _this._editorService = new EditorService();
                    var editor_1 = _this._editor = globalMonaco.editor.create(_root, options, { editorService: editorService });
                    var didChangeHandle_1 = _this._didChangeHandle = editor_1.onDidChangeModelContent(util_1.debounce(_onDidChangeModelContent, 1000));
                    _this._setModel();
                    onEditorInit && onEditorInit(editor_1);
                    _this.own(lang_1.createHandle(function () {
                        if (editor_1) {
                            editor_1.dispose();
                            didChangeHandle_1.dispose();
                        }
                    }));
                }
            };
            _this._onDidChangeModelContent = function () {
                if (_this.properties.filename) {
                    project_1.default.setFileDirty(_this.properties.filename);
                }
            };
            _this._queuedLayout = false;
            var root = _this._root = document.createElement('div');
            _this._EditorDom = DomWrapper_1.default(root, { onAttached: _this._onAttached });
            return _this;
        }
        Editor.prototype._setModel = function () {
            var filename = this.properties.filename;
            if (this._editor && filename && project_1.default.includes(filename)) {
                this._editor.setModel(project_1.default.getFileModel(filename));
            }
        };
        Editor.prototype.render = function () {
            if (!this._queuedLayout) {
                /* doing this async, during the next major task, to allow the widget to actually render */
                this._queuedLayout = true;
                queue_1.queueTask(this._doLayout);
            }
            this._setModel();
            return this.properties.filename ?
                /* DomWrapper ignores `onAttached` here, but is needed to make testing possible */
                d_1.w(this._EditorDom, { key: 'editor', classes: this.classes(css.root), onAttached: this._onAttached }) :
                d_1.v('div', { classes: this.classes(css.root), key: 'editor' });
        };
        return Editor;
    }(ThemeableBase));
    Editor = __decorate([
        Themeable_1.theme(css)
    ], Editor);
    exports.default = Editor;
});
//# sourceMappingURL=Editor.js.map