"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TopPanelSubMenu {
    constructor(parent) {
        this.browser = parent;
    }
    getOptions() {
        return this.browser.$$(".sub-menu-item");
    }
}
exports.default = TopPanelSubMenu;
//# sourceMappingURL=TopPanelSubMenu.js.map