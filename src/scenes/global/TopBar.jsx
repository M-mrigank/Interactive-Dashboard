import React from 'react'
import { Box, IconButton, useTheme } from '@mui/material'
import { useContext } from 'react'
import { ColorModeContext, token } from '../../theme'
import InputBase from '@mui/material/InputBase'
import PersonModeOutlinedIcon from "@mui/icons-material/PersonOutlined"
import SearchIcon from "@mui/icons-material/Search"
import NotificationsOutlined from '@mui/icons-material/NotificationsOutlined'
import SettingsOutlined from '@mui/icons-material/SettingsOutlined'
import LightModeOutlined from '@mui/icons-material/LightModeOutlined'
import DarkModeOutlined from '@mui/icons-material/DarkModeOutlined'

const TopBar = () => {

  const theme=useTheme();
  const colors=token(theme.palette.mode);
  const colorMode=useContext(ColorModeContext);

  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      <Box display="flex" backgroundColor={colors.primary[400]} borderRadius={"3px"}>
        <InputBase sx={{ml:2, flex:1}} placeholder="Search"/>
        <IconButton type="button" sx={{p:1}}>
          <SearchIcon/>
        </IconButton>
      </Box>
      <Box display={"flex"}>
        <IconButton onClick={colorMode.toggleColorMode}>
          {
            theme.palette.mode==='dark'?(
              <DarkModeOutlined/>
            ):(
              <LightModeOutlined/>
            )
          }
        </IconButton>
        <IconButton>
          <NotificationsOutlined/>
        </IconButton>
        <IconButton>
          <SettingsOutlined/>
        </IconButton>
        <IconButton>
          <PersonModeOutlinedIcon/>
        </IconButton>
      </Box>
    </Box>
  )
}

export default TopBar
