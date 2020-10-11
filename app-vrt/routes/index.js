var express = require('express');
var router = express.Router();
const cypress = require('cypress')
const resemble = require('resemblejs')
const fs = require('fs');
const extension = '.png';
const public_dir = './public/images/';

/* GET home page. */
router.get('/execute', function(req, res, next) {
  // run cypress
  cypress.run({
    spec: './cypress/integration/spec.js',
    env: {
      "trashAssetsBeforeRuns": true
    }
  })
  .then((results) => {
    var screenshots_path = results.config.screenshotsFolder + '/spec.js/';
    var s1 = screenshots_path + 'screen-1';
    var s2 = screenshots_path + 'screen-2';
    var time = new Date().getTime().toString();
    var output_s1 = `${public_dir}s1-${time}${extension}`;
    fs.copyFile(s1 + extension, output_s1, (err) => {
      if (err) throw err;
      var output_s2 = `${public_dir}s2-${time}${extension}`;
      fs.copyFile(s2 + extension, output_s2, (err) => {
        if (err) throw err;
        resemble(output_s1).compareTo(output_s2).ignoreLess()
        .onComplete(function(data) {
            console.log(data);
            var base64Data = data.getImageDataUrl().replace(/^data:image\/png;base64,/, "");
            var comparsion_output_paht = `${public_dir}comparsion-${time}.png`;
            require("fs").writeFile(comparsion_output_paht, base64Data, 'base64', function(err) {
              console.log(err);
              res.send({
                "base": output_s1.replace("./public", ""),
                "modified": output_s2.replace("./public", ""),
                "comparsion": comparsion_output_paht.replace("./public", ""),
                "time": time,
                "resemble": data
              });
            });
            
        });
      });
    });
  })
  .catch((err) => {
    console.error(err)
  })
});

module.exports = router;
