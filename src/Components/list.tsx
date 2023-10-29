import React,{ReactNode} from 'react';
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import Week from "./woche"

type ListComponentProps = {
    children: ReactNode;
};
interface ListProps{
    kilogramm: string
}
function ListComponent(props:  ListProps) {
    const onChange = (key: string) => {
        console.log(key);
    };

    const items: TabsProps['items'] = [
        {
            key: '1',
            label: 'Woche 1',
            children: <Week week={'1'} kilogramm={props.kilogramm}/>,
        },
        {
            key: '2',
            label: 'Woche 2',
            children: <Week week={'2'} kilogramm={props.kilogramm}/>,
        },
        {
            key: '3',
            label: 'Woche 3',
            children: <Week week={'3'} kilogramm={props.kilogramm} />,
        },
        {
            key: '4',
            label: 'Woche 4',
            children: <Week week={'4'} kilogramm={props.kilogramm} />,
        },
        {
            key: '5',
            label: 'Woche 5',
            children: <Week week={'5'} kilogramm={props.kilogramm}/>,
        },
        {
            key: '6',
            label: 'Woche 6',
            children: <Week week={'6'} kilogramm={props.kilogramm}/>,
        },
        {
            key: '7',
            label: 'Woche 7',
            children: <Week week={'7'} kilogramm={props.kilogramm} />,
        },
        {
            key: '8',
            label: 'Woche 8',
            children: <Week week={"8"} kilogramm={props.kilogramm}/>,
        },
    ];

    return <Tabs defaultActiveKey="1" items={items} onChange={onChange}></Tabs>;
}

export default ListComponent;
