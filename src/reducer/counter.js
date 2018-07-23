export default (count = 0, action) => {
    const {type} = action;
    switch (type) {
        case 'INC' : return count + 1
    }
    return count;
}