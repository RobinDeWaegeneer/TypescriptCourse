type Admin = {
    name: string;
    privileges: string[];
};

type Employee = {
    name: string;
    startDate: Date;
};

// interface ElevatedEmployee extends Employee, Admin {}

type ElevatedEmployee = Admin & Employee

const e1: ElevatedEmployee = {
    name: "Me",
    privileges:['Created-Server'],
    startDate: new Date(),
};

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

function add(a: string, b: string):string;
function add(a: number, b: number): number;
function add(a: string, b: number): string;
function add(a: number, b: string): string;
function add(a: Combinable, b: Combinable){
    if(typeof a === 'string' || typeof b === 'string'){
        return a.toString() + b.toString()
    }
    return a + b;
};

const result = add('Me', 1);
result.split(' ')

const fetchedUserData = {
    id: 'u1',
    name: 'Me',
    job: { title: 'CEO', description: 'My Own Company' }
};

console.log(fetchedUserData?.job?.title)

const userInput = undefined;

const storedData = userInput ?? 'DEFAULT';

console.log(storedData);

type UnknownEmployee = Employee | Admin

function printEmployeeInformation(emp: UnknownEmployee) {
    console.log("Name: " + emp.name)
    if('privileges' in emp) {
        console.log("Privileges: " + emp.privileges);
    }
    if('startDate' in emp) {
        console.log("StartDate: " + emp.startDate);
    }
}

printEmployeeInformation({ name:"Me", startDate: new Date()});

class car {
    drive() {
        console.log("Driving...");
    }
}

class truck {
    drive() {
        console.log("Driving a truck");
    }

    loadCargo(amount: number) {
        console.log("Loading cargo..." + amount);
    }
}

type Vehicle = car | truck;

const v1 = new car();
const v2 = new truck();

function useVehicle(vehicle: Vehicle) {
 vehicle.drive();
 if(vehicle instanceof truck) {
    vehicle.loadCargo(1000);
 }
}

useVehicle(v1);
useVehicle(v2);

interface Bird {
    type: 'bird';
    flyingSpeed: number;
}

interface Horse {
    type: 'horse';
    runningSpeed: number;
}

type Animal = Horse | Bird;

function moveAnimal(animal: Animal) {
    let speed;
   switch(animal.type) {
       case 'bird':
      speed = animal.flyingSpeed
      break;
      case 'horse':
      speed = animal.runningSpeed
   }
   console.log('Moving at Speed: ' + speed)
}

moveAnimal({type: 'bird', flyingSpeed: 10})

// const userInputElement = <HTMLInputElement>document.getElementById('message-output')!;
const userInputElement = <HTMLInputElement>document.getElementById('message-output');

if(userInputElement) {
    (userInputElement as HTMLInputElement).value = 'hi there';
}

interface ErrorContainer { // {email: 'Not a valid email , username: 'must start with a character'};
   [prop: string]: string;
}

const Errorbag: ErrorContainer = {
    email:'Not a valid email',
    username:'must start with a character'
}
