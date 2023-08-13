import { SortAlgorithmVisualOptions, SortPanelOptions, SortItemColorOptions } from "../util/sort-visualizer-helpers";
import { ObjectKeys, ObjectValues } from "@/app/models/global-types";

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

export type SortItem = [number, number, string]
/**
 * A type for...
*/

export type SortItemArray = SortItem[]; 

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
  callback: () => void | ((key: SortPanelOptionKeys) => void);
}

/**
 * A type for...
*/

export interface SortOptionItem { 
  textContent: SortPanelOptionValues, 
  key: SortPanelOptionKeys,
  isSelected: boolean, 
};


/**
 * A type for...
*/

export interface SettingsPanelSelect extends SettingsPanelItemButton {
  options: SortOptionItem[],
}

/**
 * A type for...
*/

export type SettingsPanelItem = SettingsPanelItemButton | SettingsPanelSelect;

/**
 * A type for...
*/

export type SortPanelOptionKeys = ObjectKeys<typeof SortPanelOptions>;

/**
 * A type for...
*/

export type SortPanelOptionValues = ObjectValues<typeof SortPanelOptions>;

/**
 * A type for...
*/

export type SortingAlgorithmVisualKeys = ObjectKeys<typeof SortAlgorithmVisualOptions>; 

/**
 * A type for...
*/

export type SortingAlgorithmVisualValues = ObjectValues<typeof SortAlgorithmVisualOptions>;

/**
 * A type for...
*/

export type SortItemColorOptionKeys = ObjectKeys<typeof SortItemColorOptions>;

/**
 * A type for...
*/

export type SortItemColorOptionValues = ObjectValues<typeof SortItemColorOptions>; 