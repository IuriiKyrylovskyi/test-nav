export interface INavItem {
  id: number;
  frequency: number;
  isActive?: boolean;
}

export enum NavPositions {
  TOP = 'top',
  BOTTOM = 'bottom',
  RIGHT = 'right',
  LEFT = 'left',
}
