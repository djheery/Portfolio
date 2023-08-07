import { Dispatch, SetStateAction } from "react";

export enum BackgroundColorOptions {
  PRIMARY_BLUE = 'bg__primary-blue',
  SECONDARY_BLUE = 'bg__secondary-blue', 
  WHITE_ACCENT = 'bg__white-accent', 
  GREY_ACCENT = 'bg__grey-accent'
}

export enum TextColorOptions {
  PRIMARY_BLUE = 'c__primary-blue',
  SECONDARY_BLUE = 'c__secondary-blue', 
  WHITE_ACCENT = 'c__white-accent', 
  GREY_ACCENT = 'c__grey-accent'
}

export type ObjectValues<T> = T[keyof T];

export type TextColor = TextColorOptions.PRIMARY_BLUE
                      | TextColorOptions.SECONDARY_BLUE
                      | TextColorOptions.WHITE_ACCENT
                      | TextColorOptions.GREY_ACCENT


export type BackgroundColor = BackgroundColorOptions.PRIMARY_BLUE
                            | BackgroundColorOptions.SECONDARY_BLUE
                            | BackgroundColorOptions.WHITE_ACCENT
                            | BackgroundColorOptions.GREY_ACCENT

export type InnerText = string;

export type StateAction<T> = Dispatch<SetStateAction<T>>