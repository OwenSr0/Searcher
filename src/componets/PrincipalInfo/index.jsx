import { Typography, Stack } from '@mui/material';
import React, { Fragment } from 'react'
import PropTypes from 'prop-types';

const PrincipalInfo = ({userState}) => {
    const {
        name,
        login,
    } = userState;
    return(
        <Fragment>
            <Stack
            direction='row'
            sx={{justifyContent:'space-between'}}
            >
                <Typography variant='h4'>{name}</Typography>
                <Typography variant='subtittle2'
                sx={{
                    marginLeft:{xs:'30px', sm:'0'} 
                }}
                >{userState.created_at}</Typography>    
            </Stack>
            <Typography variant='caption'>@{login}</Typography>    
        </Fragment>
    )
}

export default PrincipalInfo;

PrincipalInfo.defaultProps = {
    userState: PropTypes.array,
    name: PropTypes.string,
    login: PropTypes.string,
  }
  
  PrincipalInfo.propTypes = {
    userState: PropTypes.string,
    name: PropTypes.string,
    login: PropTypes.string,
  }