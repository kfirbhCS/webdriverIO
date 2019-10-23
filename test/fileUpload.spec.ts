import {expect} from 'chai';
import {imagePath} from 'src/assets';
import FileUploadPage from 'src/pages/FileUploadPage';
import fs from 'fs'

describe('File upload', () => {
    it('works', () => {
        const imageName = 'webdriverIO.png';
        const filePath = imagePath(imageName);
        if(fs.existsSync(filePath)){
            console.log("found file on the server")
        }
        FileUploadPage.open;
        FileUploadPage.chooseFile(filePath);
        FileUploadPage.upload;

        expect(FileUploadPage.uploadedFiles).to.eq(imageName);
    });
});
