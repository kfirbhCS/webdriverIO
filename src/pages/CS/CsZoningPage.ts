import TopPanel from 'src/components/TopPanel';
import ZoningCreationModal from 'src/components/ZoningModal';
import CsBasePage from 'src/pages/CS/CsBasePage';

export default class CsDashboardPage extends CsBasePage {
	readonly originalWindowHanlde;
	private newWindowHandle;
	public constructor() {
		super();
		this.originalWindowHanlde = browser.getWindowHandle();
	}
	private get newZoningBtn() {
		return $('//cs-button[@data-cy="new"]/button');
	}
	private get zoningCreationModalContainer() {
		return $('zoning-creation-modal');
	}
	private get zoningIframeWrapper() {
		return $('#zoning-iframe');
	}
	private get zoningInnerFrame() {
		return $('iframe');
	}
	private get zoningsTopLevelContainer() {
		// return $('body').shadow$('div.llBlk')
		return $('div.llBlk');
	}
	private get firstZoningElement() {
		return this.zoningsTopLevelContainer.shadow$('app-zone-elements');
	}
	private get backToZoningLink() {
		return $('.zoning-editor-navbar__back');
	}
	private get ZoningsTableRows() {
		return $('zoning-list').$$('.cs-table__row');
	}
	public clickOnNewZoningButton(): ZoningCreationModal {
		let result = false
		browser.waitUntil(() => {
			return this.newZoningBtn.isDisplayed();
		}, 5000, "");
		while (!result) {
			try {
				this.newZoningBtn.click();
				result = true;
			} catch (e) {
				console.log('Failed to click on new zoning');
				browser.pause(1000);
			}
		}
		return new ZoningCreationModal(this.zoningCreationModalContainer);
		}

	public moveToNewWindow() {
		browser.waitUntil(() => {
			return browser.getWindowHandles().length > 1;
		}, 120000, 'New window did not opened ');
		this.newWindowHandle = browser.getWindowHandles().filter((value) => {
			return value !== this.originalWindowHanlde;
		})[0];
		browser.switchToWindow(this.newWindowHandle);
	}
	public backToOriginalWindow() {
		browser.getWindowHandles().forEach((value) => console.log(value));
		browser.switchToWindow(this.originalWindowHanlde);
	}
	public getTopPanel() {
		return new TopPanel();
	}
	public isZoningLoaded() {
		browser.waitUntil(() => {
			return this.zoningIframeWrapper.isDisplayed();
		}, 10000, 'waiting for i frame wrapper');
		/// switch to the frame
		browser.switchToFrame('zoning-iframe');
		browser.waitUntil(() => {
			return this.zoningInnerFrame.isDisplayed();
		}, 10000, 'waiting for i frame');
		browser.switchToFrame(this.zoningInnerFrame);
		try {
			browser.waitUntil(() => {
				return this.zoningsTopLevelContainer.isEnabled();
			}, 20000, 'Zoning shadow container was not loaded');
			browser.waitUntil(() => {
				return  this.firstZoningElement.isEnabled();
			}, 20000, 'Zoning first element was not loaded');
			const result: boolean =  this.firstZoningElement.isDisplayed();
			return result;
		} finally  {
			browser.switchToParentFrame();
		}
	}
	public clickBackToZoningLink() {
		this.backToZoningLink.click();
	}

	public clickOnRowByZoneName(name: string) {
		const rows = this.ZoningsTableRows;
		const row = rows.find((currentRow) => {
			return currentRow.$$('cs-table-cell')[1].getText() === name;
		});
		if (row !== undefined) {
			browser.waitUntil(() => {
				return row.$$('cs-table-cell')[1].isEnabled()
			},5000)
			row.$$('cs-table-cell')[1].click();
		}
	}

	public deleteRowByName(name: string) {
		const rows = this.ZoningsTableRows;
		const row = rows.find((currentRow) => {
			return currentRow.$$('cs-table-cell')[1].getText() === name;
		});

		if (row != undefined) {
			this.deleteRow(row);
		}
	}

	public deleteAllRowsByName(name: string) {
		const rows = this.ZoningsTableRows;
		const rows1 = rows.filter((currentRow) => {
			return currentRow.$$('cs-table-cell')[1].getText() === name;
		});
		rows1.forEach((a ) => {
			this.deleteRow(a);
			browser.pause(2000);
		});

	}

	private deleteRow(row: WebdriverIO.Element) {
		const cells = row.$$('cs-table-cell');
		cells[cells.length-1].$('zoning-item-action-list').click();
		cells[cells.length-1].$("cs-action-list-item[data-cy='action-delete']").click();
		$('.danger').click();
	}

}