//import ant design
import { ColorPicker, Form, Button } from "antd";

import { useState } from "react";

//importing redux
import { useDispatch } from "react-redux"
import { setColorData } from "../redux/containerSlice";

export default function Color({onNext, onPrev}) {
  const [value, setValue] = useState("#1677ff");
  const dispatch = useDispatch();

  const onFinish = (values) => {
    dispatch(setColorData(value));
    onNext()
  }

  return (
    <div>
      <Form layout="vertical" onFinish={onFinish}>

        <div className="flex items-center justify-center gap-2 text-center h-[20rem]">
        <Form.Item label={<p className="text-2xl text-black">Choose a CV color</p>} name='color'>
          <ColorPicker
            value={value}
            onChangeComplete={(color) => {
              setValue(color.toHexString());
            }}
          />
        </Form.Item>
        </div>

        <div className="flex items-end justify-end gap-2 my-5">
            <Button onClick={() => onPrev()}>Prev</Button>
            <Button htmlType="submit">Next</Button>
        </div>
      </Form>
    </div>
  );
}
