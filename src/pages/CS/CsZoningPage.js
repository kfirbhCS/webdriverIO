"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CsBasePage_1 = __importDefault(require("src/pages/CS/CsBasePage"));
const TopPanel_1 = __importDefault(require("/src/components/TopPanel"));
const ZoningModal_1 = __importDefault(require("src/components/ZoningModal"));
class CsDashboardPage extends CsBasePage_1.default {
    constructor() {
        super();
        this.originalWindowHanlde = browser.getWindowHandle();
    }
    get newZoningBtn() {
        return $('//cs-button[@data-cy="new"]/button');
    }
    get zoningCreationModalContainer() {
        return $("zoning-creation-modal");
    }
    get zoningIframeWrapper() {
        return $("#zoning-iframe");
    }
    get zoningInnerFrame() {
        return $("iframe");
    }
    get zoningsTopLevelContainer() {
        //return $('body').shadow$('div.llBlk')
        return $('div.llBlk');
    }
    get firstZoningElement() {
        return this.zoningsTopLevelContainer.shadow$("app-zone-elements");
    }
    get backToZoningLink() {
        return $(".zoning-editor-navbar__back");
    }
    get ZoningsTableRows() {
        return $("zoning-list").$$(".cs-table__row");
    }
    clickOnNewZoningButton() {
        this.newZoningBtn.click();
        return new ZoningModal_1.default(this.zoningCreationModalContainer);
    }
    moveToNewWindow() {
        browser.waitUntil(() => {
            return browser.getWindowHandles().length > 1;
        }, 120000, "New window did not opened ");
        this.newWindowHandle = browser.getWindowHandles().filter((value) => {
            return value !== this.originalWindowHanlde;
        })[0];
        browser.switchToWindow(this.newWindowHandle);
    }
    backToOriginalWindow() {
        browser.getWindowHandles().forEach((value) => console.log(value));
        browser.switchToWindow(this.originalWindowHanlde);
    }
    getTopPanel() {
        return new TopPanel_1.default();
    }
    isZoningLoaded() {
        browser.waitUntil(() => {
            return this.zoningIframeWrapper.isDisplayed();
        }, 10000, "waiting for i frame wrapper");
        ///switch to the frame
        browser.switchToFrame("zoning-iframe");
        browser.waitUntil(() => {
            return this.zoningInnerFrame.isDisplayed();
        }, 10000, "waiting for i frame");
        browser.switchToFrame(this.zoningInnerFrame);
        try {
            browser.waitUntil(() => {
                return this.zoningsTopLevelContainer.isEnabled();
            }, 20000, "Zoning shadow container was not loaded");
            browser.waitUntil(() => {
                return this.firstZoningElement.isEnabled();
            }, 20000, "Zoning first element was not loaded");
            let result = this.firstZoningElement.isDisplayed();
            return result;
        }
        finally {
            browser.switchToParentFrame();
        }
    }
    clickBackToZoningLink() {
        this.backToZoningLink.click();
    }
    clickOnRowByZoneName(name) {
        let rows = this.ZoningsTableRows;
        let row = rows.find((currentRow) => {
            return currentRow.$$("cs-table-cell")[1].getText() === name;
        });
        if (row != undefined) {
            $$("cs-table-cell")[1].click();
        }
    }
}
exports.default = CsDashboardPage;
//# sourceMappingURL=CsZoningPage.js.map