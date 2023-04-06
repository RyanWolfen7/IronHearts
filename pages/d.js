import { Box, styled } from '@mui/system';
import { Grid } from '@mui/material';

const SpaceBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.dark,
  position: 'relative',
  overflow: 'hidden',
}));

const StarsBox = styled(Box)({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 900'%3E%3Cdefs%3E%3ClinearGradient id='grad1' x1='0%25' y1='0%25' x2='100%25' y2='0%25'%3E%3Cstop offset='0%25' stop-color='%230a0c1f'/%3E%3Cstop offset='100%25' stop-color='%23262b4e'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grad1)' /%3E%3Ccircle cx='100' cy='100' r='3' fill='%23fff' /%3E%3Ccircle cx='200' cy='250' r='2' fill='%23fff' /%3E%3Ccircle cx='300' cy='400' r='2' fill='%23fff' /%3E%3C/svg%3E")`,
})
