const express = require("express")
const router = express.Router()
const PSRegister = require("../src/models/psregister")
const Register = require("../src/models/wilpregister")

router.get('/', (req,res)=>{
    res.render(
        "main_page"
    );
})
router.get('/wilpstudent', (req,res)=>{
    res.render("wilpstudent")
})
router.post("/wilpstudent", async (req,res)=>{
    try{
        const {id} = req.body;
        const student = await Register.findOne({id});
        if(student){
            setTimeout(function () {
            res.status(400).redirect('/');
             },2000);
        }
        else if(id){
            const registerStudent = new Register({
                name: req.body.name
                ,mobile: req.body.mobile
                ,id: req.body.id,
                company: req.body.company,
                project: req.body.project
            })
            const registered = await registerStudent.save();
            res.status(201)
            setTimeout(function () {
                res.render('registered')}, 800)
        }
    } catch(error){
        res.status(400).send(error);
    }
})






router.get('/psstudent', (req,res)=>{
    res.render("psstudent")
})
router.post("/psstudent", async (req,res)=>{
    try{
        const {id} = req.body;
        const student = await PSRegister.findOne({id});
        if(student){
            setTimeout(function () {
            res.status(400).redirect('/');
             },2000);
        }
        else if(id){
            const registerStudent = new PSRegister({
                name: req.body.name
                ,mobile: req.body.mobile
                ,id: req.body.id,
                company: req.body.company,
                project: req.body.project,
                yeargrad: req.body.yeargrad,
                skills: req.body.skills
            })
            const registered = await registerStudent.save();
            res.status(201)
            setTimeout(function () {
                res.render('registered')}, 800)
        }
    } catch(error){
        res.status(400).send(error);
    }
})



router.get('/industry', (req,res)=>{
    res.render("industry")
})





module.exports = router