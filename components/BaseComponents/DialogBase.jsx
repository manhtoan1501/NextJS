import React from 'react';
import {Button, Icon, IconButton} from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import DeleteIcon from "@material-ui/icons/Delete";

export default function AlertDialog() {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <IconButton variant="outlined" color="primary" onClick={handleClickOpen}>
        <DeleteIcon />
      </IconButton>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle style={{color: '#1976d2', fontSize: 20, fontWeight: 900 }} id="alert-dialog-title">{"Bạn có muốn xóa mục đã chọn"}</DialogTitle>
        <DialogContent>
          <DialogContentText style={{color: '#f50057'}} id="alert-dialog-description">
            Lưu ý bạn sẽ không thể khôi phục sau khi xóa
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Đồng ý
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
            Hủy
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
