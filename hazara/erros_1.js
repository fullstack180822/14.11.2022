

try {
    does_not_exist() // open file
    // read from file
}
catch (e) { 
    switch (true) {
        case (e instanceof ReferenceError):console.log('do this!');
            break;
        default:
            throw e; // rethrow
    }
    console.log(e);
}
finally {
    // close the file
    console.log('close file');
}


console.log('here!');