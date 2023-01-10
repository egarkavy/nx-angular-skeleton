import { FormArray } from '@angular/forms';

export class FormHelpers {
    public static spliceFormArray(
        formArray: FormArray,
        start: number,
        count: number,
        options?: {
            emitEvent?: boolean;
        },
    ): void {
        for (let i = start; i <= start + count; i++) {
            formArray.removeAt(i, options);
        }
    }
}
