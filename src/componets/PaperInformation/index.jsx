import { Typography, Paper, Stack } from '@mui/material';
import React from 'react';
import PropTypes from 'prop-types';

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
              display: 'flex',
              flexDirection: {xs:'column', sm:'row'},
              justifyContent:'space-around',
              alignItems: {xs:'flex-start', sm:'flex-end'},
               margin:'20px'}}
            >
                <Stack>
                  <Typography variant='h5'>Repos</Typography>  
                  <Typography variant='h6'>{userState.public_repos}</Typography>  
                </Stack>
                <Stack>
                  <Typography variant='h5'>Followers</Typography>  
                  <Typography
                   variant='h6'
                   sx={{justifyContent:'center'}}
                   >{followers}</Typography>  
                </Stack>
                <Stack>
                  <Typography variant='h5'>Following</Typography>  
                  <Typography variant='h6'>{following}</Typography>  
                </Stack>
            </Stack>

        </Paper>

    )
};

export default PaperInformation;

PaperInformation.defaultProps = {
  userState: PropTypes.array,
  followers: PropTypes.number,
  following: PropTypes.number,
}

PaperInformation.propTypes = {
  userState: PropTypes.string,
  followers: PropTypes.number,
  following: PropTypes.number,
}
