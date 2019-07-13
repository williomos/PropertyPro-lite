class User {

    static signup (req, res) {
        return res.status(200).json({
            route : ' sign up'
        });
    }
    
    static signin (req, res) {
        return res.status(200).json({
            route : ' signin up'
        });
    }
}
module.exports = User;