import React from 'react';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    popover: {
        pointerEvents: 'none',
    },
    paper: {
        padding: theme.spacing(1),
    },
}));

export default function MouseOverPopover() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const popoverOpen = (event) => {
        setOpen(event.currentTarget);
    };

    const popoverClose = () => {
        setOpen(null);
    };

    const Product = [
        {
            name: 'Giường ngủ',
            elements: [{ element: 'Giường gỗ tự nhiên' }, { element: 'Giường gỗ nhân tạo' }, { element: 'Giường gỗ cổ điển' }, { element: 'Giườn hiện đại' }]
        },
        // {
        //     name: 'Bàn ăn',
        //     elements: [{ element: 'Bàn ăn tự nhiên' }, { element: 'Bàn ăn nhân tạo' }, { element: 'Bàn ăn cổ điển' }, { element: 'Bàn ăn hiện đại' }]
        // },
    ]

    return Product.map((item, index) => {
        return (
            <div ket={index}>
                <Typography
                    aria-owns={open ? 'mouse-over-popover' + index : undefined}
                    // aria-haspopup="true"
                    color='primary'
                    onMouseEnter={popoverOpen}
                    onMouseLeave={popoverClose}
                >
                    {item.name}
                </Typography>
                <Popover
                    id={"mouse-over-popover" + index}
                    className={classes.popover}
                    classes={{
                        paper: classes.paper,
                    }}
                    open={open}
                    anchorEl={open}
                    anchorOrigin={{ // Vị trí ghim
                        vertical: 'center', // Theo chieu doc
                        horizontal: 'center', //  theo chieu ngang
                    }}
                    transformOrigin={{ // Biến đổi
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                    onClose={popoverClose}
                    disableRestoreFocus
                >
                    <div>
                        {item.elements.map((e, count) => <Typography key={count}>{e.element}</Typography>)}
                    </div>
                </Popover>
            </div >
        );
    })

}
