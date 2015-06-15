(function() {

  var pc = require('./PredictionContext');
    
  var antlr4 = {
    atn : require('./atn/index'),
    dfa : require('./dfa/index'),
    tree : require('./tree/index'),
    error : require('./error/index'),
    Token : require('./Token').Token,
    CommonToken : require('./Token').Token,
    InputStream : require('./InputStream').InputStream,
    FileStream : require('./FileStream').FileStream,
    CommonTokenStream : require('./CommonTokenStream').CommonTokenStream,
    Lexer : require('./Lexer').Lexer,
    Parser : require('./Parser').Parser,
    PredictionContextCache : pc.PredictionContextCache,
    ParserRuleContext : require('./ParserRuleContext').ParserRuleContext,
    Interval : require('./IntervalSet').Interval,
    Utils : require('./Utils')
  };

  // Make it to work in node and browser and AMD style
  if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports.antlr4 = antlr4;
  } else {
    if (typeof define === 'function' && define.amd) {
      define([], function () {
        return antlr4;
      });
    } else {
      window.antlr = antlr4;
    }
  }

})();