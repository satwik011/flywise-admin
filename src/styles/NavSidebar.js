import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTypography-body1': {
      fontFamily: 'Montserrat !important',
    },
  },
  navHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  iconColor: {
    color: '#C4C4C4',
  },
  closeDrawer: {
    color: '#fff',
  },
  listDiv: {
    marginTop: '2rem !important',
    fontFamily: 'Montserrat',
    fontWeight: '600',
    fontSize: '20px',
    letterSpacing: '0.4px',
  },
  listItems: {
    margin: '1.2rem auto !important',
  },
  selectedList: {
    width: '95% !important',
    margin: 'auto !important',
    padding: '5px 14px !important',
    borderRadius: '8px !important',
    backgroundColor: '#1C7EBF !important',
    color: '#fff !important',
  },
  profileImgDiv: {
    height: '45px',
    width: '45px',
    marginLeft: '2rem',
  },
  profileImg: {
    width: '100%',
    objectFit: 'cover',
  },
  navLink: {
    textDecoration: 'none',
  },
}));
