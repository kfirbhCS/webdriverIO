"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TopPanelSubMenu {
    constructor(parent) {
        this.parentElement = parent;
    }
    getOptions() {
        return this.parentElement.$$('.sub-menu-item');
    }
}
exports.default = TopPanelSubMenu;
//# sourceMappingURL=TopPanelSubMenu.js.map