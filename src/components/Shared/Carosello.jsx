import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import testlago from "../../images/testlago.jpeg"
import montagna from "../../images/montagna.jpeg"
import paesaggio from "../../images/paesaggio.jpeg"
import sfondodivano from "../../images/sfondodivano.jpeg"

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    imgPath:
    paesaggio
  },
  {
    imgPath:
    sfondodivano
  },
  {
    imgPath:
    paesaggio,
  },
  {
    imgPath:
    sfondodivano,
  },
];

function SwipeableTextMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ minWidth: "100%", flexGrow: 1, maxHeight: "90vh" , margin:'-8px'}}>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={index}>
            <Box
              component="img"
              sx={{
                height: "90vh", 
                display: 'block',
                width: "100%",
                objectFit: 'cover', 
              }}
              src={step.imgPath}
            />
          </div>
        ))}
      </AutoPlaySwipeableViews>
    </Box>
  );
}

export default SwipeableTextMobileStepper;
