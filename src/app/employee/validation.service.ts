import { AbstractControl } from '@angular/forms';
export class ValidationService {

  constructor() { }
  static getValidatorErrorMessage(validatorName: string, validatorValue?: any) {
    let config = {
      'required': 'This is a required field',
      'minlength': 'Length should be at least 4 characters',
      'invalidCreditCard': 'Is invalid credit card number',
      'email': 'Invalid email',
      'invalidemaildomain': 'Email domain should be "@iris.com"',
      'emailMismatch': 'Email and confirm email do not match',
      'invalidPassword': 'Invalid password. Password must be at least 6 characters long, and contain a number.',
      //'minlength': `Minimum length ${validatorValue.requiredLength}`
    };

    return config[validatorName];
  }
  static emailDomain(domainName) {

    return (control: AbstractControl): { [key: string]: any } | null => {
      const email: string = control.value;
      if (email) {
        const domain = email.substring(email.lastIndexOf('@') + 1);
        if (email == "" || domain.toLowerCase() === domainName.toLowerCase()) {
          return null;

        }
      }


      return { 'invalidemaildomain': true };
    }
  }
  static matchEmail(group: AbstractControl): { [key: string]: any } | null {
    const email = group.get('email').value;
    const confirmEmail = group.get('confirmEmail').value;
    if (confirmEmail != "" && email != "" && email !== confirmEmail) {
      return { 'emailMismatch': true };

    }
    return null;


  }
}
