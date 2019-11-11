"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BasePage_1 = __importDefault(require("src/pages/BasePage"));
class FileUploadPage extends BasePage_1.default {
    get open() {
        return browser.url('/upload');
    }
    get chooseFileElement() {
        return $('#file-upload');
    }
    get upload() {
        return $('#file-submit').click();
    }
    get uploadedFiles() {
        return $('#uploaded-files').getText();
    }
    chooseFile(filePath) {
        this.chooseFileElement.setValue(filePath);
    }
}
exports.default = new FileUploadPage();
//# sourceMappingURL=FileUploadPage.js.map