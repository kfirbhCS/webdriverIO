import { configure, getLogger } from 'log4js';
import path from 'path'
class CSLogger{
  private logname
  private logger
  private fileName
  constructor(){

  }
 
 public init(logname,level){
   this.logname=logname
   this.logger = getLogger()
   this.logger.level = level
   this.fileName = `./logs/${this.logname}.log`
   console.log(path.resolve(this.fileName));
   try{
      configure({
     appenders: {
       myAppender : {type: 'file',filename: `${this.fileName}`},
       consoleAppender :{type:'console'}
      },
       categories: { default: { appenders: ['myAppender','consoleAppender'], level: 'debug' } }
      })
  }
 catch(err){
  console.log(err)
 }
}
  public info(message:string){
   this.logger.info(`${message} - [${this.logname}]`)
  }

  public debug(message:string){
    this.logger.debug(`${message}`)
  }

  public error(message:string){
   this.logger.error(message)
  }
  
 }

 export default new CSLogger();
 