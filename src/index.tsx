import { NativeModules, Platform } from 'react-native';


let defaultOptions = {
  //**iOS**//
  usedPrefetch: false,
  allowedAlbumCloudShared: false,
  muteAudio: true,
  autoPlay: true,
  //resize thumbnail
  haveThumbnail: true,

  thumbnailWidth: 20,
  thumbnailHeight: 20,
  allowedLivePhotos: true,
  preventAutomaticLimitedAccessAlert: true, // newest iOS 14
  emptyMessage: 'No albums',
  selectMessage: 'Select',
  deselectMessage: 'Deselect',
  selectedColor: '#FB9300',
  maximumMessageTitle: 'Notification',
  maximumMessage: 'You have selected the maximum number of media allowed',
  maximumVideoMessage: 'You have selected the maximum number of video allowed',
  messageTitleButton: 'OK',
  cancelTitle: 'Cancel',
  tapHereToChange: 'Tap here to change',

  //****//

  //**Android**//

  //****//

  //**Both**//
  usedCameraButton: true,
  allowedVideo: true,
  allowedPhotograph: true, // for camera : allow this option when you want to take a photos
  allowedVideoRecording: false, //for camera : allow this option when you want to recording video.
  maxVideoDuration: 60, //for camera : max video recording duration
  numberOfColumn: 3,
  maxSelectedAssets: 20,
  doneTitle: 'Done',
  isPreview: true,
  mediaType: 'all',
  isExportThumbnail: false,
  maxVideo: 20,
  selectedAssets: [],
  singleSelectedMode: false,
  isCrop: false,
  isCropCircle: false,
};

const Picture = NativeModules.Picture
  ? NativeModules.Picture
  : new Proxy(
    {},
    {
      get() {
        throw new Error(LINKING_ERROR);
      },
    }
  );
console.log('Picture :>> ', Picture);


export function openPicker(options: any): Promise<any> {
  return Picture.openPicker({ ...defaultOptions, ...options });
}
