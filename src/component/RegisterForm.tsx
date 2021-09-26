import * as React from 'react';
import { Form, Input, InputNumber, Button } from 'antd';
import ImageCrop from "../component/ImageCropAndUpload"
import StarRating from "../component/StarRating"

export interface IRegisterFormProps {
}

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  
  /* eslint-disable no-template-curly-in-string */
  const validateMessages = {
    required: '${label}은 적어주세요',
    number: {
      range: '${label} must be between ${min} and ${max}',
    },
  };

export default function RegisterForm (props: IRegisterFormProps) {
    const onFinish = (values: any) => {
        console.log(values);
      };

    return (
        <>
        <StarRating></StarRating>
        <Form {...layout} style={{width: "100%",padding: '0 10%'}}name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
          <Form.Item name={['user', 'name']} label="제목" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name={['user', 'introduction']} label="후기 내용">
            <Input.TextArea  style={{height: '100px'}}/>
          </Form.Item>
          <Form.Item name={['image']} label="이미지">
              <ImageCrop></ImageCrop>
          </Form.Item>
          <Form.Item wrapperCol={{ ...layout.wrapperCol }}>
                <Button type="primary" htmlType="submit">
                    리뷰 등록
                </Button>
        </Form.Item>
        </Form>

            </>
      );
}

