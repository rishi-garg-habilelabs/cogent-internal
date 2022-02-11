import { styled } from '@mui/material/styles';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import { colors } from '../../../theme';

export const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
            'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
            'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    backgroundColor:
        theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
    borderRadius: 1,
  },
}));

export const ColorlibStepIconRoot = styled('div')(({ theme, ownerState }) => ({
  backgroundColor:
      theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#ccc',
  zIndex: 1,
  color: colors.primary,
  width: 50,
  height: 50,
  display: 'flex',
  borderRadius: '50%',
  justifyContent: 'center',
  alignItems: 'center',
  ...(ownerState.active && { backgroundColor: '#fff' }),
  ...(ownerState.completed && {
    backgroundColor: '#fff',

  }),
}));
