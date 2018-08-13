import { COLOR } from "../../../shared/colors";
import { DrawerContentComponent } from "../../../component/drawer/drawer-content.component";
import { routeNames } from "../route-config";
import { drawerRouteName } from "../route-config";
import { MCIcons } from "../../../component/drawer/drawer-icon";
import { screen } from "../../../shared/screen";

export const drawerNavigatorOptions = {
    initialRouteName: drawerRouteName(routeNames.firstThingFirst),
    drawerPosition: 'left',
    drawerWidth: screen.goldenWidth,
    contentComponent: DrawerContentComponent,
    contentOptions: {
        activeTintColor: COLOR.TOMATO,
        inactiveTintColor: COLOR.BLACK,
        activeBackgroundColor: COLOR.SILVER,
        labelStyle: {
            fontWeight: '400',
        },
        itemsContainerStyle: {
            paddingVertical: 6,
        },
    },
};

const drawerOptions = (title, icon) => ({
    drawerLabel: title,
    drawerIcon: icon,
});

export const beProactiveNavOptions = drawerOptions('Be Proactive', MCIcons.walk);
export const beginWithEndNavOptions = drawerOptions('Begin with End', MCIcons.target);
export const firstThingFirstNavOptions = drawerOptions('First Things First', MCIcons.playlistCcheck);

export const thinkWinWinNavOptions = drawerOptions('Think Win-win', MCIcons.accountMultiple);
export const seekToUnderstandNavOptions = drawerOptions('Understand', MCIcons.earHearing);
export const synergizeNavOptions = drawerOptions('Synergize', MCIcons.trendingUp);

export const sharpenTheSawNavOptions = drawerOptions('Sharpen the Saw', MCIcons.cached);