/**
 * Use for cases when needed to identify partial selection state
 */
export enum SelectionState {
    /**
     * Use to specify that everything is selected
     */
    Selected = 1,
    /**
     * Use to specify that  none is selected
     */
    Unselected = 2,
    /**
     * Use to specify that something is selected: 3 of 4, 1 of 10 etc...
     */
    Intermediate = 3,
}
