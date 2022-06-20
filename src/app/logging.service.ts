export class LoggingService {
  lastLog: string;

  pringLog(mesage: string) {
    console.log(mesage);
    console.log(this.lastLog);
    this.lastLog = mesage;
  }
}