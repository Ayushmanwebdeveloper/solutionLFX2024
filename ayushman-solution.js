// Copyright(C) 2024 Ayushman Tripathi <ayushman@gnu.org>
function processIntList(inputList) {

    // Check if the length of the list is multiple of 10
    if (inputList.length % 10 !== 0) {
        console.error("Error: The length of the list must be a multiple of 10");
        return;
    }

    // Remove items at positions which are a multiple of 2 or 3
    const filteredList = inputList.filter((element, index) => (index + 1) % 2 !== 0 && (index + 1) % 3 !== 0);

    //Print the modified list
    console.log("Processed List:", filteredList);
}

// Example usage:
// Valid input list
const inputList1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
processIntList(inputList1);

//list with length not a multiple of 10
const inputList2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
processIntList(inputList2);

//Valid input list
const inputList3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
processIntList(inputList3);