// set up config for passport
passport.use(User.createStrategy());

// add logic, finding userlogin & password
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());