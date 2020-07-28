import React from 'react';
import {Button, MobileStepper, Paper} from "@material-ui/core";
import './styles.css';
import SwipeableViews from 'react-swipeable-views';
import {Link} from "react-router-dom";



export default class SwipeableStepper extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentStep: Math.min(this.props.initialStep, props.children.length - 1),
      steps: props.children.length,
    };
  }

  // componentDidMount = () => {
  //   this.setState({steps: this.props.children.length})
  //   this.props.children
  // }

  handleNext = () => {
    let nextStep = this.state.currentStep + 1;
    this.props.onNext(this.state.currentStep);

    this.setState({
      currentStep: nextStep,
    });
  };

  handleBack = () => {
    let nextStep = this.state.currentStep - 1;

    this.setState({
      currentStep: nextStep,
    });
  };

  isLastStep = () => {
    return this.state.currentStep === this.state.steps - 1;
  };

  render() {
    return (
      <Paper className={'swipeable-stepper-wrapper'}>
        <SwipeableViews
          axis="x"
          index={Math.min(this.state.currentStep, this.state.steps - 1)}
        >
          {this.props.children}
        </SwipeableViews>

        <MobileStepper
          variant='progress'
          steps={this.state.steps}
          position='static'
          activeStep={this.state.currentStep}
          backButton={
            <Button
              onClick={this.handleBack}
              disabled={this.state.currentStep === 0}
            >Back</Button>
          }
          nextButton={
            this.isLastStep() ?
              <Link to={this.props.finishLink} className="finish-button">
                <Button
                  onClick={this.props.onFinish}
                  disabled={this.state.currentStep === this.props.allowedSteps}
                >
                  Finish
                </Button>
              </Link>
              :
              <Button
                onClick={this.handleNext}
                disabled={this.state.currentStep === this.props.allowedSteps}
              >Next</Button>
          }
        >
        </MobileStepper>
      </Paper>
    );
  }
}
