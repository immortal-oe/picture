import { NativeModules, Platform, Dimensions } from 'react-native';
const { width } = Dimensions.get('window');

const defaultOptionsIos = Platform.select({
  android: {
    maxVideoDuration: 60,
    isPreview: true,
    isExportThumbnail: false,
    maxVideo: 20,
  },
  ios: {
    CropW: width * 0.8, // 裁剪宽度
    CropH: width * 0.8, // 裁剪高度
    showCropFrame: true, // 是否显示裁剪区域，默认true
    showCropGrid: false, // 是否隐藏裁剪区域网格，默认false
    freeStyleCropEnabled: true, // 裁剪框是否可拖拽
    rotateEnabled: true, // 裁剪是否可旋转图片
    scaleEnabled: true, // 裁剪是否可放大缩小图片
    // sortAscendingByModificationDate: true, // 对照片排序，按修改时间升序，默认是YES。如果设置为NO,最新的照片会显示在最前面，内部的拍照按钮会排在第一个
    // showSelectedIndex: true, // 是否显示序号， 默认不显示
    // allowPickingOriginalPhoto: false,
  },
  default: {
    isCrop: false, // 是否允许裁剪，默认false, maxCount 为1才生效
    maxCount: 4, // 最大选择图片数目，默认6
  },
});

const Picture = NativeModules.Picture;

export function openPicker(options: any): Promise<any> {
  return Picture.openPicker({ ...defaultOptionsIos, ...options });
}
