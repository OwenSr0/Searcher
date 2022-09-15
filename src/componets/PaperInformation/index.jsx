import { Typography, Paper, Stack } from '@mui/material';
import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  display:'flex',
  justifyContent: 'center'
}

const PaperInformation = ({userState}) => {
    const {
        followers,
        following
    } = userState;
    return (
        <Paper elevation={3}>
            <Stack
            spacing={3}
            sx={{
              flexDirection: {xs:'column', sm:'row'},
              justifyContent:'space-around',
              alignItems: {xs:'center', sm:'flex-end'},
               margin:'20px'}}
            >
                <Stack>
                  <Typography variant='h5'>Repos</Typography>  
                  <Typography variant='h6' sx={styles}>{userState.public_repos}</Typography>  
                </Stack>
                <Stack>
                  <Typography variant='h5'>Followers</Typography>  
                  <Typography variant='h6' sx={styles}>{followers}</Typography>  
                </Stack>
                <Stack>
                  <Typography variant='h5'>Following</Typography>  
                  <Typography variant='h6' sx={styles}>{following}</Typography>  
                </Stack>
            </Stack>

        </Paper>

    )
};

export default PaperInformation;

PaperInformation.defaultProps = {
  followers: PropTypes.func,
  following: PropTypes.func,
}

PaperInformation.propTypes = {
  userState: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]).isRequired,
  followers: PropTypes.func,
  following: PropTypes.func,
}
