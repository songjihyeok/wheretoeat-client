import React, { useState } from 'react';
import { Upload } from 'antd';
import ImgCrop from 'antd-img-crop';
import { RcFile as OriRcFile, UploadRequestOption as RcCustomRequestOptions } from 'rc-upload/lib/interface';

export interface IImageCropProps {
}

export interface UploadFile<T = any> {
    uid: string;
    size?: number;
    name: string;
    fileName?: string;
    lastModified?: number;
    lastModifiedDate?: Date;
    url?: string;
    status?: UploadFileStatus;
    percent?: number;
    thumbUrl?: string;
    originFileObj?: RcFile;
    response?: T;
    error?: any;
    linkProps?: any;
    type?: string;
    xhr?: T;
    preview?: string;
}


export declare type UploadFileStatus = 'error' | 'success' | 'done' | 'uploading' | 'removed';
export interface RcFile extends OriRcFile {
    readonly lastModifiedDate: Date;
}

export default function ImageCrop (props: IImageCropProps) {

    const [fileList, setFileList] = useState<[UploadFile]>([
        {
          uid: '-1',
          name: 'image.png',
          status: 'done',
          url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        }
      ]);
    
      const onChange = ({ fileList: newFileList }: {fileList: any} ) => {
        setFileList(newFileList);
      };
    
      const onPreview = async (file: any)=> {
        // let src = file.url;
        // if (!src) {
        //   src = await new Promise(resolve => {
        //     const reader = new FileReader();
        //     reader.readAsDataURL(file.originFileObj);
        //     reader.onload = () => resolve(reader.result);
        //   });
        // }
        // const image = new Image();
        // image.src = src;
        // const imgWindow = window.open(src);
        // imgWindow?.document.write(image.outerHTML);
      };
    
  return (
            <ImgCrop rotate>
        <Upload
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            listType="picture-card"
            fileList={fileList}
            onChange={onChange}
            onPreview={onPreview}
        >
            {fileList.length < 5 && '+ Upload'}
        </Upload>
        </ImgCrop>
  );
}
