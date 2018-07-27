
# @innotec/openalpr-scanner

Angular scanner component to scan licenceplate with [openALPR](https://www.openalpr.com/)

## How To

I _promise_ that it's **very** easy to use:

```html
<!-- some.component.html -->
<openalpr-scanner></openalpr-scanner>
```

## API

- @Input() autofocusEnabled
Default is true. Define if the autofocus is enabled

- @Input() device: MediaDeviceInfo;
Input the device what you want to use. Getting devices via camerasFound Output.

- @Input() disableCamera: boolean;
Input an event when the camera will disable

- @Input() openalprsecret: string;
The secret for the openalpr api.

- @Input() openalprcountry: string = 'eu';
Define the country where you want to use.

- @Output() camerasFound = new EventEmitter<MediaDeviceInfo[]>();
Emits the cameras of the device.

- @Output() permissionResponse = new EventEmitter<boolean>();
Emits true/false when no camerapermission.

- @Output() licencePlate = new EventEmitter<any>();
Outputs the licenceplate when process is done.

- @Output() inProgress = new EventEmitter<any>();
Outputs an event when component is in progress.
