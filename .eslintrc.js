{
    "extends":"airbnb-base",
    "parserOptions" : {
        "ecmaVersion" : 6
    },
    "env" : {
        "node"     : true ,
        "browser"  : true ,
        "es6"      : true
    },
    "rules" : {
        "linebreak-style": 0,
        "comma-dangle" : [
            "error" , "never"
        ],
        "no-unused-vars" : [
            "error" , {
                "vars" : "local" ,  "args" : "none"
            }
        ]
    },
<<<<<<< Updated upstream:.eslintrc.js
    "rules": {
    }
};
=======
    "globals": {"Promise": true}
 }
 
>>>>>>> Stashed changes:.eslintrc
