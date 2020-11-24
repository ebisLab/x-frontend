import React, { useEffect, useState } from 'react';
import axiosWithAuth from '../../axiosWithAuth';
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import FakeContact from './FakeContact';

function MyContacts(){
    const [users,setUsers] = useState([])
    useEffect(()=>{
        axiosWithAuth().get('/api/users/all-users').then(result=>{
            setUsers(result.data)
        })
    },[])
    return(
        <div className="user-collection">
            <TextField
          label="Search"
          id="outlined-margin-dense"
          defaultValue="Search"
          style = {{width: "95%", margin:"0, 5px!important"}}

        //   className={classes.textField}
          margin="dense"
          variant="outlined"
          InputProps={{
            endAdornment: (
              <InputAdornment>
                  <SearchIcon />
              </InputAdornment>
            )
          }}
        />
            {/* <TextField fullWidth label="Search of users..." variant="filled" InputProps={{
    endAdornment: (
      <InputAdornment>
          <SearchIcon />
      </InputAdornment>
    )
  }} /> */}
  <FakeContact/>
            {users.map(item=>(
                <div className="user-collection-item" key={Math.floor(Math.random()*9999999)} onClick={()=>{localStorage.setItem('username',item.username)}}>
                    <div className="user-icon"></div>
                    <div>{item.name}</div>
               
                </div>
            ))}
        </div>
    )
}

export default MyContacts














