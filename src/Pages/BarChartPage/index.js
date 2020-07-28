import React from "react";
import {Chart} from "react-charts";
import "./styles.css";
import {Link} from "react-router-dom";
import Button from "@material-ui/core/Button";
import { connect } from 'react-redux';

function BarChartPage({questions, answers, generalScore}) {
  const data = React.useMemo(
    () => [
      {
        label: 'Mark',
        data: [
          ...questions.map((item, index) => [item.text, (answers[index] / 3 * 100)]),
          ['', 100],
          ['', 0],
          ['Summary', generalScore],
        ],
      },
    ],
    [questions, answers,generalScore],
  );

  const series = React.useMemo(
    () => ({
      type: 'bar',
    }),
    [],
  );

  const axes = React.useMemo(
    () => [
      {primary: true, type: 'ordinal', position: 'bottom'},
      {position: 'left', type: 'linear', stacked: false},
    ],
    [],
  );

  return (
    <div>
      <h1>Chart</h1>
      {questions.length === answers.length ?
        <div className="chart-container">
          <Chart data={data} series={series} axes={axes} tooltip/>

          <Link to="/result">
            <Button>Watch result</Button>
          </Link>
        </div>
        :
        <div>
          <h2>Finish test first!</h2>
        </div>
      }
    </div>
  );
}

const mapStateToProps = (state) => ({
  questions: state.questions,
  answers: state.answers,
  generalScore: state.generalScore
});

export default connect(mapStateToProps)(BarChartPage);