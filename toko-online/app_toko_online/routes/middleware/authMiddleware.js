exports.adminOnly = (req, res, next) => {
    const isAdmin = req.body.isAdmin; // contoh 'isAdmin'
    true
    if (isAdmin === true){
        console.log("middleware: Akses admin diberikan");
        next(); // lanjutkan
    }else {
        // 403 forthhiddem
        return res.status(403).json({
            success: false,
            message: "Akses Ditolak. Endpoint ini membutuhkan hak admin."
        });
    }
};