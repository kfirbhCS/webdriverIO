export default class ClientZoningPage {
	/* #region Main */
	private get acceptBtn() {
		return $('.evidon-banner-acceptbutton');
	}

	private get clientWebSiteSaveToCSBtn() {
		return $('.ContentSquare--no-scrap').shadow$('button.zoning-analyze-button');
	}

	private get zoningNameTextBox() {
		return $('.ContentSquare--no-scrap').shadow$('.zoning-modal-container__input--text');
	}

	private get popupSaveToCS() {
		return $('.ContentSquare--no-scrap').shadow$('button.zoning-modal-container__footer--analyse');
	}

	private get clientSiteEmailTb() {
		return $('#CustomerLogin_CustomerLoginFormData_Email');
	}
	/* #endregion */

	public clickOnAcceptButton() {

			browser.waitUntil(() => {
				return this.acceptBtn.isEnabled();
			}, 5000, 'AcceptBtn was not loaded');

			let count = 0;
			while (this.acceptBtn.isDisplayed() && count <5) {
				try {
				this.acceptBtn.click();

				browser.waitUntil(() => {
					return !(this.acceptBtn.isDisplayed());
				}, 7000, 'AcceptBtn is visible');
			} catch (err) {
					count ++;
					console.log(`Accept failed to click on accept btn (${err})`);
			}
		}
	}

	public closeClientWindow() {
		browser.closeWindow();
	}

	public clickOnClientSiteEmailTB() {
		browser.waitUntil(() => {
			return this.clientWebSiteSaveToCSBtn.isEnabled();
		}, 5000, 'waiting for plugin');
		let success: boolean = false;
		let counter: number = 0;
		while (!success && counter < 10) {
			try {
				this.clientSiteEmailTb.click();
				success = true;
			} catch (err) {
				browser.pause(1000);
				success = false;
				counter++;
			}
		}

	}

	public clickOnSaveInClientWebSite() {
		try {
			this.clientWebSiteSaveToCSBtn.click();
		} catch (err) {
			console.log('failed to click on shadow dom element');
		}
	}
	public setZoningName(name: string) {
		try {
			browser.waitUntil(() => {
				return this.zoningNameTextBox.isEnabled();
			}, 5000, 'shadow dom text box is not enabled');
			browser.pause(2000);
			this.zoningNameTextBox.setValue(name);
		} catch (err) {
			console.log('failed to set shadow dom element with value');
		}
	}

	public clickOnSaveToContentSquare() {
		try {
			this.popupSaveToCS.click();
		} catch (err) {
			console.log('failed to click on shadow dom element');
		}
	}

}