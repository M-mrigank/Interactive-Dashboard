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
  console.log(Array.isArray(allData));
  const data1=allData?.map((data)=>data?.topic);
  const uData=allData.map((data)=>data.topic);
  const uniqueData=data1.filter((data, index)=>data1.indexOf(data)===index);
  console.log(allData)
  // console.log("print data1", data);
  // console.log("print data2", uniqueData);
  // console.log("print data3", uData);
  // const freq={};
  // uData.forEach(e=>freq[e]?freq[e]++:freq[e]=1);
  // console.log("freq", freq);
  // const ans=[];
  // freq.map((data)=>{
  //   ans.push({
  //     id:data
  //   })
  // })

  return (
    <ResponsivePie
      data={data}
      theme={{
        axis: {
          domain: {
            line: {
              stroke: colors.grey[100],
            },
          },
          legend: {
            text: {
              fill: colors.grey[100],
            },
          },
          ticks: {
            line: {
              stroke: colors.grey[100],
              strokeWidth: 1,
            },
            text: {
              fill: colors.grey[100],
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
      padAngle={0.7}
      cornerRadius={3}
      activeOuterRadiusOffset={8}
      borderColor={{
        from: "color",
        modifiers: [["darker", 0.2]],
      }}
      arcLinkLabelsSkipAngle={10}
      arcLinkLabelsTextColor={colors.grey[100]}
      arcLinkLabelsThickness={2}
      arcLinkLabelsColor={{ from: "color" }}
      enableArcLabels={false}
      arcLabelsRadiusOffset={0.4}
      arcLabelsSkipAngle={7}
      arcLabelsTextColor={{
        from: "color",
        modifiers: [["darker", 2]],
      }}
      defs={[
        {
          id: "dots",
          type: "patternDots",
          background: "inherit",
          color: "rgba(255, 255, 255, 0.3)",
          size: 4,
          padding: 1,
          stagger: true,
        },
        {
          id: "lines",
          type: "patternLines",
          background: "inherit",
          color: "rgba(255, 255, 255, 0.3)",
          rotation: -45,
          lineWidth: 6,
          spacing: 10,
        },
      ]}
      legends={[
        {
          anchor: "bottom",
          direction: "row",
          justify: false,
          translateX: 0,
          translateY: 56,
          itemsSpacing: 0,
          itemWidth: 100,
          itemHeight: 18,
          itemTextColor: "#999",
          itemDirection: "left-to-right",
          itemOpacity: 1,
          symbolSize: 18,
          symbolShape: "circle",
          effects: [
            {
              on: "hover",
              style: {
                itemTextColor: "#000",
              },
            },
          ],
        },
      ]}
    />
  );
};

export default PieChart;
