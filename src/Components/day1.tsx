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
function Day1(props: DayProps) {
    let weekKey, weekExerciseMain, weekExerciseA1, weekExerciseA2, weekSetsMain, weekSetsA1, weekSetsA2, weekRepsMain, weekRepsA1, weekRepsA2, weekLoadPercentMain, weekLoadPercentA1, weekLoadPercentA2, weekLoadkgMain, weekLoadkgA1, weekLoadkgA2;


    const percentage1: number = 65
    const valuekg1:  number = (Number(props.kilogramm)/100)*percentage1


        switch (Number(props.week)) {
            case 1:
                weekKey = '1';
                weekExerciseMain = "Back Squat ";
                weekExerciseA1 =  "Prone Backextension Hold +  Banded Clams";
                weekExerciseA2 = "Pistol Squat Negatives + Superman Plank "
                weekSetsMain  = "4";
                weekSetsA1  = "4";
                weekSetsA2 =  "4";
                weekRepsMain = "10";
                weekRepsA1 =  "1+12es";
                weekRepsA2 = "8es+1"
                weekLoadPercentMain = String(percentage1)+"%";
                weekLoadPercentA1  = "45sec hold for BE's, medium hip circle for Banded Clams"
                weekLoadPercentA2 = "BW only for PSN's, 1min hold for SP's"
                weekLoadkgMain = String(valuekg1)+"kg";
                weekLoadkgA1  = "-";
                weekLoadkgA2  =  "-";
                break;
            case 2:
                weekKey = '2';
                weekExerciseMain = "Back Squat";
                weekSetsMain = "4";
                weekRepsMain = "10";
                weekLoadPercentMain = "plus 10kg";
                weekLoadkgMain = String(valuekg1+10);
                weekExerciseA1 = "Prone Backextension Hold + Side Plank with Lateral Leg Raises";
                weekSetsA1 = "4";
                weekRepsA1 = "1+10es";
                weekLoadPercentA1 = "1min hold for BE's, Body weight only for SPLLR's";
                weekLoadkgA1 = "-";
                weekExerciseA2 = "Frontfootraised Split Squats + Superman Plank";
                weekSetsA2 = "4";
                weekRepsA2 = "10es+1";
                weekLoadPercentA2 = "12kg KBell in each hand for FFRSS's and Frontfoot on a 20kg bumperplate, Accumulate 90sec hold for SP's";
                weekLoadkgA2 = "-";
                break;
            case 3:
                weekKey = '3';
                weekExerciseMain = "Back Squat";
                weekSetsMain = "5";
                weekRepsMain = "8";
                weekLoadPercentMain = "plus 10kg";
                weekLoadkgMain = String(valuekg1+20);
                weekExerciseA1 = "Quarter Squat pause with Hip Circle + Side Plank with Lateral Leg Raises";
                weekSetsA1 = "4";
                weekRepsA1 = "5+15es";
                weekLoadPercentA1 = "10sec hold on each of the QSPHC's, Body weight only for SPLLR's";
                weekLoadkgA1 = "-";
                weekExerciseA2 = "Frontfootraised Split Squats + GHD Situps";
                weekSetsA2 = "4";
                weekRepsA2 = "10es+10";
                weekLoadPercentA2 = "16kg KBell in each hand for FFRSS's and Frontfoot on two 20kg bumperplates, Bodyweight only for GHDSU's";
                weekLoadkgA2 = "-";
                break;
            case 4:
                weekKey = '4';
                weekExerciseMain = "Back Squat";
                weekSetsMain = "6";
                weekRepsMain = "4";
                weekLoadPercentMain = "plus 10kg";
                weekLoadkgMain = String(valuekg1+30);
                weekExerciseA1 = "Quarter Squat pause with Hip Circle + Single leg medball Plank";
                weekSetsA1 = "4";
                weekRepsA1 = "5+2es";
                weekLoadPercentA1 = "15sec hold on each of the QSPHC's, 20secs per hold for SLMP's";
                weekLoadkgA1 = "-";
                weekExerciseA2 = "Frontrack Reverse Lunges + Weighted GHD Situps";
                weekSetsA2 = "4";
                weekRepsA2 = "8es+10";
                weekLoadPercentA2 = "40kg for RL's, 10kg Medball for WGHDSU's";
                weekLoadkgA2 = "-";
                break;
            case 5:
                weekKey = '5';
                weekExerciseMain = "Back Squat";
                weekSetsMain = "5";
                weekRepsMain = "5";
                weekLoadPercentMain = "plus 10kg";
                weekLoadkgMain = String(valuekg1+40);
                weekExerciseA1 = "Side plank with banded lateral leg raises + Single leg medball Plank";
                weekSetsA1 = "4";
                weekRepsA1 = "8es+2es";
                weekLoadPercentA1 = "very light band for SPBLLR's, 20secs per hold for SLMP's";
                weekLoadkgA1 = "-";
                weekExerciseA2 = "Frontrack Reverse Lunges + Weighted GHD Situps";
                weekSetsA2 = "4";
                weekRepsA2 = "10es+12";
                weekLoadPercentA2 = "45kg+ for RL's, 10kg Medball for WGHDSU's";
                weekLoadkgA2 = "-";
                break;
            case 6:
                weekKey = '6';
                weekExerciseMain = "Back Squat";
                weekSetsMain = "5";
                weekRepsMain = "5";
                weekLoadPercentMain = "plus 5kg";
                weekLoadkgMain = String(valuekg1+45);
                weekExerciseA1 = "Side plank with banded lateral leg raises + Goblets squats with hip circle";
                weekSetsA1 = "4";
                weekRepsA1 = "8+15";
                weekLoadPercentA1 = "very light band for SPBLLR's, 24kg Kbell for GWHC's";
                weekLoadkgA1 = "-";
                weekExerciseA2 = "Frontrack Reverse Lunges + Weighted GHD Situps";
                weekSetsA2 = "4";
                weekRepsA2 = "10es+12";
                weekLoadPercentA2 = "45kg+ for RL's, 10kg Medball for WGHDSU's";
                weekLoadkgA2 = "-";
                break;
            case 7:
                weekKey = '7';
                weekExerciseMain = "Back Squat";
                weekSetsMain = "5";
                weekRepsMain = "3";
                weekLoadPercentMain = "plus 5kg";
                weekLoadkgMain = String(valuekg1+60);
                weekExerciseA1 = "Superman Plank + Goblets squats with hip circle";
                weekSetsA1 = "4";
                weekRepsA1 = "1+15";
                weekLoadPercentA1 = "accumulate 90sec per round of plank hold, 24kg Kbell for GWHC's";
                weekLoadkgA1 = "-";
                weekExerciseA2 = "Frontfoot Raised Splitsquats + Weighted GHD Situps";
                weekSetsA2 = "4";
                weekRepsA2 = "10es+15";
                weekLoadPercentA2 = "20kg Kbell each hand for FFRSS's's, 10kg Medball for WGHDSU's";
                weekLoadkgA2 = "-";
                break;
            case 8:
                weekKey = "8";
                weekExerciseMain = "Back Squat";
                weekSetsMain = "3";
                weekRepsMain = "2";
                weekLoadPercentMain = "minus 30";
                weekLoadkgMain = String(Number(props.kilogramm)-30);
                weekExerciseA1 = "Back Squat";
                weekSetsA1 = "3";
                weekRepsA1 = "1";
                weekLoadPercentA1 = "minus 10";
                weekLoadkgA1 = String(Number(props.kilogramm)-10);
                weekExerciseA2 = "-";
                weekSetsA2 = "-";
                weekRepsA2 = "-";
                weekLoadPercentA2 = "-";
                weekLoadkgA2 = "-";
                break;
            default:
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
            key: "1",
            exercise: weekExerciseMain ? weekExerciseMain: " ",
            sets: weekSetsMain ? weekSetsMain:" ",
            reps: weekRepsMain ? weekRepsMain: " ",
            loadpercent: weekLoadPercentMain ? weekLoadPercentMain :" ",
            loadkg: weekLoadkgMain ? weekLoadkgMain :" ",
        },
        {
            key: '2',
            exercise: weekExerciseA1 ? weekExerciseA1 : " ",
            sets: weekSetsA1 ? weekSetsA1 : " ",
            reps: weekRepsA1 ? weekRepsA1 : " ",
            loadpercent: weekLoadPercentA1 ? weekLoadPercentA1 : " ",
            loadkg: weekLoadkgA1 ? weekLoadkgA1 : " ",
        },
        {
            key: '3',
            exercise:  weekExerciseA2 ? weekExerciseA2: " ",
            sets: weekSetsA2 ? weekSetsA2:" ",
            reps: weekRepsA2 ? weekRepsA2: " ",
            loadpercent: weekLoadPercentA2 ? weekLoadPercentA2 :" ",
            loadkg: weekLoadkgA2 ? weekLoadkgA2 :" ",
        },

    ];

    return (
        <Table columns={columns} dataSource={data} />
    )
}


export default Day1;