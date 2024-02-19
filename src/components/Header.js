import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import SortIcon from '@mui/icons-material/Sort';
import { Select, Typography } from '@mui/material';
import "./Header.css"

const Header = () => {
  return (
    <Card className='card-section'>
      <CardContent>
        <div className="header-section">
          {/* Search Field */}
          <div className="header-field">
            <Typography fontWeight="bold">
              What are you looking for?
            </Typography>
            <TextField
              placeholder='Search for category, name, company, etc'
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <IconButton>
                    <SearchIcon />
                  </IconButton>
                ),
              }}
            />
          </div>

          {/* Category Dropdown */}
          <div className="header-field">
            <Typography fontWeight="bold">
              Show
            </Typography>
            <Select
              defaultValue={10}
              onChange={(event) => {
                console.log('Show:', event.target.value);
              }}
              className='category'
            >
              <MenuItem value={10}>10</MenuItem>
              <MenuItem value={25}>25</MenuItem>
              <MenuItem value={50}>50</MenuItem>
            </Select>
          </div>

          {/* Section Dropdown */}
          <div className="header-field">
            <Typography fontWeight="bold">
              Show
            </Typography>
            <Select
              defaultValue={10}
              onChange={(event) => {
                console.log('Show:', event.target.value);
              }}
              className='category'
            >
              <MenuItem value={10}>10</MenuItem>
              <MenuItem value={25}>25</MenuItem>
              <MenuItem value={50}>50</MenuItem>
            </Select>
          </div>

          {/* Sorting Button */}
          <div className='top-btn'>
          <div className="header-field">
             
            <Button
              variant="outlined"
              startIcon={<SortIcon />}
              className='sort-btn'
            >
            </Button>
          </div>

          {/* Search Button */}
          <div className="header-field">
            <Button
              variant="contained"
              color="primary"
              className='search-btn'
            >
              Search
            </Button>
          </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Header;
