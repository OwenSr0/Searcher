import React from "react";
import PropTypes from 'prop-types';
import { Grid, CardMedia, Stack } from "@mui/material";
import PrincipalInfo from '../../componets/PrincipalInfo/index'
import Description from "../Description";



const gridStyle = {
    marginTop:'15px',
    flexDirection: 'column'

}

const UserCard = ({userState}) => {
    
    return(
        <Grid
        container
        spacing={2}
        sx={gridStyle}
        >
            <Grid item xs={3}>
                <CardMedia 
            component="img"
            alt="GitHub User"
            image={userState.avatar_url}
            sx={{
                width:{xs:'40vw', md:'100%'},
                borderRadius:'50%',
                marginLeft:{xs:'80px', md:'0'}
            }}
            />
            </Grid>
            <Grid item xs={9}
            sx={{
                maxWidth:{xs:'100%', md:'75%'}
            }}
            >
                <Stack
                direction='column'
                spacing={1}
                sx={{margin:'30px'}}
                >
                    <PrincipalInfo userState={userState} />
                    <Description userState={userState} />
                </Stack>
            </Grid>
        </Grid>
    )
}
export default UserCard;

UserCard.defaultProps = {
    avatar_url: PropTypes.func,
}
  
UserCard.propTypes = {
    userState: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object,
      ]).isRequired,
    avatar_url: PropTypes.func,
  }