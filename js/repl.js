// Generated by CoffeeScript 1.4.0

/*
 REPL simulator for web demo.
*/


(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  facebook_terminal.REPL = (function() {

    function REPL() {
      this.input = __bind(this.input, this);

    }

    REPL.prototype.start = function(options) {
      options.input.setCallback(this.input);
      this.output = options.output;
      this.evaluate = options["eval"];
      return this.prompt = options.prompt || "> ";
    };

    REPL.prototype.input = function(value) {
      var cmd,
        _this = this;
      this.output.write.call(this.output, this.prompt + value);
      cmd = "(" + value + " )";
      return this.evaluate(cmd, null, null, function(__, value) {
        return _this.output.write.call(_this.output, value);
      });
    };

    return REPL;

  })();

}).call(this);
