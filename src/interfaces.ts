export interface Task {
  /**
   * Short name of the task
   */
  title?: string;
  /**
   * Description of the task
   */
  content: string;
  done: boolean;
  readonly createdAt: number;
}

/**
 * Avatar interface for using inside `AvatarRow` component
 */
export interface Avatar {
  /**
   * Avatar src. Required
   */
  imgSrc: string;
  /**
   * Name of the person. Optional
   */
  name?: string;
  /**
   * The URL to go to after clicking on it. Optional 
   */
  link?: string;
}

export interface CalendarEvent {
  title: string;
  id: number;
  startsAt: number;
  endsAt: number;
  holder: string;
}