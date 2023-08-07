import { StateAction } from "@/app/models/global-types";

/**
 * Describe your method...
 *
 * @param paramName This param represents...
 * This param represents...
*/

export class GameCell {

  /**
   * Describe your method...
   *
   * @param paramName This param represents...
   * This param represents...
  */

  constructor(x: number, y: number, isAlive: boolean) {
    this.x = x; 
    this.y = y;
    this.isAlive = isAlive; 
  }

  /**
   * Describe your method...
   *
   * @param paramName This param represents...
   * This param represents...
  */

  get getIsAlive() {
    return this.isAlive; 
  }

  /**
   * Describe your method...
   *
   * @param paramName This param represents...
   * This param represents...
  */

  get getCoords() {
    return [this.x, this.y];
  }

  /**
   * Describe your method...
   *
   * @param paramName This param represents...
   * This param represents...
  */

  public toggleIsAlive() {
    this.isAlive = !this.isAlive;  
    this.stateDispatchMethod!(this.isAlive);
  }

  /**
   * Describe your method...
   *
   * @param paramName This param represents...
   * This param represents...
  */

  public registerStateUpdateMethod(updateMethod: StateAction<boolean>) {
    this.stateDispatchMethod = updateMethod; 
  }

  /**
   * Describe your method...
   *
   * @param paramName This param represents...
   * This param represents...
  */

  public setAlive(isAlive: boolean) {
    this.isAlive = isAlive; 
    this.stateDispatchMethod!(this.isAlive);
  }

  private x: number; 
  private y: number; 
  private isAlive: boolean;   
  private stateDispatchMethod?: StateAction<boolean>;
} 