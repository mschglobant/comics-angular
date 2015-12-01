(function() {
    "use strict";
    
    describe("SessionManagement", function() {
        
        var users = [
            {
                username: "mschnidrig",
                password: "abcd1234",
            }],
            objProvider = new ObjectProvider("users");
            sessionManagement = new SessionManagement()
        ;
        
        beforeAll()
        
        it("should be able to login user with correct credentials", function() {
            
            var doLogin = function () {
                sessionStorage.login("mschnidrig", "abcd1234");
            };
            
            expect (doLogin).not.toThrow();
            
            expect ( sessionStorage.isLoggedIn() ).toBe(true);
            expect ( sessionStorage.loggedUser().username ).toBe("mschnidrig");
            
        });
        
        it("should be reject to login user with bad credentials", function() {
            
            var doBadLogin = function () {
                sessionStorage.login("mschnidrig", "badpassword");
            };
            
            expect(doBadLogin).toThrow();
            
        });
    });
    
})();