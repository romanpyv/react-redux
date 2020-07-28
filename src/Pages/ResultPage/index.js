import React from 'react';
import './styles.css';
import { Card, CardContent } from '@material-ui/core';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import good from '../../assets/good.jpg';
import { connect } from 'react-redux';

function ResultPage({generalScore, questions, answers, resultImage}) {
  let options = {
    bad: {
      title: 'Новачок',
      description: 'Новачки дуже переживають за свою успышнысть. Їх досвіду замало, щоб повести їх у правильному' +
        ' напрямку і вони не знають чи їх вчинки будуть правильними. Новачки зазвичай не хочуть вчитися, проте хочуть' +
        'досягти миттєвого результату. Вони не знають як реагувати на помилки і тому легко збиваються з пантелику коли' +
        'щось "іде не так". Зате вони можуть бути досить ефективними, коли їм дадуть набір контекстно незалежних ' +
        'правил. Іншими словами їм необхідний алгоритм',
    },
    good: {
      title: 'Компетентний',
      description: 'Компетентні програмісти будують правильні моделі предметної області та ефективно нею користуються.' +
        ' Здатні усувати проблеми із якими раніше не стикалися. Про людей на цьому рівні часто кажуть, що вони "мають ' +
        'ініціативу". Вони можуть вчити новачків і не задовбують експертів. Щоправда їм бракує досвіду аби розставити ' +
        'пріорітети при рішенні задач. Власне кажучи, саме з цього рівня людину вже можна назвати інженером.',
    },
    perfect: {
      title: 'Експерт',
      description: 'Експерти - основне джерело знань та інформації в будь-якій сфері. Вони безперестану шукають все ' +
        'кращі і кращі методи роботи. Вони завжди застосовують весь свій багаж знань у правильному контексті. Вони ' +
        'пишуть книжки, статті та проводять семінари. Експерти керуються інтуіцією.',
    },
  };

  let result = options.bad;
  if (generalScore > 50) {
    result = options.good;
  }
  if (generalScore > 75) {
    result = options.perfect
  }

  return (
    <>
      <Card className="result-container">
        { questions.length === answers.length ?
          <>
            <CardActionArea>
              <CardMedia
                className="img-container"
                component="img"
                src={ resultImage || good }
                title="image"
              />
            </CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                { result.title + '. Your score: ' + Math.round(generalScore) }
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                { result.description }
              </Typography>
            </CardContent>
          </>
          :
          <div>
            <h2>Finish test first!</h2>
          </div>
        }
      </Card>
    </>
  );
}

const mapStateToProps = (state) => ({
  questions: state.questions,
  answers: state.answers,
  generalScore: state.generalScore,
  resultImage: state.resultImage,
});

export default connect(mapStateToProps)(ResultPage);
