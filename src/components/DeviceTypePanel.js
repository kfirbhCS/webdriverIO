"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DeviceType;
(function (DeviceType) {
    DeviceType[DeviceType["Desktop"] = 1] = "Desktop";
    DeviceType[DeviceType["Mobile"] = 2] = "Mobile";
    DeviceType[DeviceType["Tablet"] = 3] = "Tablet";
})(DeviceType = exports.DeviceType || (exports.DeviceType = {}));
class DeviceTypePanel {
    constructor(parent) {
        this.parentElement = parent;
    }
    get desktop() {
        return this.parentElement.$("div[data-cy='zoning-creation__device-desktop']");
    }
    get mobile() {
        return this.parentElement.$("div[data-cy='zoning-creation__device-mobile']");
    }
    get tablet() {
        return this.parentElement.$("div[data-cy='zoning-creation__device-tablet']");
    }
    clickOnDeviceByType(type) {
        switch (type) {
            case DeviceType.Desktop: {
                browser.waitUntil(() => {
                    return this.desktop.isEnabled();
                }, 5000);
                this.desktop.click();
                break;
            }
            case DeviceType.Mobile: {
                browser.waitUntil(() => {
                    return this.mobile.isEnabled();
                }, 5000);
                this.mobile.click();
                break;
            }
            case DeviceType.Tablet: {
                browser.waitUntil(() => {
                    return this.tablet.isEnabled();
                }, 5000);
                this.tablet.click();
            }
        }
    }
}
exports.default = DeviceTypePanel;
//# sourceMappingURL=DeviceTypePanel.js.map