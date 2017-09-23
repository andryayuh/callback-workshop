// DO NOT EDIT async function that gets the first word and passes it to its callback
function getFirstWord(callback) {
  setTimeout(function() {
    callback('Async ');
  }, 90);
};

// DO NOT EDIT async function that gets the second word and passes it to its callback
function getSecondWord(callback) {
  setTimeout(function() {
    callback('is ');
  }, 30);
};

// DO NOT EDIT async function that gets the third word and passes it to its callback
function getThirdWord(callback) {
  setTimeout(function() {
    callback('awesome.');
  }, 60);
};

// use the above functions to complete the sentence and pass it to this function's callback
function getSentence(callback) {
  var tasks = [getFirstWord, getSecondWord, getThirdWord];
  const sent = [];
  var resCount = 0;
  for (var i = 0; i < tasks.length; i++) {
    (function(i) {
      tasks[i](function(val) {
        sent[i] = val;
        resCount++;
        if (resCount === tasks.length) {
          callback(sent.join(''));
        }
      });
    })(i);
  }
}

module.exports = getSentence;