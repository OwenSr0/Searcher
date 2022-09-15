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
                    marginLeft:{xs:'30px', sm:'40vw', md:'0'}, 
                    textAlign:{xs:'right',md:'initial'}    

                }}
                >{userState.created_at}</Typography>    
            </Stack>
            <Typography variant='caption'>@{login}</Typography>    
        </Fragment>
    )
}

export default PrincipalInfo;

PrincipalInfo.defaultProps = {
    name: PropTypes.func,
    login: PropTypes.func,
  }
  
  PrincipalInfo.propTypes = {
    userState: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object,
      ]).isRequired,
    name: PropTypes.func,
    login: PropTypes.func,
  }