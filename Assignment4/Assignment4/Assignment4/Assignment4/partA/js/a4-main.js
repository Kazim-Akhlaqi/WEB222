var filterType = ""; // sets the filter type to "" (will later be dog, cat or bird)
var filterAgeMin = 0; // sets the filter age min to 0 (for no minimum age filter)
var filterAgeMax = Number.MAX_VALUE; // sets the filter age max to the largest number possible (for no maximum age filter)

function loadTableWithFilters(fType, minAge, maxAge) {
    var main = document.getElementById('main-table-body');
    var content = "";
    if (fType == "") {
        for (var i = 0; i < petData.length; i++) {
            if (petData[i].age >= minAge
                && petData[i].age <= maxAge) {
                    content += '<tr><td><img src=' 
                            + petData[i].image.src + ' alt=' 
                            + petData[i].image.alt + ' height=' 
                            + petData[i].image.height + ' width=' 
                            + petData[i].image.width + '></td>' + '<td><h4>' 
                            + petData[i].name + '</h4><p>' 
                            + petData[i].description + '</p><span>' 
                            + petData[i].age + '</span></td></tr>';
            } 
        } 
    } else {
        for (var i = 0; i < petData.length; i++) {
            if (petData[i].type === fType
                && petData[i].age >= minAge
                && petData[i].age <= maxAge) {
                    content += '<tr><td><img src=' 
                            + petData[i].image.src + ' alt=' 
                            + petData[i].image.alt + ' height=' 
                            + petData[i].image.height + ' width=' 
                            + petData[i].image.width + '></td>' + '<td><h4>' 
                            + petData[i].name + '</h4><p>' 
                            + petData[i].description + '</p><span>' 
                            + petData[i].age + '</span></td></tr>';            }
        }
    }
    main.innerHTML = content;
}

function filterDog() {
    loadTableWithFilters("dog", filterAgeMin, filterAgeMax);
}

function filterCat() {
    loadTableWithFilters("cat", filterAgeMin, filterAgeMax);
}

function filterBird() {
    loadTableWithFilters("bird", filterAgeMin, filterAgeMax);
}

function filter_zero_1() {
    loadTableWithFilters(filterType, 0, 1);
}

function filter_1_3() {
    loadTableWithFilters(filterType, 1, 3);
}

function filter_4_plus() {
    loadTableWithFilters(filterType, 4, filterAgeMax);
}

function filterAllPets(){
    loadTableWithFilters(filterType, filterAgeMin, filterAgeMax);
}

window.onload = function() {
    loadTableWithFilters(filterType, filterAgeMin, filterAgeMax);
}

