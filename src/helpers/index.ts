const stringToColor = (name: string): string => {
    // Sum the ASCII values of name
    const asciiValues = name
        .split('')
        .map((char: string) => char.charCodeAt(0))
        .reduce(
            (acc, val) => acc + val, 0
        );

    // Step 3: Normalize the sum to get RGB values
    const colorCodeNumber = asciiValues % 256;
    const colorCode = colorCodeNumber.toString(16).padStart(2, '0');
    return `#${colorCode.repeat(3)}`; // repeat for R G & B
};

const colorForBikalpa = stringToColor("Bikalpa Thapa"); // "#c2c2c2"
