import React, { Dispatch, SetStateAction } from "react";

export class GameCell {

  constructor(x: number, y: number, isAlive: boolean) {
    this.x = x; 
    this.y = y;
    this.isAlive = isAlive; 
  }

  get getIsAlive() {
    return this.isAlive; 
  }

  get getCoords() {
    return [this.x, this.y];
  }

  public toggleIsAlive() {
    this.isAlive = !this.isAlive;  
    this.stateDispatchMethod!(this.isAlive);
  }

  public setStateUpdateMethod(stateUpdateMethod: Dispatch<SetStateAction<boolean>>) {
    this.stateDispatchMethod = stateUpdateMethod; 
  }

  public setAlive(isAlive: boolean) {
    this.isAlive = isAlive; 
    this.stateDispatchMethod!(this.isAlive);
  }

  private x: number; 
  private y: number; 
  private isAlive: boolean;   
  private stateDispatchMethod?: Dispatch<SetStateAction<boolean>>;
} 