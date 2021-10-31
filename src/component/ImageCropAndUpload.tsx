import React, { useState } from 'react';
import { Upload, Progress } from "antd"; 
import ImgCrop from 'antd-img-crop';
import axios from "axios";
import { RcFile as OriRcFile, UploadRequestOption as RcCustomRequestOptions } from 'rc-upload/lib/interface';
import styled from "styled-components"

export interface IImageCropProps {
  getUrlList: any
  urlList:any
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

const StyledUpload = styled(Upload)`
.ant-upload-list{
  flex-wrap: wrap;
  .ant-load{
    width: 30%;
  }
  .ant-upload-list-picture-card-container{
    width: 30%;
  }
  .ant-upload.ant-upload-select-picture-card{
    width: 30%;
  }
}
`



export default function ImageCrop(props: IImageCropProps) {
  const [fileList, setFileList] = useState<[UploadFile]>([
    {
      uid: '-1',
      name: 'image.png',
      status: 'done',
      url: 'https://kakaomap.s3.ap-northeast-2.amazonaws.com/maxresdefault.jpeg',
    }
  ]);

  const onChange = ({ fileList: newFileList }: { fileList: any }) => {
    console.log("fileList", fileList)
    setFileList(newFileList);
  };

  const onPreview = async (file: any) => {
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

  const uploadImage = async (options:any) => {
    const { onSuccess, onError, file, onProgress } = options;

    const fmData :any= new FormData();
    const config = {
      headers: { "content-type": "multipart/form-data",
      "Access-Control-Allow-Origin": "*"
    },
    }
    fmData.append("file", file);
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/upload`,
        fmData,
        config
      );

      onSuccess("Ok");
      console.log("server res: ", res);
      let imageUrl: string = res.data.url
      props.getUrlList([...props.urlList, res.data.url ])
    } catch (err) {
      const error = new Error("Some error");
      onError({ err });
    }
  };

  



  return (
    <ImgCrop rotate>
      <StyledUpload
        customRequest={uploadImage}
        listType="picture-card"
        fileList={fileList}
        onChange={onChange}
        onPreview={onPreview}
      >
        {fileList.length < 5 && '+ Upload'}
      </StyledUpload>
    </ImgCrop>
  );
}
