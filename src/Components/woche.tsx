import React from 'react';
import type { CollapseProps } from 'antd';
import { Collapse } from 'antd';
import  Day1 from "./day1"
import  Day2 from "./day2"
interface WeekProps{
    week:string
    kilogramm: string
}
function Week(props: WeekProps) {
    const onChange = (key: string | string[]) => {
        console.log(key);
    };

    const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

    const items: CollapseProps['items'] = [
        {
            key: '1',
            label: 'Tag 1',
            children: <Day1 week={props.week} kilogramm={props.kilogramm}/>,
        },
        {
            key: '2',
            label: 'Tag 2',
            children: <Day2 week={props.week} kilogramm={props.kilogramm}/>,
        }
    ];
    return <Collapse items={items} defaultActiveKey={['1']} onChange={onChange} />;
}

export default Week;