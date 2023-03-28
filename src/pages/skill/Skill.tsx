import React from "react";
import styles from "./Skill.module.css";
import { VictoryBar, VictoryChart, VictoryAxis } from "victory";

const Skill = () => {
  const example = [
    { quarter: 1, earnings: 70 },
    { quarter: 2, earnings: 70 },
    { quarter: 3, earnings: 65 },
    { quarter: 4, earnings: 60 },
    { quarter: 5, earnings: 50 },
  ];

  return (
    <section className={styles.Skill}>
      <div className={styles.Skill_graph_container}>
        <VictoryChart domainPadding={30} height={300}>
          <VictoryAxis
            tickValues={[1, 2, 3, 4, 5]}
            tickFormat={["HTML", "CSS", "REACT", "TS", "Vue"]}
          ></VictoryAxis>
          <VictoryAxis dependentAxis tickFormat={(x) => `${x}%`}></VictoryAxis>
          <VictoryBar 
                data={example} 
                x="quarter" 
                y={"earnings"} 
                events={[
                    {target:"data",
                    eventHandlers : {
                        onClick: () =>{
                            console.log("클릭됨")
                        }
                    }
                }
                ]}
                />
        </VictoryChart>
      </div>
    </section>
  );
};
export default Skill;
