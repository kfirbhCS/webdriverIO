
export enum DeviceType{
 Desktop=1,Mobile,Tablet
}

export default class DeviceTypePanel {
 constructor(parent) {
  browser = parent
 }
 
 

 private get desktop() {
  return $("div[data-cy='zoning-creation__device-desktop']")
 }
 private get mobile() {
  return $("div[data-cy='zoning-creation__device-mobile']")
 }
 private get tablet() {
  return $("div[data-cy='zoning-creation__device-tablet']")
 }

 public clickOnDeviceByType(type:DeviceType){
  switch(type){
    case DeviceType.Desktop : {
      this.desktop.click()
      break;
    }
    case DeviceType.Mobile : {
     this.mobile.click()
     break;
    }

    case DeviceType.Tablet : {
     this.tablet.click()
    }
  }
 }

}