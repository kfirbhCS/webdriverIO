
export enum DeviceType {
	Desktop=1,Mobile,Tablet
}

export default class DeviceTypePanel {
	parentElement;
	constructor(parent) {
		this.parentElement = parent;
	}
	
	private get desktop() {
		return this.parentElement.$("div[data-cy='zoning-creation__device-desktop']");
	}
	private get mobile() {
		return this.parentElement.$("div[data-cy='zoning-creation__device-mobile']");
	}
	private get tablet() {
		return this.parentElement.$("div[data-cy='zoning-creation__device-tablet']");
	}
	
	public clickOnDeviceByType(type: DeviceType) {
		switch(type) {
			case DeviceType.Desktop : {
				browser.waitUntil(() => {
					return this.desktop.isEnabled();
				},5000);
				this.desktop.click();
				break;
			}
			case DeviceType.Mobile : {
				browser.waitUntil(() => {
					return this.mobile.isEnabled();
				},5000);
				this.mobile.click();
				break;
			}
			
			case DeviceType.Tablet : {
				browser.waitUntil(() => {
					return this.tablet.isEnabled();
				},5000);
				this.tablet.click();
			}
		}
	}
	
}