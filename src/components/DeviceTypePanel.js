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
        browser = parent;
    }
    get desktop() {
        return $("div[data-cy='zoning-creation__device-desktop']");
    }
    get mobile() {
        return $("div[data-cy='zoning-creation__device-mobile']");
    }
    get tablet() {
        return $("div[data-cy='zoning-creation__device-tablet']");
    }
    clickOnDeviceByType(type) {
        switch (type) {
            case DeviceType.Desktop: {
                this.desktop.click();
                break;
            }
            case DeviceType.Mobile: {
                this.mobile.click();
                break;
            }
            case DeviceType.Tablet: {
                this.tablet.click();
            }
        }
    }
}
exports.default = DeviceTypePanel;
//# sourceMappingURL=DeviceTypePanel.js.map