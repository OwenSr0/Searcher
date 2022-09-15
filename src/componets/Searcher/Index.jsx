import React, { useState } from 'react'
import { IconButton, Stack, TextField} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import PropTypes from 'prop-types';


const stackStyle = {
    flexDirection: 'row',
    marginTop: '30px',
    paddingTop: {xs: '20px'},
    paddingLeft: {xs: '20px'},
    width: {xs: '100%', md:'80%'}
}

const iconSearchStyle = {
    left:'-45px'
}

const Searcher = (props) => {

    const {
        setInputUser,
        notFound
    } = props;

    const [tempValue, setTempValue] = useState('');

    const onSearchValueChange = (event) => {
        const inputValue = event.target.value;
        setTempValue(inputValue);
    }

    const handleSubmit = () => {
        setInputUser(tempValue);
    }

    return(
    <Stack
    directions= 'row'
    sx={stackStyle}
    >
            {
                    notFound ?
                    (
                        <TextField
                            error
                            id="outlined-error"
                            label="Error"
                            placeholder="Introduce a valid username"
                            variant="outlined"
                            size="small"
                            value={tempValue}
                            onChange={onSearchValueChange}
                            sx={{
                                width: '90%',
                            }}
                        />
                    ) : (
                        <TextField
                            id="outlined-basic"
                            label="User of Github"
                            placeholder="Search"
                            variant="outlined"
                            size="small"
                            value={tempValue}
                            onChange={onSearchValueChange}
                            sx={{
                                width: '90%',
                            }}
                        />
                    )
            }
        <IconButton 
        sx={iconSearchStyle}
        onClick={handleSubmit}
        >
            <SearchIcon/>
        </IconButton>
        
    </Stack>
    )
}

export default Searcher;

Searcher.defaultProps = {
    setInputUser: PropTypes.string,
    notFound: PropTypes.bool,
  }
  
  Searcher.propTypes = {
    setInputUser: PropTypes.string,
    notFound: PropTypes.bool,
  }