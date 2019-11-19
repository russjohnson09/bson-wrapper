function test(bson_package) {
    console.log(bson_package);
    let serial = bson_package.Bson.serialize({x:1})
    console.log(serial);
    let deserial = bson_package.Bson.deserialize(serial)
    console.log(deserial);
}

// <!-- webpack version -->
// <script src="./dist/bundle.js"></script>

// <!-- rollup version -->
// <!-- <script src="./pure-bundle.js"></script> -->
const bson_webpack = require('./../../dist/bundle.js');
test(bson_webpack);


//TODO rollup
// const bson_rollup = require('./pure-bundle.js');
// test(bson_rollup);
