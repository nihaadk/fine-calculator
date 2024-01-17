import { computed } from "@angular/core";
import { patchState, signalStoreFeature, withComputed, withMethods, withState } from "@ngrx/signals";
import { Theme } from "../enums/theme.enum";

export type ThemeState = { theme: Theme };


export const withThemeState = () => {
    return signalStoreFeature(
        withState<ThemeState>({
            theme: Theme.LIGHT
        }),
        withComputed(({ theme }) => ({
            getCurrenTheme: computed(() => theme()),
            isDarkTheme: computed(() => theme() === Theme.DARK),
            isLightTheme: computed(() => theme() === Theme.LIGHT),
        })),
        withMethods((store) => ({
            toggleTheme() {
                const newTheme = store.isDarkTheme() ? Theme.LIGHT : Theme.DARK;
                patchState(store, { theme: newTheme });
                document.body.setAttribute('data-theme', newTheme);
            }
        }))
    );
} 