import LocationOnIcon from "@mui/icons-material/LocationOn";
import TwitterIcon from '@mui/icons-material/Twitter';
import LanguageIcon from "@mui/icons-material/Language";
import BusinessIcon from '@mui/icons-material/Business';
import React from 'react';
import { Grid, Typography, Stack } from '@mui/material';
import PropTypes from 'prop-types';

const LocationInformation = (props) => {
    const {userState} = props;
    const {
        location,
        twitter,
        blog,
        company
    } = userState;
    return (
        <Grid 
        container
        spacing={2}
        sx={{
            marginTop:'15px',
            flexDirection:{xs:'column', sm:'row'}
        }}>
            <Grid item xs={6}>
                <Stack
                direction='row'
                spacing='2'
                >
                    <LocationOnIcon/>
                        {location != null
                            ?<Typography>{location}</Typography>
                            :<Typography>Not Available</Typography>
                        }
                </Stack>
            </Grid>
            <Grid item xs={6 }>
                <Stack
                direction='row'
                spacing='2'
                >
                    <TwitterIcon/>
                        {twitter != null
                            ?<Typography>@{twitter}</Typography>
                            :<Typography>Not Available</Typography>
                        }
                </Stack>
            </Grid>
            <Grid item xs={6}>
                <Stack
                direction='row'
                spacing='2'
                >
                    <LanguageIcon/>
                        {blog !== ''
                            ?<a href={blog}><Typography>{blog}</Typography></a>
                            :<Typography>Not Available</Typography>
                        }
                </Stack>
            </Grid>
            <Grid item xs={6}>
                <Stack
                direction='row'
                spacing='2'
                >
                    <BusinessIcon/>
                        {company != null
                            ?<Typography>{company}</Typography>
                            :<Typography>Not Available</Typography>
                        }
                </Stack>
            </Grid>


        </Grid>

    )
};

export default LocationInformation;

LocationInformation.defaultProps = {
    location: PropTypes.func,
    twitter: PropTypes.func,
    blog: PropTypes.func,
    company: PropTypes.func,
}

LocationInformation.propTypes = {
    userState: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object,
      ]).isRequired,
    location: PropTypes.func,
    twitter: PropTypes.func,
    blog: PropTypes.func,
    company: PropTypes.func,
}

