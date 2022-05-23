import { AbstractControl, FormGroup } from "@angular/forms";
export function greaterThanValidator(controlName: any, matchingControlName: any) {
	return (formGroup: FormGroup) => {
		let control = formGroup.controls[controlName];
		let matchingControl = formGroup.controls[matchingControlName]
		if (
			matchingControl.errors &&
			!matchingControl.errors.greaterValidator
		) {
			return;
		}
		if (control.value >= matchingControl.value) {
			matchingControl.setErrors({ greatersValidator: true });
		} else {
			matchingControl.setErrors(null);
		}
	};
}