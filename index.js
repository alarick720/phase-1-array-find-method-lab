function superbowlWin(record) {
    const win = record.find(entry => entry.result === "W");
    if (win) {
        return win.year;
    } else {
        return undefined; // or any other value you'd like to return if there's no win
    }
}

// Example usage:
const record = [
    { year: '2015', result: "W" },
    { year: '2014', result: "N/A" },
    { year: '2013', result: "L" },
    // ... other records
];

const winningYear = superbowlWin(record);
console.log(winningYear); // Outputs: '2015' if there's a win, otherwise undefined