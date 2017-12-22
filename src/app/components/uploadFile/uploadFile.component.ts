import { Component } from '@angular/core';
import { FileDropModule, UploadFile, UploadEvent } from 'ngx-file-drop';
import  { UploadFileService} from './uploadFile.service';
import * as csv from "csvtojson";
import * as _ from 'lodash';
import * as moment from 'moment';
import swal from 'sweetalert2';
import { Angular2Csv } from 'angular2-csv/Angular2-csv';

@Component({
  selector: 'upload-file',
  providers: [ UploadFileService ],
	templateUrl: './uploadFile.template.html'
})

export class UploadFileComponent {

  public data = null;
  public file;
  public events;
  public event;
  public typeReport = 'cumulative';

  constructor(private uploadFileService: UploadFileService) { }

  public ngOnInit() {
  }

  public onFileChange(event) {
    this.file = event.target.files[0];
  }

  public onUpload() {
    const events= [];
    let reader = new FileReader();
    reader.readAsText(this.file);
    reader.onload = () => {
    let text = reader.result;
    this.uploadFileService.uploadData(text).subscribe((result) => {
       if (result.length > 0){
        this.events= result;
        this.event = result[0].name;
       }
       swal({
        title: 'Success',
        text: 'Upload completado',
        type: 'success'
        });
      }, (error) => {
        swal({
          title: 'Error',
          text: 'Upload no completado',
          type: 'error'
          });
      });
    }
  }

  public onDownload(){
    var options = {
      fieldSeparator: ',',
      quoteStrings: '',
      decimalseparator: '.',
      showLabels: true,
      headers:["cohort_Person","activity_day","cumulative","unic","date"],
      useBom: true
    };
    this.uploadFileService.downloadData(this.event).subscribe((result) => {
      new Angular2Csv(result, 'report', options);
      console.log();
     }, (error) => {
       swal({
         title: 'Error',
         text: 'Upload no completado',
         type: 'error'
         });
     });
   }

}
