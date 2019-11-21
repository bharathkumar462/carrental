import { Directive, Attribute, Input } from '@angular/core';
import { Validator, NG_VALIDATORS, FormControl, AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { Subscription } from 'rxjs';

export function compareValidator(toCompare: string): ValidatorFn {
    return (c: AbstractControl): ValidationErrors | null => {
        if ((c.value === null) || (c.value.length === 0)) {
            return null;
        }
        const password = c.root.get(toCompare);
        if (password) {
            const subscription: Subscription = password.valueChanges.subscribe(() => {
                c.updateValueAndValidity();
                subscription.unsubscribe();
            });
        }
        return password && password.value !== c.value ? { 'compare': true } : null;
    }
}

@Directive({
    selector: '[compare]',
    providers: [{ provide: NG_VALIDATORS, useExisting: ConfirmPassword, multi: true }]
})
export class ConfirmPassword implements Validator {

    @Input('compare') password: string;

    validate(c: AbstractControl): ValidationErrors | null {
        if ((c.value === null) || (c.value.length === 0)) {
            return null;
        }
        const password = c.root.get(this.password);
        if (password) {
            const subscription: Subscription = password.valueChanges.subscribe(() => {
                c.updateValueAndValidity();
                subscription.unsubscribe();
            });
        }
        return password && password.value !== c.value ? { 'compare': true } : null;
    }

}
