export default class TopPanelSubMenu {
	private  parentElement ;
	public constructor(parent) {
		this.parentElement=parent;
	}
	protected getOptions() {
		return this.parentElement.$$('.sub-menu-item');
	}
}