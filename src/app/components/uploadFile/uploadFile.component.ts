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
  public submitted = false;
  public files: UploadFile[] = [];
  public status = false;
  public typeCohorts = 'weekly';

  constructor(private uploadFileService: UploadFileService) { }

  public ngOnInit() {
  }

  public dropped(event: UploadEvent) {
     this.files = event.files;
     for (var file of event.files) {
       file.fileEntry.file(info => {
        this.onValidate(info);
      });
     }
   }

  public onValidate(data){
    var options = {
      fieldSeparator: ',',
      quoteStrings: '',
      decimalseparator: '.',
      showLabels: true,
      headers:["cohort_week","activity_week","users","revenue"],
      useBom: true
    };
    this.submitted = true;
    if (data !== null){
      const events= [];
      let reader = new FileReader();
      reader.readAsText(data);
      reader.onload = () => {
      let text = reader.result;
       this.uploadFileService.uploadData(text).subscribe((result) => {
        swal({
          title: 'Success',
          text: 'Report generated correctly',
          type: 'success'
        });
        new Angular2Csv(result, 'report', options);
        }, (error) => {
          swal({
            title: 'Error!',
            text: 'An error occurs when generating the report',
            type: 'error'
          });
        });
      }
    };
  }
}
