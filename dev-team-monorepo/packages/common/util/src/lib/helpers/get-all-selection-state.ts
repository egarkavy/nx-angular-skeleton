import { SelectionState } from '../enums';
import { EntityId } from '../ngrx';
import { ArrayHelpers } from './array.helpers';

export function getAllSelectionState(allIds: EntityId[], selectedIds: EntityId[]): SelectionState {
    if (!allIds.length) {
        return SelectionState.Unselected;
    }

    const intersection = ArrayHelpers.intersection<string | number>(allIds, selectedIds);

    if (!intersection.length) {
        return SelectionState.Unselected;
    }

    if (intersection.length === allIds.length) {
        return SelectionState.Selected;
    }

    return SelectionState.Intermediate;
}
