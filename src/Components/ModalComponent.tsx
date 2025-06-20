import * as React from 'react';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import Typography from '@mui/material/Typography';
import { blue } from '@mui/material/colors';

type ModalProps = {
    open : boolean ,
    setOpen : React.Dispatch<React.SetStateAction<boolean>>,
}
export default function ModalComponent(props : ModalProps)
{
  
  const handleClose = () => {
    props.setOpen(false)
  };

 // const handleListItemClick = (value: string) => {
    
 // };

  return (
    <Dialog onClose={handleClose} open={props.open}>
      <DialogTitle>هل انت متأكد من حذف هذه المهمة ؟</DialogTitle>
      <List sx={{ pt: 0 }}>
        <ListItem disablePadding>
          <ListItemButton
            autoFocus
            //onClick={() => handleListItemClick('addAccount')}
          >
           حذف 
          </ListItemButton>
          <ListItemButton
            autoFocus
            //onClick={() => handleListItemClick('addAccount')}
          >
            تراجع
          </ListItemButton>
        </ListItem>
      </List>
    </Dialog>
  );
}
