var should = require('should');

var Store = require('../../lib/store');

describe('Convert', function(){
  
  describe('convertInput()', function(){
    
    var store = new Store();

    store.Model('User', function(){
      this.attribute('login', String);
      this.attribute('other', String);
      
      this.convertInput('login', function(value){
        return '$' + value;
      });  
    });
  
    var User = store.Model('User');
    var user = new User({login:'admin', other: 'foo'});
    
    
    it('converts the value accordingly', function(){
      user.login.should.be.equal('$admin');
    });
    
    it('converts only the specified value', function(){
      user.other.should.be.equal('foo');
    });
    
  });
  
  
  
  
  describe('convertOutput()', function(){
    
    var store = new Store();

    store.Model('User', function(){
      this.attribute('login', String);
      this.attribute('other', String);
      
      this.convertOutput('login', function(value){
        return '$' + value;
      });  
    });
  
    var User = store.Model('User');
    var user = new User({login:'admin', other: 'foo'});
    
    
    it('converts the value accordingly', function(done){
      user.toJson().login.should.be.equal('$admin')
      done();
    });
    
    it('converts only the specified value', function(done){
      user.toJson().other.should.be.equal('foo')
      done();
    });
        
    it('does not change the original value', function(done){
      user.login.should.be.equal('admin')
      done();
    });
    
  }); 
  
  
});