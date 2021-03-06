const Record = require("../model/record");

module.exports = {
    index: async (req, res) =>{
        await Record.findAll().then(records => {
            res.render('index', {records: records});
        });     
    },
    store: async(req, res) => {
        const {numeroSecretaria, nome, email, telefone, data_cadastro, data_retorno, status} = req.body;
        if(!numeroSecretaria){
            return res.status(400).send({ error: 'Dados insuficientes!' });
        }
        try{
            if(await ! Record.findOne({ numeroSecretaria })){
                return res.status(400).send({error: 'Categoria já resgistada!'});
            } 
        const record = await Record.create(req.body);
        return res.status(201).send(record);
        }
        catch(err){
            if(err){
                return res.status(500).send({error: 'Erro ao buscar categoria!' });
            }
        }
    }
}

        