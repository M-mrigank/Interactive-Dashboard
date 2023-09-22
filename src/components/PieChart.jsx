import { ResponsivePie } from "@nivo/pie";
import { token } from "../theme";
import { useTheme } from "@mui/material";
import { mockPieData as data } from "../data/mockData";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {getAllData} from "../actions/chartData.js"

const PieChart = () => {

  const theme = useTheme();
  const colors = token(theme.palette.mode);
  const allData=useSelector((state)=>state.chartDataReducer);
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(getAllData());
  }, []);
  // console.log(Array.isArray(allData));
  const data1=allData?.map((data)=>data?.topic);
  // console.log(allData)

  const freq= {};
  for (let i=0; i<data1.length; i++){
    if (freq[data1[i]]){
      freq[data1[i]]+= 1;
    }
    else{
      freq[data1[i]]= 1;
    }
  }
  const arr= [];
  // console.log(freq)
  // console.log("type ",typeof(freq))
  const keys= Object.keys(freq)
  // console.log("keys",keys)
  const values= Object.values(freq);
  // console.log("values ",values);
  keys.forEach((element,index)=>{
    const obj1= {
      id: element,
      label: element,
      value: values[index],
      color: "hsl(104, 70%, 50%)",}
      arr.push(obj1)

  })

  return (
    <ResponsivePie
        data={arr}
        theme={{
              axis: {
                domain: {
                  line: {
                    stroke: colors.grey[700],
                  },
                },
                legend: {
                  text: {
                    fill: colors.grey[700],
                  },
                },
                ticks: {
                  line: {
                    stroke: colors.grey[700],
                    strokeWidth: 1,
                  },
                  text: {
                    fill: colors.grey[700],
                  },
                },
              },
              legends: {
                text: {
                  fill: colors.grey[100],
                },
              },
            }}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.5}
        padAngle={1}
        cornerRadius={12}
        activeOuterRadiusOffset={8}
        colors={{ scheme: 'yellow_green_blue' }}
        borderWidth={1}
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    0.2
                ]
            ]
        }}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor={colors.grey[100]}
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: "color" }}
        enableArcLabels={false}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    2
                ]
            ]
        }}
    />
  );
};

export default PieChart;
