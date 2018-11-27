async function main() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const result = "wow";
            console.log(result);
            resolve(result);
        }, 10000);
    });
}

module.exports = main;

if (require.main === module) {
    main();
}
