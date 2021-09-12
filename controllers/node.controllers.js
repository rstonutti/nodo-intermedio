const fetch = require('node-fetch');
const { response, request } = require('express');

const nodePost = async (req = request, res = response) => {
    const data = await req.body;

    const nodoB = {
            'msg': {
                'ip': '192.168.80.XXX', 'name': 'B'
            }, 'ip-send': '192.168.0.XXX', 'ip-recibe': '192.168.0.XXX'
        };

    const nodos =  [...data, nodoB] 

    console.log(JSON.stringify(nodos));

    await fetch('http://192.168.80.XXX:XXXX/', {
        method: 'post',
        body: JSON.stringify(nodos),
        headers: { 'Content-Type': 'application/json' }
    })
};

module.exports = {
    nodePost
};