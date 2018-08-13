import { createStackNavigator } from 'react-navigation';
import {
    BeProactiveScreen,
    BeginWithEndScreen,
    FirstThingFirstScreen,
    ThinkWinWinScreen,
    SeekToUnderstandScreen,
    SynergizeScreen,
    SharpenTheSawScreen,
    CreateTodoScreen,
} from "../../../../screens";
import {
    routeNames,
    screenRouteName,
} from "../route-config";
import { stackNavigatorOptions } from "./stack-navigation-options";

const screenRoute = (routeName, screen) => ({
    [screenRouteName(routeName)]: { screen },
});
const stackNavigator = (route, initialRouteName) =>
    createStackNavigator(route, {
            initialRouteName,
            ...stackNavigatorOptions
        },
    );

const beProactiveStackRoutes =
    screenRoute(routeNames.beProactive, BeProactiveScreen);
const beginWithEndStackRoutes =
    screenRoute(routeNames.beginWithEnd, BeginWithEndScreen);
const firstThingFirstStackRoutes = {
    ...screenRoute(routeNames.firstThingFirst, FirstThingFirstScreen),
    ...screenRoute(routeNames.createTodo, CreateTodoScreen),
};
const thinkWinWinStackRoutes =
    screenRoute(routeNames.thinkWinWin, ThinkWinWinScreen);
const seekToUnderstandStackRoutes =
    screenRoute(routeNames.seekToUnderstand, SeekToUnderstandScreen);
const synergizeStackRoutes =
    screenRoute(routeNames.synergize, SynergizeScreen);

const sharpenTheSawStackRoutes =
    screenRoute(routeNames.sharpenTheSaw, SharpenTheSawScreen);

export const beProactiveStackNavigator = stackNavigator(
    beProactiveStackRoutes, screenRouteName(routeNames.beProactive)
);
export const beginWithEndStackNavigator = stackNavigator(
    beginWithEndStackRoutes, screenRouteName(routeNames.beginWithEnd)
);
export const firstThingFirstStackNavigator = stackNavigator(
    firstThingFirstStackRoutes, screenRouteName(routeNames.firstThingFirst)
);

export const thinkWinWinStackNavigator = stackNavigator(
    thinkWinWinStackRoutes, screenRouteName(routeNames.thinkWinWin)
);
export const seekToUnderstandStackNavigator = stackNavigator(
    seekToUnderstandStackRoutes, screenRouteName(routeNames.seekToUnderstand)
);
export const synergizeStackNavigator = stackNavigator(
    synergizeStackRoutes, screenRouteName(routeNames.synergize)
);

export const sharpenTheSawStackNavigator = stackNavigator(
    sharpenTheSawStackRoutes, screenRouteName(routeNames.sharpenTheSaw)
);