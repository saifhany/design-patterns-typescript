// Factory Method is a creational design pattern that provides an interface 
// for creating objects in a superclass, 
// but allows subclasses to alter the type of objects that will be created.
//  Use the Factory Method when you want to save system resources by reusing existing objects instead of rebuilding them each time.
/*
    بيدينا انترفيس للكلاس الاب وبيسمح للكلاسات الابناء انها تعدل نوع الاوبجكت اللي هيتم انشائها
*/

// Vehicle interface
interface Vehicle {
    drive(): void;
  }
  
  // Car class implementing the Vehicle interface
  class Car implements Vehicle {
    drive(): void {
      console.log("Driving a car");
    }
  }
  
  // Motorcycle class implementing the Vehicle interface
  class Motorcycle implements Vehicle {
    drive(): void {
      console.log("Riding a motorcycle");
    }
  }
  
  // Truck class implementing the Vehicle interface
  class Truck implements Vehicle {
    drive(): void {
      console.log("Driving a truck");
    }
  }
  
  // VehicleFactory class
  class VehicleFactory {
    createVehicle(type: string): Vehicle {
      switch (type) {
        case "car":
          return new Car();
        case "motorcycle":
          return new Motorcycle();
        case "truck":
          return new Truck();
        default:
          throw new Error("Invalid vehicle type.");
      }
    }
  }
  
  // Client code
  const factory = new VehicleFactory();
  
  const car = factory.createVehicle("car");
  car.drive(); // Output: Driving a car
  
  const motorcycle = factory.createVehicle("motorcycle");
  motorcycle.drive(); // Output: Riding a motorcycle
  
  const truck = factory.createVehicle("truck");
  truck.drive(); // Output: Driving a truck
  