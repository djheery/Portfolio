import { SortPanelOptionKeys, SortPanelOptionValues } from "../util/sort-visualizer-helpers";

/**
 * A type for...
*/

export type SwapFn = (i: number, j: number) => void; 

/**
 * A type for...
*/

export type SetAtIndexFn = (i: number, value: number) => void;

/**
 * A type for...
*/

export type SortItemArray = number[][]; 

/**
 * A type for...
*/

export type SleepFn = () => Promise<boolean>;

/**
 * A type for...
*/

export type PanelItemType = "BUTTON" | "SELECT" | "RANGE";

/**
 * A type for...
*/

export interface SettingsPanelItemButton {
  textContent: string, 
  type: PanelItemType,
  callback: () => void;
}

/**
 * A type for...
*/

export interface SortOptionItem { textContent: SortPanelOptionValues, key: SortPanelOptionKeys };


/**
 * A type for...
*/

export interface SettingsPanelSelect extends SettingsPanelItemButton {
  options: SortOptionItem[]
}

/**
 * A type for...
*/

export type SettingsPanelItem = SettingsPanelItemButton | SettingsPanelSelect;
