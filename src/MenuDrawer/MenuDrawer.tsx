import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import type group from '../types/group';
import { List, ListItem } from '@mui/material';

export function MenuDrawer({ groups }: { groups: group[] }) {
    const [open, setOpen] = React.useState(true);

    const toggleDrawer = (doOpen: boolean) => () => {
        setOpen(doOpen);
    };
    let menuContent = groups.map(group => 
        <ListItem>
            {group.name}
        </ListItem>
    );
    return (
        <Drawer open={open} onClose={toggleDrawer(false)}>
            <List>
                {menuContent}
            </List>
        </Drawer>
    )
}
