import React from 'react';
import { Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';

interface DataType {
    key: string;
    exercise: string;
    sets: string;
    reps: string;
    loadpercent: string;
    loadkg:  string;
}




interface DayProps {
    week: string;
    kilogramm: string;
    // Andere Props hier, falls vorhanden
}

function  Day2(props : DayProps) {
    let weekExercise,weekSets, weekReps, weekLoadPercent, weekLoadKg;

    const percentage2: number = 70
    const percentage1: number = 65
    const valuekg2:number = (Number(props.kilogramm)/100)*percentage2
    const valuekg1:  number = (Number(props.kilogramm)/100)*percentage1

    switch(Number(props.week)) {
        case 1:
            weekExercise = 'Back Squat';
            weekSets = String(5);
            weekReps = String(8);
            weekLoadPercent = String(percentage2)+"%";
            weekLoadKg = String(valuekg2)+"kg";
            break;
        case 2:
            weekExercise = 'Back Squat';
            weekSets = String(5);
            weekReps = String(6);
            weekLoadPercent = "plus 10kg";
            weekLoadKg = String(valuekg2+10) + "kg";
            break;
        case 3:
            weekExercise = 'Back Squat';
            weekSets = String(4);
            weekReps = String(6);
            weekLoadPercent = "plus 10kg";
            weekLoadKg = String(valuekg2+20) + "kg";
            break;
        case 4:
            weekExercise = 'Back Squat';
            weekSets = String(3);
            weekReps = String(4);
            weekLoadPercent = "plus 10kg";
            weekLoadKg = String(valuekg2+30) + "kg";
            break;
        case 5:
            weekExercise = 'Back Squat';
            weekSets = String(3);
            weekReps = String(3);
            weekLoadPercent = "plus 10kg";
            weekLoadKg = String(valuekg1+50) + "kg";
            break;
        case 6:
            weekExercise = 'Back Squat';
            weekSets = String(5);
            weekReps = String(3);
            weekLoadPercent = "plus 5kg";
            weekLoadKg = String(valuekg1+55) + "kg";
            break;
        case 7:
            weekExercise = 'Back Squat';
            weekSets = String(5);
            weekReps = String(3);
            weekLoadPercent = "plus 10kg";
            weekLoadKg = String(valuekg1+65) + "kg";
            break;
        case 8:
            weekExercise = 'Back Squat';
            weekSets = String(2) +"->"+ String(2)+ "->"+ String(1);
            weekReps =  String(2) +"->"+ String(2)+ "->"+ String(1);
            weekLoadPercent = "Base -25 --> Base -15  --> Base";
            weekLoadKg = String(valuekg1-25) + "kg" + "-->"  + String(valuekg1-15) + "kg"  + "-->" + String(valuekg1-25) + "kg";

    }


    const columns: ColumnsType<DataType> = [
        {
            title: 'Exercise',
            dataIndex: 'exercise',
            key: 'exercise',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Sets',
            dataIndex: 'sets',
            key: 'sets',
        },
        {
            title: 'Reps',
            dataIndex: 'reps',
            key: 'reps',
        },
        {
            title: 'Load',
            dataIndex: 'loadpercent',
            key: 'loadpercent',
        },
        {
            title: 'Load(kg)',
            dataIndex: 'loadkg',
            key: 'loadkg',
        },

    ];

    const data: DataType[] = [
        {
            key: '1',
            exercise: weekExercise ? weekExercise:  " ",
            sets: weekSets ? weekSets: "  ",
            reps: weekReps  ? weekReps:" ",
            loadpercent: weekLoadPercent ?weekLoadPercent : " ",
            loadkg: weekLoadKg  ? weekLoadKg: " ",
        },

    ];

    return (
        <Table columns={columns} dataSource={data} />
    )
}


export default Day2;