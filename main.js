function admitCars() {
    let carCounter = 0;
    const maxCars = 25;

    while (carCounter < maxCars) {
        window.alert("Car Number " + carCounter + " is entering.");
        carCounter += 1;
    }
    window.alert("Garage is full.");
}