"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
console.log('#20. TypeScript homework example file');
;
function createPerson(name, age, isActive) {
    return {
        name,
        age,
        isActive
    };
}
;
const newPerson = createPerson('Олександр', 31, false);
console.log(newPerson);
/*
 * #2
 *
 * Задача: Розробити клас `Calculator` з методами `add` і `multiply`, які будуть логувати виклики цих методів за допомогою декоратора `LogMethodCalls`.
 *
 * Мета: Створити клас, що дозволяє виконувати базові арифметичні операції (додавання та множення) та логує деталі їх викликів для подальшого аналізу або дебагінгу.
 *
 * Вимоги до реалізації:
 * 1. Клас `Calculator` має містити метод `add`, який приймає два числа як аргументи та повертає їх суму.
 * 2. Клас `Calculator` має містити метод `multiply`, який приймає два числа як аргументи та повертає результат їх множення.
 * 3. Обидва методи (`add` і `multiply`) мають бути оздоблені декоратором `LogMethodCalls`. Цей декоратор має логувати ім'я викликаного методу та передані йому аргументи.
 * 4. Декоратор `LogMethodCalls` має бути реалізований так, щоб він міг бути застосований до будь-якого методу класу. При виклику методу, оздобленого цим декоратором, має виводитись лог у форматі: `Calling "<ім'я_методу>" with arguments: <аргументи_методу>`.
 * 5. Всі виводи логів мають здійснюватись через `console.log`.
 *
 */
function LogMethodCalls(target, propertyName, propertyDescriptor) {
    const originalMethod = propertyDescriptor.value;
    propertyDescriptor.value = function (...args) {
        console.log(`Calling "${propertyName}" with arguments: ${args.join(", ")}`);
        return originalMethod.apply(this, args);
    };
    return propertyDescriptor;
}
;
class Calculator {
    add(a, b) {
        return a + b;
    }
    ;
    multiply(a, b) {
        return a * b;
    }
    ;
}
__decorate([
    LogMethodCalls
], Calculator.prototype, "add", null);
__decorate([
    LogMethodCalls
], Calculator.prototype, "multiply", null);
;
const calculator = new Calculator();
// // "Calling "add" with arguments: 2, 3"
console.log(calculator.add(2, 3)); // 5
// // "Calling "multiply" with arguments: 3, 4"
console.log(calculator.multiply(3, 4)); // 12
/*
 * #3
 *
 * Задача: Реалізувати функціонал для створення профілю користувача в просторі імен UserProfile.
 *
 * Мета: Надати можливість створювати об'єкт профілю з унікальним ідентифікатором, ім'ям та електронною поштою.
 *
 * Вимоги до реалізації:
 * 1. Створити namespace `UserProfile`, що слугуватиме контейнером для визначення інтерфейсу профілю та функцій.
 * 2. Визначити всередині `UserProfile` інтерфейс `ProfileInterface`, який має містити властивості `id` (string), `name` (string) та `email` (string).
 * 3. Реалізувати функцію `createProfile` всередині `UserProfile`, яка приймає `name` та `email`, створює та повертає об'єкт `ProfileInterface` з унікальним `id`, вказаним ім'ям та електронною поштою.
 * 4. Функція `generateId` має бути приватною всередині `UserProfile` і слугувати для генерації унікального ідентифікатора для кожного профілю.
 *
 */
var UserProfile;
(function (UserProfile) {
    ;
    function generateId() {
        return Math.random().toString(36).slice(2, 12); // Генерує унікальний рядок довжиною 10 символів
    }
    ;
    function createProfile(name, email) {
        return {
            id: generateId(),
            name: name,
            email: email
        };
    }
    UserProfile.createProfile = createProfile;
    ;
})(UserProfile || (UserProfile = {}));
;
const profile = UserProfile.createProfile('John Doe', 'john@example.com');
console.log(profile); // { "id": "e6uvai5egqd", "name": "John Doe", "email": "john@example.com" }
// export { createPerson, Calculator, UserProfile }
