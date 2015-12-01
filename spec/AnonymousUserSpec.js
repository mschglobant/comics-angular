(function () {

    describe("AnonymousUser", function() {
        
        it("should be able to register a user name and a password for the site", function() {
            // Nota de implementacion: requiere persistencia entre sesiones (LocalStorage?)

            var emptyStorage = {},
                objectRepository = new ObjectProvider(emptyStorage),
                ;

            var user = new User("mschnidrig", "abcd1234");

            var userId = objectRepository.persist("users", user);

            expect ( userId ).toBeGreaterThan(0);

//            var userManagement = new UserManagment();
//            
//            var user = new User("mschnidrig", "abcd1234");
//            var userId = userManagement.newUser(user);
//            
//            expect ( userId ).toBeGreaterThan(0);

        });

        it("should be able to log into the site", function () {
            
            var users = 

            var userRepository = new UserRepository;
            var sessionManagement = new SessionManagment(userRepository);

            var user = userRepository.find(1); // User with id equals to 1

            sessionManagement.login(user);

            expect( sessionManagement.isLoggedIn() ).toBe("true");

        });

    });
    
})();
