new Sortable(example2Left, {
    group: 'shared', // set both lists to same group
    animation: 150
});

new Sortable(example2Right, {
    group: 'shared',
    animation: 150
});

//tables clone
new Sortable(example3Left, {
    group: {
        name: 'shared',
        pull: 'clone' // To clone: set pull to 'clone'
    },
    animation: 150
});

new Sortable(example3Right, {
    group: {
        name: 'shared',
        pull: 'clone'
    },
    animation: 150
});

//Disabling Sorting
new Sortable(example4Left, {
    group: {
        name: 'shared',
        pull: 'clone',
        put: false // Do not allow items to be put into this list
    },
    animation: 150,
    sort: false // To disable sorting: set sort to false
});

new Sortable(example4Right, {
    group: 'shared',
    animation: 150
});