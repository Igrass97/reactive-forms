import { AbstractControl } from "@angular/forms";
import { Observable, timer } from "rxjs";
import { map } from 'rxjs/operators';

export const validateName = (control: AbstractControl): Observable<any> => {
    return timer(400)
    .pipe(map(() => {
        if (control.value === 'Test') {
            return { invalidName: true }
        }

        return null;
    }));
};