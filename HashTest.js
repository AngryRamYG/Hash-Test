var fs = require('fs');
var crypto = require('crypto');
var getHash = ( content ) => {				
				var hash = crypto.createHash('md5');
				//passing the data to be hashed
				data = hash.update(content, 'utf-8');
				//Creating the hash in the required format
				gen_hash= data.digest('hex');
				return gen_hash;
}
//Creating a readstream to read the file
var myReadStream = fs.createReadStream('HDPE 2.png');
var myReadStream2 = fs.createReadStream('HDPE.png');
var rContents = '' // to hold the read contents;
myReadStream.on('data', function(chunk) {
		rContents += chunk;
});
var rContents2 = '' // to hold the read contents;
myReadStream2.on('data', function(chunk) {
    rContents2 += chunk;
});

myReadStream2.on('error', function(err){
    console.log(err);
});
myReadStream.on('error', function(err){
		console.log(err);
});

myReadStream.on('end',function(){
		//Calling the getHash() function to get the hash
		var content = getHash(rContents) ;
        var content2 = getHash(rContents2) ;
		//console.log('Content : ' + rContents);
		console.log('Hash : ' + content);
        console.log('Hash : ' + content2);

        if(content != content2 )
        console.log("OOPS");
        else
        console.log("HAHAYYYYY");

});
													
			