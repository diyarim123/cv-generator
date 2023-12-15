import { useState } from 'react';
import { Steps, theme } from 'antd';

//importing the components
import Personal from "../components/Personal";
import Experience from "../components/Experience";
import Project from '../components/Project';
import Education from '../components/Education';
import Miscellaneous from '../components/Miscellaneous';
import Color from '../components/Color';
import Finish from '../components/Finish';


export default function InformationLayout() {

  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);
  const next = () => {
    setCurrent(current + 1);
  };
  const prev = () => {
    setCurrent(current - 1);
  };


  const steps = [
    {
      title: 'Personal',
      content: <Personal onNext={next} />,
    },
    {
      title: 'Experience',
      content: <Experience onNext={next} onPrev={prev} />,
    },
    {
      title: "Project",
      content: <Project onNext={next} onPrev={prev} />
    },
    {
      title: "Education",
      content: <Education onNext={next} onPrev={prev} />
    },
    {
      title: "Miscellaneous",
      content: <Miscellaneous onNext={next} onPrev={prev} />
    },
    {
      title: "Color",
      content: <Color onNext={next} onPrev={prev} />
    },
    {
      title: "Finish",
      content: <Finish />
    }
  ];


  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
  }));
  const contentStyle = {
    lineHeight: '2.5rem',
    textAlign: 'start',
    color: token.colorTextTertiary,
    backgroundColor: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: `1px dashed ${token.colorBorder}`,
    marginTop: '2rem',
    padding: '1rem',
    width: '100%',
    maxWidth: '100%', 
  };

  return (
    <div className='flex flex-col justify-center items-center gap-4 p-5'>

      <h1 className='text-3xl mb-10'>Enter Your Information</h1>

      <div className='flex justify-center items-center'>
        <Steps current={current} items={items} />
      </div>

      <div style={contentStyle}>
          {steps[current].content}
      </div>

    </div>
  )
}
