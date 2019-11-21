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






    //     constructor(@Attribute('compare') public comparer: string,
    //     @Attribute('parent') public parent: string){}

    // validate(c:FormControl): {[key: string]: any} {
    // let e = c.root.get(this.comparer);

    // // value not equal in verify control
    // if (e && c.value !== e.value && !this.isParent) {
    // return {"compare": true};
    // }

    // // user typing in password and match
    // if (e && c.value === e.value && this.isParent) {
    // delete e.errors['compare'];
    // if (!Object.keys(e.errors).length) e.setErrors(null);
    // }

    // // user typing in password and mismatch
    // if (e && c.value !== e.value && this.isParent) {
    // e.setErrors({ "compare": true });
    // }
    // }

    // private get isParent() {
    // if (!this.parent) 
    // return false;

    // return this.parent === 'true' ? true: false;
    // }
