import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    appBar: {
        borderRadius: 15,
        margin: '20px 0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#cccccc'
      },
      heading: {
        color: '#0A66C2',
      },
      image: {
        marginLeft: '15px',
      },
      [theme.breakpoints.down('sm')]: {
        maincontainer: {
          flexDirection: "column-reverse"
        }
      }
}));

