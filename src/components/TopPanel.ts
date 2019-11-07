import DefineSubMenu from '/src/components/DefineSubMenu'
import AnalyseSubMenu from './AnalyseSubMenu';
import PerformanceSubMenu from './PerformanceSubMenu';
export default class TopPanel {
    private  getSubMenuContainer(parentTab) {
        return parentTab.$(".sub-menu-wrapper")
    }
    private get getPanel() {
        return $("#cs-main-nav").$(".nav-wrapper")
    }
    private get getAnalyseTab() {
        return this.getPanel.$(".analyze")
    }
    private get getDefineTab() {
        return this.getPanel.$(".define")
    }

    private get getPerformanceTab() {
        return this.getPanel.$(".performance ")
    }

    /**
     * will click on the define option in the top panel
     */
    public clickOnDefineTab(): DefineSubMenu {
        let tab = this.getDefineTab
        tab.click()
        return new DefineSubMenu(this.getSubMenuContainer(tab))
    }

    /**
     * will click on the analyes option in the top panel
     */
    public clickOnAnalyseTab(): AnalyseSubMenu {
        let tab = this.getAnalyseTab
        tab.click()
        let container = this.getSubMenuContainer(tab)
        return new AnalyseSubMenu(container)
    }


    /**
     * will click on the performance option in the top panel
     */
    public clickOnPerformanceTab(): PerformanceSubMenu{
        let tab = this.getPerformanceTab
        tab.click()
        return new PerformanceSubMenu(this.getSubMenuContainer(tab))
    }
}